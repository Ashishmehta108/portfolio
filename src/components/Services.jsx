import React from 'react';
import Section from './Section';
import { Monitor, Cpu, Global } from 'iconsax-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Full-Stack Development",
    description: "Web apps, dashboards, and platforms built with React, Next.js, Node.js, and PostgreSQL",
    icon: Monitor,
  },
  {
    title: "AI Agents & Automation",
    description: "Custom AI agents, LLM integrations, and workflow automation using OpenAI, LangChain, and n8n",
    icon: Cpu,
  },
  {
    title: "SaaS Products",
    description: "End-to-end SaaS MVPs — auth, billing, analytics, and deployment, fully production-ready",
    icon: Global,
  }
];

const Services = () => {
  return (
    <Section id="services">
      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mb-4 block">
        Our Services
      </span>
      <h2 className="text-4xl md:text-5xl mb-16">What We Build</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="group bg-surface border border-border rounded-[6px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-border2 hover:shadow-custom"
          >
            <div className="w-10 h-10 bg-accent-lt rounded-sm flex items-center justify-center text-accent mb-6">
              <service.icon size={20} color="currentColor" />
            </div>
            <h3 className="text-xl mb-3 font-serif font-bold">{service.title}</h3>
            <p className="font-sans font-light text-[13px] text-text2 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
