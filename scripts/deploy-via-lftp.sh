#!/usr/bin/env bash

set -euo pipefail

required_vars=(
  DEPLOY_HOST
  DEPLOY_USERNAME
  DEPLOY_PASSWORD
  DEPLOY_PORT
  DEPLOY_PROTOCOL
  DEPLOY_REMOTE_DIR
  DEPLOY_LOCAL_DIR
)

trim_ascii_whitespace() {
  local value="$1"
  value="${value//$'\r'/}"
  value="${value//$'\n'/}"
  value="${value#"${value%%[![:space:]]*}"}"
  value="${value%"${value##*[![:space:]]}"}"
  printf '%s' "$value"
}

for var_name in "${required_vars[@]}"; do
  if [[ -z "${!var_name:-}" ]]; then
    echo "Missing required environment variable: ${var_name}" >&2
    exit 1
  fi
done

DEPLOY_HOST="$(trim_ascii_whitespace "$DEPLOY_HOST")"
DEPLOY_PORT="$(trim_ascii_whitespace "$DEPLOY_PORT")"
DEPLOY_PROTOCOL="$(trim_ascii_whitespace "$DEPLOY_PROTOCOL")"
DEPLOY_REMOTE_DIR="$(trim_ascii_whitespace "$DEPLOY_REMOTE_DIR")"
DEPLOY_LOCAL_DIR="$(trim_ascii_whitespace "$DEPLOY_LOCAL_DIR")"

DEPLOY_HOST="${DEPLOY_HOST#ftp://}"
DEPLOY_HOST="${DEPLOY_HOST#ftps://}"
DEPLOY_HOST="${DEPLOY_HOST%/}"

if [[ ! -d "$DEPLOY_LOCAL_DIR" ]]; then
  echo "Local deploy directory does not exist: $DEPLOY_LOCAL_DIR" >&2
  exit 1
fi

case "$DEPLOY_PROTOCOL" in
  ftp)
    ssl_allow=false
    ssl_force=false
    ssl_protect=false
    ;;
  ftps)
    # cPanel exposes explicit FTPS: connect over FTP and upgrade with AUTH TLS.
    ssl_allow=true
    ssl_force=true
    ssl_protect=true
    ;;
  *)
    echo "Unsupported protocol: $DEPLOY_PROTOCOL. Use ftp or ftps." >&2
    exit 1
    ;;
esac

normalized_remote_dir="${DEPLOY_REMOTE_DIR%/}/"
connect_url="ftp://${DEPLOY_HOST}:${DEPLOY_PORT}"

# The password is passed through lftp's environment support so it is not printed.
export LFTP_PASSWORD="$DEPLOY_PASSWORD"

lftp --env-password -u "$DEPLOY_USERNAME" "$connect_url" -e "
  set cmd:fail-exit yes
  set net:max-retries 2
  set net:reconnect-interval-base 5
  set ftp:passive-mode true
  set ftp:ssl-allow $ssl_allow
  set ftp:ssl-force $ssl_force
  set ftp:ssl-protect-data $ssl_protect
  set ssl:verify-certificate yes
  cd $normalized_remote_dir
  mirror --reverse --delete --verbose ${DEPLOY_LOCAL_DIR%/}/ ./
  bye
"

echo "Production deployment completed successfully."
