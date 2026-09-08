import React from 'react';
import { Check, Info } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const ChannelStrip: React.FC = () => {
  return (
    <section id="channels" className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="eyebrow text-slate-500 font-mono">OFFICIAL META CHANNELS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Connect your customer conversations in one place
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
            <Info className="w-3.5 h-3.5 text-brand-600 shrink-0" />
            <span>Honest channel capabilities: WhatsApp supports full commerce &amp; AI; IG &amp; Messenger support shared inbox.</span>
          </div>
        </div>

        {/* Channel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
          {/* WhatsApp Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/40 border border-emerald-200/80 relative overflow-hidden transition-all hover:shadow-soft-md">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-whatsapp flex items-center justify-center text-slate-950 shadow-sm font-bold">
                  WA
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">WhatsApp</h4>
                  <span className="text-[11px] font-semibold text-emerald-700">Official Cloud API</span>
                </div>
              </div>
              <Badge variant="whatsapp" size="sm">Full Capabilities</Badge>
            </div>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Complete Business Solution Provider feature set for high-scale messaging and automated commerce.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Shared team inbox &amp; 24h session timer</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Visual AI &amp; multi-turn flow builder</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>WhatsApp Catalog sync &amp; Razorpay payment links</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Segmented broadcasts &amp; verified read receipts</span>
              </li>
            </ul>
          </div>

          {/* Instagram Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-pink-50/40 border border-pink-200/80 relative overflow-hidden transition-all hover:shadow-soft-md">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 flex items-center justify-center text-white shadow-sm font-bold text-xs">
                  IG
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Instagram DM</h4>
                  <span className="text-[11px] font-semibold text-pink-700">Official Graph API</span>
                </div>
              </div>
              <Badge variant="instagram" size="sm">Inbox &amp; Plain Text</Badge>
            </div>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Consolidate customer inquiries from Instagram into the same shared team inbox.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                <span>Shared team inbox integration</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                <span>Two-way plain text messaging</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                <span>Manual conversation tagging &amp; agent assignment</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <span className="w-3.5 text-center font-bold text-xs">—</span>
                <span className="italic">Chatbot flows &amp; catalog are WhatsApp-only</span>
              </li>
            </ul>
          </div>

          {/* Messenger Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 relative overflow-hidden transition-all hover:shadow-soft-md">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-messenger flex items-center justify-center text-white shadow-sm font-bold text-xs">
                  FB
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Messenger</h4>
                  <span className="text-[11px] font-semibold text-blue-700">Official Graph API</span>
                </div>
              </div>
              <Badge variant="messenger" size="sm">Inbox &amp; Plain Text</Badge>
            </div>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Bring Facebook Messenger conversations into your unified customer workflow.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Shared team inbox integration</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Two-way plain text messaging</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Fast Facebook Page ID connection</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <span className="w-3.5 text-center font-bold text-xs">—</span>
                <span className="italic">Chatbot flows &amp; catalog are WhatsApp-only</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
