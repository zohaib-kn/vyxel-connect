import React, { useState } from 'react';
import { 
  Sparkles, Clock, RefreshCw, 
  UserCheck, ArrowRight, CheckCircle2,
  ShieldCheck, ArrowUpRight
} from 'lucide-react';
import { DeviceFrame } from '../ui/DeviceFrame';
import { cn } from '../../lib/utils';

export const UnifiedInbox: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Real-Time SSE + 30s Polling Fallback",
      desc: "Inbound messages stream instantaneously via Server-Sent Events. Automatic 30-second polling backup guarantees zero dropped inquiries during network hiccups.",
      tag: "SSE Active · 24ms",
      icon: <RefreshCw className="w-4 h-4 text-[#007FFB]" />,
    },
    {
      title: "Automatic 24h Session Window Guard",
      desc: "Live countdown timer prevents delivery rejection. When customer session closes, the interface seamlessly switches from free-text to approved Meta templates.",
      tag: "Session Protected",
      icon: <Clock className="w-4 h-4 text-[#007FFB]" />,
    },
    {
      title: "AI Suggest Reply Copilot",
      desc: "Agents click a single button to draft contextual replies generated from thread history and your tenant knowledge base, ready for quick edit and dispatch.",
      tag: "Grounded AI Draft",
      icon: <Sparkles className="w-4 h-4 text-purple-600" />,
    },
    {
      title: "Routing & Ad Attribution",
      desc: "Assign conversations by role, add searchable tags, and see exactly which Meta ad click ID generated the thread right above the conversation header.",
      tag: "First-Touch Ad ID",
      icon: <UserCheck className="w-4 h-4 text-[#007FFB]" />,
    },
  ];

  return (
    <section id="inbox" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Left Column: Integrated Narrative & Feature Selector */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 px-3.5 py-1.5 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#01E7DB]"></span>
              <span className="text-xs font-bold text-[#007FFB] tracking-wide">
                UNIFIED TEAM INBOX
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.05]">
              Resolve conversations faster with <span className="text-[#007FFB]">complete customer context.</span>
            </h2>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Bring WhatsApp, Instagram DM, and Messenger into a synchronized workspace with real-time SSE streaming, automatic 24-hour session protection, and AI reply drafting.
            </p>

            {/* Interactive Feature Accordion List */}
            <div className="mt-8 space-y-3">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={cn(
                    "p-4 rounded-2xl border transition-all cursor-pointer",
                    activeFeature === idx
                      ? "bg-blue-50/50 border-[#007FFB]/40 shadow-sm"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={cn(
                        "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold",
                        activeFeature === idx ? "bg-[#007FFB]/10 text-[#007FFB]" : "bg-slate-100 text-slate-600"
                      )}>
                        {item.icon}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.tag}
                    </span>
                  </div>
                  {activeFeature === idx && (
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-9 animate-fadeIn">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://provider.digi-wire.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#007FFB] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_20px_rgba(0,127,251,0.25)] hover:bg-[#0066d6] transition-all"
              >
                <span>Experience live inbox</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-xs font-medium text-slate-500">
                Works on Chrome, Safari &amp; Edge
              </span>
            </div>
          </div>

          {/* Right Column: Elevated Live Product Window */}
          <div className="lg:col-span-7">
            <DeviceFrame
              imageSrc="/screenshots/inbox.png"
              imageAlt="Vyxel Connect Unified Team Inbox with Multi-Channel Conversations"
              blobColor="cyan"
              blobPosition="top-right"
              className="max-w-[760px] mx-auto"
            />
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#007FFB]" />
                Role-based agent isolation active
              </span>
              <span className="font-mono text-[11px] text-slate-400">
                SSE Status: CONNECTED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
