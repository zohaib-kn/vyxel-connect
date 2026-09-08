import React from 'react';
import { 
  Bot, Sparkles, GitBranch, CalendarCheck, 
  ArrowRight, CheckCircle2, ArrowUpRight
} from 'lucide-react';
import { LaptopFrame } from '../ui/LaptopFrame';

export const AIChatbot: React.FC = () => {
  return (
    <section id="chatbot" className="py-20 sm:py-28 bg-[#090f1d] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#01E7DB]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#007FFB]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid: Left Title + Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#01E7DB]/10 border border-[#01E7DB]/30 px-3.5 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#01E7DB]"></span>
              <span className="text-xs font-bold text-[#01E7DB] tracking-wide font-mono">
                AUTOMATION &amp; INTELLIGENCE · WHATSAPP ONLY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-white leading-[1.05]">
              Multi-turn visual flow builder + <span className="bg-gradient-to-r from-[#007FFB] to-[#01E7DB] bg-clip-text text-transparent">grounded AI answers.</span>
            </h2>
          </div>

          <div>
            <p className="text-base text-slate-300 leading-relaxed">
              Move beyond single-keyword bots. Build branching conversation logic and ground AI in your actual business knowledge — with automatic human handoff when confidence dips.
            </p>
          </div>
        </div>

        {/* Visual Builder Canvas Showcase */}
        <div className="mb-14">
          <LaptopFrame
            framedImageSrc="/screenshots/chatbot-framed.png"
            blobColor="cyan"
            blobPosition="center"
            className="max-w-[1000px] mx-auto"
          />
        </div>

        {/* 4-Step Conversation Lifecycle Progression (DealDesk Layout Style) */}
        <div className="border-t border-slate-800/80 pt-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-8">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider font-mono">
              From First Inbound Trigger to Verified Handover
            </h3>
            <span className="text-xs text-slate-400">
              Zero hallucinated replies · Native confidence thresholds
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full border border-[#01E7DB]/50 bg-[#01E7DB]/10 flex items-center justify-center text-[#01E7DB] font-bold text-sm">
                    01
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">TRIGGER</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Capture</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Exact keywords, regex patterns, or catch-all triggers capture inbound customer queries from ads, links, or direct chats.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-[#01E7DB]">
                Exact / Regex / Contains
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full border border-purple-500/40 bg-purple-950/60 flex items-center justify-center text-purple-400 font-bold text-sm">
                    02
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">RAG AI</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Ground</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Vyxel AI queries your ingested business PDFs, catalog files, and URLs. Formulates factual replies via Anthropic or OpenAI.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-purple-300">
                Anthropic &amp; OpenAI Powered
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full border border-amber-500/40 bg-amber-950/60 flex items-center justify-center text-amber-400 font-bold text-sm">
                    03
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">EXECUTE</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Automate</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Present real-time calendar slots with atomic concurrency locks, dispatch catalog products, and send payment links in-thread.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-amber-400">
                Anti-Collision Bookings
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full border border-blue-500/40 bg-blue-950/60 flex items-center justify-center text-[#007FFB] font-bold text-sm">
                    04
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">HANDOFF</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Escalate</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  When bot confidence score drops below your threshold, the thread automatically routes to human agents with tag context attached.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-[#007FFB]">
                Tag-Based Auto Routing
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://provider.digi-wire.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#007FFB] to-[#01E7DB] px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-[0_10px_25px_rgba(1,231,219,0.3)] hover:opacity-95 transition-all"
          >
            <span>Start building WhatsApp flows</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="/features#chatbot"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors"
          >
            <span>Explore bot documentation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
