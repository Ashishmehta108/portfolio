import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Data ─────────────────────────────────────────────────────────────────────

const BUDGET_OPTIONS = [
  { value: 'Under $2k', label: 'Under $2k', sub: 'Small MVP or prototype' },
  { value: '$2k–$5k', label: '$2k–$5k', sub: 'Mid-size feature build' },
  { value: '$5k–$15k', label: '$5k–$15k', sub: 'Full SaaS or AI product' },
  { value: '$15k+', label: '$15k+', sub: 'Enterprise or long-term' },
];

const TRUST_ITEMS = [
  { label: 'Average response time', value: '4 hours' },
  { label: 'Current availability', value: '2 slots open' },
  { label: 'Timezone coverage', value: 'US · UK · AU' },
];

const EASE = [0.16, 1, 0.3, 1];

// ─── Budget Dropdown ──────────────────────────────────────────────────────────

const BudgetDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const selected = BUDGET_OPTIONS.find(o => o.value === value) || BUDGET_OPTIONS[0];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="input-field w-full flex items-center justify-between text-left cursor-pointer"
        style={{
          borderColor: open ? 'var(--color-border-strong)' : 'var(--color-border)',
          transition: 'border-color 0.15s ease',
        }}
      >
        <span
          className="text-sm"
          style={{
            fontFamily: 'var(--font-sans, "Geist", sans-serif)',
            color: value ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
          }}
        >
          {selected.label}
        </span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="w-3.5 h-3.5 flex-shrink-0 ml-2"
          fill="none" viewBox="0 0 24 24"
          stroke="currentColor" strokeWidth={1.5}
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.99 }}
            transition={{ duration: 0.13, ease: 'easeOut' }}
            className="absolute z-50 top-[calc(100%+4px)] left-0 right-0 border rounded-[6px] overflow-hidden"
            style={{
              backgroundColor: 'var(--color-white)',
              borderColor: 'var(--color-border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {BUDGET_OPTIONS.map(opt => {
              const isActive = opt.value === value;
              return (
                <li key={opt.value}>
                  <button
                    type="button"
                    onClick={() => { onChange(opt.value); setOpen(false); }}
                    className="w-full text-left px-4 py-3 flex items-center justify-between gap-4 cursor-pointer"
                    style={{
                      backgroundColor: isActive ? 'var(--color-accent-light)' : 'transparent',
                      color: isActive ? 'var(--color-accent)' : 'var(--color-text-primary)',
                      transition: 'background-color 0.12s ease',
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.backgroundColor = 'var(--color-bg-subtle)'; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ fontFamily: 'var(--font-sans, "Geist", sans-serif)' }}
                    >
                      {opt.label}
                    </span>
                    <span
                      className="text-[11px] font-light flex-shrink-0"
                      style={{
                        fontFamily: 'var(--font-mono, "Geist Mono", monospace)',
                        color: isActive ? 'var(--color-accent)' : 'var(--color-text-tertiary)',
                        opacity: isActive ? 0.75 : 1,
                      }}
                    >
                      {opt.sub}
                    </span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Contact ──────────────────────────────────────────────────────────────────

const INITIAL_FORM = { name: '', email: '', description: '', budget: 'Under $2k' };

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [focused, setFocused] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
      console.error('Submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };
  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section
      id="contact"
      style={{ backgroundColor: 'var(--color-bg-subtle)' }}
    >
      {/* Top border */}
      <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid lg:grid-cols-2 gap-16 xl:gap-24 py-16 md:py-[100px] px-6 md:px-12 max-w-6xl mx-auto"
      >

        {/* ── Left ── */}
        <div className="flex flex-col justify-center">

          {/* Section label */}
          <span
            className="block mb-6 text-[10px] tracking-[0.14em] uppercase"
            style={{
              fontFamily: 'var(--font-mono, "Geist Mono", monospace)',
              color: 'var(--color-text-tertiary)',
            }}
          >
            Contact
          </span>

          {/* Heading */}
          <h2
            className="font-serif leading-[1.1] mb-5"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
            }}
          >
            Ready to build<br />
            <em>something?</em>
          </h2>

          {/* Body */}
          <p
            className="font-light leading-[1.75] mb-12 max-w-[380px]"
            style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              fontFamily: 'var(--font-sans, "Geist", sans-serif)',
            }}
          >
            We're taking on new projects for Q2 2026. Tell us what you're
            building and we'll respond within 24 hours.
          </p>

          {/* Trust signals */}
          <div className="flex flex-col gap-5">
            {TRUST_ITEMS.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between pb-5"
                style={{ borderBottom: '1px solid var(--color-border)' }}
              >
                <span
                  className="text-[11px] tracking-[0.08em] uppercase"
                  style={{
                    fontFamily: 'var(--font-mono, "Geist Mono", monospace)',
                    color: 'var(--color-text-tertiary)',
                  }}
                >
                  {label}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{
                    fontFamily: 'var(--font-sans, "Geist", sans-serif)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — Form card ── */}
        <div
          className="border rounded-[8px] overflow-hidden"
          style={{
            backgroundColor: 'var(--color-white)',
            borderColor: 'var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <AnimatePresence mode="wait">

            {/* Form state */}
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
                onSubmit={handleSubmit}
                className="p-8 md:p-10 space-y-6"
              >
                {/* Name + Email row */}
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Name">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className="input-field"
                      style={focusStyle('name', focused)}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@acme.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className="input-field"
                      style={focusStyle('email', focused)}
                    />
                  </Field>
                </div>

                {/* Budget */}
                <Field label="Budget Range">
                  <BudgetDropdown
                    value={formData.budget}
                    onChange={val => setFormData(prev => ({ ...prev, budget: val }))}
                  />
                </Field>

                {/* Description */}
                <Field label="Project Description">
                  <textarea
                    name="description"
                    required
                    rows={4}
                    placeholder="Tell us what you're building..."
                    value={formData.description}
                    onChange={handleChange}
                    onFocus={() => setFocused('description')}
                    onBlur={() => setFocused(null)}
                    className="input-field resize-none"
                    style={focusStyle('description', focused)}
                  />
                </Field>

                {/* Submit */}
                <SubmitButton disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </SubmitButton>

                {error && (
                  <p className="text-center text-xs text-red-500 font-mono mt-2">
                    {error}
                  </p>
                )}

                <p
                  className="text-center text-[11px]"
                  style={{
                    fontFamily: 'var(--font-mono, "Geist Mono", monospace)',
                    color: 'var(--color-text-tertiary)',
                  }}
                >
                  We respond within 24 hours · No spam, ever
                </p>
              </motion.form>
            ) : (

              /* Success state */
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col items-center justify-center p-8 md:p-10 py-24 text-center"
              >
                {/* Check icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-8"
                  style={{
                    backgroundColor: 'var(--color-accent-light)',
                    color: 'var(--color-accent)',
                  }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3
                  className="font-serif italic mb-3"
                  style={{
                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                    color: 'var(--color-text-primary)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  We'll be in touch soon.
                </h3>
                <p
                  className="text-sm font-light max-w-[280px] leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Thank you for reaching out. Expect a reply within 24 hours.
                </p>

                {/* Subtle divider */}
                <div
                  className="mt-10 pt-6 w-full max-w-[200px]"
                  style={{ borderTop: '1px solid var(--color-border)' }}
                >
                  <span
                    className="text-[10px] tracking-[0.1em] uppercase"
                    style={{
                      fontFamily: 'var(--font-mono, "Geist Mono", monospace)',
                      color: 'var(--color-text-tertiary)',
                    }}
                  >
                    Stable System Solutions
                  </span>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>

      {/* Bottom border */}
      <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
    </section>
  );
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Thin label + children field wrapper */
const Field = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <label
      className="text-[10px] tracking-[0.1em] uppercase"
      style={{
        fontFamily: 'var(--font-mono, "Geist Mono", monospace)',
        color: 'var(--color-text-tertiary)',
      }}
    >
      {label}
    </label>
    {children}
  </div>
);

/** Focus border + ring style — applied inline so it reacts to state */
const focusStyle = (name, focused) => ({
  borderColor: focused === name ? 'var(--color-border-strong)' : 'var(--color-border)',
  boxShadow: focused === name ? '0 0 0 3px rgba(24,121,78,0.07)' : 'none',
  outline: 'none',
  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
});

/** Primary submit button */
const SubmitButton = ({ children, disabled }) => (
  <button
    type="submit"
    disabled={disabled}
    className="w-full py-3.5 text-sm font-medium rounded-[6px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    style={{
      backgroundColor: 'var(--color-accent)',
      color: '#fff',
      border: 'none',
      letterSpacing: '0.02em',
      fontFamily: 'var(--font-sans, "Geist", sans-serif)',
      transition: 'background-color 0.15s ease, transform 0.15s ease',
    }}
    onMouseEnter={e => {
      if (disabled) return;
      e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    }}
    onMouseLeave={e => {
      if (disabled) return;
      e.currentTarget.style.backgroundColor = 'var(--color-accent)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    {children}
  </button>
);

export default Contact;