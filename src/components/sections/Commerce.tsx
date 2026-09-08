import React from 'react';
import { 
  ShoppingBag, CreditCard, RefreshCw, 
  ArrowRight, CheckCircle2, ShieldCheck, Zap
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const Commerce: React.FC = () => {
  return (
    <section id="commerce" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CONVERSATIONS INTO TRANSACTIONS"
          title="Sell products and collect payments inside WhatsApp."
          description="Sync your Meta Commerce catalog, trigger instant e-commerce order notifications from Shopify and WooCommerce, and collect payments with in-chat Razorpay links."
          align="center"
          badge={<Badge variant="whatsapp">WhatsApp Only</Badge>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Commerce Feature Grid */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 font-bold">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">WhatsApp Catalog Integration</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Sync your product list directly to Meta Commerce Manager. Agents and automated flows can dispatch interactive product cards and multi-item lists inside any WhatsApp conversation.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-200 font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Instant Shopify &amp; WooCommerce Triggers</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Cart and order webhooks trigger immediate WhatsApp notifications (e.g. checkout recovery alerts, instant order confirmations, and shipment tracking links).
                  </p>
                  <span className="inline-block mt-2 text-[10px] text-slate-400 italic">
                    *Notifications dispatch immediately upon webhook reception.
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200 font-bold">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">In-Chat Razorpay Payments</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Generate secure Razorpay payment link button messages. As soon as the customer completes payment, the thread updates automatically to verified paid status.
                  </p>
                  <span className="inline-block mt-2 text-[10px] text-slate-400 italic">
                    *In-chat payments process securely via platform gateway infrastructure.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Realistic WhatsApp In-Chat Commerce Mockup */}
          <div className="lg:col-span-6">
            <div className="max-w-md mx-auto rounded-3xl border border-slate-700 bg-[#0B1120] p-4 sm:p-5 shadow-2xl text-slate-100">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-whatsapp text-slate-950 flex items-center justify-center font-bold text-xs">
                    WA
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Official WhatsApp Chat</span>
                    <span className="text-[10px] text-emerald-400">Meta Verified Business</span>
                  </div>
                </div>
                <Badge variant="whatsapp" size="sm">Live Session</Badge>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 py-2 text-xs">
                {/* Agent message with catalog card */}
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="h-32 w-full rounded-xl bg-gradient-to-tr from-slate-800 to-slate-700 flex flex-col items-center justify-center text-slate-300 relative overflow-hidden">
                    <ShoppingBag className="w-8 h-8 text-brand-400 mb-1" />
                    <span className="text-xs font-semibold">Artisan Leather Tote Bag</span>
                    <span className="text-[10px] text-slate-400">Color: Olive Green • In Stock</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-bold text-white text-sm">₹1,499.00</span>
                    <span className="text-[10px] text-slate-400 font-mono">SKU: TOT-OLV-01</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Handcrafted genuine full-grain leather tote with reinforced handles.
                  </p>
                </div>

                {/* Razorpay Button */}
                <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-700/50">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-emerald-300 flex items-center gap-1">
                      <CreditCard className="w-3.5 h-3.5" /> Razorpay Payment Link
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-900/60 px-2 py-0.5 rounded">UPI / Cards / NetBanking</span>
                  </div>
                  <button
                    type="button"
                    className="w-full mt-2 py-2 rounded-xl bg-whatsapp text-slate-950 font-bold text-xs hover:bg-[#20ba5a] transition flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Pay ₹1,499.00 Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Instant Confirmed State Bubble */}
                <div className="p-2.5 rounded-xl bg-slate-900 border border-emerald-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <div>
                      <span className="text-xs font-bold text-white block">Payment Confirmed</span>
                      <span className="text-[10px] text-slate-400">Txn: pay_live_98412 • Order #4092</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-300 font-mono">Status: Paid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
