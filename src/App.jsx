import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Work from './components/Work';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Section from './components/Section';

function App() {
  return (
    <div className="min-h-screen bg-bg selection:bg-accent/10 selection:text-accent">
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Hero />
        </div>

        <Section id="services">
          <Services />
        </Section>

        <TechStack />

        <Section id="process">
          <Process />
        </Section>

        <Section id="work">
          <Work />
        </Section>

        <Stats />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
