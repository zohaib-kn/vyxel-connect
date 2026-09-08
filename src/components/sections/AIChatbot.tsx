import React from 'react';
import { 
  Bot, Sparkles, GitBranch, CalendarCheck, 
  ArrowRight, CheckCircle2, FileText, Lock
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { ScreenshotFrame } from '../ui/ScreenshotFrame';
import { Button } from '../ui/Button';

export const AIChatbot: React.FC = () => {
  return (
    <section id="chatbot" className="py-20 sm:py-28 bg-[#090f1d] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AUTOMATION &amp; INTELLIGENCE"
          title={<span className="text-white">Multi-turn visual flow builder + grounded AI answers.</span>}
          description={<span className="text-slate-300">Move beyond basic single-keyword bots. Build branching conversation paths and ground AI in your actual business knowledge — with automatic human handoff when confidence dips.</span>}
          align="center"
          badge={<Badge variant="whatsapp" className="border-emerald-500/40">WhatsApp Only</Badge>}
        />

        {/* Visual Builder ScreenshotFrame */}
        <div className="max-w-5xl mx-auto mb-16">
          <ScreenshotFrame
            title="Vyxel Flow Canvas"
            subtitle="Rule Triggers → Ingested Knowledge → Agent Handoff"
            variant="chatbot-builder"
          />
        </div>

        {/* 4 Outcome-Driven Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-4">
              <GitBranch className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Multi-Turn Visual Canvas</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Drag-and-drop branching conversations that handle complex decision trees rather than single-turn keyword auto-replies.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
              Exact / Contains / Regex / Catch-all
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">LLM Knowledge Grounding</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Vyxel AI ingests your FAQs, product catalogs, and URLs with Anthropic or OpenAI grounding. Answers only from real business facts.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-purple-300 font-mono">
              Anthropic &amp; OpenAI Powered
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Anti-Collision Bookings</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Present live available slots in WhatsApp list messages. Concurrency locks prevent double-booking when multiple customers reply simultaneously.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-mono">
              Atomic Slot Exclusivity
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Bot className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Confidence Handoff</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              When bot confidence drops below your configured threshold, conversations automatically route to human agents with context tags attached.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-400 font-mono">
              Tag-Based Auto-Routing
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="whatsapp"
            size="lg"
            href="https://provider.digi-wire.com/signup"
            isExternal
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Start building WhatsApp flows
          </Button>
        </div>
      </div>
    </section>
  );
};
