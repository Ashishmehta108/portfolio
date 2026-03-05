import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: '2–3', unit: 'WK', label: 'Average MVP' },
    { value: '70%', unit: '', label: 'Avg. Ops Automated' },
    { value: '7+', unit: '', label: 'Timezones Served' },
    { value: '100', unit: '%', label: 'Satisfaction Rate' },
  ];

  return (
    <div
      className="overflow-hidden relative"
      style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}
    >
      {/* Centre rule */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px pointer-events-none" style={{ backgroundColor: 'var(--color-border)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`stat-cell relative flex flex-col justify-center py-12 md:py-28 px-6 md:px-12 cursor-default
                ${i > 0 ? 'border-l' : ''}
                ${i >= 2 ? 'border-t lg:border-t-0' : ''}
              `}
              style={{ borderColor: 'var(--color-border)' }}
            >
              {/* Ghost index */}
              <span
                className="font-serif italic text-[60px] md:text-[120px] absolute right-4 bottom-4 leading-none select-none pointer-events-none"
                style={{ color: 'var(--color-accent)', opacity: 0.04 }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10 space-y-3">
                <div className="stat-val">
                  <span
                    className="font-serif italic text-[42px] md:text-[72px] leading-none tracking-[-0.02em]"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="font-serif italic text-[24px] mb-1" style={{ color: 'var(--color-accent)' }}>
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="mono-label !text-[10px] opacity-50">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
