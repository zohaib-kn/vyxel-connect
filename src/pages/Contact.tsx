import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail, Building, Clock, ArrowUpRight, ArrowRight,
  CheckCircle2, Send, ChevronDown, Code2, MessageCircle,
  Shield, Users, Zap, Phone
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

/* ─── Types ──────────────────────────────────────────────────── */
interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  teamSize: string;
  channels: string[];
  purpose: string;
  monthlyVolume: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  purpose?: string;
}

/* ─── Contact FAQ data ───────────────────────────────────────── */
const contactFaqs = [
  {
    question: 'Do I need to talk to sales to start using Vyxel Connect?',
    answer:
      'No. You can connect your WhatsApp Business Account and have your first shared inbox live in under 2 minutes using Meta Embedded Signup — no call required. This form is only for teams who want a guided demo, a pricing walkthrough, or have questions before committing.',
  },
  {
    question: 'How quickly will someone get back to me?',
    answer:
      'We aim to respond within one business day. If your query is urgent or you have an active support issue, email support@digi-wire.com directly — our team monitors it around the clock for Enterprise customers.',
  },
  {
    question: 'Can I just read the docs instead?',
    answer:
      'Absolutely. If you are evaluating the API or want to explore the platform without a guided demo, head straight to the Developers page. Everything — endpoints, webhooks, HMAC verification, rate limits — is documented there.',
  },
];

/* ─── Channel pill ───────────────────────────────────────────── */
const ChannelPill: React.FC<{
  label: string;
  color: string;
  checked: boolean;
  onChange: () => void;
}> = ({ label, color, checked, onChange }) => (
  <label
    className={cn(
      'flex items-center gap-2 px-3.5 py-2 rounded-xl border cursor-pointer select-none transition-all duration-150 text-sm font-semibold',
      checked
        ? color
        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
    )}
  >
    <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
    <span
      className={cn(
        'w-4 h-4 rounded flex items-center justify-center border transition-all shrink-0',
        checked ? 'border-current bg-current/10' : 'border-slate-300 bg-white'
      )}
    >
      {checked && (
        <svg className="w-2.5 h-2.5" viewBox="0 0 10 8" fill="none">
          <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
    {label}
  </label>
);

/* ─── Field wrapper ──────────────────────────────────────────── */
const Field: React.FC<{
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}> = ({ label, required, optional, error, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-bold text-slate-700">
      {label}
      {required && <span className="text-[#007FFB] ml-0.5">*</span>}
      {optional && <span className="text-slate-400 font-normal ml-1">(optional)</span>}
    </label>
    {children}
    {error && (
      <p className="text-xs text-red-500 font-medium flex items-center gap-1 mt-0.5">
        <span className="inline-block w-1 h-1 rounded-full bg-red-500 shrink-0" />
        {error}
      </p>
    )}
  </div>
);

const inputCls = (hasError?: boolean) =>
  cn(
    'w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white transition-all duration-150',
    'focus:outline-none focus:ring-2 focus:ring-[#007FFB]/50 focus:border-[#007FFB]',
    'placeholder:text-slate-400',
    hasError
      ? 'border-red-400 ring-1 ring-red-300'
      : 'border-slate-200 hover:border-slate-300'
  );

/* ─── Mini FAQ accordion ─────────────────────────────────────── */
const ContactFAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {contactFaqs.map((faq, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={idx}
            className={cn(
              'rounded-2xl border transition-all duration-200 overflow-hidden',
              isOpen
                ? 'bg-white border-[#007FFB] shadow-md ring-2 ring-[#007FFB]/10'
                : 'bg-white border-slate-200 hover:border-slate-300'
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
              aria-expanded={isOpen}
            >
              <span className={cn('text-sm font-bold transition-colors', isOpen ? 'text-[#007FFB]' : 'text-slate-900')}>
                {faq.question}
              </span>
              <div
                className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200',
                  isOpen ? 'bg-[#007FFB]/10 text-[#007FFB] rotate-180' : 'bg-slate-100 text-slate-500'
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

/* ─── Main Contact page ──────────────────────────────────────── */
export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    teamSize: '',
    channels: [],
    purpose: '',
    monthlyVolume: '',
    message: '',
  });

  const set = (key: keyof FormData, value: string | string[]) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const toggleChannel = (ch: string) => {
    const current = formData.channels;
    set('channels', current.includes(ch) ? current.filter((c) => c !== ch) : [...current, ch]);
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = 'Full name is required.';
    if (!formData.email.trim()) {
      e.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!formData.company.trim()) e.company = 'Company name is required.';
    if (!formData.purpose) e.purpose = 'Please tell us what you are here for.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', company: '', phone: '', teamSize: '', channels: [], purpose: '', monthlyVolume: '', message: '' });
    setErrors({});
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* ── Page header ──────────────────────────────────────────── */}
      <div className="relative bg-white border-b border-slate-200/80 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,127,251,0.07) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(0,127,251,0.07) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-36 sm:pb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#007FFB]/10 border border-[#007FFB]/20 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#007FFB] animate-pulse" />
            <span className="text-xs font-bold text-[#007FFB] tracking-wide font-mono">CONTACT &amp; DEMO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-slate-900 leading-[1.06] max-w-3xl">
            Let's help your team reply{' '}
            <span className="bg-gradient-to-r from-[#007FFB] to-[#01E7DB] bg-clip-text text-transparent">
              faster, miss less.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Book a guided demo, ask a pricing question, or get support. Not ready for a call?{' '}
            <a
              href="https://provider.digi-wire.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#007FFB] hover:underline inline-flex items-center gap-1"
            >
              Start your free trial
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>{' '}
            in 2 minutes — no call needed.
          </p>

          {/* Two-path split */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-full bg-[#007FFB] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,127,251,0.28)] hover:bg-[#006bd1] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Talk to us
            </a>
            <Link
              to="/developers"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm"
            >
              <Code2 className="w-4 h-4 text-slate-500" />
              Just exploring the API?
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main content grid ─────────────────────────────────────── */}
      <div id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">

          {/* ── Left sidebar ──────────────────────────────────────── */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Contact details */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-soft-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Digiwire Technologies</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Official Meta Business Solution Provider — WhatsApp Cloud API, Instagram DM, and Messenger.
              </p>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-slate-700">
                  <Mail className="w-4 h-4 text-[#007FFB] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">General support</span>
                    <a href="mailto:support@digi-wire.com" className="text-[#007FFB] hover:underline">
                      support@digi-wire.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <Code2 className="w-4 h-4 text-[#007FFB] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">API &amp; developer</span>
                    <a href="mailto:api@vyxel.digi-wire.com" className="text-[#007FFB] hover:underline">
                      api@vyxel.digi-wire.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <Building className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Headquarters</span>
                    <span className="text-slate-500">Digiwire Technologies, Bengaluru, India</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Response time</span>
                    <span className="text-slate-500">Within 1 business day · 24/7 SLA for Enterprise</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Self-serve nudge */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#007FFB]/8 to-[#01E7DB]/6 border border-[#007FFB]/20">
              <div className="flex items-center gap-2 text-[#007FFB] font-bold text-xs mb-2">
                <Zap className="w-3.5 h-3.5" />
                Self-serve — no call needed
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Connect your WhatsApp Business Account in 2 minutes with Meta Embedded Signup. No tech provider approval, no custom Facebook App — just log in and start.
              </p>
              <a
                href="https://provider.digi-wire.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#007FFB] hover:underline"
              >
                Connect your WhatsApp <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Trust signals */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm space-y-3">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Why teams choose us</p>
              {[
                { icon: Shield, text: 'Official Meta BSP — no unofficial scraping' },
                { icon: Users, text: 'Shared inbox for your whole support team' },
                { icon: Zap, text: 'Wholesale Meta pass-through pricing' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-xs text-slate-600">
                  <Icon className="w-3.5 h-3.5 text-[#007FFB] shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">Common questions</p>
              <ContactFAQ />
            </div>
          </aside>

          {/* ── Right: form ───────────────────────────────────────── */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-soft-sm">
              {submitted ? (
                <div className="text-center py-14">
                  <div className="w-16 h-16 rounded-2xl bg-[#007FFB]/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-[#007FFB]" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Message received — thanks!</h2>
                  <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    A member of the Vyxel Connect team will be in touch within one business day. In the meantime, you can{' '}
                    <a
                      href="https://provider.digi-wire.com/signup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#007FFB] font-bold hover:underline"
                    >
                      start your free trial
                    </a>{' '}
                    right now — no call needed.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" onClick={resetForm}>
                      Send another message
                    </Button>
                    <Button
                      variant="primary"
                      href="https://provider.digi-wire.com/signup"
                      isExternal
                      iconRight={<ArrowUpRight className="w-4 h-4" />}
                    >
                      Start free trial
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5" id="demo-request-form">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Tell us about your team</h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Fields marked <span className="text-[#007FFB] font-bold">*</span> are required.
                    </p>
                  </div>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full name" required error={errors.name}>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => { set('name', e.target.value); if (errors.name) setErrors(p => ({ ...p, name: undefined })); }}
                        placeholder="Sarah Jenkins"
                        className={inputCls(!!errors.name)}
                      />
                    </Field>
                    <Field label="Work email" required error={errors.email}>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => { set('email', e.target.value); if (errors.email) setErrors(p => ({ ...p, email: undefined })); }}
                        placeholder="sarah@company.com"
                        className={inputCls(!!errors.email)}
                      />
                    </Field>
                  </div>

                  {/* Company + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Company name" required error={errors.company}>
                      <input
                        id="contact-company"
                        type="text"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) => { set('company', e.target.value); if (errors.company) setErrors(p => ({ ...p, company: undefined })); }}
                        placeholder="Acme Stores"
                        className={inputCls(!!errors.company)}
                      />
                    </Field>
                    <Field label="Phone / WhatsApp" optional>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input
                          id="contact-phone"
                          type="tel"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={(e) => set('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                          className={cn(inputCls(), 'pl-9')}
                        />
                      </div>
                    </Field>
                  </div>

                  {/* Team size */}
                  <Field label="Team size">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { label: '1–3', sub: 'Starter' },
                        { label: '4–15', sub: 'Growth' },
                        { label: '16–40', sub: 'Scale' },
                        { label: '40+', sub: 'Enterprise' },
                      ].map(({ label, sub }) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => set('teamSize', label)}
                          className={cn(
                            'flex flex-col items-center justify-center py-2.5 px-3 rounded-xl border text-xs font-bold transition-all duration-150 cursor-pointer',
                            formData.teamSize === label
                              ? 'border-[#007FFB] bg-[#007FFB]/8 text-[#007FFB] ring-1 ring-[#007FFB]/30'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                          )}
                        >
                          <span>{label}</span>
                          <span className={cn('text-[10px] font-medium mt-0.5', formData.teamSize === label ? 'text-[#007FFB]/70' : 'text-slate-400')}>
                            {sub}
                          </span>
                        </button>
                      ))}
                    </div>
                  </Field>

                  {/* Channels */}
                  <Field label="Which channels are you connecting?">
                    <div className="flex flex-wrap gap-2">
                      <ChannelPill
                        label="WhatsApp"
                        color="border-whatsapp text-whatsapp-text bg-whatsapp-light"
                        checked={formData.channels.includes('WhatsApp')}
                        onChange={() => toggleChannel('WhatsApp')}
                      />
                      <ChannelPill
                        label="Instagram DM"
                        color="border-instagram text-instagram-text bg-instagram-light"
                        checked={formData.channels.includes('Instagram DM')}
                        onChange={() => toggleChannel('Instagram DM')}
                      />
                      <ChannelPill
                        label="Messenger"
                        color="border-messenger text-messenger-text bg-messenger-light"
                        checked={formData.channels.includes('Messenger')}
                        onChange={() => toggleChannel('Messenger')}
                      />
                    </div>
                  </Field>

                  {/* Purpose */}
                  <Field label="What are you here for?" required error={errors.purpose}>
                    <select
                      id="contact-purpose"
                      value={formData.purpose}
                      onChange={(e) => { set('purpose', e.target.value); if (errors.purpose) setErrors(p => ({ ...p, purpose: undefined })); }}
                      className={inputCls(!!errors.purpose)}
                    >
                      <option value="">Select a reason…</option>
                      <option>Book a demo</option>
                      <option>Sales &amp; pricing question</option>
                      <option>Support</option>
                      <option>Partnership</option>
                      <option>API &amp; developer question</option>
                    </select>
                  </Field>

                  {/* Monthly volume */}
                  <Field label="Approximate monthly conversation volume" optional>
                    <select
                      id="contact-volume"
                      value={formData.monthlyVolume}
                      onChange={(e) => set('monthlyVolume', e.target.value)}
                      className={inputCls()}
                    >
                      <option value="">Not sure yet</option>
                      <option>Under 1,000 conversations / month</option>
                      <option>1,000 – 10,000 conversations / month</option>
                      <option>10,000 – 50,000 conversations / month</option>
                      <option>50,000+ conversations / month</option>
                    </select>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Helps us route you to the right plan tier and pass-through rate.
                    </p>
                  </Field>

                  {/* Message */}
                  <Field label="Message / details" optional>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => set('message', e.target.value)}
                      placeholder="Tell us about your current setup, specific integrations you need, or any questions you have…"
                      className={inputCls()}
                    />
                  </Field>

                  {/* Submit */}
                  <div className="pt-1">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full rounded-xl"
                      iconRight={<Send className="w-4 h-4" />}
                    >
                      {formData.purpose === 'Book a demo' ? 'Request a demo' : 'Send message'}
                    </Button>
                    <p className="mt-3 text-center text-xs text-slate-400">
                      Or{' '}
                      <a
                        href="https://provider.digi-wire.com/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#007FFB] font-bold hover:underline"
                      >
                        start your free trial
                      </a>{' '}
                      right now — no call needed.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
