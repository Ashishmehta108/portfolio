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

function App() {
  return (
    <div className="min-h-screen bg-bg selection:bg-accent/10 selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Process />
        <Work />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
