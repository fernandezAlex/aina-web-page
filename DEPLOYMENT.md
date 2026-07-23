# Despliegue de producción

La web se compila y publica automáticamente en el servidor cuando un cambio llega a la rama `main`. También se puede ejecutar manualmente desde la pestaña **Actions**.

El workflow de producción está en `.github/workflows/deploy-production.yml`. La build genera `dist/` con `VITE_PUBLIC_BASE=/`, porque producción se sirve desde la raíz del dominio. El workflow existente de GitHub Pages mantiene su propia base `/aina-web-page/`.

## Configuración inicial en GitHub

1. Abrir **Settings → Environments → New environment**.
2. Crear un entorno llamado exactamente `production`.
3. Añadir estos secretos al entorno:

| Secreto | Contenido |
| --- | --- |
| `PROD_FTP_HOST` | Host FTP sin `ftp://`, por ejemplo `ftp.example.com` |
| `PROD_FTP_USERNAME` | Usuario FTP limitado al directorio de la web |
| `PROD_FTP_PASSWORD` | Contraseña del usuario FTP |
| `PROD_FTP_PORT` | Puerto del servicio, normalmente `21` para FTP/FTPS |
| `PROD_FTP_PROTOCOL` | `ftps` recomendado, o `ftp` si el hosting no admite FTPS |
| `PROD_FTP_SERVER_DIR` | Directorio remoto exacto que contiene la web, por ejemplo `/httpdocs/` |

No se deben guardar credenciales en archivos del repositorio.

## Primera publicación

1. Confirmar en el panel del hosting el directorio raíz real del dominio.
2. Hacer una copia de seguridad de los archivos actualmente publicados.
3. Configurar los seis secretos anteriores.
4. Fusionar la rama de preparación en `main`.
5. Abrir **Actions → Deploy to Production Server → Run workflow**.
6. Comprobar que el job termina correctamente y revisar el dominio.

> Importante: el despliegue utiliza sincronización con borrado (`mirror --reverse --delete`). El contenido remoto que no exista en `dist/` se eliminará. `PROD_FTP_SERVER_DIR` debe apuntar únicamente a la raíz de esta web, nunca a una carpeta compartida con correo, copias de seguridad u otros proyectos.

## Flujo habitual

```text
cambio → pull request → merge en main → lint → build → artefacto → publicación
```

Cada ejecución conserva durante 14 días una copia descargable del directorio `dist/` en GitHub Actions. Si el lint o la build fallan, el servidor no se modifica.

## Recuperación

Antes de la primera automatización debe conservarse una copia de la versión actual del servidor. Para recuperar una versión posterior:

1. Abrir una ejecución correcta en GitHub Actions.
2. Descargar el artefacto `aina-production-dist`.
3. Restaurarlo manualmente o volver a ejecutar el commit correspondiente.

## Transferencia al cliente

Al transferir el repositorio, revisar con el cliente:

- que controla el entorno `production` y sus secretos;
- que dispone del acceso al hosting;
- que puede ejecutar una publicación manual;
- que conoce el directorio remoto correcto;
- que puede revocar y renovar el usuario FTP después de la entrega.
