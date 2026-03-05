import React from 'react';
import { motion } from 'framer-motion';
import { MessageText, DocumentText, Setting2, Send2 } from 'iconsax-react';

const Process = () => {
  const steps = [
    { number: '01', title: 'Discovery', description: 'We dive deep into your goals, user needs, and technical requirements to build a solid foundation.', icon: <MessageText size={18} /> },
    { number: '02', title: 'Scope & Proposal', description: 'A detailed breakdown of features, timelines, and fixed pricing. No surprises, just clarity.', icon: <DocumentText size={18} /> },
    { number: '03', title: 'Build & Iterate', description: 'Weekly updates and staging deployments. We build out loud, so the product evolves with your feedback.', icon: <Setting2 size={18} /> },
    { number: '04', title: 'Launch & Support', description: 'Production deployment, documentation, and a post-launch support window to ensure a smooth transition.', icon: <Send2 size={18} /> },
  ];

  return (
    <div id="process" className="py-32 md:py-48">
      {/* Header */}
      <div className="px-6 md:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mono-label block mb-6" style={{ color: 'var(--color-accent)' }}>HOW WE WORK</span>
          <h2 className="text-[clamp(40px,7vw,100px)] font-serif leading-[0.92] tracking-[-0.02em]" style={{ color: 'var(--color-text-primary)' }}>
            A streamlined <span className="italic">path.</span>
          </h2>
        </motion.div>
      </div>

      {/* Steps */}
      <div className="px-6 md:px-12" style={{ borderTop: '1px solid var(--color-border)' }}>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
            className="proc-row group grid grid-cols-[48px_1fr_auto] md:grid-cols-[100px_1fr_1fr_80px] gap-8 md:gap-16 py-12 md:py-16 items-center"
            style={{ borderBottom: '1px solid var(--color-border)' }}
          >
            {/* Step number */}
            <span className="font-serif italic text-[31px]" style={{ color: 'var(--color-text-tertiary)' }}>
              {step.number}
            </span>

            {/* Title */}
            <h3 className="proc-title text-[22px] md:text-[32px] font-serif leading-tight tracking-[-0.01em]" style={{ color: 'var(--color-text-primary)' }}>
              {step.title}
            </h3>

            {/* Description desktop */}
            <p className="text-[14px] font-light leading-relaxed hidden md:block" style={{ color: 'var(--color-text-secondary)' }}>
              {step.description}
            </p>

            {/* Icon */}
            <div className="flex justify-end">
              <div
                className="arrow-btn w-10 h-10 rounded-full border flex items-center justify-center"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-tertiary)' }}
              >
                {step.icon}
              </div>
            </div>

            {/* Description mobile */}
            <p className="text-[13px] font-light leading-relaxed col-start-2 col-end-3 md:hidden -mt-4" style={{ color: 'var(--color-text-secondary)' }}>
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
