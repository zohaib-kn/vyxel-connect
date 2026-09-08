import React from 'react';
import { 
  ShoppingBag, Headphones, Megaphone, CalendarCheck, 
  CheckCircle2, ArrowRight, ArrowUpRight, Zap, Clock, ShieldCheck
} from 'lucide-react';
import { useCasesList } from '../../data/useCases';

export const UseCasesSection: React.FC = () => {
  return (
    <section id="solutions" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid: Left Title + Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 border border-[#007FFB]/20 px-3.5 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#007FFB]"></span>
              <span className="text-xs font-bold text-[#007FFB] tracking-wide font-mono">
                OPERATIONS BY TEAM
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.05]">
              Different teams. <span className="text-[#007FFB]">One customer picture.</span>
            </h2>
          </div>

          <div>
            <p className="text-base text-slate-600 leading-relaxed">
              Support agents, marketing managers, and commerce operators share the exact same verified conversation record — so context never slips when teams collaborate.
            </p>
          </div>
        </div>

        {/* Dual-Card Operational Split (DealDesk Layout Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Support & Operations Team (Deep Slate Container) */}
          <div className="rounded-[2.25rem] border border-slate-800 bg-[#09152b] text-white p-7 sm:p-9 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#007FFB] uppercase tracking-wider">
                  SUPPORT &amp; CS TEAMS
                </span>
                <span className="text-[10px] font-mono text-[#01E7DB] bg-[#01E7DB]/10 border border-[#01E7DB]/30 px-2.5 py-0.5 rounded-full">
                  Real-time SSE
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                Resolve escalated inquiries before SLAs slip.
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Unify WhatsApp, Instagram, and Messenger into a synchronized agent workspace. Automated 24-hour session protection prevents message dropouts, and AI suggestion drafting cuts handling time by 60%.
              </p>

              {/* Mini-Widget */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Median First Response:</span>
                  <span className="font-bold text-[#01E7DB] font-mono">42 seconds</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Session Window Compliance:</span>
                  <span className="font-bold text-[#007FFB] font-mono">100% template-safe</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Escalated Hand-offs:</span>
                  <span className="font-bold text-white font-mono">Full thread context</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="/solutions#support"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#007FFB] hover:text-[#01E7DB] transition-colors"
              >
                <span>Explore support team workflows</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Revenue & Marketing Team (Rich Navy Gradient Container) */}
          <div className="rounded-[2.25rem] border border-[#007FFB]/40 bg-gradient-to-b from-[#09152b] to-[#0d1e3d] text-white p-7 sm:p-9 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#01E7DB] uppercase tracking-wider">
                  MARKETING &amp; COMMERCE TEAMS
                </span>
                <span className="text-[10px] font-mono text-[#01E7DB] bg-[#01E7DB]/15 border border-[#01E7DB]/30 font-bold px-2.5 py-0.5 rounded-full">
                  In-Chat Commerce
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                Turn social inquiries into paid orders inside chat.
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Sync your Meta Commerce Catalog, launch Click-to-WhatsApp ads with first-touch attribution, and collect payments directly in-thread with secure Razorpay UPI links.
              </p>

              {/* Mini-Widget */}
              <div className="p-4 rounded-2xl bg-[#060e1d] border border-slate-800 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Broadcast Read Rate:</span>
                  <span className="font-bold text-[#01E7DB] font-mono">94% verified receipts</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Catalog Conversion:</span>
                  <span className="font-bold text-[#007FFB] font-mono">Interactive cards</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">In-Chat Checkout:</span>
                  <span className="font-bold text-white font-mono">Instant Razorpay confirmation</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="/solutions#marketing"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#01E7DB] hover:text-white transition-colors"
              >
                <span>Explore growth team workflows</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCasesList.map((uc) => (
            <div
              key={uc.id}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#007FFB]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#007FFB] bg-[#007FFB]/10 border border-[#007FFB]/20 px-2.5 py-1 rounded-full inline-block mb-3">
                  {uc.channelSupport}
                </span>
                <h4 className="text-base font-bold text-slate-900 mb-1">{uc.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {uc.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href={`/solutions#${uc.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007FFB] hover:text-[#006bd1]"
                >
                  <span>View workflow</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
