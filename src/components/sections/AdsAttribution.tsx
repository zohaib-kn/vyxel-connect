import React from 'react';
import { 
  BarChart3, ShieldAlert, CheckCircle2, 
  ArrowRight, Layers, Eye
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { ScreenshotFrame } from '../ui/ScreenshotFrame';
import { Button } from '../ui/Button';

export const AdsAttribution: React.FC = () => {
  return (
    <section id="ads" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ACQUISITION &amp; ATTRIBUTION"
          title="Create Click-to-WhatsApp ads with full first-touch attribution."
          description="Structure campaigns directly from your dashboard and trace incoming leads back to the exact ad click ID. Every campaign is created paused for your manual review."
          align="center"
          badge={<Badge variant="warning">Created Paused for Review</Badge>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Frame */}
          <div className="lg:col-span-7">
            <ScreenshotFrame
              title="Vyxel Ad Creator &amp; Attribution Rollup"
              subtitle="Meta Ads Manager Sync · Attribution: First-Touch Active"
              variant="ads"
            />
          </div>

          {/* Copy and boundary guarantees */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Always Created Paused</h4>
                  <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                    Vyxel structures your campaign, ad sets, creatives, and greetings, but deploys them in a <strong>PAUSED</strong> state. Vyxel never auto-spends your budget. You activate in Meta Ads Manager after your final check.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 font-bold border border-brand-200">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">First-Touch Thread Attribution</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    When a buyer taps your ad, their incoming conversation automatically captures the ad source, campaign headline, source URL, and unique ad click ID.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 font-bold border border-emerald-200">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Attribution Rollup Dashboard</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Review which specific ad sets generate sustained customer dialogues, quote requests, and closed sales — not just hollow clicks.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                href="https://provider.digi-wire.com/signup"
                isExternal
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Launch attributed campaigns
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
