import React from 'react';
import { motion } from 'framer-motion';
import { ExportSquare } from 'iconsax-react';

const Work = () => {
  const projects = [
    {
      name: 'Aria',
      category: 'AI Support Agent',
      description: 'Automated 70% of support queries for a US SaaS company using custom RAG and OpenAI.',
      tech: ['OpenAI', 'Next.js', 'Supabase'],
      index: '01',
    },
    {
      name: 'Vantage',
      category: 'Inventory SaaS',
      description: 'Real-time inventory platform serving 3 warehouses with complex multi-tenant architecture.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      index: '02',
    },
    {
      name: 'FlowOps',
      category: 'Automation Dashboard',
      description: 'Reduced ops workload by 60% through intelligent workflow automation and n8n pipelines.',
      tech: ['n8n', 'LangChain', 'Python'],
      index: '03',
    },
  ];

  return (
    <div id="work" className="py-32 md:py-48">
      {/* Header */}
      <div className="mb-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12"
          style={{ borderBottom: '1px solid var(--color-border)' }}
        >
          <div>
            <span className="mono-label block mb-6" style={{ color: 'var(--color-accent)' }}>SELECTED WORK</span>
            <h2 className="text-[clamp(40px,7vw,100px)] font-serif leading-[0.92] tracking-[-0.02em]" style={{ color: 'var(--color-text-primary)' }}>
              Built &amp; <span className="italic">shipped.</span>
            </h2>
          </div>
          <p className="font-light text-[15px] max-w-[280px] md:text-right leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            From concept to production — every project is delivered on time and built to scale.
          </p>
        </motion.div>
      </div>

      {/* Project rows */}
      <div className="px-6 md:px-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
            className="work-row group py-12 grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] gap-6 md:gap-16 items-center"
            style={{ borderBottom: '1px solid var(--color-border)' }}
          >
            {/* Index */}
            <span className="hidden md:block font-serif italic text-[31px] w-8" style={{ color: 'var(--color-text-tertiary)' }}>
              {project.index}
            </span>

            {/* Content */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8">
                <h3 className="work-name text-[clamp(28px,4vw,56px)] font-serif leading-none tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                  {project.name}
                </h3>
                <span className="mono-label !text-[9px] opacity-50">{project.category}</span>
              </div>
              <p className="text-[14px] font-light leading-relaxed max-w-sm hidden md:block" style={{ color: 'var(--color-text-secondary)' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 md:hidden mt-2">
                {project.tech.map(t => (
                  <span key={t} className="mono-label !text-[9px] px-3 py-1 border rounded-full" style={{ borderColor: 'var(--color-border)' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div
              className="arrow-btn w-10 h-10 md:w-14 md:h-14 rounded-full border flex items-center justify-center flex-shrink-0"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-tertiary)' }}
            >
              <ExportSquare size={16} variant="Linear" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
