import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';
import { mainNavLinks } from '../../data/nav';
import { Button } from '../ui/Button';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between z-10 border-l border-slate-200">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <span className="font-display font-bold text-slate-900 text-base">Navigation</span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-4 space-y-1">
            {mainNavLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={onClose}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? "text-brand-600 bg-brand-50"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-100 space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 px-1 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official Meta BSP Infrastructure</span>
          </div>
          <Button
            variant="outline"
            className="w-full"
            href="https://provider.digi-wire.com/login"
            isExternal
          >
            Log in
          </Button>
          <Button
            variant="whatsapp"
            className="w-full"
            href="https://provider.digi-wire.com/signup"
            isExternal
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Start free trial
          </Button>
        </div>
      </div>
    </div>
  );
};
