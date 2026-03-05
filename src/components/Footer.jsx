import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-bg-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <a href="#" className="font-serif italic text-xl text-text-primary">
            Stable System Solutions
          </a>

          <div className="flex flex-wrap gap-8">
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
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="mono-label !text-text-tertiary">
            building with intention · chandigarh, india
          </span>
          <span className="text-[12px] text-text-tertiary">
            © {currentYear} Stable System Solutions. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
