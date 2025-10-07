// components/sections/HandheldPOSSimple.tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HandheldPOSSimple() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[3/4] max-w-md">
              <Image
                src="/pos1.png"
                alt="PAX A920 PRO Handheld Terminal"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Product Badge */}
            <div className="mt-8 text-left">
              <span className="inline-block rounded-full bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-3 text-lg font-bold text-[#E77724] shadow-sm">
                PAX A920 PRO
              </span>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Sell in person with{' '}
              <span className="text-[#E77724]">Handheld mobile</span>
            </h2>

            <p className="text-lg leading-relaxed text-slate-600 lg:text-xl">
              Terminals that work brilliantly by your company representatives and
              tour sellers anywhere and have more than enough battery to last all
              day on a single charge.
            </p>

            <p className="text-lg leading-relaxed text-slate-600 lg:text-xl">
              All in one software to sell securely and efficiently in any location.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/products/handheld-pos">
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
        </div>
      </div>
    </section>
  );
}