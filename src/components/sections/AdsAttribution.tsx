import React from 'react';
import { 
  BarChart3, ShieldAlert, CheckCircle2, 
  ArrowRight, Layers, Eye, ArrowUpRight
} from 'lucide-react';
import { ScreenshotFrame } from '../ui/ScreenshotFrame';
import { LaptopFrame } from '../ui/LaptopFrame';

export const AdsAttribution: React.FC = () => {
  return (
    <section id="ads" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Left Column: Narrative & Safety Guarantee */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
              <span className="text-xs font-bold text-amber-800 tracking-wide font-mono">
                ACQUISITION &amp; ATTRIBUTION · META ADS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.05]">
              Create Click-to-WhatsApp ads with <span className="text-[#007FFB]">first-touch attribution.</span>
            </h2>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Structure campaigns directly inside Vyxel and trace incoming conversations back to the exact Meta ad click ID. Every campaign is deployed paused for your review.
            </p>

            {/* Safety Guarantee Anchor Card */}
            <div className="mt-8 p-5 rounded-2xl bg-[#fff9ea] border border-[#ffdf85] shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#ffc21a] text-[#14233a] flex items-center justify-center shrink-0 font-bold">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#14233a]">Always Created Paused Guarantee</h3>
                  <p className="mt-1 text-xs text-[#694f00] leading-relaxed">
                    Vyxel structures your campaign, ad sets, creatives, and greetings, but deploys them strictly in a <strong>PAUSED</strong> state. We never auto-spend your budget. You activate in Meta Ads Manager after your final check.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-[#007FFB] flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">First-Touch Thread Attribution</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      When a buyer taps your ad, incoming threads automatically lock to the source campaign, ad creative, and unique click ID.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-[#007FFB] flex items-center justify-center shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Full-Funnel Conversation ROAS</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Evaluate which specific ad creatives generate sustained conversations, quote requests, and completed in-chat payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://provider.digi-wire.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#007FFB] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_20px_rgba(0,127,251,0.25)] hover:bg-[#006bd1] transition-all"
              >
                <span>Launch attributed ads</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-xs font-semibold text-slate-500">
                Zero budget auto-spend
              </span>
            </div>
          </div>

          {/* Right Column: Visual Ad Creator Window */}
          <div className="lg:col-span-7">
            <LaptopFrame
              blobColor="yellow"
              blobPosition="top-right"
              className="max-w-[760px] mx-auto"
            >
              <div className="w-full h-full overflow-hidden">
                <ScreenshotFrame
                  title="Vyxel Ad Creator &amp; Attribution Rollup"
                  subtitle="Meta Ads Manager Sync · Attribution: First-Touch Active"
                  variant="ads"
                  className="rounded-none border-0 h-full"
                />
              </div>
            </LaptopFrame>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-2 font-medium">
              <span>Meta Graph Marketing API v21.0</span>
              <span className="font-mono text-[11px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Campaign State: PAUSED FOR REVIEW
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
