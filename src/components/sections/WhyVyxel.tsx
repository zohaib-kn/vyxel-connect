import React from 'react';
import { 
  Inbox, Bot, ShoppingBag, BarChart3, 
  Eye, Terminal, CheckCircle2 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const WhyVyxel: React.FC = () => {
  const strengths = [
    {
      title: "Consolidated Meta Inbox",
      description: "WhatsApp, Instagram DM, and Messenger in one unified thread list with 24-hour session protection and live agent routing.",
      icon: <Inbox className="w-5 h-5 text-brand-600" />,
    },
    {
      title: "Visual Multi-Turn Builder",
      description: "Build branching conversation flows and decision logic on an intuitive canvas without needing proprietary code.",
      icon: <Bot className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Grounded AI Intelligence",
      description: "AI replies grounded in your own ingested business documents and FAQs, with automated handoff when confidence dips.",
      icon: <CheckCircle2 className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "In-Chat Commerce",
      description: "Share Meta Commerce catalog products and receive instant Razorpay payment confirmations right inside the chat window.",
      icon: <ShoppingBag className="w-5 h-5 text-amber-600" />,
    },
    {
      title: "Click-to-WhatsApp Ads",
      description: "Build lead generation ads directly inside Vyxel, deployed safely paused for review with full first-touch attribution.",
      icon: <BarChart3 className="w-5 h-5 text-rose-600" />,
    },
    {
      title: "Wholesale Transparency",
      description: "Pass-through Meta conversation rates at true cost plus a single published plan markup. Zero concealed token fees.",
      icon: <Eye className="w-5 h-5 text-cyan-600" />,
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHY CHOOSE VYXEL CONNECT"
          title="Everything required to scale WhatsApp conversations."
          description="Built specifically for growing businesses that need official WhatsApp Business API capabilities without sacrificing transparency, developer flexibility, or team efficiency."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#fbfdff] border border-slate-200/80 hover:border-brand-300 hover:shadow-soft-md transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-soft-sm flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
