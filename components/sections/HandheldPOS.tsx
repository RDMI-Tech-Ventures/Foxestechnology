// components/sections/HandheldPOS.tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Battery, Wifi, CreditCard, CheckCircle, Zap, Shield } from 'lucide-react';

export default function HandheldPOS() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 lg:py-32">
      {/* Background with Heavy Glassmorphism Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
          alt="Modern business background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/98 via-white/98 to-green-50/98"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(34 197 94) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 right-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-green-300/30 to-teal-300/20 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-teal-300/20 to-blue-300/30 blur-3xl z-0"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Product Image with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Floating Badge with Glass Effect */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 left-8 z-20"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 px-5 py-3 shadow-2xl backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-transparent"></div>
                <div className="relative flex items-center gap-2">
                  <Battery className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-bold text-slate-900">
                    All-Day Battery Life
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Container */}
            <div className="relative overflow-visible rounded-3xl bg-transparent p-8">
              {/* Main POS Image with Floating Animation */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative mx-auto aspect-[3/4] max-w-md"
              >
                <Image
                  src="/pos1.png"
                  alt="PAX A920 PRO Handheld Terminal"
                  fill
                  className="object-contain"
                  priority
                />

              </motion.div>

              {/* Feature Pills - Below Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 px-4 py-4 shadow-lg backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <Wifi className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-bold text-slate-900">4G/WiFi</span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 px-4 py-4 shadow-lg backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-bold text-slate-900">Secure</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Product Badge with Enhanced Glass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-center"
            >
              <div className="relative inline-block overflow-hidden rounded-full border border-white/60 bg-white/80 px-8 py-4 shadow-2xl backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-green-100/60 via-teal-100/50 to-blue-100/60"></div>
                <span className="relative text-2xl font-black bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                  PAX A920 PRO
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 space-y-8 lg:order-2"
          >
            {/* Badge with Enhanced Glass */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-green-300/50 bg-green-100/60 px-5 py-2.5 shadow-lg backdrop-blur-xl"
            >
              <Zap className="h-5 w-5 text-green-600" />
              <span className="text-sm font-bold text-green-900">Mobile POS Solution</span>
            </motion.div>

            <h2 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Sell Everywhere{' '}
              <span className="block mt-2 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                Across Egypt
              </span>
            </h2>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-700 lg:text-xl">
                Empower your field teams with <span className="font-bold text-slate-900">portable POS terminals</span> perfect for Egyptian tour operators—from Cairo hotels to Luxor cruise docks, Red Sea resorts to desert safari camps.
              </p>

              <p className="text-lg leading-relaxed text-slate-700 lg:text-xl">
                <span className="font-bold text-green-600">All-in-one mobile solution</span> with all-day battery life, 4G connectivity, and secure payment processing—sell tickets, process bookings, and accept payments anywhere your tours take you.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              {[
                { icon: Battery, label: 'All-Day Battery', color: 'from-green-500 to-teal-600' },
                { icon: CreditCard, label: 'Instant Payments', color: 'from-blue-500 to-indigo-600' },
                { icon: Wifi, label: '4G & WiFi Ready', color: 'from-purple-500 to-pink-600' },
                { icon: Shield, label: 'Bank-Grade Security', color: 'from-orange-500 to-red-600' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-5 shadow-xl backdrop-blur-xl transition-all hover:border-green-300 hover:bg-white/80 hover:shadow-2xl"
                >
                  {/* Glass effect layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent opacity-50"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-100/0 to-teal-100/0 opacity-0 transition-opacity group-hover:opacity-30"></div>

                  <div className="relative flex items-center gap-4">
                    <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-900">{feature.label}</div>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 ring-1 ring-green-400/30 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/solutions/pos-hardware">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-green-600 to-teal-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-green-500/30 transition-all duration-300 hover:shadow-green-500/50"
                >
                  <span className="relative z-10">Explore POS Hardware</span>
                  <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
