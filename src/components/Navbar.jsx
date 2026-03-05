import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[60px] flex items-center ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-[16px] saturate-[180%] border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-serif italic text-lg text-text-primary tracking-tight">
          Stable System Solutions
        </a>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] text-text-secondary hover:text-text-primary transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-primary py-2 px-5 text-sm">
            Start a Project →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
