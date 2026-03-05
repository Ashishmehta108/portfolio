import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className = "", bg = "bg-bg" }) => {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 ${bg} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
