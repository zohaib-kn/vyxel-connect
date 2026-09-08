import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, ArrowUpRight, Mail, Phone, Clock } from 'lucide-react';
import { footerLinks } from '../../data/nav';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070c16] text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800">
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block group">
              <div className="bg-white/95 px-3.5 py-2 rounded-2xl inline-flex items-center shadow-md group-hover:bg-white transition-colors">
                <img
                  src="/logo.png"
                  alt="Vyxel Connecter"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Official Meta Business Solution Provider architecture for WhatsApp, Instagram DM, and Messenger. Multi-tenant shared inbox, grounded AI automation, and wholesale pass-through billing.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#01E7DB] animate-pulse"></span>
                <span>All Systems Operational</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Shield className="w-3.5 h-3.5 text-[#007FFB]" />
                <span>Meta BSP Certified</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">Product</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.product.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">Solutions</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.solutions.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">Developers</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.developers.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://provider.digi-wire.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-slate-400"
                >
                  <span>Live Console</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Support (StudyAbroad CRM Pattern) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">Contact &amp; Support</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href="mailto:support@digi-wire.com" className="hover:text-white transition-colors">
                  support@digi-wire.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>24/7 SLA for Enterprise</span>
              </p>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-500">
                <span>A Digiwire Technologies Platform</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Meta Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Vyxel Connect (Digiwire Technologies). All rights reserved.
          </p>
          <p className="max-w-xl text-center md:text-right">
            WhatsApp, Instagram, and Messenger are registered trademarks of Meta Platforms, Inc. Vyxel Connect interfaces with official Meta Cloud APIs under authorized Business Solution Provider architecture.
          </p>
        </div>
      </div>
    </footer>
  );
};
