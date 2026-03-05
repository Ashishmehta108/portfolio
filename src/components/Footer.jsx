import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="overflow-hidden" style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

          <div className="space-y-4">
            <a href="#" className="font-serif italic text-2xl block u-line" style={{ color: 'var(--color-text-primary)', textDecoration: 'none' }}>
              Stable System Solutions
            </a>
            <p className="mono-label" style={{ color: 'var(--color-text-tertiary)' }}>CHANDIGARH, INDIA · EST. 2025</p>
          </div>

          <div className="flex flex-wrap gap-8">
            {links.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="mono-label u-line transition-colors duration-300 cursor-pointer"
                style={{ color: 'var(--color-text-tertiary)', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-tertiary)'; }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="space-y-2 text-right">
            <a
              href="mailto:hello@stablesystems.io"
              className="text-[15px] font-light block u-line transition-colors duration-300"
              style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
            >
              hello@stablesystems.io
            </a>
            <p className="mono-label !text-[9px]" style={{ color: 'var(--color-text-tertiary)' }}>© {currentYear} ALL RIGHTS RESERVED</p>
          </div>

        </div>
      </div>



    </footer>
  );
};

export default Footer;