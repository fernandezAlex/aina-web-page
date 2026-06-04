import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { Hero } from './sections/Hero';
import { IntroMission } from './sections/IntroMission';
import { Vision } from './sections/Vision';
import { AboutAina } from './sections/AboutAina';
import { Press } from './sections/Press';
import { Recognitions } from './sections/Recognitions';
import { Books } from './sections/Books';
import { Join } from './sections/Join';
import { Footer } from './sections/Footer';
import { SiteHeader } from './components/SiteHeader';
import { useSiteContent } from './i18n';
import './App.css';

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function App() {
  // Initialize Lenis smooth scroll
  useLenis();
  const { siteConfig, hero } = useSiteContent();

  useEffect(() => {
    const currentUrl = window.location.href;
    const imageUrl = new URL(siteConfig.socialImage, window.location.origin).toString();

    if (siteConfig.siteTitle) {
      document.title = siteConfig.siteTitle;
    }

    if (siteConfig.siteDescription) {
      upsertMeta('meta[name="description"]', {
        name: 'description',
        content: siteConfig.siteDescription,
      });
    }

    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }

    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index,follow',
    });

    upsertMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: '#f6d8a8',
    });

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: siteConfig.socialTitle,
    });

    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: siteConfig.socialDescription,
    });

    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    });

    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: siteConfig.socialImageAlt,
    });

    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: currentUrl,
    });

    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content:
        siteConfig.language === 'ca'
          ? 'ca_ES'
          : siteConfig.language === 'en'
            ? 'en_US'
            : 'es_ES',
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: siteConfig.socialTitle,
    });

    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: siteConfig.socialDescription,
    });

    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    });

    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: currentUrl,
    });
  }, [siteConfig]);

  return (
    <main className="relative w-full overflow-x-hidden">
      <SiteHeader heroConfig={hero} />
      <Hero />
      <IntroMission />
      <AboutAina />
      <Vision />
      <Books />
      <Press />
      <Recognitions />
      <Join />
      <Footer />
    </main>
  );
}

export default App;
