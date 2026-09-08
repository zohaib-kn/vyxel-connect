import React from 'react';
import { 
  MessageSquare, Sparkles, CheckCheck, Clock, ShieldCheck, 
  Send, Bot, Users, Tag, ChevronDown, 
  Layers, ExternalLink, Lock, RotateCw, ChevronLeft, ChevronRight
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Badge } from './Badge';

export interface ScreenshotFrameProps {
  title?: string;
  subtitle?: string;
  variant?: 'hero-dashboard' | 'inbox' | 'chatbot-builder' | 'broadcast' | 'commerce' | 'ads' | 'developer' | 'custom';
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  children?: React.ReactNode;
  browserChrome?: boolean;
  url?: string;
  theme?: 'light' | 'dark';
}

export const ScreenshotFrame: React.FC<ScreenshotFrameProps> = ({
  title = "Vyxel Connect Workspace",
  subtitle = "Official WhatsApp Business Platform · SSE Realtime Active",
  variant = 'hero-dashboard',
  imageSrc,
  imageAlt = "Vyxel Connect Dashboard Preview",
  className,
  children,
  browserChrome = true,
  url = "https://provider.digi-wire.com/inbox",
  theme = 'dark',
}) => {
  const isLight = theme === 'light';

  return (
    <div className={cn(
      "relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300",
      isLight 
        ? "border border-slate-200/90 bg-white text-slate-800 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.12)]"
        : "border border-slate-700/70 bg-[#0B1120] text-slate-100 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4)]",
      className
    )}>
      {/* Top Browser Chrome Bar */}
      <div className={cn(
        "flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b transition-colors",
        isLight
          ? "bg-slate-50/95 border-slate-200"
          : "bg-[#070b14] border-slate-800/80"
      )}>
        {/* Left: Traffic Lights & Navigation controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400/90 inline-block"></span>
          </div>

          <div className="hidden sm:flex items-center gap-1 pl-1 text-slate-400">
            <ChevronLeft className="w-3.5 h-3.5 opacity-60" />
            <ChevronRight className="w-3.5 h-3.5 opacity-30" />
            <RotateCw className="w-3 h-3 opacity-60 ml-0.5" />
          </div>
        </div>

        {/* Center: Realistic Browser Address Bar */}
        {browserChrome ? (
          <div className="order-3 sm:order-2 w-full sm:w-auto flex-1 sm:max-w-md mx-auto">
            <div className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all shadow-inner",
              isLight
                ? "bg-white border-slate-200 text-slate-600"
                : "bg-[#03060c] border-slate-800/90 text-slate-300"
            )}>
              <Lock className="w-3 h-3 text-[#01E7DB] shrink-0" />
              <span className="truncate select-all">{url}</span>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs font-semibold font-display">{title}</span>
            <span className="text-[11px] text-slate-500">•</span>
            <span className="text-[11px] text-slate-400">{subtitle}</span>
          </div>
        )}

        {/* Right: Live Status Badge & Tenant */}
        <div className="order-2 sm:order-3 flex items-center gap-2 shrink-0">
          <div className={cn(
            "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold",
            isLight
              ? "bg-cyan-50 border border-cyan-200 text-[#007FFB]"
              : "bg-[#01E7DB]/10 border border-[#01E7DB]/20 text-[#01E7DB]"
          )}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#01E7DB] animate-pulse"></span>
            <span className="hidden sm:inline">SSE:</span> Live
          </div>
          <div className={cn(
            "hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px]",
            isLight
              ? "bg-slate-100 text-slate-600"
              : "bg-slate-800 text-slate-300"
          )}>
            <ShieldCheck className="w-3 h-3 text-[#007FFB]" />
            <span>Acme Corp</span>
          </div>
        </div>
      </div>

      {/* Frame Content */}
      <div className="relative min-h-[380px] bg-[#090e1a]">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        ) : children ? (
          children
        ) : variant === 'hero-dashboard' || variant === 'inbox' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] text-xs">
            {/* Conversations Sidebar */}
            <div className="hidden sm:block lg:col-span-4 border-r border-slate-800/80 bg-[#070c18] p-3">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Inbox</span>
                <span className="text-[10px] text-emerald-400 font-mono">3 Channels</span>
              </div>
              {/* Channel filter tabs */}
              <div className="flex gap-1 mb-3">
                <button className="px-2 py-1 rounded-md bg-slate-800 text-white font-semibold text-[10px]">All</button>
                <button className="px-2 py-1 rounded-md bg-slate-900 text-[#01E7DB] font-semibold text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-whatsapp"></span> WhatsApp
                </button>
                <button className="px-2 py-1 rounded-md bg-slate-900 text-pink-400 font-semibold text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-instagram"></span> Instagram
                </button>
                <button className="px-2 py-1 rounded-md bg-slate-900 text-blue-400 font-semibold text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-messenger"></span> Messenger
                </button>
              </div>

              {/* Items */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/80 cursor-pointer">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-whatsapp"></span>
                      <span className="font-bold text-slate-200">Sarah Jenkins</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Just now</span>
                  </div>
                  <p className="text-slate-300 text-[11px] truncate">Can I pay via UPI for the Olive Tote?</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#007FFB]/20 text-[#01E7DB] border border-[#007FFB]/30">WhatsApp</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-slate-700 text-slate-300">via Meta Ad</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/60 opacity-75">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-instagram"></span>
                      <span className="font-semibold text-slate-300">David Kumar</span>
                    </div>
                    <span className="text-[10px] text-slate-500">4m ago</span>
                  </div>
                  <p className="text-slate-400 text-[11px] truncate">Do you ship to Mumbai?</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30">Instagram DM</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/60 opacity-75">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-messenger"></span>
                      <span className="font-semibold text-slate-300">Elena Rostova</span>
                    </div>
                    <span className="text-[10px] text-slate-500">18m ago</span>
                  </div>
                  <p className="text-slate-400 text-[11px] truncate">Hello, checking order #8921</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">Messenger</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversation Thread */}
            <div className="col-span-1 sm:col-span-8 lg:col-span-8 flex flex-col justify-between p-4 bg-[#0a0f1d]">
              {/* Thread Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#007FFB]/20 border border-[#007FFB]/30 flex items-center justify-center font-bold text-[#007FFB]">
                    SJ
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-100 text-sm">Sarah Jenkins</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#01E7DB]/20 text-[#01E7DB] font-semibold">+91 98765 43210</span>
                    </div>
                    <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <span className="text-[#007FFB]">via ad:</span> "Summer Bag Collection 2026" • Click ID: fb.1.8492
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-1 rounded bg-slate-800 text-slate-300 font-medium">Assigned: Rahul</span>
                  <span className="text-[10px] px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/60 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#007FFB]" /> 24h Window: 18h left
                  </span>
                </div>
              </div>

              {/* Messages Area */}
              <div className="py-4 space-y-3">
                {/* Customer message */}
                <div className="flex justify-start">
                  <div className="max-w-md p-3 rounded-2xl rounded-tl-sm bg-slate-800/90 text-slate-200 border border-slate-700/80">
                    <p className="text-xs">Hi! I saw your ad for the artisan leather tote bag. Do you have it in olive green and can I pay via UPI?</p>
                    <span className="text-[9px] text-slate-400 mt-1 block text-right">10:42 AM</span>
                  </div>
                </div>

                {/* AI Suggest Reply Copilot Widget */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#09152b] to-[#0d1e3d] border border-[#007FFB]/40 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-[#01E7DB] font-bold text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#01E7DB] animate-pulse" />
                      <span>AI Suggest Reply (Tenant Knowledge Grounded)</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Confidence: High (94%)</span>
                  </div>
                  <p className="text-xs text-slate-200 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 font-sans">
                    "Hi Sarah! Yes, our Artisan Leather Tote is in stock in Olive Green for ₹1,499. Here is the catalog preview and instant Razorpay UPI payment button."
                  </p>
                  <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] text-slate-400">Drafted from tenant catalog & FAQ</span>
                    <div className="flex gap-2">
                      <button className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 text-[11px] font-medium transition">Edit</button>
                      <button className="px-3 py-1 rounded bg-[#007FFB] text-white hover:bg-[#006bd1] text-[11px] font-bold transition flex items-center gap-1 shadow-sm">
                        <span>Insert Draft</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product & Payment Link Preview */}
                <div className="flex justify-end">
                  <div className="max-w-xs p-3 rounded-2xl rounded-tr-sm bg-[#071326] border border-[#007FFB]/40 text-slate-200">
                    <div className="text-[10px] font-bold text-[#01E7DB] mb-1">WhatsApp Catalog Item</div>
                    <p className="text-xs font-semibold">Artisan Leather Tote — Olive Edition</p>
                    <p className="text-xs text-[#01E7DB] font-bold mt-1">₹1,499.00</p>
                    <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-[#007FFB]/20 text-blue-300 font-bold">Pay via Razorpay</span>
                      <CheckCheck className="w-3.5 h-3.5 text-[#01E7DB]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Input Box */}
              <div className="pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-xl p-2">
                  <input
                    type="text"
                    readOnly
                    value="Type message or select an approved template..."
                    className="flex-1 bg-transparent text-slate-400 text-xs focus:outline-none cursor-default"
                  />
                  <span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300 font-medium">Templates</span>
                  <div className="w-7 h-7 rounded-lg bg-whatsapp flex items-center justify-center text-slate-950 cursor-pointer">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : variant === 'chatbot-builder' ? (
          <div className="p-6 bg-[#080d19] min-h-[440px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#01E7DB]" />
                <span className="font-bold text-sm text-slate-100">Visual Multi-Turn Flow Canvas</span>
                <Badge variant="whatsapp" size="sm">WhatsApp Only</Badge>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Branching Conversations & AI Knowledge Grounding</span>
              </div>
            </div>

            {/* Visual Canvas Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center relative py-4">
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 shadow-md">
                <div className="text-[10px] uppercase font-bold text-brand-400 mb-1">Trigger Condition</div>
                <div className="font-semibold text-xs text-white">Exact / Regex Match</div>
                <p className="text-[11px] text-slate-400 mt-1.5 font-mono bg-slate-950 p-1.5 rounded">
                  /catalog|pricing|order/i
                </p>
                <div className="mt-3 text-[10px] text-[#01E7DB] font-semibold">Rule Type: WhatsApp Trigger</div>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-slate-900 border border-brand-600/70 shadow-glow-blue">
                <div className="text-[10px] uppercase font-bold text-brand-300 mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-brand-400" /> Vyxel AI Assistant
                </div>
                <div className="font-semibold text-xs text-white">LLM Knowledge Grounding</div>
                <p className="text-[11px] text-slate-300 mt-1.5">
                  Grounds prompt against ingested tenant documents, FAQs & product specs (Anthropic / OpenAI).
                </p>
                <div className="mt-3 text-[10px] text-blue-300 font-semibold">Checks confidence threshold &gt; 80%</div>
              </div>

              {/* Step 3 (Branching) */}
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#071326] border border-[#007FFB]/50">
                  <div className="text-[10px] uppercase font-bold text-[#01E7DB]">High Confidence (Outcome A)</div>
                  <div className="text-xs text-slate-200 mt-0.5">Send grounded response + Razorpay payment button</div>
                </div>
                <div className="p-3 rounded-xl bg-amber-950/50 border border-amber-600/60">
                  <div className="text-[10px] uppercase font-bold text-amber-400">Low Confidence (Outcome B)</div>
                  <div className="text-xs text-slate-200 mt-0.5">Auto-tag #support & hand off to human agent</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Appointment booking flow includes anti-collision concurrent slot locks</span>
              <span className="font-mono text-[#01E7DB] text-[11px]">Active in Production</span>
            </div>
          </div>
        ) : variant === 'broadcast' ? (
          <div className="p-6 bg-[#080d19] min-h-[400px]">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div>
                <h4 className="font-bold text-sm text-slate-100">Broadcast Campaign Dashboard</h4>
                <p className="text-xs text-slate-400">Schedule approved WhatsApp templates to tag-based segments</p>
              </div>
              <Badge variant="whatsapp">WhatsApp Only</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Target Segment</span>
                <p className="text-base font-bold text-white mt-1">VIP Customers</p>
                <span className="text-[10px] text-[#01E7DB]">1,200 contacts</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Delivered Rate</span>
                <p className="text-base font-bold text-white mt-1">98.4%</p>
                <span className="text-[10px] text-[#01E7DB]">Live receipt hook</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Read Rate</span>
                <p className="text-base font-bold text-white mt-1">76.2%</p>
                <span className="text-[10px] text-blue-400">Verified reads</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Billing Model</span>
                <p className="text-base font-bold text-white mt-1">Meta Cost + 15%</p>
                <span className="text-[10px] text-slate-400">Pass-through</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-slate-200">Campaign: Diwali VIP Early Access</span>
                <span className="text-[#01E7DB] font-mono text-[11px]">Scheduled & Ready</span>
              </div>
              <p className="text-xs text-slate-400">
                Native delayed delivery queued for 09:00 AM IST. Includes cancel-before-send protection.
              </p>
            </div>
          </div>
        ) : variant === 'ads' ? (
          <div className="p-6 bg-[#080d19] min-h-[400px]">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div>
                <h4 className="font-bold text-sm text-slate-100">Click-to-WhatsApp Campaign Creator</h4>
                <p className="text-xs text-slate-400">First-touch conversation attribution with safe review controls</p>
              </div>
              <Badge variant="warning">Created Paused for Review</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] font-bold text-brand-400 uppercase">Ad Creation Flow</span>
                <div className="space-y-2 mt-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2 p-2 rounded bg-slate-950 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center text-[10px] font-bold">1</span>
                    <span>Campaign Objective: WhatsApp Leads</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-slate-950 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center text-[10px] font-bold">2</span>
                    <span>Ad Set: Geographic & demographic targeting</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-slate-950 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center text-[10px] font-bold">3</span>
                    <span>Creative & Greeting Message: Sync with WABA</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/30">
                <span className="text-[11px] font-bold text-amber-400 uppercase">Safe Spend Guarantee</span>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Campaigns are pushed to Meta Ads Manager in a <strong>PAUSED</strong> state. Vyxel never auto-spends ad budget. You review creatives, budget caps, and payment methods in Meta before flipping the switch live.
                </p>
                <div className="mt-4 p-2.5 rounded bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300">
                  First-touch attribution metadata (Source, Headline, Click ID) tracks automatically in conversation threads.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center text-slate-400">
            <Layers className="w-10 h-10 mx-auto text-slate-600 mb-2" />
            <p className="text-sm font-semibold text-slate-300">{title}</p>
            <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
};
