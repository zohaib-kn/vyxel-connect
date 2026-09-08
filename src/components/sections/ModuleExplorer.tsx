import React, { useState } from 'react';
import { 
  Inbox, Bot, Send, ShoppingBag, BarChart3, 
  ChevronRight, CheckCircle2, ArrowRight, ArrowUpRight,
  ShieldCheck, Zap, Sparkles
} from 'lucide-react';
import { ScreenshotFrame } from '../ui/ScreenshotFrame';
import { LaptopFrame } from '../ui/LaptopFrame';
import { cn } from '../../lib/utils';

interface ModuleItem {
  id: string;
  name: string;
  tagline: string;
  url: string;
  variant: 'inbox' | 'chatbot-builder' | 'broadcast' | 'commerce' | 'ads';
  icon: React.ReactNode;
  capabilities: string[];
  ctaText: string;
  ctaLink: string;
}

export const ModuleExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const modules: ModuleItem[] = [
    {
      id: 'inbox',
      name: 'Unified Multi-Channel Inbox',
      tagline: 'Synchronize WhatsApp, Instagram & Messenger',
      url: 'https://provider.digi-wire.com/inbox',
      variant: 'inbox',
      icon: <Inbox className="w-4 h-4" />,
      capabilities: [
        'Real-time SSE message streaming with 30s polling fallback',
        'Automatic 24-hour session window countdown and template switch',
        'AI suggestion reply copilot grounded in conversation context',
      ],
      ctaText: 'Experience the shared inbox',
      ctaLink: 'https://provider.digi-wire.com/signup',
    },
    {
      id: 'flows',
      name: 'Multi-Turn AI Flow Canvas',
      tagline: 'Visual decision nodes & RAG grounding',
      url: 'https://provider.digi-wire.com/flows',
      variant: 'chatbot-builder',
      icon: <Bot className="w-4 h-4" />,
      capabilities: [
        'Drag-and-drop branching conversation paths & catch-all triggers',
        'Anthropic & OpenAI RAG knowledge grounding from PDFs and URLs',
        'Atomic concurrency locks for anti-collision appointment booking',
      ],
      ctaText: 'Build visual WhatsApp flows',
      ctaLink: 'https://provider.digi-wire.com/signup',
    },
    {
      id: 'broadcasts',
      name: 'Targeted Broadcast Manager',
      tagline: 'Scheduled notifications with verified receipts',
      url: 'https://provider.digi-wire.com/broadcasts',
      variant: 'broadcast',
      icon: <Send className="w-4 h-4" />,
      capabilities: [
        'Tag-based audience segmentation from existing inbox tags',
        'Automated rate throttling protecting phone number tier reputation',
        'One-click cancel-before-send safeguard halting queued dispatches',
      ],
      ctaText: 'Schedule a verified broadcast',
      ctaLink: 'https://provider.digi-wire.com/signup',
    },
    {
      id: 'commerce',
      name: 'In-Chat Catalog Commerce',
      tagline: 'Meta catalogs & Razorpay payments in-thread',
      url: 'https://provider.digi-wire.com/commerce',
      variant: 'commerce',
      icon: <ShoppingBag className="w-4 h-4" />,
      capabilities: [
        'Interactive multi-product catalog cards synced to Meta Commerce',
        'Immediate Shopify & WooCommerce webhook order and cart triggers',
        'Secure Razorpay payment button links with in-thread confirmation',
      ],
      ctaText: 'Connect your product catalog',
      ctaLink: 'https://provider.digi-wire.com/signup',
    },
    {
      id: 'ads',
      name: 'Click-to-WhatsApp Ads',
      tagline: 'First-touch attribution & review safety',
      url: 'https://provider.digi-wire.com/ads',
      variant: 'ads',
      icon: <BarChart3 className="w-4 h-4" />,
      capabilities: [
        'Always created paused guarantee preventing accidental budget spend',
        'Ad click ID, creative headline, and campaign UTM attached to thread',
        'Full-funnel conversation ROAS tracking through to payment receipt',
      ],
      ctaText: 'Launch attributed ad campaigns',
      ctaLink: 'https://provider.digi-wire.com/signup',
    },
  ];

  const currentModule = modules[activeTab];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 px-3.5 py-1 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#01E7DB]"></span>
            <span className="text-xs font-bold text-[#007FFB] tracking-wide font-mono">
              INTERACTIVE MODULE WALKTHROUGH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.05]">
            One platform. <span className="text-[#007FFB]">Your entire customer communication stack.</span>
          </h2>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Explore how each specialized module works together seamlessly in the browser to turn scattered social inquiries into tracked, loyal commercial relationships.
          </p>
        </div>

        {/* Sidebar Tab + Browser Preview Grid (StudyAbroad CRM Pattern) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Vertical Module Tabs (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-2.5">
            {modules.map((mod, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group",
                    isActive
                      ? "bg-[#09152b] border-[#007FFB]/60 text-white shadow-md shadow-[#007FFB]/20 -translate-y-0.5"
                      : "bg-[#f8fafc] border-slate-200/80 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold transition-colors",
                      isActive
                        ? "bg-gradient-to-br from-[#007FFB] to-[#01E7DB] text-slate-950 shadow-sm"
                        : "bg-white text-[#007FFB] border border-slate-200 shadow-sm"
                    )}>
                      {mod.icon}
                    </div>
                    <div>
                      <h4 className={cn("text-sm font-bold", isActive ? "text-white" : "text-slate-900")}>
                        {mod.name}
                      </h4>
                      <p className={cn("text-[11px] truncate max-w-[210px]", isActive ? "text-[#01E7DB]" : "text-slate-500")}>
                        {mod.tagline}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={cn(
                    "w-4 h-4 shrink-0 transition-transform",
                    isActive ? "text-[#01E7DB] translate-x-0.5" : "text-slate-400 group-hover:translate-x-0.5"
                  )} />
                </button>
              );
            })}
          </div>

          {/* Right: Large Mock Browser Chrome Window (8 cols on lg) */}
          <div className="lg:col-span-8">
            {activeTab === 0 ? (
              <LaptopFrame
                framedImageSrc="/screenshots/inbox-framed.png"
                blobColor="cyan"
                blobPosition="top-right"
              />
            ) : (
              <LaptopFrame
                blobColor={activeTab === 1 ? "purple" : activeTab === 2 ? "blue" : activeTab === 3 ? "gradient" : "yellow"}
                blobPosition="top-right"
              >
                <div className="w-full h-full overflow-hidden">
                  <ScreenshotFrame
                    title={currentModule.name}
                    subtitle={currentModule.tagline}
                    variant={currentModule.variant}
                    browserChrome={true}
                    url={currentModule.url}
                    theme="dark"
                    className="rounded-none border-0 h-full"
                  />
                </div>
              </LaptopFrame>
            )}

            {/* Bottom Capability Highlights Row (StudyAbroad CRM Pattern) */}
            <div className="mt-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1 text-xs text-slate-700">
                {currentModule.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0 mt-0.5" />
                    <span className="leading-snug text-slate-600">{cap}</span>
                  </div>
                ))}
              </div>

              <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 md:pl-4">
                <a
                  href={currentModule.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007FFB] hover:text-[#0066d6] transition-colors"
                >
                  <span>{currentModule.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
