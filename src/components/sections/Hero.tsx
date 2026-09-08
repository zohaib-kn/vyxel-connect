import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#f7fbff] pt-28 pb-16 sm:pt-36 sm:pb-24">
        {/* Soft background decor */}
        <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#dff5e6] blur-3xl opacity-70 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-64 w-[38%] rounded-bl-[10rem] bg-[#dceeff] pointer-events-none"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          {/* Left Column: Outcome-Led Copy */}
          <div className="lg:translate-y-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0a4b8f]">
              Official WhatsApp &amp; Meta Business Platform
            </p>

            <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#14233a] sm:text-6xl lg:text-7xl font-display">
              The deal should move forward.<br />
              <span className="text-[#0a4b8f]">So should its context.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Vyxel Connect connects the customer enquiry, WhatsApp conversation, AI automation, catalog booking and payment in one living customer record.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="https://provider.digi-wire.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#092d4d] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_25px_rgba(9,45,77,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#0a4b8f]"
              >
                <span>Request a tailored demo</span>
                <ArrowUpRight className="w-[17px] h-[17px]" />
              </a>

              <a
                href="/features"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0a4b8f] hover:text-[#092d4d] transition-colors"
              >
                <span>Explore the platform</span>
                <ArrowRight className="w-[17px] h-[17px]" />
              </a>
            </div>
          </div>

          {/* Right Column: DealDesk / Vyxel Connect Live Workspace Card */}
          <div>
            <div className="relative mx-auto min-h-[390px] max-w-[640px] overflow-hidden rounded-[2rem] border border-[#b8d9f1] bg-[#eaf6ff] p-5 shadow-[0_32px_70px_rgba(16,57,89,0.18)] sm:p-7 lg:-translate-y-3">
              {/* Decorative grid overlay */}
              <div
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(10, 75, 143, 0.09) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(10, 75, 143, 0.09) 1px, transparent 1px)
                  `,
                  backgroundSize: '24px 24px',
                }}
              ></div>

              {/* Command Card (Top) */}
              <div className="relative rounded-2xl border border-white/80 bg-white/90 p-4 sm:p-5 shadow-lg backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a4b8f]">
                    DEALDESK LIVE WORKSPACE
                  </span>
                  <span className="rounded-full bg-[#e4f7ed] px-2.5 py-1 text-[10px] font-bold text-[#087a43]">
                    All systems visible
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-[1.2fr_0.8fr] items-start gap-3">
                  {/* Deal Pulse block */}
                  <div className="rounded-xl bg-[#092d4d] p-4 text-white shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9ed1ff]">
                      DEAL PULSE
                    </p>
                    <p className="mt-2 text-2xl font-semibold">One deal record</p>

                    <div className="relative mt-4 h-6 overflow-hidden">
                      <div className="h-px bg-white/35"></div>
                      <i className="route-dot absolute -left-2 top-[-3px] h-2 w-2 rounded-full bg-[#ffc21a] animate-pulse"></i>
                    </div>

                    <p className="mt-2 text-xs text-blue-100">
                      Lead → booking → collection → handover
                    </p>
                  </div>

                  {/* Next Action block */}
                  <div className="rounded-xl border border-slate-200 bg-[#fbfdff] p-4 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      NEXT ACTION
                    </p>
                    <p className="mt-3 text-sm font-bold text-[#14233a]">
                      Review high-intent call
                    </p>
                    <p className="mt-1 text-[10px] font-semibold text-slate-500">
                      Sales Lead A · New enquiry
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-[#fff5ce] px-2.5 py-0.5 text-[10px] font-bold text-[#795800]">
                      Today
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Cards: Live Availability + Collection Milestone */}
              <div className="relative mt-4 grid grid-cols-1 sm:grid-cols-2 items-stretch gap-3">
                {/* Live Availability */}
                <div className="min-h-[9.25rem] rounded-2xl border border-white bg-white p-4 shadow-md flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a4b8f]">
                      LIVE AVAILABILITY
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <span className="rounded-lg px-2 py-2 text-center text-[10px] font-bold bg-[#eaf3ff] text-[#0a4b8f]">
                        A1
                      </span>
                      <span className="rounded-lg px-2 py-2 text-center text-[10px] font-bold bg-[#e4f7ed] text-[#087a43]">
                        A2
                      </span>
                      <span className="rounded-lg px-2 py-2 text-center text-[10px] font-bold bg-[#fff5ce] text-[#795800]">
                        Hold
                      </span>
                      <span className="rounded-lg px-2 py-2 text-center text-[10px] font-bold bg-[#eaf3ff] text-[#0a4b8f]">
                        B2
                      </span>
                      <span className="rounded-lg px-2 py-2 text-center text-[10px] font-bold bg-[#e4f7ed] text-[#087a43]">
                        C1
                      </span>
                      <span className="rounded-lg px-2 py-2 text-center text-[10px] font-bold bg-[#eaf3ff] text-[#0a4b8f]">
                        C2
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-[9px] font-semibold text-slate-400">
                    B1 reserved for review
                  </p>
                </div>

                {/* Collection Milestone (Yellow Card) */}
                <div className="min-h-[9.25rem] rounded-2xl border border-white bg-[#ffc21a] p-4 shadow-md flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#574100]">
                      COLLECTION MILESTONE
                    </p>
                    <p className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[#14233a]">
                      12,50,000/-
                    </p>
                    <div className="mt-1 flex items-center justify-between gap-2 text-[10px] font-semibold text-[#694f00]">
                      <span>Milestone 02</span>
                      <span>Due today</span>
                    </div>
                  </div>

                  <div className="mt-4 h-2 rounded-full bg-white/70 overflow-hidden">
                    <div className="h-2 rounded-full bg-[#0a4b8f] w-[52%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-sm font-medium text-slate-500">
              Built for developers, builders, broker networks and agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Category Ticker Strip (Identical to DealDesk) */}
      <section className="border-y border-[#d9e5ef] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-5 text-xs font-bold tracking-[.08em] text-[#245373]">
          <span>LEAD INTELLIGENCE</span>
          <span>LIVE INVENTORY</span>
          <span>BOOKING CONTROL</span>
          <span>COLLECTION WORKFLOWS</span>
          <span>POST-SALES OPERATIONS</span>
        </div>
      </section>
    </>
  );
};
