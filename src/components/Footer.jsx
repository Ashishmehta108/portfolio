import React from 'react';
import { Code } from 'iconsax-react';

const Footer = () => {
  return (
    <footer className="bg-bg2 py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <Code size={18} color="currentColor" />
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif italic font-bold text-lg leading-none">SSS</span>
              <span className="font-sans font-medium text-xs">Stable System Solutions</span>
            </div>
          </div>
          <span className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase">building with intention.</span>
        </div>

        <div className="flex items-center gap-8">
          {['Services', 'Work', 'Process', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-mono uppercase tracking-widest text-text2 hover:text-text transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="text-[11px] font-mono text-muted uppercase tracking-widest">
          © 2025 Stable System Solutions
        </div>
      </div>
    </footer>
  );
};

export default Footer;
