import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Global } from 'iconsax-react';

const Services = () => {
  const services = [
    {
      title: "Full-Stack Development",
      description: "Web apps, dashboards, and platforms built with React, Next.js, Node.js, and PostgreSQL.",
      icon: <Monitor size={20} variant="Bold" />,
      tech: "React · Next.js · Node.js"
    },
    {
      title: "AI Agents & Automation",
      description: "Custom AI agents, LLM integrations, and workflow automation using OpenAI, LangChain, and n8n.",
      icon: <Cpu size={20} variant="Bold" />,
      tech: "OpenAI · LangChain · n8n"
    },
    {
      title: "SaaS Products",
      description: "End-to-end SaaS MVPs — auth, billing, analytics, and deployment, fully production-ready.",
      icon: <Global size={20} variant="Bold" />,
      tech: "Stripe · Supabase · Vercel"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <div className="mb-16">
        <span className="mono-label">Services</span>
        <h2 className="text-[42px] mt-4">Three things we do exceptionally well.</h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={item} className="card flex flex-col h-full">
            <div className="w-9 h-9 bg-accent-light rounded-[6px] flex items-center justify-center text-accent mb-6">
              {service.icon}
            </div>

            <h3 className="text-xl mb-4">{service.title}</h3>

            <div className="w-full h-px bg-border mb-4" />

            <p className="text-text-secondary text-sm font-light leading-[1.7] mb-8 flex-grow">
              {service.description}
            </p>

            <div className="mono-label !text-[10px]">
              {service.tech}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Services;
