// components/sections/MobileApps.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Smartphone } from 'lucide-react';

export default function MobileApps() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background with Heavy Glassmorphism Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero2.png"
          alt="Mobile technology background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/98 via-white/98 to-orange-50/98"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(20 184 166) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 left-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-teal-300/30 to-cyan-300/20 blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-orange-300/20 to-amber-300/30 blur-3xl z-0"></div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Badge with Enhanced Glass */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/50 bg-teal-100/60 px-5 py-2.5 shadow-lg backdrop-blur-xl">
            <Smartphone className="h-5 w-5 text-teal-600" />
            <span className="text-sm font-bold text-teal-900">Mobile Business Management</span>
          </div>

          {/* Title */}
          <h2 className="mb-8 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Manage Your Egyptian{' '}
            <span className="block mt-2 bg-gradient-to-r from-teal-600 via-cyan-600 to-orange-600 bg-clip-text text-transparent">
              Tours from Anywhere
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mb-16 max-w-4xl text-lg leading-relaxed text-slate-700 lg:text-xl">
            Take control of your Egyptian tour business from Cairo to Aswan. The{' '}
            <span className="font-bold text-slate-900">Foxes Technology App</span>{' '}
            delivers complete booking management, mobile payment processing, and real-time analytics
            on your phone—manage operations from Luxor temple tours to Red Sea excursions, anytime, anywhere.
          </p>

          {/* Available On Label */}
          <h3 className="mb-12 text-2xl font-black text-slate-900 sm:text-3xl">
            Download Now
          </h3>

          {/* App Store Badges with Glass Effect */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            {/* Google Play Badge */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.foxestechnology&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative h-16 w-56 overflow-hidden rounded-xl border border-white/60 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:shadow-2xl group-hover:border-teal-300 group-hover:scale-105 group-hover:-translate-y-1 sm:h-20 sm:w-64 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent"></div>
                <GooglePlayBadge />
              </div>
            </Link>

            {/* App Store Badge */}
            <Link
              href="https://apps.apple.com/ph/app/foxes-technology/id6468765872"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative h-16 w-56 overflow-hidden rounded-xl border border-white/60 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:shadow-2xl group-hover:border-teal-300 group-hover:scale-105 group-hover:-translate-y-1 sm:h-20 sm:w-64 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent"></div>
                <AppStoreBadge />
              </div>
            </Link>
          </div>

          {/* QR Codes for Desktop */}
          <div className="mt-16 hidden lg:block">
            <p className="mb-6 text-sm font-bold text-slate-700">
              Scan to download
            </p>
            <div className="flex items-center justify-center gap-12">
              {/* Android QR */}
              <div className="text-center">
                <div className="relative mb-3 inline-block overflow-hidden rounded-xl border border-white/60 bg-white/80 p-3 shadow-2xl backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent"></div>
                  <div className="relative">
                    <QRCodePlaceholder />
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-900">Android</div>
              </div>

              {/* iOS QR */}
              <div className="text-center">
                <div className="relative mb-3 inline-block overflow-hidden rounded-xl border border-white/60 bg-white/80 p-3 shadow-2xl backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent"></div>
                  <div className="relative">
                    <QRCodePlaceholder />
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-900">iOS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-50" />
    </section>
  );
}

// Google Play Badge SVG Component
function GooglePlayBadge() {
  return (
    <svg
      viewBox="0 0 646 250"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="646" height="250" rx="25" fill="#000000" />
      
      {/* Play Store Icon */}
      <g transform="translate(60, 60)">
        <defs>
          <linearGradient id="playGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D7FE" />
            <stop offset="100%" stopColor="#0086F0" />
          </linearGradient>
          <linearGradient id="playGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD000" />
            <stop offset="100%" stopColor="#F86800" />
          </linearGradient>
          <linearGradient id="playGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3A44" />
            <stop offset="100%" stopColor="#B11162" />
          </linearGradient>
          <linearGradient id="playGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00E48B" />
            <stop offset="100%" stopColor="#00AB4E" />
          </linearGradient>
        </defs>
        
        <path d="M10,0 L10,120 L70,60 Z" fill="url(#playGradient1)" />
        <path d="M10,0 L70,60 L100,40 L20,0 Z" fill="url(#playGradient2)" />
        <path d="M10,120 L70,60 L100,80 L20,120 Z" fill="url(#playGradient3)" />
        <path d="M70,60 L100,40 L100,80 Z" fill="url(#playGradient4)" />
      </g>

      {/* Text */}
      <text x="200" y="95" fill="#FFFFFF" fontSize="24" fontWeight="400">
        GET IT ON
      </text>
      <text x="200" y="145" fill="#FFFFFF" fontSize="52" fontWeight="700">
        Google Play
      </text>
    </svg>
  );
}

// App Store Badge SVG Component
function AppStoreBadge() {
  return (
    <svg
      viewBox="0 0 646 250"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="646" height="250" rx="25" fill="#000000" />
      
      {/* Apple Logo */}
      <g transform="translate(70, 60)">
        <path
          d="M55.5,27.5 C52,24 48,22 43.5,22 C39,22 35,24 31.5,27.5 C28,31 26,35 26,39.5 C26,44 28,48 31.5,51.5 L55.5,75.5 C59,72 61,68 61,63.5 C61,59 59,55 55.5,51.5 Z M43.5,17 C48.5,17 53,19 57,23 C61,27 63,31.5 63,36.5 C63,41.5 61,46 57,50 L33,74 C29,70 27,65.5 27,60.5 C27,55.5 29,51 33,47 C37,43 41.5,41 46.5,41 C51.5,41 56,43 60,47 L43.5,30.5 L27,47 C23,43 21,38.5 21,33.5 C21,28.5 23,24 27,20 C31,16 35.5,14 40.5,14 C45.5,14 50,16 54,20 Z"
          fill="#FFFFFF"
        />
      </g>

      {/* Text */}
      <text x="200" y="95" fill="#FFFFFF" fontSize="24" fontWeight="400">
        Download on the
      </text>
      <text x="200" y="145" fill="#FFFFFF" fontSize="52" fontWeight="700">
        App Store
      </text>
    </svg>
  );
}

// QR Code Placeholder SVG Component
function QRCodePlaceholder() {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* QR Code Pattern - Simplified placeholder */}
      <rect width="112" height="112" fill="white" />
      
      {/* Top-left corner */}
      <rect x="4" y="4" width="32" height="32" stroke="#000" strokeWidth="4" fill="none" />
      <rect x="12" y="12" width="16" height="16" fill="#000" />
      
      {/* Top-right corner */}
      <rect x="76" y="4" width="32" height="32" stroke="#000" strokeWidth="4" fill="none" />
      <rect x="84" y="12" width="16" height="16" fill="#000" />
      
      {/* Bottom-left corner */}
      <rect x="4" y="76" width="32" height="32" stroke="#000" strokeWidth="4" fill="none" />
      <rect x="12" y="84" width="16" height="16" fill="#000" />
      
      {/* Random pattern blocks */}
      <rect x="44" y="8" width="8" height="8" fill="#000" />
      <rect x="56" y="8" width="8" height="8" fill="#000" />
      <rect x="44" y="20" width="8" height="8" fill="#000" />
      <rect x="68" y="20" width="8" height="8" fill="#000" />
      
      <rect x="8" y="44" width="8" height="8" fill="#000" />
      <rect x="20" y="44" width="8" height="8" fill="#000" />
      <rect x="8" y="56" width="8" height="8" fill="#000" />
      <rect x="32" y="56" width="8" height="8" fill="#000" />
      
      <rect x="44" y="44" width="8" height="8" fill="#000" />
      <rect x="56" y="44" width="8" height="8" fill="#000" />
      <rect x="68" y="44" width="8" height="8" fill="#000" />
      <rect x="44" y="56" width="8" height="8" fill="#000" />
      <rect x="68" y="56" width="8" height="8" fill="#000" />
      
      <rect x="80" y="44" width="8" height="8" fill="#000" />
      <rect x="92" y="44" width="8" height="8" fill="#000" />
      <rect x="104" y="44" width="8" height="8" fill="#000" />
      <rect x="80" y="56" width="8" height="8" fill="#000" />
      <rect x="104" y="56" width="8" height="8" fill="#000" />
      
      <rect x="44" y="80" width="8" height="8" fill="#000" />
      <rect x="56" y="80" width="8" height="8" fill="#000" />
      <rect x="68" y="80" width="8" height="8" fill="#000" />
      <rect x="80" y="80" width="8" height="8" fill="#000" />
      <rect x="44" y="92" width="8" height="8" fill="#000" />
      <rect x="68" y="92" width="8" height="8" fill="#000" />
      <rect x="92" y="92" width="8" height="8" fill="#000" />
      <rect x="44" y="104" width="8" height="8" fill="#000" />
      <rect x="56" y="104" width="8" height="8" fill="#000" />
      <rect x="80" y="104" width="8" height="8" fill="#000" />
    </svg>
  );
}