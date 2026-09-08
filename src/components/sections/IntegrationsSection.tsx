import React from 'react';
import { 
  ShoppingBag, CreditCard, Workflow, Database, 
  Boxes, ArrowRight, CheckCircle2, ArrowUpRight,
  ShieldCheck, Share2
} from 'lucide-react';
import { integrationsList } from '../../data/integrations';
import { LaptopFrame } from '../ui/LaptopFrame';

export const IntegrationsSection: React.FC = () => {
  return (
    <section id="integrations" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid: Left Title + Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 border border-[#007FFB]/20 px-3.5 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#007FFB]"></span>
              <span className="text-xs font-bold text-[#007FFB] tracking-wide font-mono">
                ECOSYSTEM &amp; INTEGRATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.05]">
              Connect your commerce, payment, <span className="text-[#007FFB]">and internal CRM stack.</span>
            </h2>
          </div>

          <div>
            <p className="text-base text-slate-600 leading-relaxed">
              Bridge your existing store catalogs, transactional payment gateways, and custom backend databases with zero proprietary lock-in using native webhooks and open REST endpoints.
            </p>
          </div>
        </div>

        {/* Real Meta Embedded Signup & WhatsApp Setup Showcase */}
        <div className="mb-14">
          <LaptopFrame
            framedImageSrc="/screenshots/whatsapp-setup-framed.png"
            blobColor="blue"
            blobPosition="center"
            className="max-w-[880px] mx-auto"
          />
        </div>

        {/* Asymmetric Ecosystem Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: E-Commerce Storefronts (Span 6) */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#01E7DB]/10 text-[#007FFB] flex items-center justify-center font-bold border border-[#01E7DB]/30">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Shopify &amp; WooCommerce</h3>
                    <span className="text-xs text-[#007FFB] font-semibold">Storefront E-Commerce</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  Webhook Active
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                Synchronize your online product catalog, trigger automated abandoned checkout messages, dispatch order confirmations, and stream live shipment tracking directly into WhatsApp.
              </p>

              <div className="space-y-2 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0" />
                  <span>Real-time cart recovery triggers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0" />
                  <span>Automated order status &amp; tracking URLs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0" />
                  <span>Continuous inventory availability sync</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Sync Protocol: Inbound Webhooks</span>
              <span className="text-[#007FFB] font-bold">Sub-second trigger</span>
            </div>
          </div>

          {/* Card 2: Transactional Payments (Span 6) */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#007FFB] flex items-center justify-center font-bold border border-blue-200">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Razorpay Payment Gateway</h3>
                    <span className="text-xs text-[#007FFB] font-semibold">In-Chat Checkout</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  Gateway Linked
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                Generate dynamic payment links inside any WhatsApp or web chat. Customers pay instantly via UPI, credit/debit cards, or NetBanking with automatic in-thread status confirmation.
              </p>

              <div className="space-y-2 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0" />
                  <span>One-click UPI and Card link generation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0" />
                  <span>Instant payment webhook verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0" />
                  <span>Automated tax invoice dispatch in chat</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Security: Gateway-Level Tokenization</span>
              <span className="text-[#007FFB] font-bold">PCI-DSS Compliant</span>
            </div>
          </div>

          {/* Card 3: No-Code Automation (Span 4) */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 border border-amber-200">
                <Workflow className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Zapier, Make &amp; n8n</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Trigger workflows across 5,000+ business tools when messages are received or conversation tags change.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0" />
                  <span>Generic Webhook Ingestion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0" />
                  <span>Zero proprietary connector lock-in</span>
                </li>
              </ul>
            </div>
            <p className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
              Outbound JSON payloads
            </p>
          </div>

          {/* Card 4: Custom CRM & Database (Span 4) */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4 border border-indigo-200">
                <Database className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Custom CRM &amp; Databases</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Sync conversation records, agent notes, and contact tags directly to PostgreSQL, MySQL, HubSpot, or Salesforce.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0" />
                  <span>Bidirectional contact sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0" />
                  <span>Scoped REST API access</span>
                </li>
              </ul>
            </div>
            <p className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
              REST &amp; Webhook Synchronization
            </p>
          </div>

          {/* Card 5: Meta Business Manager (Span 4) */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#01E7DB]/10 text-[#007FFB] flex items-center justify-center mb-4 border border-[#01E7DB]/30">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Meta Business Manager</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Official Embedded Signup lets you connect existing WABA phone numbers and Meta Commerce Catalogs in 2 minutes.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0" />
                  <span>Embedded Meta Cloud Signup</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#007FFB] shrink-0" />
                  <span>Direct Meta Commerce Catalog sync</span>
                </li>
              </ul>
            </div>
            <p className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
              Official BSP Embedded Signup
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/integrations"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#007FFB] hover:text-[#006bd1] transition-colors"
          >
            <span>Explore all supported integration endpoints and webhook guides</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
