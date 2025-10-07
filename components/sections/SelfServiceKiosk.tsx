// components/sections/SelfServiceKiosk.tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Clock, Shield, Smartphone, Zap, CheckCircle, TrendingUp } from 'lucide-react';

export default function SelfServiceKiosk() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-orange-100 to-red-100 opacity-20 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 opacity-20 blur-3xl" />
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
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50 px-5 py-2.5 shadow-sm backdrop-blur-sm"
            >
              <Zap className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-bold text-slate-900">Self-Service Solution</span>
            </motion.div>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Self-Service Kiosk
              </span>
            </h2>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-600 lg:text-xl">
                The self-service kiosk offers <span className="font-bold text-slate-900">efficient customer-focused sales</span> 24/7.
              </p>

              <p className="text-lg leading-relaxed text-slate-600 lg:text-xl">
                Featuring a <span className="font-bold text-orange-600">fully-integrated payment solution</span> — no multiple devices needed.
              </p>

              <p className="text-lg leading-relaxed text-slate-600 lg:text-xl">
                Powered by the <span className="font-bold text-orange-600">Foxes Booking App</span>, deployable indoors or outdoors.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              {[
                { icon: Clock, label: '24/7 Availability', color: 'from-orange-500 to-red-600' },
                { icon: Shield, label: 'Secure Payments', color: 'from-teal-500 to-cyan-600' },
                { icon: Smartphone, label: 'Touch Interface', color: 'from-purple-500 to-pink-600' },
                { icon: TrendingUp, label: 'Boost Revenue', color: 'from-blue-500 to-indigo-600' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-orange-300 hover:shadow-lg"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/solutions/kiosk">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50"
                >
                  Explore Kiosk Solution
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right - Product Image with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 right-8 z-20"
            >
              <div className="rounded-2xl border-2 border-orange-200 bg-white px-5 py-3 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                  <span className="text-sm font-bold text-slate-900">
                    <span className="text-orange-600">Foxes</span> Kiosk Concept
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Container */}
            <div className="relative overflow-visible rounded-3xl bg-transparent p-8">
              {/* Main Kiosk Image with Floating Animation */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative mx-auto aspect-[3/4] max-w-md"
              >
                <Image
                  src="/kiosk.png"
                  alt="PAX SK700 Self-Service Kiosk"
                  fill
                  className="object-contain"
                  priority
                />

              </motion.div>

              {/* Stats Overlay - Below Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
                className="mt-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 p-5 text-center">
                    <div className="text-3xl font-black text-orange-600">24/7</div>
                    <div className="text-sm font-bold text-slate-600">Operation</div>
                  </div>
                  <div className="rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 p-5 text-center">
                    <div className="text-3xl font-black text-orange-600">-60%</div>
                    <div className="text-sm font-bold text-slate-600">Labor Cost</div>
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
                PAX SK700
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
