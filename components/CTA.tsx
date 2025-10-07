// src/components/CTA.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ComingSoonModal from './ComingSoonModal';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <section className="bg-gray-950">
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        {/* Background Gradient */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black to-transparent opacity-50" />
        <div className="relative overflow-hidden rounded-3xl bg-black p-12 shadow-2xl">
          {/* Inner Glow */}
           <div className="absolute -top-1/2 left-1/2 h-[200%] w-[150%] -translate-x-1/2 animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E77724_0%,#000_50%,#E77724_100%)] opacity-10" />
          
          <div className="relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-goldplay text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Make Your Next Move
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
            >
              Start digitizing your tour business today. Join over 500+ operators growing with Foxes Technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foxes-orange px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="/contact"
                className="rounded-full px-8 py-4 text-base font-semibold text-white ring-1 ring-inset ring-white/50 transition-colors duration-300 hover:bg-white/10"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}