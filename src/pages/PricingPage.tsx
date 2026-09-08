import React, { useState } from 'react';
import { 
  Check, HelpCircle, ArrowRight, ShieldCheck, 
  Sparkles, Calculator, ChevronDown 
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { pricingTiers, pricingNotice, pricingFaqs } from '../data/pricing';

export const PricingPage: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const formatFee = (fee: number | string) => {
    if (typeof fee === 'string') return fee;
    if (currency === 'USD') {
      const usdMap: Record<number, string> = { 999: '$12', 2499: '$30', 4999: '$60' };
      return usdMap[fee] || `$${Math.round(fee / 83)}`;
    }
    return `₹${fee.toLocaleString('en-IN')}`;
  };

  return (
    <div className="py-16 sm:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TRANSPARENT PUBLIC PRICING"
          title="Simple platform plans. Zero hidden conversation markups."
          description={pricingNotice.headline}
          align="center"
        />

        {/* Currency Switcher */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-xs font-semibold text-slate-500">Base Currency:</span>
          <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300 text-xs font-bold">
            <button
              type="button"
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1 rounded-lg transition ${
                currency === 'INR' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              INR (₹) Base
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 rounded-lg transition ${
                currency === 'USD' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              USD ($) Approx
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-200 relative ${
                tier.popular
                  ? "bg-white border-2 border-[#007FFB] shadow-soft-lg ring-4 ring-[#007FFB]/10 -translate-y-1"
                  : "bg-white border border-slate-200/80 shadow-soft-sm"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="blue" size="sm" className="font-bold uppercase tracking-wider">
                    Recommended
                  </Badge>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                  <Badge variant="blue" size="sm">
                    +{tier.markup} markup
                  </Badge>
                </div>
                <p className="text-xs text-slate-500 min-h-[36px] mb-4">
                  {tier.description}
                </p>

                <div className="pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-slate-900 font-display">
                      {formatFee(tier.fee)}
                    </span>
                    {tier.period && (
                      <span className="text-xs font-semibold text-slate-500">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Meta wholesale cost + {tier.markup} markup
                  </p>
                </div>

                <div className="space-y-2 mb-6 text-xs text-slate-700">
                  <div className="flex items-center justify-between font-semibold text-slate-900 pb-2 border-b border-slate-100">
                    <span>Agent Seats:</span>
                    <span>{tier.users}</span>
                  </div>
                  <div className="flex items-center justify-between font-semibold text-slate-900 pb-2 border-b border-slate-100">
                    <span>Active Contacts:</span>
                    <span>{typeof tier.contacts === 'number' ? tier.contacts.toLocaleString() : tier.contacts}</span>
                  </div>
                  <div className="pt-2 space-y-2">
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-600">
                        <Check className="w-4 h-4 text-[#007FFB] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Button
                  variant={tier.popular ? "primary" : "outline"}
                  className="w-full"
                  href={tier.ctaLink}
                  isExternal={tier.ctaLink.startsWith('http') || tier.ctaLink.startsWith('#')}
                >
                  {tier.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* How Message Pricing Works Explainer Section */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-soft-sm mb-16">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            How Message Pricing Works
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Meta operates an official category-based conversation pricing model (Marketing, Utility, Authentication, and Service). Unlike legacy aggregators who bundle massive hidden surcharges into obscure wallet credits, Vyxel Connect passes Meta's exact wholesale conversation cost directly to your invoice with a single, transparent markup.
          </p>

          <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 mb-6">
            <div className="flex items-center gap-2 text-[#007FFB] font-bold text-sm mb-2">
              <Calculator className="w-4 h-4" />
              <span>{pricingNotice.workedExample.title}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs mt-3">
              <div>
                <span className="text-slate-500 block">Conversation Volume</span>
                <span className="font-bold text-slate-900 text-sm">~{pricingNotice.workedExample.conversationCount.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Official Meta Cost</span>
                <span className="font-bold text-slate-900 text-sm">~{pricingNotice.workedExample.totalMetaCost}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Growth Plan Markup</span>
                <span className="font-bold text-slate-900 text-sm">{pricingNotice.workedExample.markupOnGrowth}</span>
              </div>
              <div>
                <span className="text-[#007FFB] font-bold block">Total Message Billing</span>
                <span className="font-bold text-slate-900 text-sm">~{pricingNotice.workedExample.totalBilledForMessages}</span>
              </div>
            </div>
            <p className="mt-3 text-[11px] text-slate-500 italic">
              *{pricingNotice.workedExample.note}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#007FFB]" />
            <span>Note: {pricingNotice.disclaimer}</span>
          </div>
        </div>

        {/* Pricing FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {pricingFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-soft-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
