import React from 'react';
import { 
  Sparkles, Clock, RefreshCw, 
  Tag, UserCheck, CheckCircle2, ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { ScreenshotFrame } from '../ui/ScreenshotFrame';
import { Button } from '../ui/Button';

export const UnifiedInbox: React.FC = () => {
  return (
    <section id="inbox" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="UNIFIED TEAM INBOX"
          title="Resolve conversations faster with complete customer context."
          description="Bring WhatsApp, Instagram DM, and Messenger into a synchronized workspace with real-time SSE updates, automatic 24-hour session protection, and AI reply drafting."
          align="center"
          badge={<Badge variant="whatsapp">Official Meta Channels</Badge>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Feature highlights column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 font-bold border border-brand-200">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Real-Time SSE + 30s Polling Fallback</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Messages stream instantaneously via Server-Sent Events. If temporary connectivity hiccups occur, automatic 30-second polling ensures zero missed inquiries.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 font-bold border border-emerald-200">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Automatic 24h Session Window Guard</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Real-time countdown prevents delivery rejection. When the customer session expires, the interface automatically switches from free-text to approved Meta templates.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 font-bold border border-purple-200">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">AI Suggest Reply Copilot</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Agents click a single button to draft contextual replies generated from the thread history and your tenant knowledge base, ready for quick edit and dispatch.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 font-bold border border-blue-200">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Routing &amp; Ad Attribution</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Assign conversations by team role, add searchable tags, and see exactly which Meta ad click ID generated the inbound thread directly above the message.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                href="https://provider.digi-wire.com/signup"
                isExternal
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Experience the inbox
              </Button>
            </div>
          </div>

          {/* Interactive Screen Preview */}
          <div className="lg:col-span-7">
            <ScreenshotFrame
              title="Vyxel Unified Inbox"
              subtitle="Thread #4089 · Active Session Window · SSE Realtime"
              variant="inbox"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
