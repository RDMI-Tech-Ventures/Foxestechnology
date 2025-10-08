'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BRAND_COLOR_PRIMARY = "bg-red-600";
const BRAND_HOVER_PRIMARY = "hover:bg-red-700";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/features', label: 'Features' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-gradient-to-b from-black/30 via-black/20 to-transparent backdrop-blur-3xl shadow-2xl shadow-black/20 border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="group relative flex items-center transition-opacity hover:opacity-80">
              <Image
                src="/logo.png"
                alt="Foxes Technology"
                width={240}
                height={65}
                className="h-14 w-auto transition-transform group-hover:scale-105 lg:h-16"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-4 py-2 text-sm font-bold tracking-tight transition-all rounded-lg ${
                    isScrolled 
                      ? 'text-slate-900 hover:text-slate-900 hover:bg-white/20' 
                      : 'text-white hover:bg-white/10 drop-shadow-lg'
                  }`}
                  style={!isScrolled ? { textShadow: '0 1px 5px rgba(0, 0, 0, 0.5)' } : {}}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 ${BRAND_COLOR_PRIMARY} transition-all duration-300 group-hover:w-1/2`}></span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/login"
                className={`px-4 py-2 text-sm font-bold tracking-tight transition-all rounded-lg ${
                  isScrolled 
                    ? 'text-slate-900 hover:text-slate-900 hover:bg-white/20' 
                    : 'text-white hover:bg-white/10 drop-shadow-lg'
                }`}
                style={!isScrolled ? { textShadow: '0 1px 5px rgba(0, 0, 0, 0.5)' } : {}}
              >
                Log in
              </Link>
              <Link
                href="/get-started"
                className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full ${BRAND_COLOR_PRIMARY} px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-all duration-300 ${BRAND_HOVER_PRIMARY} hover:shadow-red-500/40`}
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-all ${
                isScrolled 
                  ? 'hover:bg-white/20 text-slate-900' 
                  : 'hover:bg-white/10 text-white drop-shadow-lg'
              }`}
              style={!isScrolled ? { textShadow: '0 1px 5px rgba(0, 0, 0, 0.5)' } : {}}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative h-full overflow-y-auto"
            >
              <div className="min-h-full flex flex-col px-6 pt-24 pb-8">
                {/* Navigation Links */}
                <nav className="flex-1 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-all hover:border-red-500/50 hover:bg-red-500/10"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-2xl font-black text-white">{link.label}</span>
                        <ChevronRight className="h-6 w-6 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-red-500" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Bottom CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="space-y-4 pt-8 border-t border-white/10"
                >
                  <Link
                    href="/login"
                    className="flex items-center justify-center rounded-2xl border-2 border-white/20 bg-white/5 px-6 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/get-started"
                    className={`group flex items-center justify-center gap-2 rounded-2xl ${BRAND_COLOR_PRIMARY} px-6 py-4 text-lg font-bold text-white shadow-2xl shadow-red-500/30 transition-all ${BRAND_HOVER_PRIMARY}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Get Started Free</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm ring-1 ring-white/10">
                      <div className="text-xl font-black text-white">500+</div>
                      <div className="text-xs font-semibold text-gray-400">Operators</div>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm ring-1 ring-white/10">
                      <div className="text-xl font-black text-white">$50M+</div>
                      <div className="text-xs font-semibold text-gray-400">Revenue</div>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm ring-1 ring-white/10">
                      <div className="text-xl font-black text-white">1M+</div>
                      <div className="text-xs font-semibold text-gray-400">Bookings</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}