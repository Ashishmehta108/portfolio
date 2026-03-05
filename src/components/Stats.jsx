import React from 'react';
import Section from './Section';
import { Timer1, Global, Cpu, Wallet } from 'iconsax-react';

const stats = [
  { label: "2–3 Weeks to MVP", sub: "Speed to Market", icon: Timer1 },
  { label: "US · UK · AU Clients", sub: "Global Reach", icon: Global },
  { label: "Full-Stack + AI", sub: "Deep Expertise", icon: Cpu },
  { label: "Startup Pricing", sub: "Built for Growth", icon: Wallet }
];

const Stats = () => {
  return (
    <Section id="stats" className="border-y border-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-8 flex flex-col items-center text-center ${
              index !== stats.length - 1 ? 'lg:border-r border-border' : ''
            } ${index % 2 === 0 ? 'sm:border-r lg:border-r-0' : ''} ${
              index < 2 ? 'border-b sm:border-b-0' : ''
            } lg:border-b-0`}
          >
            <div className="text-muted mb-4 opacity-60">
              <stat.icon size={24} color="currentColor" />
            </div>
            <h4 className="text-2xl md:text-3xl font-serif italic mb-2">{stat.label}</h4>
            <p className="font-sans font-light text-sm text-muted uppercase tracking-[0.1em]">
              {stat.sub}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Stats;
