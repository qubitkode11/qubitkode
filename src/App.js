import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import AboutPage from './components/AboutPage';
import Team from './components/Team';
import Contact from './components/Contact';
import ContactPage from './components/ContactPage';
import PartnerPage from './components/PartnerPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import ServiceDetail from './components/ServiceDetail';
import OfferPopup from './components/OfferPopup';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

// Tracks page views in Firebase Analytics on every route change
const AnalyticsTracker = () => {
  const location = useLocation();
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);
  return null;
};

// Homepage SEO wrapper
const HomeSEO = () => (
  <Helmet>
    <title>QubitKode — Web, Mobile, AI & Game Development Agency</title>
    <meta name="description" content="QubitKode is a premier technology agency delivering cutting-edge Web Development, Mobile Apps, AI & Machine Learning, Game Development, SEO, and Digital Marketing solutions worldwide." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://qubitkode.com/" />
    <meta property="og:title" content="QubitKode — We Code The Future" />
    <meta property="og:description" content="Premier technology agency specialising in Web, Mobile, AI, Game Development & Digital Marketing. Building digital products that stand apart." />
    <meta property="og:url" content="https://qubitkode.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://qubitkode.com/logo512.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="QubitKode — We Code The Future" />
    <meta name="twitter:description" content="Premier technology agency specialising in Web, Mobile, AI, Game Development & Digital Marketing. Building digital products that stand apart." />
    <meta name="twitter:image" content="https://qubitkode.com/logo512.png" />
  </Helmet>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AnalyticsTracker />
        <CustomCursor />
        <ScrollToTop />
        <div className="App">
          <OfferPopup />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HomeSEO />
                <Hero />
                <Services />
                <Projects />
                <About />
                <Team />
                <Contact />
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
          </Routes>
          <FloatingContact />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
