import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const tags = [
    "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL",
    "Supabase", "OpenAI API", "LangChain", "n8n", "Python",
    "Tailwind CSS", "Docker", "Vercel"
  ];

  return (
    <div className="bg-bg-subtle border-y border-border">
      <motion.section
        id="stack"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-[120px] px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div>
          <span className="mono-label">Tech Stack</span>
          <h2 className="text-[32px] md:text-[42px] leading-tight mt-4">Built with the best tools.</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
              className="bg-white border border-border rounded-[4px] px-4 py-2 text-[12px] font-mono text-text-secondary cursor-default transition-colors duration-150"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default TechStack;
