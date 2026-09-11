"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Lock,
  Layers,
  Ship,
  TrendingUp,
  Building2,
  FileSpreadsheet,
} from "lucide-react";
import Button from "./Button";

interface NavLinkItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const navLinks: NavLinkItem[] = [
  { name: "Trading Services", href: "/services", icon: Layers },
  { name: "Physical Commodities", href: "/industries", icon: Ship },
  { name: "Market Intelligence", href: "/insights", icon: TrendingUp },
  { name: "Corporate & Governance", href: "/about", icon: Building2 },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on pathname change or window resize
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-300">
      {/* 1. Institutional Pre-Header Utility Bar */}
      <div className="bg-navy-950/95 border-b border-navy-800/80 backdrop-blur text-[11px] text-slate-400 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Active Global Trading Desks Telemetry */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              DESKS ACTIVE
            </span>
            <span className="hidden sm:inline-block text-navy-700">|</span>
            <div className="hidden sm:flex items-center gap-3 text-slate-400 font-mono text-[10.5px]">
              <span className="hover:text-slate-200 transition-colors">
                <strong className="text-slate-300">GENEVA</strong> UTC+2
              </span>
              <span>•</span>
              <span className="hover:text-slate-200 transition-colors">
                <strong className="text-slate-300">DUBAI</strong> UTC+4
              </span>
              <span>•</span>
              <span className="hover:text-slate-200 transition-colors">
                <strong className="text-slate-300">SINGAPORE</strong> UTC+8
              </span>
              <span>•</span>
              <span className="hover:text-slate-200 transition-colors">
                <strong className="text-slate-300">HOUSTON</strong> UTC-5
              </span>
            </div>
          </div>

          {/* Compliance & Execution Hotline */}
          <div className="flex items-center gap-4 text-[10.5px]">
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-gold" />
              GAFTA • FOSFA • LME Compliant
            </span>
            <span className="hidden md:inline-block text-navy-700">|</span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-brand-blue-light" />
              <span className="font-mono">Direct Trade Desk</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Executive Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-navy-900/95 backdrop-blur-md border-b border-navy-700/80 shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            : "bg-navy-900/90 backdrop-blur-sm border-b border-navy-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Brand Logo & Trading Emblem */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md py-1 shrink-0"
            >
              {/* Official Client Trading Emblem */}
              <div className="relative w-11 h-11 flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo-emblem.png"
                  alt="Vision Vibe Global Official Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(29,78,216,0.35)] group-hover:scale-105 transition-transform duration-200"
                  priority
                />
              </div>

              {/* Company Wordmark */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-display text-xl font-extrabold tracking-tight text-white group-hover:text-slate-100 transition-colors">
                    Vision Vibe
                  </span>
                  <span className="font-display text-xl font-bold tracking-tight text-accent-gold">
                    Global
                  </span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-slate-400 mt-1 font-semibold">
                  Physical Commodities &amp; Trade
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center h-full space-x-0.5 xl:space-x-1"
              aria-label="Main Commercial Navigation"
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative h-full flex items-center px-3 xl:px-4 text-[13.5px] xl:text-sm font-medium whitespace-nowrap transition-colors duration-150 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-brand-blue-light shadow-[0_0_10px_rgba(37,99,235,0.9)] rounded-full animate-in fade-in duration-200" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Action Area */}
            <div className="hidden sm:flex items-center gap-3 xl:gap-4 shrink-0">
              <Link
                href="/contact"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white transition-colors px-2.5 py-1.5 rounded hover:bg-navy-800/60 whitespace-nowrap"
              >
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Trader Portal</span>
              </Link>

              <Button
                href="/rfq"
                size="sm"
                variant="primary"
                className="shadow-sm font-semibold tracking-wide whitespace-nowrap shrink-0"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 mr-1" />
                <span>Submit RFQ</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </Button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/rfq"
                className="sm:hidden text-xs font-semibold px-2.5 py-1.5 rounded bg-brand-blue text-white hover:bg-brand-blue-hover"
              >
                RFQ
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label={
                  mobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-b border-navy-700/80 px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {/* Mobile Global Desk Status */}
          <div className="p-3 bg-navy-900/80 border border-navy-800 rounded-lg text-xs space-y-1.5">
            <div className="flex items-center justify-between text-slate-400 font-mono text-[11px]">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                TRADING DESKS ACTIVE
              </span>
              <span>24/7 Global Desk</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              Geneva • Dubai • Singapore • Houston
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white bg-navy-800/90 border-l-4 border-brand-blue"
                      : "text-slate-300 hover:text-white hover:bg-navy-900"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent
                      className={`w-4 h-4 ${
                        isActive ? "text-brand-blue-light" : "text-slate-400"
                      }`}
                    />
                    <span>{link.name}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              );
            })}
          </nav>

          {/* Bottom Action Section */}
          <div className="pt-3 border-t border-navy-800/80 flex flex-col gap-2.5">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 hover:text-white py-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Trader &amp; Counterparty Portal</span>
            </Link>
            <Button
              href="/rfq"
              variant="primary"
              size="md"
              className="w-full justify-center font-semibold"
            >
              <FileSpreadsheet className="w-4 h-4 mr-1.5" />
              <span>Submit Commercial RFQ</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
