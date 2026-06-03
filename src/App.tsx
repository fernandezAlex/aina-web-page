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
import { siteConfig } from './config';
import './App.css';

function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  useEffect(() => {
    if (siteConfig.siteTitle) {
      document.title = siteConfig.siteTitle;
    }
    if (siteConfig.siteDescription) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', siteConfig.siteDescription);
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden">
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
