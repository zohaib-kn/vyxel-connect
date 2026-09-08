import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#070b14] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 mb-6 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Ready for Instant Setup
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight max-w-3xl mx-auto">
          Start talking to your customers on official WhatsApp channels today.
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
          No waiting for sales approval. Onboard with Meta Embedded Signup in 2 minutes, configure your inbox, and pay only for what you use.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="whatsapp"
            size="lg"
            href="https://provider.digi-wire.com/signup"
            isExternal
            iconRight={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Start free trial
          </Button>
          <Button
            variant="dark"
            size="lg"
            href="#channels"
            className="w-full sm:w-auto"
          >
            Connect your WhatsApp
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Meta Verified BSP Architecture
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-brand-400" />
            Zero Setup Fees
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Full Meta Rate Transparency
          </span>
        </div>
      </div>
    </section>
  );
};
