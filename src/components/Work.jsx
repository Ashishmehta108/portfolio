import React from 'react';
import { motion } from 'framer-motion';
import { ExportSquare } from 'iconsax-react';

const Work = () => {
  const projects = [
    {
      name: "Aria",
      initial: "A",
      category: "AI Support Agent",
      description: "Automated 70% of support queries for a US SaaS company using custom RAG and OpenAI.",
      tech: ["OpenAI", "Next.js", "Supabase"]
    },
    {
      name: "Vantage",
      initial: "V",
      category: "Inventory SaaS",
      description: "Real-time inventory platform serving 3 warehouses with complex multi-tenant architecture.",
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    {
      name: "FlowOps",
      initial: "F",
      category: "Automation Dashboard",
      description: "Reduced ops workload by 60% through intelligent workflow automation and n8n pipelines.",
      tech: ["n8n", "LangChain", "Python"]
    }
  ];

  return (
    <>
      <div className="mb-16">
        <span className="mono-label">Selected Work</span>
        <h2 className="text-[42px] mt-4">Products we're proud of.</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-border rounded-[8px] overflow-hidden group hover:shadow-lg hover:border-border-strong transition-all duration-300"
          >
            <div className="h-[180px] bg-bg-muted relative flex items-center justify-center overflow-hidden">
              <span className="font-serif italic text-[300px] leading-none text-border-strong select-none translate-y-8 group-hover:scale-105 transition-transform duration-500">
                {project.initial}
              </span>
            </div>

            <div className="p-7">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif">{project.name}</h3>
                <span className="mono-label !text-[10px] tracking-widest">{project.category}</span>
              </div>

              <p className="text-text-secondary text-sm font-light leading-[1.7] mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="bg-bg-subtle text-text-secondary px-2 py-0.5 rounded-[4px] text-[10px] font-mono border border-border">
                    {t}
                  </span>
                ))}
              </div>

              <a href="#" className="flex items-center gap-2 text-text-primary text-sm font-medium hover:text-accent transition-colors">
                View Case Study <ExportSquare size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Work;
