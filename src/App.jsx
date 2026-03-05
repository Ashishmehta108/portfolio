import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Work from './components/Work';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AdminPanel from './components/Admin/AdminPanel';

const LandingPage = () => (
  <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text-primary)' }}>
    <Navbar />
    <main className="">
      <div className="">
        <Hero />
      </div>
    </main>

    <Services />

    <div className="px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Work />
      </div>
    </div>

    <Stats />

    <div className="px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Process />
      </div>
    </div>

    <Contact />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;

