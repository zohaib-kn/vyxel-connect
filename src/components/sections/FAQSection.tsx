import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Question 0 open by default (StudyAbroad reference pattern)

  const faqs: FAQItem[] = [
    {
      question: "What is an official Meta Business Solution Provider (BSP)?",
      answer: "A Meta Business Solution Provider has authorized direct access to the official WhatsApp Cloud API, Instagram Graph API, and Messenger Graph API. Unlike unofficial scraping tools or browser extensions that risk getting your phone number banned, Vyxel Connect operates under official Meta architecture with guaranteed uptime, official green tick verification support, and true wholesale rate pass-through.",
    },
    {
      question: "How does wholesale Meta rate pass-through pricing work?",
      answer: "Meta charges per 24-hour conversation category (Marketing, Utility, Authentication, and Service). Vyxel bills you Meta's true wholesale rate with zero added hidden markups, plus our single transparent plan fee (e.g. +₹0.05/conv on Growth). You never buy proprietary tokens or suffer unexpected credit deductions.",
    },
    {
      question: "Do I need Meta Tech Provider approval or a custom Facebook App?",
      answer: "No. Thanks to Meta Embedded Signup, you do not need to register a custom Facebook Developer App or wait weeks for Meta Tech Provider verification. You simply log into your Meta account inside Vyxel Connect, select or create your WhatsApp Business Account (WABA), and start messaging in under 2 minutes.",
    },
    {
      question: "How does the automatic 24-hour customer session window guard work?",
      answer: "Meta policy allows free-text replies only within 24 hours of the customer's last incoming message. Vyxel features a real-time countdown timer right in the inbox. When the 24 hours expire, the interface automatically restricts free-text and prompts agents to select a pre-approved Meta template message, eliminating silent delivery rejections and policy strikes.",
    },
    {
      question: "Can I connect my existing Shopify, WooCommerce, and Razorpay accounts?",
      answer: "Yes. Vyxel Connect has native webhook receivers for Shopify and WooCommerce (for instant abandoned checkout recovery and shipping tracking dispatches) and native Razorpay integration (for generating secure UPI and card payment links inside the WhatsApp conversation).",
    },
    {
      question: "How does Vyxel guarantee multi-tenant data isolation and security?",
      answer: "Every message, contact, and credential is bound to an isolated tenant key enforced at the database and API gateway level. Access tokens and webhook secrets are stored with hardware-level envelope encryption (AES-256), and role-based access control (RBAC) restricts billing and administrative functions to designated team owners.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 border border-[#007FFB]/20 px-3.5 py-1 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#007FFB]"></span>
            <span className="text-xs font-bold text-[#007FFB] tracking-wide font-mono">
              COMMON QUESTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.05]">
            Got Questions? <span className="text-[#007FFB]">We Have Answers.</span>
          </h2>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Everything you need to know about official Meta BSP architecture, pass-through conversation pricing, and onboarding timelines.
          </p>
        </div>

        {/* FAQ Accordion List (StudyAbroad CRM Pattern) */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "bg-white border-[#007FFB] shadow-md ring-2 ring-[#007FFB]/10"
                    : "bg-white border-slate-200 hover:border-slate-300"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    "text-sm sm:text-base font-bold transition-colors",
                    isOpen ? "text-[#007FFB]" : "text-slate-900"
                  )}>
                    {faq.question}
                  </span>

                  <div className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200",
                    isOpen ? "bg-[#007FFB]/10 text-[#007FFB] rotate-180" : "bg-slate-100 text-slate-500"
                  )}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 border-t border-slate-100 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <span>Still have questions about your specific integration or volume? </span>
          <a
            href="mailto:support@digi-wire.com"
            className="font-bold text-[#007FFB] hover:underline inline-flex items-center gap-1"
          >
            <span>Talk with an engineer</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
