import React, { useState } from 'react';
import { 
  XCircle, CheckCircle2, AlertTriangle, 
  Layers, MessageSquareOff, Eye,
  ArrowRight, ShieldCheck, Clock, Zap,
  Smartphone, Database, SplitSquareVertical
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { LaptopFrame } from '../ui/LaptopFrame';

export const ProblemSolution: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fragmented' | 'vyxel'>('vyxel');

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background ambient accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#01E7DB]/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:items-center">
          {/* Left Column: Problem Diagnosis & Outcome-Driven Narrative */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c2266e]/10 px-3.5 py-1.5 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c2266e]"></span>
              <span className="text-xs font-bold text-[#c2266e] tracking-wide">
                THE OPERATIONAL GAP
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.04]">
              When conversation context disappears, <span className="text-[#007FFB]">deals and support slip away.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Managing customer conversations across multiple disconnected physical phones and browser tabs blinds your team to which ad brought the customer in, triggers silent 24-hour message dropouts, and forces customers to re-explain their problem every time an agent switches.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl bg-white/80 border border-slate-200 p-4 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquareOff className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Siloed Physical Phones &amp; Scattered Tabs</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Agents juggle hardware devices. Handing off an inquiry means copy-pasting chat history manually with zero audit trails.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/80 border border-slate-200 p-4 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Silent 24h Session Dropouts</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Attempting free-text replies outside Meta's 24-hour window causes silent message failures without template guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/80 border border-slate-200 p-4 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Opaque Vendor Markups</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Resellers bundle wholesale Meta fees into confusing proprietary credit pools with hidden per-message markups.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#inbox"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#007FFB] hover:text-[#0066d6] transition-colors"
              >
                <span>See how Vyxel unifies the customer record</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Architecture Visual Hub */}
          <div className="rounded-[2.25rem] border border-slate-200/90 bg-[#f8fafc] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,127,251,0.08)]">
            {/* Interactive Toggle Pill */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase font-mono">
                OPERATING MODEL COMPARISON
              </span>
              <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setActiveTab('fragmented')}
                  className={cn(
                    "px-4 py-1.5 rounded-full transition-all",
                    activeTab === 'fragmented'
                      ? "bg-rose-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  Fragmented Model
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('vyxel')}
                  className={cn(
                    "px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5",
                    activeTab === 'vyxel'
                      ? "bg-[#007FFB] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#01E7DB]" />
                  Vyxel Connect
                </button>
              </div>
            </div>

            {/* Tab Viewport */}
            <div className="mt-6">
              {activeTab === 'fragmented' ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-5">
                    <div className="flex items-center justify-between text-rose-800 text-xs font-bold mb-2">
                      <span className="flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-rose-600" />
                        Multi-Device Fragmentation
                      </span>
                      <span className="text-[10px] bg-rose-200/80 text-rose-900 px-2 py-0.5 rounded-full font-mono">
                        High Latency
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Customer Sarah sends an Instagram DM asking about an ad, then messages WhatsApp 3 hours later. Two separate agents answer with contradictory pricing because conversations live in separate silos.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-rose-100 bg-white p-4">
                      <p className="text-[11px] font-bold text-rose-700">Lost Ad Attribution</p>
                      <p className="text-xs text-slate-500 mt-1">
                        Marketing doesn't know which WhatsApp conversation converted from which Meta Campaign ID.
                      </p>
                    </div>
                    <div className="rounded-xl border border-rose-100 bg-white p-4">
                      <p className="text-[11px] font-bold text-rose-700">Expired Window Errors</p>
                      <p className="text-xs text-slate-500 mt-1">
                        42% of customer follow-ups bounce silently when agents reply 24 hours later without approved templates.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 text-white font-mono text-xs flex items-center justify-between">
                    <span className="text-rose-400">Total Status: High Churn &amp; Blind Budget</span>
                    <span className="text-slate-400 text-[10px]">Manual Overhead</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  <div className="rounded-2xl border border-[#007FFB]/30 bg-blue-50/60 p-5">
                    <div className="flex items-center justify-between text-[#007FFB] text-xs font-bold mb-2">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#007FFB]" />
                        Unified Customer Record
                      </span>
                      <span className="text-[10px] bg-[#007FFB] text-white px-2 py-0.5 rounded-full font-mono">
                        Active Sync
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      Customer Sarah's Instagram DM, WhatsApp messages, and Meta ad click history merge into a single thread. Agent Priya sees her previous catalog inquiries, order state, and active 24h timer in one view.
                    </p>
                  </div>
                  
                  {/* Real Vyxel Channels Setup Visual */}
                  <LaptopFrame
                    framedImageSrc="/screenshots/channels-framed.png"
                    blobColor="blue"
                    blobPosition="top-right"
                    className="w-full"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <p className="text-[11px] font-bold text-[#007FFB]">First-Touch Ad Tracking</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Ad Click ID, campaign name, and creative headline stay pinned to the conversation forever.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <p className="text-[11px] font-bold text-[#007FFB]">Session Window Guard</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Countdown displays live seconds. Prompts 1-click approved template when window expires.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#09152b] text-white font-mono text-xs flex items-center justify-between shadow-sm border border-blue-900/60">
                    <span className="text-[#01E7DB]">Unified Throughput: 100% Retained Context</span>
                    <span className="text-slate-300 text-[10px]">Zero Message Loss</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Supports WhatsApp, Instagram DM &amp; Messenger</span>
              <span className="text-[#007FFB] font-bold font-mono">Official Meta Cloud API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
