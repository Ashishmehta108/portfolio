import React, { useState, useEffect } from 'react';
import { Code } from 'iconsax-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-bg/88 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code size={20} color="currentColor" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif italic font-bold text-xl leading-none">SSS</span>
            <span className="font-sans font-medium text-sm hidden sm:inline">Stable System Solutions</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Work', 'Process', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-sans font-normal text-text2 hover:text-text transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm py-2">
            Start a Project →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
