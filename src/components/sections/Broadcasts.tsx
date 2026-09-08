import React from 'react';
import { Send, Clock, XCircle, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { ScreenshotFrame } from '../ui/ScreenshotFrame';
import { Button } from '../ui/Button';

export const Broadcasts: React.FC = () => {
  return (
    <section id="broadcasts" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUTBOUND NOTIFICATIONS"
          title="Reach targeted customer segments with verified delivery receipts."
          description="Schedule approved WhatsApp templates to tag-based segments with native queue management, cancel-before-send protection, and live read analytics."
          align="center"
          badge={<Badge variant="whatsapp">WhatsApp Only</Badge>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <ScreenshotFrame
              title="Vyxel Broadcasts Manager"
              subtitle="Festive VIP Launch · Delivery Hook Status: Live"
              variant="broadcast"
            />
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 font-bold">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Tag-Based Audience Segments</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Target contacts filtered by custom tags, opt-in status, or geographic criteria. Re-use existing inbox tags for one-click outbound campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-200 font-bold">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Native Delayed Scheduling</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Set campaign dispatch dates and times in advance with native queuing. Built into the platform core — no external cron jobs or background scripts required.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 border border-rose-200 font-bold">
                  <XCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Cancel-Before-Send Protection</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Made a typo in the segment or need to postpone? One-click cancellation halts scheduled campaigns instantly before queue execution begins.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-200 font-bold">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Live Delivery &amp; Read Receipts</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Track real-time sent/failed counts at dispatch time, and watch delivered and read percentages update continuously as Meta webhooks arrive.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="whatsapp"
                href="https://provider.digi-wire.com/signup"
                isExternal
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Schedule your first broadcast
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
