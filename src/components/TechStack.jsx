import React from 'react';
import Section from './Section';
import { Code } from 'iconsax-react';

const tech = [
  "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL",
  "Supabase", "OpenAI API", "LangChain", "n8n", "Python",
  "Tailwind CSS", "Docker"
];

const TechStack = () => {
  return (
    <Section id="stack" bg="bg-bg2" className="border-y border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mb-4 block">
            Our Stack
          </span>
          <h2 className="text-4xl md:text-5xl">Built with modern tech.</h2>
        </div>
        <div className="text-muted opacity-40 hidden md:block">
          <Code size={40} variant="TwoTone" />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {tech.map((item) => (
          <span
            key={item}
            className="font-mono text-[11px] uppercase tracking-[0.1em] bg-surface border border-border rounded-[3px] px-4 py-2 text-text2 hover:border-border2 hover:text-text transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
};

export default TechStack;
