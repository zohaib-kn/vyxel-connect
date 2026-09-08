import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-slate-200/80">
      {/* Subtle decorative grid background (StudyAbroad CRM Pattern) */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 127, 251, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 127, 251, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      ></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#007FFB]/10 border border-[#007FFB]/20 text-xs font-bold text-[#007FFB] mb-6 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#01E7DB] animate-pulse"></span>
          OFFICIAL META BUSINESS SOLUTION PROVIDER
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.04]">
          Ready to unify your <span className="bg-gradient-to-r from-[#007FFB] to-[#01E7DB] bg-clip-text text-transparent">customer conversations?</span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Onboard in under 2 minutes with Meta Embedded Signup. Connect your WhatsApp, Instagram, and Messenger into one shared inbox with automated AI and transparent pass-through rates.
        </p>

        {/* Dual Pill CTA Buttons (StudyAbroad CRM Pattern) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://provider.digi-wire.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#007FFB] px-8 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(0,127,251,0.3)] hover:bg-[#006bd1] transition-all"
          >
            <span>Start free trial</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#channels"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-300 px-8 py-4 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-sm"
          >
            <span>Connect your WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Reassurance Bullets Row (StudyAbroad CRM Pattern) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#007FFB]" />
            2-Minute self-serve setup
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#007FFB]" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#007FFB]" />
            Meta wholesale pass-through
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#007FFB]" />
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
};
