import React from 'react';
import { 
  ShieldCheck, Layers, Key, Lock, Activity, 
  RefreshCw, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { securityPillars } from '../../data/security';
import { Button } from '../ui/Button';

export const SecuritySection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Layers': return <Layers className="w-5 h-5 text-brand-600" />;
      case 'ShieldAlert': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Key': return <Key className="w-5 h-5 text-purple-600" />;
      case 'Lock': return <Lock className="w-5 h-5 text-blue-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-amber-600" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-cyan-600" />;
      default: return <ShieldCheck className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <section id="security" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ENTERPRISE TRUST &amp; COMPLIANCE"
          title="Engineered for strict tenant isolation and route-level RBAC."
          description="Your business conversations and Meta channel credentials stay isolated. Built with cryptographic verification, rotating auth tokens, and self-contained webhook health auditing."
          align="center"
        />

        {/* Role Hierarchy Visual Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-[#090f1d] text-white border border-slate-800 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="eyebrow text-brand-400 font-mono">ENFORCED RBAC HIERARCHY</span>
              <h3 className="text-base font-bold text-white mt-0.5">Role Enforcement on Every API Route</h3>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-700/50">
              Active on all endpoints
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-brand-300 block">1. Tenant Owner</span>
              <p className="text-[11px] text-slate-400 mt-1">Full control over subscriptions, WABA credentials, and team lifecycle.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-emerald-300 block">2. Tenant Admin</span>
              <p className="text-[11px] text-slate-400 mt-1">Manages template approvals, chatbot flows, broadcasts, and routing.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-slate-300 block">3. Support Agent</span>
              <p className="text-[11px] text-slate-400 mt-1">Handles customer conversations, replies, tags, and AI suggestions.</p>
            </div>
          </div>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center mb-4 shadow-soft-sm">
                {getIcon(pillar.icon)}
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">{pillar.title}</h4>
              <span className="text-[11px] font-semibold text-brand-600 block mb-2">{pillar.subtitle}</span>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {pillar.description}
              </p>

              <ul className="space-y-1.5 text-xs text-slate-700 pt-3 border-t border-slate-200/70">
                {pillar.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            href="/security"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Review enterprise security whitepaper
          </Button>
        </div>
      </div>
    </section>
  );
};
