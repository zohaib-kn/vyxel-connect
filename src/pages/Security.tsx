import React from 'react';
import { 
  ShieldCheck, Layers, Key, Lock, Activity, 
  RefreshCw, CheckCircle2, AlertCircle, ArrowRight 
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { securityPillars } from '../data/security';

export const Security: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SECURITY &amp; COMPLIANCE"
          title="Engineered for strict tenant isolation and route-level RBAC."
          description="We built Vyxel Connect for businesses where customer confidentiality and uptime are non-negotiable. Review our security controls and cryptographic data safeguards."
          align="center"
          badge={<Badge variant="whatsapp">Official Meta BSP</Badge>}
        />

        {/* Security Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="eyebrow text-brand-600 font-mono block mb-1">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{pillar.title}</h3>
                <span className="text-xs font-semibold text-slate-500 block mb-3">{pillar.subtitle}</span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meta Official Policies & Compliance */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-soft-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Meta WhatsApp Business Policy Alignment</h3>
              <p className="text-xs text-slate-500">Built-in safeguards protecting your WABA phone quality rating</p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed pt-4 border-t border-slate-100">
            <p>
              Vyxel Connect enforces Meta's 24-hour messaging window at the software layer. Once a customer's inbound session window expires, our interface prevents free-text entry and mandates the selection of pre-approved Meta message templates to maintain compliance.
            </p>
            <p>
              All Click-to-WhatsApp ad campaigns are created in a <strong>PAUSED</strong> state, ensuring that your organization has explicit control over spend approval, payment methods, and creative verification in Meta Ads Manager prior to publishing.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Have specific compliance questionnaires or vendor risk assessments?
            </span>
            <Button
              variant="outline"
              size="sm"
              href="/contact"
              iconRight={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Contact Compliance Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
