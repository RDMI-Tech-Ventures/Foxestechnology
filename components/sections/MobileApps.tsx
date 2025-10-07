// components/sections/MobileApps.tsx
'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

export default function MobileApps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-orange-50/40 blur-3xl" />
        <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-teal-50/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="mb-8 text-5xl font-bold text-[#E77724] sm:text-6xl lg:text-7xl"
          >
            Mobile Apps
          </motion.h2>

          {/* Description */}
        <motion.p
  variants={itemVariants}
  className="mx-auto mb-16 max-w-4xl text-lg leading-relaxed text-slate-700 sm:text-xl lg:text-2xl"
>
  Take control of your tour business from anywhere. The{' '}
  <span className="font-semibold text-slate-900">Foxes Technology App</span>{' '}
  puts complete booking management, payment processing, and real-time analytics
  at your fingertips. Run your business on the move—freedom has never felt so
  powerful.
</motion.p>

          {/* Available On Label */}
          <motion.h3
            variants={itemVariants}
            className="mb-12 text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Available on
          </motion.h3>

          {/* App Store Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8"
          >
            {/* Google Play Badge */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.foxestechnology&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="h-16 w-56 overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 group-hover:shadow-2xl sm:h-20 sm:w-64"
              >
                <GooglePlayBadge />
              </motion.div>
            </Link>

            {/* App Store Badge */}
            <Link
              href="https://apps.apple.com/ph/app/foxes-technology/id6468765872"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="h-16 w-56 overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 group-hover:shadow-2xl sm:h-20 sm:w-64"
              >
                <AppStoreBadge />
              </motion.div>
            </Link>
          </motion.div>

          {/* QR Codes for Desktop */}
          <motion.div
            variants={itemVariants}
            className="mt-16 hidden lg:block"
          >
            <p className="mb-6 text-sm font-medium text-slate-500">
              Scan to download
            </p>
            <div className="flex items-center justify-center gap-12">
              {/* Android QR */}
              <div className="text-center">
                <div className="mb-3 inline-block rounded-xl border-2 border-slate-200 bg-white p-3 shadow-md">
                  <QRCodePlaceholder />
                </div>
                <div className="text-xs font-medium text-slate-600">Android</div>
              </div>

              {/* iOS QR */}
              <div className="text-center">
                <div className="mb-3 inline-block rounded-xl border-2 border-slate-200 bg-white p-3 shadow-md">
                  <QRCodePlaceholder />
                </div>
                <div className="text-xs font-medium text-slate-600">iOS</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E77724] to-transparent" />
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