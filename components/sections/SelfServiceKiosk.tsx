// components/sections/SelfServiceKiosk.tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Clock, Shield, Smartphone } from 'lucide-react';

export default function SelfServiceKiosk() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-20 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-orange-100/20 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-teal-100/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-[#E77724]">Self-service kiosk</span>
            </h2>

            <p className="text-lg leading-relaxed text-slate-600 lg:text-xl">
              The self-service kiosk is a great way to offer efficient customer-focused sales.
            </p>

            <p className="text-lg leading-relaxed text-slate-600 lg:text-xl">
              We have developed a <span className="font-semibold text-slate-900">fully-integrated payment solution</span> so you don't need to manage multiple devices.
            </p>

            <p className="text-lg leading-relaxed text-slate-600 lg:text-xl">
              The kiosk is powered by the <span className="font-semibold text-[#E77724]">Foxes Booking App</span> can be located indoors or outdoors ensuring you can <span className="font-semibold text-slate-900">keep selling 24/7</span>.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#E77724] to-orange-600">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div className="text-sm font-semibold text-slate-900">24/7 Sales</div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-600">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div className="text-sm font-semibold text-slate-900">Secure Payments</div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-600 to-slate-800">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <div className="text-sm font-semibold text-slate-900">Self-Service</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/products/kiosk">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E77724] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right - Product Image with Background */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 -z-10 opacity-10">
              <Image
                src="/kiosk.png"
                alt="Kiosk Background"
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            {/* Concept Badge */}
            <div className="mb-4 text-right">
              <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-slate-900">
                <span className="text-[#E77724]">Foxes</span> Kiosk <span className="text-slate-600">Concept</span>
              </span>
            </div>

            {/* Main Kiosk Image */}
            <div className="relative mx-auto aspect-[3/4] max-w-md">
              <Image
                src="/kiosk.png"
                alt="PAX SK700 Self-Service Kiosk"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />

              {/* Gradient Overlay at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-100/80 to-transparent rounded-b-3xl" />
            </div>

            {/* Product Badge */}
            <div className="mt-8 text-right">
              <span className="inline-block rounded-full bg-gradient-to-r from-orange-100 to-orange-200 px-6 py-3 text-xl font-bold text-[#E77724] shadow-sm">
                PAX SK700
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}