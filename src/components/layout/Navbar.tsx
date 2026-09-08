import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { mainNavLinks } from '../../data/nav';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-3 z-50 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] px-4 sm:px-6">
        <div className="pointer-events-auto mx-auto grid h-[4.5rem] max-w-7xl grid-cols-[1fr_auto] items-center gap-5 rounded-[1.35rem] border border-slate-200 bg-white/95 px-6 shadow-[0_12px_32px_rgba(12,43,70,.10)] backdrop-blur-md lg:grid-cols-[1fr_auto_1fr]">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center group py-1">
            <img
              src="/logo.png"
              alt="Vyxel Connecter"
              className="h-9 sm:h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </Link>


          {/* Centered navigation links */}
          <nav className="hidden items-center justify-center gap-7 text-[13px] font-bold tracking-[-0.01em] text-slate-600 lg:flex">
            <Link
              to="/features"
              className={`transition-colors hover:text-[#007FFB] ${location.pathname === '/features' ? 'text-[#007FFB]' : ''}`}
            >
              Platform
            </Link>
            <Link
              to="/solutions"
              className={`transition-colors hover:text-[#007FFB] ${location.pathname === '/solutions' ? 'text-[#007FFB]' : ''}`}
            >
              Solutions
            </Link>
            <Link
              to="/integrations"
              className={`transition-colors hover:text-[#007FFB] ${location.pathname === '/integrations' ? 'text-[#007FFB]' : ''}`}
            >
              Integrations
            </Link>
            <Link
              to="/developers"
              className={`transition-colors hover:text-[#007FFB] ${location.pathname === '/developers' ? 'text-[#007FFB]' : ''}`}
            >
              Developers
            </Link>
            <Link
              to="/pricing"
              className={`transition-colors hover:text-[#007FFB] ${location.pathname === '/pricing' ? 'text-[#007FFB]' : ''}`}
            >
              Pricing
            </Link>
          </nav>

          {/* Right action button */}
          <div className="hidden lg:flex justify-end items-center gap-4">
            <a
              href="https://provider.digi-wire.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-bold text-slate-600 hover:text-[#007FFB] transition-colors"
            >
              Log in
            </a>
            <a
              href="https://provider.digi-wire.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#007FFB] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_4px_14px_rgba(0,127,251,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#006bd1] inline-flex items-center gap-1.5"
            >
              <span>Start free trial</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden justify-end items-center gap-2">
            <a
              href="https://provider.digi-wire.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#007FFB] px-4 py-2 text-xs font-bold text-white shadow-sm"
            >
              Trial
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
