import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    budget: 'Under $2k'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-bg-subtle">
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid lg:grid-cols-2 gap-20 py-16 md:py-[120px] px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div>
          <h2 className="text-[42px] mb-6">Ready to build something?</h2>
          <p className="text-text-secondary text-lg font-light leading-relaxed mb-12">
            We're currently taking on new projects for Q2 2025. Tell us about your idea and we'll get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-medium">Average response time: 4 hours</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-medium">Current availability: 2 slots left</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-[8px] p-8 md:p-10 shadow-sm relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="mono-label !text-[10px]">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="mono-label !text-[10px]">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="mono-label !text-[10px]">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="input-field appearance-none cursor-pointer"
                  >
                    <option>Under $2k</option>
                    <option>$2k–$5k</option>
                    <option>$5k+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="mono-label !text-[10px]">Project Description</label>
                  <textarea
                    name="description"
                    required
                    rows="4"
                    placeholder="Tell us about what you're building..."
                    value={formData.description}
                    onChange={handleChange}
                    className="input-field resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-base font-medium">
                  Send Message
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 bg-accent-light text-accent rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif italic mb-2">We'll be in touch within 24 hours.</h3>
                <p className="text-text-secondary">Thank you for reaching out to Stable System Solutions.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
