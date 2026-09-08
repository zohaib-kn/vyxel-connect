import React, { useState } from 'react';
import { 
  XCircle, CheckCircle2, AlertTriangle, 
  Layers, RefreshCw, MessageSquareOff, Eye,
  ArrowRight, ShieldCheck, Clock
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { cn } from '../../lib/utils';

export const ProblemSolution: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fragmented' | 'vyxel'>('vyxel');

  return (
    <section className="py-20 sm:py-28 bg-[#f3f7fb] border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 pattern-grid opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="THE OPERATIONAL GAP"
          title="When conversation context disappears, deals and support slip away."
          description="Managing customer conversations across multiple disjointed phone devices and web tabs slows your team down and hides the ad source that brought the customer in."
          align="center"
        />

        {/* Interactive Comparison Switcher */}
        <div className="max-w-md mx-auto mb-10 p-1 rounded-full bg-slate-200/80 border border-slate-300 flex items-center shadow-inner">
          <button
            type="button"
            onClick={() => setActiveTab('fragmented')}
            className={cn(
              "flex-1 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all text-center",
              activeTab === 'fragmented'
                ? "bg-white text-rose-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            Fragmented Chaos
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('vyxel')}
            className={cn(
              "flex-1 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all text-center flex items-center justify-center gap-1.5",
              activeTab === 'vyxel'
                ? "bg-brand-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            With Vyxel Connect
          </button>
        </div>

        {/* Display comparison panels */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'fragmented' ? (
            <div className="rounded-3xl border border-rose-200 bg-white/95 p-6 sm:p-10 shadow-soft-lg animate-fadeIn">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-100">
                <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Siloed Channels &amp; Lost Attribution</h3>
                  <p className="text-xs text-rose-700 font-medium">Without an integrated Meta Business Solution Provider</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-sm mb-2">
                    <MessageSquareOff className="w-4 h-4" />
                    <span>Disconnected Inboxes</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents juggle physical phones and native app tabs. Handing off a conversation means manually copy-pasting customer history or re-asking the user for details.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-sm mb-2">
                    <Clock className="w-4 h-4" />
                    <span>Expired 24h Session Blindness</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents attempt to send free-text messages after the 24-hour window has lapsed, causing silent delivery errors and frustration without template guidance.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-sm mb-2">
                    <XCircle className="w-4 h-4" />
                    <span>Opaque Vendor Markups</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Third-party resellers bundle wholesale Meta costs into convoluted credits or hidden per-message markups with zero visibility into real conversation fees.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-brand-200 bg-white/95 p-6 sm:p-10 shadow-soft-lg animate-fadeIn">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-100">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Synchronized Workspace &amp; Traceable Attribution</h3>
                  <p className="text-xs text-brand-700 font-medium">Powered by Vyxel Connect multi-tenant infrastructure</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-2">
                    <Layers className="w-4 h-4 text-emerald-700" />
                    <span>Unified Stream (SSE + Polling)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All WhatsApp, Instagram, and Messenger conversations land in one real-time SSE stream. Graceful 30s polling fallback guarantees zero lost messages.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-2">
                    <Clock className="w-4 h-4 text-emerald-700" />
                    <span>24h Window Auto-Guard</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Live session timer clearly displays remaining time. Automatically prompts for approved templates when free-text is prohibited by Meta policy.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-2">
                    <Eye className="w-4 h-4 text-emerald-700" />
                    <span>Transparent Pass-Through</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You see exactly what Meta charges for each conversation category, with a single published, transparent markup. No mysterious token buckets.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
