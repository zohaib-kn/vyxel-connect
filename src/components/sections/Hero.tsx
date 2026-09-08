import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { LaptopFrame } from '../ui/LaptopFrame';

export const Hero: React.FC = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#f8fafc] pt-28 pb-16 sm:pt-36 sm:pb-24">
        {/* Soft background decor */}
        <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#01E7DB]/15 blur-3xl opacity-70 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-64 w-[38%] rounded-bl-[10rem] bg-[#007FFB]/10 pointer-events-none"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          {/* Left Column: Outcome-Led Copy */}
          <div className="lg:translate-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#01E7DB]"></span>
              <span className="text-xs font-semibold text-[#007FFB]">
                WhatsApp, Instagram &amp; Messenger, unified
              </span>
            </div>

            <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-slate-900 sm:text-6xl lg:text-7xl font-display">
              One inbox for every channel.<br />
              <span className="bg-gradient-to-r from-[#007FFB] to-[#01E7DB] bg-clip-text text-transparent">One record for every customer.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Vyxel Connect brings WhatsApp, Instagram and Messenger conversations, AI automation, broadcasts and commerce into a single customer record — so no reply, order or follow-up gets lost between tools.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="https://provider.digi-wire.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#007FFB] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_25px_rgba(0,127,251,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#006bd1]"
              >
                <span>Request a tailored demo</span>
                <ArrowUpRight className="w-[17px] h-[17px]" />
              </a>

              <a
                href="/features"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#007FFB] hover:text-[#005bb5] transition-colors"
              >
                <span>Explore the platform</span>
                <ArrowRight className="w-[17px] h-[17px]" />
              </a>
            </div>
          </div>

          {/* Right Column: Real Vyxel Superadmin Dashboard in Device Frame */}
          <div className="relative lg:-translate-y-2">
            <LaptopFrame
              framedImageSrc="/screenshots/dashboard-framed.png"
              blobColor="blue"
              blobPosition="center"
              className="max-w-[760px] mx-auto"
            />
            <p className="mt-4 text-center text-sm font-medium text-slate-500">
              Built for support teams, sales teams and commerce operators.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Category Ticker Strip */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-5 text-xs font-bold tracking-[.08em] text-slate-700">
          <span>SHARED INBOX</span>
          <span>AI AUTOMATION</span>
          <span>BROADCAST CAMPAIGNS</span>
          <span>COMMERCE &amp; CATALOG</span>
          <span>BILLING &amp; USAGE</span>
        </div>
      </section>
    </>
  );
};