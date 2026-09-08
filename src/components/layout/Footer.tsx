import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { footerLinks } from '../../data/nav';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070b14] text-slate-400 pt-16 pb-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold">
                <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none">
                  <path d="M7 9L13.5 22L16 17L11.5 9H7Z" fill="#FFFFFF" />
                  <path d="M16 17L18.5 22L25 9H20.5L16 17Z" fill="#25D366" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                Vyxel<span className="text-brand-400">Connect</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
              The all-in-one WhatsApp Business Platform. One shared inbox, AI chatbot, broadcasts, catalog & payments, and developer API connected to your WhatsApp, Instagram, and Messenger.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>All Systems Operational</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Shield className="w-3.5 h-3.5 text-brand-400" />
                <span>Meta BSP</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">Product</h4>
            <ul className="space-y-2.5 text-sm">
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
            <ul className="space-y-2.5 text-sm">
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
            <ul className="space-y-2.5 text-sm">
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
                  className="hover:text-white transition-colors flex items-center gap-1 text-slate-400"
                >
                  Live Console <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Company Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">Trust & Compliance</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.trust.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-xs text-slate-500 block mt-3">
                  A Digiwire Technologies Platform
                </span>
              </li>
            </ul>
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
