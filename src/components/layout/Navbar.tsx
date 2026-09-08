import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { mainNavLinks } from '../../data/nav';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2.5 bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(15,23,42,0.06)] border-b border-slate-200/80"
            : "py-4 bg-white/60 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
                  <path d="M7 9L13.5 22L16 17L11.5 9H7Z" fill="#3B82F6" />
                  <path d="M16 17L18.5 22L25 9H20.5L16 17Z" fill="#25D366" />
                  <circle cx="16" cy="11" r="2.5" fill="#38BDF8" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-lg text-slate-900 tracking-tight">
                    Vyxel<span className="text-brand-600">Connect</span>
                  </span>
                  <Badge variant="whatsapp" size="sm" className="hidden sm:inline-flex">
                    Meta BSP
                  </Badge>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {mainNavLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                      isActive
                        ? "text-brand-600 bg-brand-50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              <Button
                variant="ghost"
                size="sm"
                href="https://provider.digi-wire.com/login"
                isExternal
              >
                Log in
              </Button>
              <Button
                variant="whatsapp"
                size="sm"
                href="https://provider.digi-wire.com/signup"
                isExternal
                iconRight={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Start free trial
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex sm:hidden items-center gap-2">
              <Button
                variant="whatsapp"
                size="sm"
                href="https://provider.digi-wire.com/signup"
                isExternal
              >
                Trial
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
