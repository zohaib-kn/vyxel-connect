import React from 'react';
import { 
  ShoppingBag, CreditCard,
  ArrowUpRight, ShieldCheck, Zap
} from 'lucide-react';
import { LaptopFrame } from '../ui/LaptopFrame';

export const Commerce: React.FC = () => {
  return (
    <section id="commerce" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid: Left Title + Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 px-3.5 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#01E7DB]"></span>
              <span className="text-xs font-bold text-[#007FFB] tracking-wide font-mono">
                CONVERSATIONS INTO COMMERCE · WHATSAPP ONLY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.05]">
              Sell products and collect payments <span className="text-[#007FFB]">inside WhatsApp.</span>
            </h2>
          </div>

          <div>
            <p className="text-base text-slate-600 leading-relaxed">
              Sync your Meta Commerce catalog, trigger instant abandoned cart and order updates from Shopify or WooCommerce, and collect payments directly in-thread with Razorpay payment links.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Feature highlights column (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#007FFB]/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#01E7DB]/10 text-[#007FFB] flex items-center justify-center shrink-0 font-bold border border-[#01E7DB]/30">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">WhatsApp Catalog Sync</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Sync your inventory directly from Meta Commerce Manager. Both human agents and automated bots can dispatch interactive multi-product cards without leaving the chat thread.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#007FFB]">
                    <span>Single &amp; Multi-Item Catalogs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 font-bold border border-amber-200">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Shopify &amp; WooCommerce Webhook Triggers</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Cart abandonment events, order confirmations, and shipment tracking dispatches fire instantaneously via native webhooks without third-party middleware fees.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-amber-800">
                    <span>Zero Webhook Polling Delay</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#007FFB]/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#007FFB] flex items-center justify-center shrink-0 font-bold border border-blue-200">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">In-Chat Razorpay Payments</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Generate secure Razorpay UPI, card, and NetBanking links with 1 click. When the customer pays, the thread updates instantly to verified "Paid" status with receipt generated.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#007FFB]">
                    <span>UPI / Cards / NetBanking Supported</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://provider.digi-wire.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#007FFB] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_20px_rgba(0,127,251,0.25)] hover:bg-[#0066d6] transition-all"
              >
                <span>Connect your catalog</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Real Product Catalog Screenshot (6 cols) */}
          <div className="lg:col-span-6">
            <LaptopFrame
              framedImageSrc="/screenshots/catalog-framed.png"
              blobColor="gradient"
              blobPosition="center"
              className="max-w-[620px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
