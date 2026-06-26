import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <section id="inicio">
            <HeroSection />
          </section>
          
          <AboutSection />
          <ServicesSection />
          <WhyChooseSection />
          <ProcessSection />
          <ContactSection />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </ErrorBoundary>
  );
}

export default App;
