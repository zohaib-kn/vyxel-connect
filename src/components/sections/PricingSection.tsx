import React, { useState } from 'react';
import { Check, Info, ArrowRight, Sparkles, Calculator, ArrowUpRight } from 'lucide-react';
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
    <section id="pricing" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid: Left Title + Right Currency Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 border border-[#007FFB]/20 px-3.5 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#007FFB]"></span>
              <span className="text-xs font-bold text-[#007FFB] tracking-wide font-mono">
                TRANSPARENT PASS-THROUGH BILLING
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.05]">
              Predictable platform tiers. <span className="text-[#007FFB]">Wholesale Meta pass-through.</span>
            </h2>
            <p className="mt-4 text-base text-slate-600 max-w-xl leading-relaxed">
              You see exactly what Meta charges — we add a single published markup. Zero concealed token deductions or mysterious per-message surprise bills.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-bold text-slate-500 font-mono">CURRENCY:</span>
            <div className="inline-flex p-1 rounded-full bg-slate-200/80 border border-slate-300 text-xs font-bold shadow-inner">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  currency === 'INR' ? 'bg-[#007FFB] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                INR (₹) Base
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  currency === 'USD' ? 'bg-[#007FFB] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                USD ($) Approx
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid with Clear Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 relative ${
                tier.popular
                  ? "bg-white border-2 border-[#007FFB] shadow-[0_20px_50px_rgba(0,127,251,0.15)] ring-4 ring-[#007FFB]/10 lg:-translate-y-2"
                  : tier.name === 'Enterprise'
                  ? "bg-[#09152b] text-white border border-slate-800 shadow-md"
                  : "bg-white border border-slate-200 shadow-sm hover:border-[#007FFB]/40"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#007FFB] to-[#01E7DB] text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-lg font-bold ${tier.name === 'Enterprise' ? 'text-white' : 'text-slate-900'}`}>
                    {tier.name}
                  </h3>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    tier.popular
                      ? "bg-[#007FFB]/10 text-[#007FFB]"
                      : tier.name === 'Enterprise'
                      ? "bg-slate-800 text-slate-300"
                      : "bg-slate-100 text-slate-600"
                  }`}>
                    +{tier.markup} markup
                  </span>
                </div>
                <p className={`text-xs min-h-[36px] mb-4 ${tier.name === 'Enterprise' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {tier.description}
                </p>

                <div className={`pb-4 mb-5 border-b ${tier.name === 'Enterprise' ? 'border-slate-800' : 'border-slate-100'}`}>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl font-extrabold font-display ${tier.name === 'Enterprise' ? 'text-white' : 'text-slate-900'}`}>
                      {formatFee(tier.fee)}
                    </span>
                    {tier.period && (
                      <span className={`text-xs font-semibold ${tier.name === 'Enterprise' ? 'text-slate-400' : 'text-slate-500'}`}>
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p className={`text-[11px] mt-1 ${tier.name === 'Enterprise' ? 'text-slate-400' : 'text-slate-500'}`}>
                    Messages: Meta wholesale + {tier.markup}
                  </p>
                </div>

                <div className="space-y-2.5 mb-6 text-xs">
                  <div className={`flex items-center justify-between font-semibold pb-2 border-b ${
                    tier.name === 'Enterprise' ? 'border-slate-800 text-slate-200' : 'border-slate-100 text-slate-900'
                  }`}>
                    <span>Included Agents:</span>
                    <span>{tier.users}</span>
                  </div>
                  <div className={`flex items-center justify-between font-semibold pb-2 border-b ${
                    tier.name === 'Enterprise' ? 'border-slate-800 text-slate-200' : 'border-slate-100 text-slate-900'
                  }`}>
                    <span>Included Contacts:</span>
                    <span>{typeof tier.contacts === 'number' ? tier.contacts.toLocaleString() : tier.contacts}</span>
                  </div>
                  <div className="pt-2 space-y-2">
                    {tier.features.map((feat, i) => (
                      <div key={i} className={`flex items-start gap-2 ${tier.name === 'Enterprise' ? 'text-slate-300' : 'text-slate-600'}`}>
                        <Check className="w-3.5 h-3.5 text-[#007FFB] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={tier.ctaLink}
                  target={tier.ctaLink.startsWith('http') ? '_blank' : undefined}
                  rel={tier.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`w-full py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                    tier.popular
                      ? "bg-[#007FFB] text-white hover:bg-[#006bd1] shadow-[0_4px_16px_rgba(0,127,251,0.3)]"
                      : tier.name === 'Enterprise'
                      ? "bg-white text-slate-900 hover:bg-slate-100"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale Meta Rate Transparency Box */}
        <div className="mt-14 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#01E7DB]/10 text-[#007FFB] flex items-center justify-center font-bold border border-[#01E7DB]/30">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {pricingNotice.workedExample.title}
                </h4>
                <p className="text-xs text-slate-500">Real-world math on 10,000 marketing conversations</p>
              </div>
            </div>
            <span className="text-[11px] text-[#007FFB] font-mono font-bold bg-[#01E7DB]/10 border border-[#01E7DB]/30 px-2.5 py-1 rounded-full">
              Zero Hidden Charges
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Campaign Volume</span>
              <span className="font-bold text-slate-900 text-sm mt-1 block">
                {pricingNotice.workedExample.conversationCount.toLocaleString()} conversations
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Wholesale Meta Cost</span>
              <span className="font-bold text-slate-900 text-sm mt-1 block">
                {pricingNotice.workedExample.totalMetaCost}
              </span>
              <span className="text-[10px] text-slate-500">(@ {pricingNotice.workedExample.metaCostPerConv} / conv)</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Growth Markup</span>
              <span className="font-bold text-slate-900 text-sm mt-1 block">
                {pricingNotice.workedExample.markupOnGrowth}
              </span>
              <span className="text-[10px] text-slate-500">(@ ₹0.05 / conv)</span>
            </div>
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200">
              <span className="text-[#007FFB] block text-[10px] uppercase font-bold">Total Message Bill</span>
              <span className="font-bold text-slate-900 text-base mt-1 block">
                {pricingNotice.workedExample.totalBilledForMessages}
              </span>
              <span className="text-[10px] text-[#007FFB]">True cost + published plan fee</span>
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
