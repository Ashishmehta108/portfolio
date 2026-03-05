import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ items, speed = 20, reverse = false }) => {
  const duplicated = [...items, ...items];
  const animationDuration = `${speed}s`;

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-flex gap-0"
        style={{
          animation: `marquee${reverse ? 'Reverse' : ''} ${animationDuration} linear infinite`,
          willChange: 'transform',
        }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-10 font-serif italic leading-none marquee-item"
            style={{
              fontSize: 'clamp(48px,6vw,96px)',
              color: 'var(--color-text-primary)',
              borderRight: '1px solid var(--color-border)',
              transition: 'color 0.3s ease',
            }}
          >
            {item}
            <span
              className="font-sans not-italic font-medium self-end mb-3"
              style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                opacity: 0.5,
                color: 'var(--color-accent)',
              }}
            >
              ✦
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0%); }
        }
        .marquee-item:hover {
          color: var(--color-accent) !important;
        }
      `}</style>
    </div>
  );
};

const TechMarquee = ({ tags }) => {
  const doubled = [...tags, ...tags];

  return (
    <div
      className="overflow-hidden whitespace-nowrap py-6"
      style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        className="inline-flex gap-8"
        style={{
          animation: 'marquee 18s linear infinite',
          willChange: 'transform',
        }}
      >
        {doubled.map((tag, i) => (
          <span
            key={i}
            className="flex-shrink-0 tech-tag-scroll text-neutral-200 hover:text-neutral-100"
            style={{
              fontFamily: 'monospace',
              fontSize: '12px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              opacity: 0.6,
              transition: 'opacity 0.25s ease, color 0.25s ease',
              cursor: 'pointer',

            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <style>{`
        .tech-tag-scroll:hover {
          opacity: 1 !important;
          color: var(--color-accent) !important;
        }
      `}</style>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);

  const services = [
    {
      title: 'Full-Stack Development',
      description:
        'Everything from pixel-perfect frontends to robust server architectures. We build platforms that scale effortlessly.',
      tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
      number: '01',
    },
    {
      title: 'AI Agents & Automation',
      description:
        "Custom AI agents that don't just chat — they do work. We integrate LLMs into your production workflows.",
      tech: ['OpenAI', 'LangChain', 'Vector DBs', 'n8n'],
      number: '02',
    },
    {
      title: 'SaaS Product Strategy',
      description:
        "We don't just code; we consult. From MVP architecture to multi-tenant scaling and Stripe billing.",
      tech: ['Stripe', 'Supabase', 'Vercel', 'AWS'],
      number: '03',
    },
  ];

  const marqueeItems = ['Full-Stack', 'AI Agents', 'SaaS', 'Fast Delivery', 'Production-Ready'];
  const techTags = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Supabase',
    'OpenAI', 'LangChain', 'n8n', 'Python', 'Docker', 'Vercel', 'AWS', 'Stripe',
  ];

  return (
    <div ref={containerRef} id="services" className="py-32 md:py-48 overflow-hidden">

      {/* Section header */}
      <div className="mb-24 relative">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-8 px-6 md:px-12"
          style={{
            fontFamily: 'monospace',
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
          }}
        >
          SERVICES · STABLE SYSTEM SOLUTIONS
        </motion.p>

        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            borderBottom: '1px solid var(--color-border)',
          }}
          className="pt-10 pb-10"
        >
          <Marquee items={marqueeItems} speed={14} />
        </div>
      </div>

      {/* Service rows */}
      <div className="px-6 md:px-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-20 py-12 md:py-16 items-start group cursor-default svc-row"
            style={{
              borderBottom: '1px solid var(--color-border)',
              borderTop: index === 0 ? '1px solid var(--color-border)' : undefined,
            }}
          >
            {/* Number */}
            <span
              className="font-serif italic leading-none select-none mt-1 flex-shrink-0"
              style={{
                fontSize: 'clamp(56px,5vw,80px)',
                width: '90px',
                color: 'var(--color-accent)',
                transition: 'opacity 0.3s ease',
              }}
            >
              {service.number}
            </span>

            {/* Content */}
            <div className="space-y-6">
              <h3
                className="font-serif leading-none tracking-tight"
                style={{
                  fontSize: 'clamp(28px,3.5vw,48px)',
                  color: 'var(--color-text-primary)',
                  transition: 'color 0.3s ease',
                }}
              >
                {service.title}
              </h3>
              <p
                className="font-light leading-relaxed max-w-lg"
                style={{ fontSize: '16px', color: 'var(--color-text-secondary)' }}
              >
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {service.tech.map((t) => (
                  <span
                    key={t}
                    className="tech-pill"
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '9px',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      padding: '6px 16px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '9999px',
                      backgroundColor: 'var(--color-white)',
                      color: 'var(--color-text-secondary)',
                      cursor: 'default',
                      transition: 'border-color 0.25s ease, color 0.25s ease, background-color 0.25s ease',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="mt-4 md:mt-6">
              <div
                className="arrow-btn w-12 h-12 rounded-full border flex items-center justify-center"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-tertiary)',
                  transition: 'border-color 0.25s ease, color 0.25s ease, transform 0.25s ease',
                }}
              >
                <svg
                  className="w-4 h-4"
                  style={{ transform: 'rotate(-45deg)' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech stack */}
      <div className="mt-24">
        <p
          className="mb-6 px-6 md:px-12"
          style={{
            fontFamily: 'monospace',
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
          }}
        >
          TOOLS WE SHIP WITH
        </p>
        <TechMarquee tags={techTags} />
      </div>

      {/* Global hover styles */}
      <style>{`
        .svc-row:hover .arrow-btn {
          border-color: var(--color-accent) !important;
          color: var(--color-accent) !important;
          transform: scale(1.08);
        }
        .tech-pill:hover {
          border-color: var(--color-accent) !important;
          color: var(--color-accent) !important;
        }
      `}</style>
    </div>
  );
};

export default Services;