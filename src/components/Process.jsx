import React from 'react';
import Section from './Section';
import { MessageText, DocumentText, Setting2, Send2 } from 'iconsax-react';

const steps = [
  {
    title: "Discovery",
    description: "Deep dive into your vision, requirements, and business goals.",
    icon: MessageText,
  },
  {
    title: "Scope & Proposal",
    description: "Detailed roadmap, technical architecture, and project milestones.",
    icon: DocumentText,
  },
  {
    title: "Build & Iterate",
    description: "Agile development with weekly updates and continuous feedback.",
    icon: Setting2,
  },
  {
    title: "Launch",
    description: "Final testing, deployment, and transition to your team.",
    icon: Send2,
  }
];

const Process = () => {
  return (
    <Section id="process">
      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mb-4 block">
        How It Works
      </span>
      <h2 className="text-4xl md:text-5xl mb-20">Our Process</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-border -z-10" />

        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 bg-bg border border-border rounded-full flex items-center justify-center text-text2 relative z-10">
                <step.icon size={20} color="currentColor" />
              </div>
              <span className="font-serif italic text-6xl text-border/40 select-none">
                0{index + 1}
              </span>
            </div>
            <h3 className="font-sans font-medium text-lg mb-3">{step.title}</h3>
            <p className="font-sans font-light text-sm text-text2 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Process;
