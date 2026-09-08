import React from 'react';
import { 
  ShieldCheck, Clock, Bot, Eye, 
  ArrowRight, ArrowUpRight, Zap, CheckCircle2 
} from 'lucide-react';

export const WhyVyxel: React.FC = () => {
  const features = [
    {
      title: "Official Meta Cloud API v21.0",
      description: "Direct connection to Meta's global infrastructure with zero proxy middleware delays, maximum throughput, and instant access to new WhatsApp features.",
      icon: <ShieldCheck className="w-5 h-5 text-[#007FFB]" />,
      badge: "Direct BSP Tier",
      badgeColor: "bg-[#01E7DB]/15 text-[#007FFB] border border-[#01E7DB]/30",
    },
    {
      title: "24h Session Window Auto-Guard",
      description: "Real-time countdown prevents delivery rejection. When customer session closes, the interface seamlessly switches from free-text to approved Meta templates.",
      icon: <Clock className="w-5 h-5 text-amber-700" />,
      badge: "Zero Dropped Replies",
      badgeColor: "bg-[#fff9ea] text-amber-800",
    },
    {
      title: "Fact-Grounded RAG AI Answers",
      description: "Customer answers formulated strictly from your ingested business documents and FAQs via Anthropic or OpenAI, with automatic human escalation when confidence dips.",
      icon: <Bot className="w-5 h-5 text-purple-700" />,
      badge: "No Hallucinations",
      badgeColor: "bg-purple-50 text-purple-700",
    },
    {
      title: "Zero Concealed Token Fees",
      description: "Pass-through wholesale Meta conversation rates at true cost plus our single published plan fee. Zero hidden credits or inflated per-message surprises.",
      icon: <Eye className="w-5 h-5 text-blue-700" />,
      badge: "Wholesale Pass-Through",
      badgeColor: "bg-blue-50 text-blue-700",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 border border-[#007FFB]/20 px-3.5 py-1 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#007FFB]"></span>
            <span className="text-xs font-bold text-[#007FFB] tracking-wide font-mono">
              PROVEN ARCHITECTURE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.05]">
            Why leading businesses <span className="text-[#007FFB]">choose Vyxel Connect.</span>
          </h2>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Enterprise reliability, honest wholesale Meta pass-through pricing, and developer autonomy — without proprietary lock-in.
          </p>
        </div>

        {/* Icon-Led 4-Across Feature Grid (StudyAbroad CRM Pattern) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200/90 bg-[#f8fafc] p-6 sm:p-7 shadow-sm hover:border-[#007FFB]/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#007FFB] font-semibold">
                <span>Production verified</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
