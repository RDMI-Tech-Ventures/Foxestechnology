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
    <section ref={ref} className="relative overflow-hidden py-20 lg:py-32">
      {/* Background with Heavy Glassmorphism Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image4.png"
          alt="Modern technology background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/98 via-white/98 to-purple-50/98"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(234 88 12) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 right-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-orange-300/30 to-red-300/20 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-purple-300/20 to-pink-300/30 blur-3xl z-0"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge with Enhanced Glass */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-orange-300/50 bg-orange-100/60 px-5 py-2.5 shadow-lg backdrop-blur-xl"
            >
              <Zap className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-bold text-orange-900">24/7 Self-Service Solution</span>
            </motion.div>

            <h2 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Serve Travelers{' '}
              <span className="block mt-2 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Around the Clock
              </span>
            </h2>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-700 lg:text-xl">
                Deploy <span className="font-bold text-slate-900">self-service kiosks</span> across Egyptian tourism hubs—from Cairo airport terminals to Luxor hotel lobbies, Alexandria cruise ports to Hurghada resort complexes.
              </p>

              <p className="text-lg leading-relaxed text-slate-700 lg:text-xl">
                <span className="font-bold text-orange-600">All-in-one payment solution</span> with touchscreen interface, secure transactions, and real-time inventory sync—sell tours, tickets, and experiences 24/7 without staff.
              </p>

              <p className="text-lg leading-relaxed text-slate-700 lg:text-xl">
                Powered by <span className="font-bold text-orange-600">Foxes Booking Platform</span>, weather-resistant for indoor or outdoor deployment—perfect for high-traffic Egyptian destinations.
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
                  className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-5 shadow-xl backdrop-blur-xl transition-all hover:border-orange-300 hover:bg-white/80 hover:shadow-2xl"
                >
                  {/* Glass effect layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent opacity-50"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-100/0 to-red-100/0 opacity-0 transition-opacity group-hover:opacity-30"></div>

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
              <Link href="/solutions/kiosk">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50"
                >
                  <span className="relative z-10">Explore Kiosk Solution</span>
                  <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
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
            {/* Floating Badge with Glass Effect */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 right-8 z-20"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 px-5 py-3 shadow-2xl backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-transparent"></div>
                <div className="relative flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                  <span className="text-sm font-bold text-slate-900">
                    PAX SK700 Kiosk
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
                className="mt-8"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 px-4 py-4 shadow-lg backdrop-blur-xl text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent"></div>
                    <div className="relative">
                      <div className="text-3xl font-black text-orange-600">24/7</div>
                      <div className="text-sm font-bold text-slate-900">Operation</div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 px-4 py-4 shadow-lg backdrop-blur-xl text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent"></div>
                    <div className="relative">
                      <div className="text-3xl font-black text-orange-600">-60%</div>
                      <div className="text-sm font-bold text-slate-900">Labor Cost</div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100/60 via-red-100/50 to-pink-100/60"></div>
                <span className="relative text-2xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                  PAX SK700
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
