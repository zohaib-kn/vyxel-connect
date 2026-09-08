import React, { useState } from 'react';
import { Check, Info, ArrowRight, Sparkles, Calculator } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { pricingTiers, pricingNotice } from '../../data/pricing';

export const PricingSection: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const formatFee = (fee: number | string) => {
    if (typeof fee === 'string') return fee;
    if (currency === 'USD') {
      const usdMap: Record<number, string> = { 999: '$12', 2499: '$30', 4999: '$60' };
      return usdMap[fee] || `$${Math.round(fee / 83)}`;
    }
    return `₹${fee.toLocaleString('en-IN')}`;
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TRANSPARENT PRICING"
          title="Predictable platform tiers. Wholesale Meta pass-through."
          description="You see exactly what Meta charges — we add a single transparent markup, nothing hidden. No complicated token deductions or mysterious per-message surprises."
          align="center"
        />

        {/* Currency Switcher */}
        <div className="flex items-center justify-center gap-3 mb-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 relative ${
                tier.popular
                  ? "bg-white border-2 border-brand-500 shadow-soft-lg ring-4 ring-brand-500/10 -translate-y-1"
                  : "bg-white border border-slate-200/80 shadow-soft-sm hover:border-slate-300"
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
                  <Badge variant="whatsapp" size="sm">
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
                    Messages billed pay-per-use: Meta cost + {tier.markup}
                  </p>
                </div>

                <div className="space-y-2 mb-6 text-xs text-slate-700">
                  <div className="flex items-center justify-between font-semibold text-slate-900 pb-2 border-b border-slate-100">
                    <span>Included Agents:</span>
                    <span>{tier.users}</span>
                  </div>
                  <div className="flex items-center justify-between font-semibold text-slate-900 pb-2 border-b border-slate-100">
                    <span>Included Contacts:</span>
                    <span>{typeof tier.contacts === 'number' ? tier.contacts.toLocaleString() : tier.contacts}</span>
                  </div>
                  <div className="pt-2 space-y-2">
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Button
                  variant={tier.popular ? "whatsapp" : "outline"}
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

        {/* Worked Example Callout Box from PDF */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200/80 p-6 shadow-soft-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Calculator className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                {pricingNotice.workedExample.title}
              </h4>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">Illustrative Example</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-xs">
            <div className="p-3 rounded-xl bg-slate-50">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Volume</span>
              <span className="font-bold text-slate-900 text-sm mt-0.5 block">
                {pricingNotice.workedExample.conversationCount.toLocaleString()} conversations
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Wholesale Meta Cost</span>
              <span className="font-bold text-slate-900 text-sm mt-0.5 block">
                {pricingNotice.workedExample.totalMetaCost}
              </span>
              <span className="text-[10px] text-slate-500">(@ {pricingNotice.workedExample.metaCostPerConv} / conv)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Growth Markup</span>
              <span className="font-bold text-slate-900 text-sm mt-0.5 block">
                {pricingNotice.workedExample.markupOnGrowth}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/80">
              <span className="text-emerald-800 block text-[10px] uppercase font-bold">Total Message Bill</span>
              <span className="font-bold text-emerald-900 text-sm mt-0.5 block">
                {pricingNotice.workedExample.totalBilledForMessages}
              </span>
            </div>
          </div>

          <p className="mt-4 text-[11px] text-slate-500 leading-relaxed italic">
            *{pricingNotice.workedExample.note} {pricingNotice.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
