import React from 'react';
import { 
  Zap, Bot, CreditCard, ArrowRight, ArrowUpRight,
  ShieldCheck, CheckCircle2, MessageSquare, Send
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "STEP 01",
      title: "Connect Channels in 2 Minutes",
      subtitle: "Zero Meta Approval Delays",
      description: "Self-serve Meta Embedded Signup links your verified WhatsApp Business Account (WABA), Instagram DM, and Messenger into Vyxel with immediate Cloud API access.",
      icon: <Zap className="w-5 h-5 text-[#007FFB]" />,
      badgeColor: "bg-[#01E7DB]/15 text-[#007FFB] border-[#01E7DB]/30",
      highlight: "Official Cloud API v21.0 · Embedded Signup",
    },
    {
      step: "STEP 02",
      title: "Automate with Grounded AI",
      subtitle: "Visual Flows & Knowledge Base",
      description: "Drag-and-drop branching decision paths or let Anthropic and OpenAI answer product inquiries directly from your uploaded FAQs and documents with zero hallucinations.",
      icon: <Bot className="w-5 h-5 text-purple-600" />,
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      highlight: "RAG Grounded · Anti-Collision Bookings",
    },
    {
      step: "STEP 03",
      title: "Broadcast, Sell & Retain",
      subtitle: "Verified Receipts & In-Chat Checkout",
      description: "Schedule targeted template broadcasts to customer segments, share interactive Meta Commerce catalog cards, and collect payments via in-thread Razorpay links.",
      icon: <Send className="w-5 h-5 text-blue-600" />,
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      highlight: "94% Read Rates · In-Chat Razorpay",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 border border-[#007FFB]/20 px-3.5 py-1 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#007FFB]"></span>
            <span className="text-xs font-bold text-[#007FFB] tracking-wide font-mono">
              THREE STEPS TO SCALE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.05]">
            How Vyxel Connect <span className="text-[#007FFB]">powers customer growth.</span>
          </h2>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From two-minute onboarding to automated AI resolution and high-deliverability broadcast revenue — a streamlined sequence designed for commercial velocity.
          </p>
        </div>

        {/* 3 Numbered Sequential Step Cards (StudyAbroad CRM Pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#007FFB]/60 transition-all relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#f8fafc] border border-slate-200 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-slate-500 block mb-3">
                  {item.subtitle}
                </span>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="truncate">{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout & Quick Link */}
        <div className="mt-12 text-center">
          <a
            href="https://provider.digi-wire.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#007FFB] px-7 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(0,127,251,0.25)] hover:bg-[#006bd1] transition-all"
          >
            <span>Start your 2-minute onboarding</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
