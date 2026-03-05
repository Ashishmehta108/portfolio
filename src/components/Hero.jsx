import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ─── Constants ────────────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1];

const CONTAINER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const LINE = {
  hidden: { opacity: 0, y: 80, skewY: 3 },
  show: {
    opacity: 1, y: 0, skewY: 0,
    transition: { duration: 1.1, ease: EASE },
  },
};

const FADE_UP = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

const BG_URL = "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1920&q=80&auto=format&fit=crop"

const Hero = () => {
  const sectionRef = useRef(null);



  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Parallax background image ── */}
      <motion.div
        aria-hidden="true"

        className="absolute inset-0 z-0 scale-110"
      >
        <img
          src={BG_URL}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        {/* Multi-layer overlay for text legibility + brand warmth */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(10, 9, 8, 0.55) 0%,
                rgba(10, 9, 8, 0.72) 50%,
                rgba(10, 9, 8, 0.88) 100%
              )
            `,
          }}
        />
        {/* Subtle green tint at center — ties to brand accent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(24,121,78,0.08) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* ── Noise grain texture ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Top + bottom vignette ── */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(10,9,8,0.6), transparent)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-48 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.8), transparent)' }}
      />

      {/* ── Main content ── */}
      <motion.div

        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Eyebrow badge */}
        <motion.div {...FADE_UP(0.1)}>
          <span
            className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-[4px] text-[11px] tracking-[0.12em] uppercase"
            style={{
              fontFamily: 'var(--font-mono, "Geist Mono", monospace)',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.65)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: '#18794e' }}
            />
            Full-Stack · SaaS · AI Agents
          </span>
        </motion.div>

        {/* Giant headline — staggered per line */}
        <motion.div
          variants={CONTAINER}
          initial="hidden"
          animate="show"
          className="mb-10"
        >
          {/* Line 1 */}
          <div className="overflow-hidden">
            <motion.h1
              variants={LINE}
              className="block font-serif text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[10vw] leading-[0.9] tracking-[-0.03em]"
              style={{ color: 'rgba(255,255,255,0.95)' }}
            >
              We build     software
            </motion.h1>
          </div>




          {/* Line 3 — dimmed */}
          <div className="overflow-hidden">
            <motion.h1
              variants={LINE}
              className="block font-serif italic text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[10vw] leading-[0.9] tracking-[-0.03em]"
              style={{ color: 'rgba(255,255,255,0.28)' }}
            >
              that ships.
            </motion.h1>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          {...FADE_UP(0.85)}
          className="font-light leading-[1.75] max-w-[480px] mb-12 text-[15px] sm:text-[16px]"
          style={{ color: 'rgba(255,255,255,0.52)' }}
        >
          Stable System Solutions partners with ambitious startups and growing
          teams to deliver full-stack products, SaaS platforms, and AI agents —
          on time, production-ready.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...FADE_UP(1.0)}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <a
            href="#work"
            style={{ textDecoration: 'none' }}
          >
            <PrimaryBtn>See Our Work</PrimaryBtn>
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
          >
            Talk to Us
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>


      </motion.div>



    </section>
  );
};

// ─── Primary button ───────────────────────────────────────────────────────────

const PrimaryBtn = ({ children }) => (
  <button
    className="px-6 py-3 text-sm font-medium rounded-[6px] transition-all duration-200"
    style={{
      background: '#18794e',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      letterSpacing: '0.02em',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = '#136740';
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.boxShadow = '0 8px 24px rgba(24,121,78,0.35)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = '#18794e';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    {children}
  </button>
);

export default Hero;