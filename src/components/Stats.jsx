import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: "2–3 wk", label: "MVPs" },
    { value: "$0 → Live", label: "SaaS builds" },
    { value: "US · UK · AU", label: "Client base" },
    { value: "100%", label: "On-time delivery" }
  ];

  return (
    <div className="bg-bg-subtle border-y border-border">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border py-12 md:py-20 max-w-7xl mx-auto px-6 md:px-12"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-8">
            <span className="font-serif italic text-4xl md:text-5xl text-text-primary mb-2">
              {stat.value}
            </span>
            <span className="text-text-secondary text-[13px] font-sans">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.section>
    </div>
  );
};

export default Stats;
