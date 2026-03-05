import React, { useState } from 'react';
import Section from './Section';
import { Sms } from 'iconsax-react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <Section id="contact" bg="bg-bg2" className="border-y border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mb-4 block">
            Let's Build Something
          </span>
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">Ready to ship <br /><span className="italic">your vision?</span></h2>
          <p className="text-lg font-sans font-light text-text2 mb-10 max-w-md">
            We're currently accepting new projects for Q2 2025. Send us a message and we'll get back to you within 24 hours.
          </p>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center group-hover:border-accent transition-colors">
              <Sms size={20} color="currentColor" className="text-text2 group-hover:text-accent transition-colors" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase text-muted tracking-widest">Email us</p>
              <p className="font-sans font-medium">hello@stablesystems.io</p>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-[6px] p-8 md:p-10 shadow-custom">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-accent-lt rounded-full flex items-center justify-center text-accent mb-6">
                <Sms size={32} />
              </div>
              <h3 className="text-2xl mb-2">Message received.</h3>
              <p className="text-text2 font-light">We'll be in touch shortly.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm font-medium text-accent hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-muted mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none transition-colors font-sans"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-muted mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none transition-colors font-sans"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-muted mb-2">Tell us about your project</label>
                <textarea
                  required
                  rows="4"
                  className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none transition-colors font-sans resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
