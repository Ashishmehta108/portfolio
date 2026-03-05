import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className = "", bg = "bg-bg", noContainer = false }) => {
  return (
    <div className={`${bg} ${className}`} id={id}>
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={noContainer ? "" : "py-16 md:py-[120px] px-6 md:px-12 max-w-7xl mx-auto"}
      >
        {children}
      </motion.section>
    </div>
  );
};

export default Section;
