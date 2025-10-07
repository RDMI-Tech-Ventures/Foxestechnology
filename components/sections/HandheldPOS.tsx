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
    <section ref={ref} className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-green-100 to-teal-100 opacity-20 blur-3xl" />
        <div className="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-20 blur-3xl" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(231 119 36) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Product Image with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 left-8 z-20"
            >
              <div className="rounded-2xl border-2 border-orange-200 bg-white px-5 py-3 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Battery className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-bold text-slate-900">
                    All-Day Battery
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Container with Glass Effect */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl">
              {/* Main POS Image */}
              <div className="relative mx-auto aspect-[3/4] max-w-md">
                <Image
                  src="/pos1.png"
                  alt="PAX A920 PRO Handheld Terminal"
                  fill
                  className="object-contain drop-shadow-2xl transition-transform hover:scale-105"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-green-100/60 via-transparent to-transparent rounded-b-3xl" />
              </div>

              {/* Feature Pills Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 rounded-xl border border-white bg-white/80 px-3 py-2 backdrop-blur-md shadow-lg">
                    <Wifi className="h-4 w-4 text-blue-600" />
                    <span className="text-xs font-bold text-slate-900">4G/WiFi</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white bg-white/80 px-3 py-2 backdrop-blur-md shadow-lg">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-bold text-slate-900">Secure</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Product Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-center"
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-orange-100 via-red-100 to-pink-100 px-8 py-4 text-2xl font-black text-orange-600 shadow-lg">
                PAX A920 PRO
              </span>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 space-y-8 lg:order-2"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-gradient-to-r from-green-50 to-teal-50 px-5 py-2.5 shadow-sm backdrop-blur-sm"
            >
              <Zap className="h-4 w-4 text-green-600" />
              <span className="text-sm font-bold text-slate-900">Mobile POS Solution</span>
            </motion.div>

            <h2 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Sell Anywhere with{' '}
              <span className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                Handheld Mobile
              </span>
            </h2>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-600 lg:text-xl">
                Empower your team with <span className="font-bold text-slate-900">portable terminals</span> that work brilliantly for field representatives and tour sellers.
              </p>

              <p className="text-lg leading-relaxed text-slate-600 lg:text-xl">
                <span className="font-bold text-orange-600">All-in-one software</span> to sell securely and efficiently anywhere, with enough battery to last all day.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              {[
                { icon: Battery, label: 'All-Day Battery', color: 'from-green-500 to-teal-600' },
                { icon: CreditCard, label: 'Fast Payments', color: 'from-blue-500 to-indigo-600' },
                { icon: Wifi, label: '4G & WiFi', color: 'from-purple-500 to-pink-600' },
                { icon: Shield, label: 'Bank-Level Security', color: 'from-orange-500 to-red-600' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-green-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg transition-transform group-hover:scale-110`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-900">{feature.label}</div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/solutions/pos-hardware">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-teal-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-green-500/30 transition-all duration-300 hover:shadow-green-500/50"
                >
                  Explore POS Hardware
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
