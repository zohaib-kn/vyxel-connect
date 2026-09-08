import React from 'react';
import { 
  ShieldCheck, Layers, Key, Lock, Activity, 
  RefreshCw, CheckCircle2, ArrowRight, ArrowUpRight 
} from 'lucide-react';
import { securityPillars } from '../../data/security';
import { DeviceFrame } from '../ui/DeviceFrame';

export const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#007FFB]/10 border border-[#007FFB]/20 px-3.5 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#007FFB]"></span>
              <span className="text-xs font-bold text-[#007FFB] tracking-wide font-mono">
                ENTERPRISE TRUST &amp; COMPLIANCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-slate-900 leading-[1.05]">
              Engineered for strict tenant isolation <span className="text-[#007FFB]">and route-level RBAC.</span>
            </h2>
          </div>

          <div>
            <p className="text-base text-slate-600 leading-relaxed">
              Your customer conversations, Meta WhatsApp credentials, and payment webhooks remain cryptographically quarantined per tenant. Route-level middleware validates permissions on every single API request.
            </p>
          </div>
        </div>

        {/* Role Hierarchy Visual Banner (Dark Anchor Container in DeviceFrame) */}
        <div className="mb-12">
          <DeviceFrame
            blobColor="purple"
            blobPosition="center"
            notch={true}
            className="w-full"
            innerClassName="p-6 sm:p-8 bg-[#09152b]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono font-bold text-[#01E7DB] uppercase tracking-wider">
                  STRICT RBAC ENFORCEMENT
                </span>
                <h3 className="text-lg font-bold text-white mt-1">Role Enforcement on Every Protected Route</h3>
              </div>
              <span className="text-[11px] font-mono text-[#01E7DB] bg-[#01E7DB]/10 px-3 py-1 rounded-full border border-[#01E7DB]/30 inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#01E7DB] animate-pulse"></span>
                Enforced on 100% of Endpoints
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <span className="text-xs font-bold text-blue-300 font-mono block">LEVEL 1 · TENANT OWNER</span>
                <p className="text-sm font-bold text-white mt-1">Full Organization Control</p>
                <p className="text-xs text-slate-400 mt-1">Controls subscriptions, WABA credentials, team billing, and role provisioning.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <span className="text-xs font-bold text-[#01E7DB] font-mono block">LEVEL 2 · TENANT ADMIN</span>
                <p className="text-sm font-bold text-white mt-1">Workflow Operations</p>
                <p className="text-xs text-slate-400 mt-1">Manages template approvals, flow builder logic, broadcasts, and routing rules.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <span className="text-xs font-bold text-amber-300 font-mono block">LEVEL 3 · SUPPORT AGENT</span>
                <p className="text-sm font-bold text-white mt-1">Customer Conversations</p>
                <p className="text-xs text-slate-400 mt-1">Handles customer threads, replies, tags, and AI suggestions with no access to billing.</p>
              </div>
            </div>
          </DeviceFrame>
        </div>

        {/* Security Pillars Asymmetric 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#007FFB] shadow-sm">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Multi-Tenant Database Quarantine</h4>
                <span className="text-xs font-semibold text-[#007FFB]">Row-Level Isolation</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              All messages, contacts, and custom attributes carry indexed tenant IDs. Database queries enforce tenant boundaries at the ORM layer, preventing cross-tenant data leaks.
            </p>
            <div className="text-[11px] font-mono text-slate-500 bg-white p-2.5 rounded-xl border border-slate-200">
              ✓ Foreign key tenant constraints · Encrypted at rest (AES-256)
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm">
                <Key className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Encrypted Secret &amp; Token Storage</h4>
                <span className="text-xs font-semibold text-blue-700">Envelope Encryption</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Meta Cloud API System User access tokens and webhook verification secrets are stored encrypted with KMS envelope encryption. Secrets are never logged in plain text.
            </p>
            <div className="text-[11px] font-mono text-slate-500 bg-white p-2.5 rounded-xl border border-slate-200">
              ✓ Hardware security module (HSM) keys · Secret rotation ready
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-sm">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Webhook Health &amp; Ingestion Auditing</h4>
                <span className="text-xs font-semibold text-amber-700">Automated Self-Check</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Continuous background health monitors verify that Meta webhooks are reaching your tenant endpoints without dropped packets, reporting health status directly in your dashboard.
            </p>
            <div className="text-[11px] font-mono text-slate-500 bg-white p-2.5 rounded-xl border border-slate-200">
              ✓ Real-time latency tracking · Automated dead-letter reprocessing
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-purple-600 shadow-sm">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Meta BSP Platform Compliance</h4>
                <span className="text-xs font-semibold text-purple-700">Verified Architecture</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Strictly adheres to Meta WhatsApp Business Terms of Service and data retention standards. Your data is never sold, scraped for public AI training, or shared with third parties.
            </p>
            <div className="text-[11px] font-mono text-slate-500 bg-white p-2.5 rounded-xl border border-slate-200">
              ✓ Zero public AI model training on customer transcripts
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/security"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#007FFB] hover:text-[#006bd1] transition-colors"
          >
            <span>Review enterprise compliance &amp; security architecture documentation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
