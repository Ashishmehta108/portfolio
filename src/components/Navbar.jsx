import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// ─── Single source of truth for navbar height ─────────────────
// Change this ONE value and everything stays in sync.
const NAV_H = 64;           // px
const NAV_H_PX = `${NAV_H}px`;

/* ── Icons ───────────────────────────────────────────────────── */



/* ── Data ────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Twitter/X', href: '#' },
];

const EASE = [0.16, 1, 0.3, 1];

/* ── Navbar ──────────────────────────────────────────────────── */

const Navbar = () => {
  const isDark = true;

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const glassBg = isDark ? 'rgba(13,13,15,0.9)' : 'rgba(250,250,249,0.9)';
  const overlayBg = isDark ? '#0d0d0f' : '#fafaf9';

  return (
    <>
      {/* ── Navbar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-[60] flex items-center"
        style={{
          // height is set here via inline style so it's the definitive value —
          // no Tailwind class can override or conflict with it
          height: NAV_H_PX,
          backdropFilter: scrolled || isOpen ? 'blur(16px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled || isOpen ? 'blur(16px) saturate(180%)' : 'none',
          backgroundColor: scrolled || isOpen ? glassBg : 'transparent',
          borderBottom: scrolled || isOpen
            ? '1px solid var(--color-border)'
            : '1px solid transparent',
          transition: 'background-color 0.35s ease, border-color 0.35s ease',
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex items-center justify-between">

          {/* Wordmark — text-lg keeps it from inflating the bar */}
          <a
            href="#"
            className="font-serif text-2xl tracking-tight group"
            style={{ color: 'var(--color-text-primary)', textDecoration: 'none', lineHeight: 1 }}
          >
            Stable{' '}
            <span
              className="transition-all duration-300 group-hover:italic"
              style={{ color: 'var(--color-accent)' }}
            >
              System
            </span>{' '}
            Solutions
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {NAV_LINKS.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link mono-label text-[11px]"
                  style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}
                >
                  <span>{link.name}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>



            <a
              href="#contact"
              className="mono-label text-[11px] tracking-widest px-5 py-2 rounded-[4px] border transition-all duration-200"
              style={{
                color: 'var(--color-accent)',
                borderColor: 'var(--color-accent)',
                backgroundColor: 'transparent',
                textDecoration: 'none',
                lineHeight: 1,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-accent)';
              }}
            >
              START A PROJECT
            </a>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="md:hidden flex items-center gap-3">

            <button
              onClick={() => setIsOpen(o => !o)}
              className="p-1 focus:outline-none"
              style={{ color: 'var(--color-text-primary)' }}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {/* Fixed-size container so button never resizes the bar */}
              <div style={{ width: 22, height: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <motion.span
                  className="block bg-current rounded-full"
                  style={{ height: 1, transformOrigin: 'center' }}
                  animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.28, ease: EASE }}
                />
                <motion.span
                  className="block bg-current rounded-full"
                  style={{ height: 1 }}
                  animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.18 }}
                />
                <motion.span
                  className="block bg-current rounded-full"
                  style={{ height: 1, transformOrigin: 'center' }}
                  animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.28, ease: EASE }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="fixed inset-0 z-[55] flex flex-col overflow-y-auto"
            style={{
              backgroundColor: overlayBg,
              paddingTop: NAV_H_PX,   // always matches navbar height
            }}
          >

            {/* Nav links */}
            <div
              className="px-8 flex flex-col"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.06, duration: 0.4, ease: EASE }}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-baseline justify-between"
                  style={{
                    borderBottom: '1px solid var(--color-border)',
                    textDecoration: 'none',
                    paddingTop: '14px',
                    paddingBottom: '14px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.querySelector('.mn-title').style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.querySelector('.mn-title').style.color = 'var(--color-text-primary)';
                  }}
                >
                  <span
                    className="mn-title font-serif italic leading-none"
                    style={{
                      fontSize: 'clamp(30px, 9vw, 54px)',
                      color: 'var(--color-text-primary)',
                      transition: 'color 0.18s ease',
                    }}
                  >
                    {link.name}
                  </span>
                  <span className="mono-label" style={{ color: 'var(--color-text-tertiary)' }}>
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </div>


          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;