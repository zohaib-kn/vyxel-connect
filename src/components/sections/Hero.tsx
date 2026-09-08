import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ScreenshotFrame } from '../ui/ScreenshotFrame';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#f0f6ff]/80 via-[#f8fafc] to-[#f8fafc]">
      {/* Background ambient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] pointer-events-none overflow-hidden">
        <div className="absolute top-[-120px] left-1/4 w-[500px] h-[500px] rounded-full bg-brand-200/40 blur-3xl"></div>
        <div className="absolute top-[-80px] right-1/4 w-[450px] h-[450px] rounded-full bg-emerald-200/35 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-soft-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse"></span>
            <span className="text-xs font-bold text-slate-700 tracking-wide">
              Official Meta Business Solution Provider Architecture
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-slate-900 leading-[1.08]">
            The all-in-one <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-emerald-600">
              WhatsApp Business Platform
            </span>
          </h1>

          {/* Subheading strictly from PDF positioning */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            One shared inbox, AI chatbot, broadcasts, catalog &amp; payments, and a developer API — connected to your own WhatsApp, Instagram, and Messenger.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Button
              variant="whatsapp"
              size="lg"
              href="https://provider.digi-wire.com/signup"
              isExternal
              iconRight={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-[0_10px_25px_rgba(37,211,102,0.3)]"
            >
              Start free trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#channels"
              className="w-full sm:w-auto bg-white/90"
            >
              Connect your WhatsApp
            </Button>
          </div>

          {/* Friction-reducers */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Self-serve onboarding in 2 minutes
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-brand-600" />
              No Meta Tech Provider approval needed
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Transparent pass-through Meta pricing
            </span>
          </div>
        </div>

        {/* Hero Visual: Styled ScreenshotFrame with live workspace */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <ScreenshotFrame
            title="Vyxel Live Workspace"
            subtitle="Acme Retail Co. · Realtime SSE Active · WhatsApp Connected"
            variant="hero-dashboard"
          />
        </div>
      </div>
    </section>
  );
};
