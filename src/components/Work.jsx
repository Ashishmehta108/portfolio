import React from 'react';
import Section from './Section';
import { ExportSquare } from 'iconsax-react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: "Aria",
    category: "AI Customer Support Agent",
    description: "Intelligent agent that handles support queries, integrates with documentation, and escalates to humans.",
    tech: ["OpenAI", "Next.js", "Supabase"],
    letter: "A"
  },
  {
    name: "Vantage",
    category: "Inventory Management SaaS",
    description: "Cloud-based inventory tracking for multi-location retail businesses with real-time analytics.",
    tech: ["React", "Node.js", "PostgreSQL"],
    letter: "V"
  },
  {
    name: "FlowOps",
    category: "Workflow Automation Dashboard",
    description: "Enterprise dashboard for managing complex automated workflows across multiple internal tools.",
    tech: ["n8n", "LangChain", "Python"],
    letter: "F"
  }
];

const Work = () => {
  return (
    <Section id="work">
      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mb-4 block">
        Recent Work
      </span>
      <h2 className="text-4xl md:text-5xl mb-16">Selected Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="group bg-surface border border-border rounded-[6px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-border2 hover:shadow-custom overflow-hidden relative"
          >
            <div className="absolute top-[-20px] left-[-10px] select-none pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="font-serif italic font-bold text-[180px] text-border leading-none">
                {project.letter}
              </span>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold">{project.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-accent font-medium bg-accent-lt px-2 py-0.5 rounded-sm">
                  {project.category.split(' ')[0]}
                </span>
              </div>

              <p className="font-sans font-light text-sm text-text2 leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                <div className="flex gap-2">
                  {project.tech.slice(0, 2).map(t => (
                    <span key={t} className="font-mono text-[9px] uppercase tracking-wider text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <a href="#" className="flex items-center gap-1.5 text-xs font-medium hover:text-accent transition-colors">
                  View Project <ExportSquare size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Work;
