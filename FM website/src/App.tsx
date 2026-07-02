import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const Services = lazy(() => import('./components/Services'));
const Trust = lazy(() => import('./components/Trust'));
const HeatmapComparison = lazy(() => import('./components/HeatmapComparison'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const Imprint = lazy(() => import('./pages/Imprint'));
const LocalSEO = lazy(() => import('./pages/services/LocalSEO'));
const TechnicalSEO = lazy(() => import('./pages/services/TechnicalSEO'));
const GoogleAds = lazy(() => import('./pages/services/GoogleAds'));
const MetaAds = lazy(() => import('./pages/services/MetaAds'));
const AiSEO = lazy(() => import('./pages/services/AiSEO'));
const MultiChannel = lazy(() => import('./pages/services/MultiChannel'));

function getPage() {
  const path = window.location.pathname;
  if (path === '/terms') return 'terms';
  if (path === '/cookies') return 'cookies';
  if (path === '/imprint') return 'imprint';
  if (path === '/services/local-seo') return 'local-seo';
  if (path === '/services/technical-seo') return 'technical-seo';
  if (path === '/services/google-ads') return 'google-ads';
  if (path === '/services/meta-ads') return 'meta-ads';
  if (path === '/services/ai-seo') return 'ai-seo';
  if (path === '/services/multi-channel') return 'multi-channel';
  return 'home';
}

function PageFallback() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-olive border-t-transparent animate-spin" />
    </div>
  );
}

function App() {
  const page = getPage();

  if (page !== 'home') {
    return (
      <Suspense fallback={<PageFallback />}>
        {page === 'terms' && <TermsAndConditions />}
        {page === 'cookies' && <CookiePolicy />}
        {page === 'imprint' && <Imprint />}
        {page === 'local-seo' && <LocalSEO />}
        {page === 'technical-seo' && <TechnicalSEO />}
        {page === 'google-ads' && <GoogleAds />}
        {page === 'meta-ads' && <MetaAds />}
        {page === 'ai-seo' && <AiSEO />}
        {page === 'multi-channel' && <MultiChannel />}
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Suspense fallback={null}>
        <Services />
        <Trust />
        <HeatmapComparison />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
