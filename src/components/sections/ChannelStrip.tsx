import React from 'react';
import { 
  Check, ShieldCheck, Zap, MessageSquare, 
  Radio, CheckCheck, Clock, Sparkles, ArrowRight,
  Activity, ShoppingBag, CreditCard
} from 'lucide-react';
import { Badge } from '../ui/Badge';

export const ChannelStrip: React.FC = () => {
  return (
    <section id="channels" className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left Heading and Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 px-3 py-1 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#01E7DB]"></span>
              <span className="text-xs font-bold text-[#007FFB] tracking-wide">
                OFFICIAL META CHANNELS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.05]">
              Six connected capabilities.<br />
              <span className="text-[#007FFB]">One commercial record.</span>
            </h2>
          </div>

          <div>
            <p className="text-base text-slate-600 leading-relaxed">
              Every message, catalog inquiry, order confirmation, and payment receipt across WhatsApp, Instagram, and Messenger is tied to a single persistent customer identity.
            </p>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Card 1 (Span 7): WhatsApp Official Cloud API Primary Anchor */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden hover:border-[#007FFB]/40 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#01E7DB]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#007FFB] flex items-center justify-center text-white shadow-sm font-bold">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">WhatsApp Business Platform</h3>
                    <p className="text-xs font-semibold text-[#007FFB]">Official Cloud API · Meta BSP Architecture</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#01E7DB]/10 px-3 py-1 text-xs font-bold text-[#007FFB] border border-[#01E7DB]/30">
                  <ShieldCheck className="w-3.5 h-3.5" /> Full Commerce &amp; AI
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Direct infrastructure access with zero middleman proxies. Scale broadcasts, multi-turn AI bots, catalog commerce, and in-chat Razorpay links on your own verified business numbers.
              </p>

              {/* Interactive micro-pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2.5 rounded-xl bg-slate-50 border border-slate-200/80 p-3 text-xs font-semibold text-slate-700">
                  <Clock className="w-4 h-4 text-[#007FFB] shrink-0" />
                  <span>24h Session Window Guard</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-slate-50 border border-slate-200/80 p-3 text-xs font-semibold text-slate-700">
                  <Zap className="w-4 h-4 text-[#007FFB] shrink-0" />
                  <span>Visual Multi-turn Flow Builder</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-slate-50 border border-slate-200/80 p-3 text-xs font-semibold text-slate-700">
                  <ShoppingBag className="w-4 h-4 text-[#007FFB] shrink-0" />
                  <span>Meta Catalog &amp; Payment Links</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-slate-50 border border-slate-200/80 p-3 text-xs font-semibold text-slate-700">
                  <CheckCheck className="w-4 h-4 text-[#007FFB] shrink-0" />
                  <span>Segmented Verified Broadcasts</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              <span>Onboard via Meta Embedded Signup in 2 minutes</span>
              <span className="text-[#007FFB] font-bold">Cloud API v21.0</span>
            </div>
          </div>

          {/* Card 2 (Span 5): Live Event Stream & Webhook Monitor (High Contrast Slate Card) */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-800 bg-[#09111e] p-7 sm:p-8 text-white shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#01E7DB] animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-300 font-mono tracking-wider">LIVE EVENT STREAM</span>
                </div>
                <span className="text-[11px] font-mono text-[#01E7DB] bg-[#01E7DB]/10 px-2.5 py-0.5 rounded border border-[#01E7DB]/30">
                  SSE 24ms
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">Realtime Webhook Ingestion</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-5">
                Every customer message, delivery report, and webhook payload streams instantaneously with zero polling lag.
              </p>

              {/* Event Stream Terminal Mockup */}
              <div className="space-y-2 font-mono text-[11px] bg-[#050a12] p-3.5 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800/80">
                  <span className="text-[#01E7DB]">● message.received</span>
                  <span className="text-slate-500">WA: +91 98210...</span>
                </div>
                <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800/80">
                  <span className="text-amber-400">● ai.grounded_draft</span>
                  <span className="text-slate-500">420ms (Conf 0.94)</span>
                </div>
                <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800/80">
                  <span className="text-[#007FFB]">● payment.link_created</span>
                  <span className="text-slate-500">Razorpay #pl_9812</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[#01E7DB]">● message.delivered</span>
                  <span className="text-slate-500">Read receipt: 2s</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-[11px] text-slate-400 font-mono pt-3 border-t border-slate-800">
              <span>Tenant isolation: Enforced</span>
              <span className="text-slate-300">HMAC-SHA256 Signed</span>
            </div>
          </div>

          {/* Card 3 (Span 4): Instagram DM Graph API */}
          <div className="lg:col-span-4 rounded-3xl border border-pink-200/80 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 flex items-center justify-center text-white shadow-sm font-bold text-xs">
                    IG
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Instagram DM</h4>
                    <span className="text-[10px] font-semibold text-pink-700">Official Graph API</span>
                  </div>
                </div>
                <Badge variant="instagram" size="sm">Inbox &amp; Plain Text</Badge>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Consolidate direct messages, story replies, and customer inquiries from Instagram into the exact same team queue.
              </p>

              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                  <span>Shared team inbox &amp; agent tagging</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                  <span>Two-way plain text messaging</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <span className="w-3.5 text-center font-bold text-xs">—</span>
                  <span className="italic">Catalog &amp; flow builder are WA-only</span>
                </li>
              </ul>
            </div>

            <p className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
              Verified Meta Graph API Integration
            </p>
          </div>

          {/* Card 4 (Span 4): Vibrant Gold Accent Card (24h Watchdog & Wholesale Transparency) */}
          <div className="lg:col-span-4 rounded-3xl border border-[#e6af17] bg-[#ffc21a] p-6 shadow-md flex flex-col justify-between text-[#14233a]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#694f00] font-mono">
                  SESSION INTEGRITY
                </span>
                <Clock className="w-4 h-4 text-[#574100]" />
              </div>

              <div className="text-3xl font-extrabold tracking-tight text-[#0f2119]">
                24h Window Watchdog
              </div>

              <p className="mt-2 text-xs text-[#574100] leading-relaxed font-medium">
                Never trigger Meta delivery failure. Vyxel tracks the exact second customer sessions expire and automatically switches to pre-approved templates.
              </p>

              <div className="mt-4 rounded-xl bg-white/80 p-3 text-xs font-bold text-[#0f2119] flex items-center justify-between shadow-inner">
                <span>Pass-through Meta Rates:</span>
                <span className="text-[#007FFB] font-extrabold">0% markup on Meta fee</span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#e0aa14] text-[11px] font-bold text-[#574100] flex items-center justify-between">
              <span>Automatic Template Fallback</span>
              <span className="underline">Zero Silent Drops</span>
            </div>
          </div>

          {/* Card 5 (Span 4): Messenger Graph API */}
          <div className="lg:col-span-4 rounded-3xl border border-blue-200/80 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#0084FF] flex items-center justify-center text-white shadow-sm font-bold text-xs">
                    FB
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Messenger</h4>
                    <span className="text-[10px] font-semibold text-blue-700">Official Graph API</span>
                  </div>
                </div>
                <Badge variant="messenger" size="sm">Inbox &amp; Plain Text</Badge>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Bring Facebook Page inquiries into your unified inbox. Assign conversations to agents with full history retention.
              </p>

              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Instant Facebook Page ID linking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Two-way plain text messaging</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <span className="w-3.5 text-center font-bold text-xs">—</span>
                  <span className="italic">Catalog &amp; flow builder are WA-only</span>
                </li>
              </ul>
            </div>

            <p className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
              Single-Click Meta Page Connect
            </p>
          </div>

          {/* Card 6 (Span 12): Full-Width Commercial Pipeline Milestone Bar */}
          <div className="lg:col-span-12 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-[#007FFB]" />
                <span className="text-xs font-bold text-slate-900">
                  End-to-End WhatsApp Commercial Pipeline
                </span>
              </div>
              <span className="text-xs font-medium text-slate-500">
                All 5 stages execute seamlessly within a single WhatsApp conversation thread
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[10px] font-bold font-mono text-[#007FFB] block mb-1">01. INBOUND</span>
                <p className="text-xs font-bold text-slate-900">Click-to-WA Ad or DM</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Captures first-touch ad click ID</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[10px] font-bold font-mono text-purple-600 block mb-1">02. QUALIFY</span>
                <p className="text-xs font-bold text-slate-900">AI Grounded Reply</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Answers product FAQs in 4s</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[10px] font-bold font-mono text-amber-600 block mb-1">03. PRESENT</span>
                <p className="text-xs font-bold text-slate-900">Meta Catalog Sync</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Multi-item interactive card</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[10px] font-bold font-mono text-blue-600 block mb-1">04. COLLECT</span>
                <p className="text-xs font-bold text-slate-900">Razorpay In-Chat Link</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Instant UPI / card payment</p>
              </div>
              <div className="p-3 rounded-xl bg-[#01E7DB]/10 border border-[#01E7DB]/30">
                <span className="text-[10px] font-bold font-mono text-[#007FFB] block mb-1">05. CONFIRM</span>
                <p className="text-xs font-bold text-slate-900">Verified Read Receipt</p>
                <p className="text-[11px] text-[#007FFB] mt-0.5">Automated tracking dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
