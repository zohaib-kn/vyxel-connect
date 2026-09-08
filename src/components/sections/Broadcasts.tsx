import React from 'react';
import { 
  Send, Clock, XCircle, BarChart3, 
  CheckCircle2, ArrowUpRight, ShieldCheck 
} from 'lucide-react';
import { ScreenshotFrame } from '../ui/ScreenshotFrame';
import { DeviceFrame } from '../ui/DeviceFrame';

export const Broadcasts: React.FC = () => {
  return (
    <section id="broadcasts" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Left Column: Visual Showcase Window (7 cols) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <DeviceFrame
              blobColor="blue"
              blobPosition="left"
              notch={true}
              className="max-w-[760px] mx-auto"
            >
              <ScreenshotFrame
                title="Vyxel Broadcasts Manager"
                subtitle="Festive VIP Launch · Delivery Hook Status: Live"
                variant="broadcast"
                className="rounded-none border-0"
              />
            </DeviceFrame>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 px-2 font-medium">
              <span className="flex items-center gap-1.5 text-[#007FFB]">
                <ShieldCheck className="w-3.5 h-3.5" />
                Meta Tier 3 Compliance (100k msgs/day)
              </span>
              <span className="font-mono text-[11px] text-slate-400">
                Cancel-before-send: ENABLED
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Operational Safeguards (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 px-3.5 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#01E7DB]"></span>
              <span className="text-xs font-bold text-[#007FFB] tracking-wide font-mono">
                OUTBOUND BROADCASTS · WHATSAPP ONLY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.05]">
              Reach targeted segments with <span className="text-[#007FFB]">verified delivery receipts.</span>
            </h2>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Schedule approved WhatsApp templates to tag-based segments with native queue throttling, cancel-before-send protection, and live read analytics without risking your phone number quality rating.
            </p>

            <div className="mt-8 space-y-3.5">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#007FFB] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Tag-Based Audience Segments</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Filter contacts by custom tags, opt-in status, or geographic criteria. Re-use existing inbox tags for 1-click outbound campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Native Queued Scheduling &amp; Throttling</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Set dispatch times in advance. Automatic rate pacing protects your phone number reputation and ensures high delivery rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Cancel-Before-Send Safeguard</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Spotted a typo in copy or need to postpone? Single-click cancellation halts scheduled campaigns instantly before queue execution begins.
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
                className="inline-flex items-center gap-2 rounded-full bg-[#007FFB] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_20px_rgba(0,127,251,0.25)] hover:bg-[#0066d6] transition-all"
              >
                <span>Schedule a broadcast</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-xs font-semibold text-slate-500">
                Verified delivery receipts
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
