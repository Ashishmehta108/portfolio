import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          <motion.div variants={item} className="mb-6">
            <span className="badge">
              Full-Stack Development · SaaS · AI Agents
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-[72px] md:text-[88px] leading-[1.05] tracking-[-1px] mb-8">
            We build software <br />
            <span className="italic">that actually ships.</span>
          </motion.h1>

          <motion.p variants={item} className="text-[17px] font-light text-text-secondary leading-[1.7] max-w-[520px] mb-10">
            Stable System Solutions partners with ambitious startups and growing teams to deliver full-stack products, SaaS platforms, and AI agents — on time, production-ready.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-8">
            <a href="#work" className="btn-primary">
              See Our Work
            </a>
            <a href="#contact" className="text-text-primary font-medium hover:text-accent transition-colors duration-150">
              Talk to Us →
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-16 pt-8 border-t border-border flex gap-6 items-center">
            {['React', 'Next.js', 'OpenAI', 'Node.js'].map((tech) => (
              <span key={tech} className="mono-label">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block relative"
        >
          <div className="bg-bg-subtle border border-border rounded-[8px] p-8 aspect-video flex flex-col shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
              </div>
              <div className="badge !bg-accent/5 !text-accent">Live</div>
            </div>

            <div className="space-y-4">
              <div className="h-4 bg-border/40 rounded w-1/3" />
              <div className="grid grid-cols-3 gap-4">
                <div className="h-20 bg-white border border-border rounded p-4 flex flex-col justify-end">
                  <div className="h-2 bg-border/40 rounded w-1/2 mb-2" />
                  <div className="h-3 bg-border/60 rounded w-3/4" />
                </div>
                <div className="h-20 bg-white border border-border rounded p-4 flex flex-col justify-end">
                  <div className="h-2 bg-border/40 rounded w-1/2 mb-2" />
                  <div className="h-3 bg-border/60 rounded w-3/4" />
                </div>
                <div className="h-20 bg-white border border-border rounded p-4 flex flex-col justify-end">
                  <div className="h-2 bg-border/40 rounded w-1/2 mb-2" />
                  <div className="h-3 bg-border/60 rounded w-3/4" />
                </div>
              </div>
              <div className="h-32 bg-white border border-border rounded p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10" />
                  <div className="h-3 bg-border/60 rounded w-1/4" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-border/30 rounded w-full" />
                  <div className="h-2 bg-border/30 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
