import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
      <div className="max-w-4xl relative z-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mb-6 block">
          Full-Stack · SaaS · AI Agents
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8">
          We build products <br />
          <span className="italic">that scale.</span>
        </h1>
        <p className="text-lg md:text-xl font-sans font-light text-text2 max-w-2xl mb-10 leading-relaxed">
          Stable System Solutions partners with startups and growing teams to ship
          full-stack products, SaaS platforms, and AI-powered agents — fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#work" className="btn-primary text-center">
            See Our Work
          </a>
          <a href="#contact" className="btn-ghost text-center">
            Talk to Us
          </a>
        </div>
      </div>

      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-10">
        <span className="font-serif italic font-bold text-[300px] text-border leading-none">
          SSS
        </span>
      </div>

      <div className="absolute bottom-0 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 h-[1px] bg-border" />
    </section>
  );
};

export default Hero;
