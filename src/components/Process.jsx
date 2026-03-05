import React from 'react';
import { motion } from 'framer-motion';
import { MessageText, DocumentText, Setting2, Send2 } from 'iconsax-react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your goals, user needs, and technical requirements to build a solid foundation.",
      icon: <MessageText size={20} />
    },
    {
      number: "02",
      title: "Scope & Proposal",
      description: "A detailed breakdown of features, timelines, and fixed pricing. No surprises, just clarity.",
      icon: <DocumentText size={20} />
    },
    {
      number: "03",
      title: "Build & Iterate",
      description: "Weekly updates and staging deployments. We build out loud, ensuring the product evolves with your feedback.",
      icon: <Setting2 size={20} />
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Production deployment, documentation, and a post-launch support period to ensure a smooth transition.",
      icon: <Send2 size={20} />
    }
  ];

  return (
    <>
      <div className="mb-16">
        <span className="mono-label">How We Work</span>
        <h2 className="text-[42px] mt-4">A streamlined path to production.</h2>
      </div>

      <div className="border-t border-border">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ backgroundColor: "var(--color-bg-subtle)" }}
            className="grid md:grid-cols-[1fr_2fr_auto] gap-8 py-10 px-6 border-b border-border items-center transition-colors duration-200 group"
          >
            <div className="flex items-center gap-4">
              <span className="font-serif italic text-[13px] text-text-tertiary">{step.number}</span>
              <h3 className="text-2xl font-serif">{step.title}</h3>
            </div>

            <p className="text-text-secondary text-sm font-light leading-[1.7] max-w-xl">
              {step.description}
            </p>

            <div className="text-text-tertiary group-hover:text-accent transition-colors duration-200">
              {step.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Process;
