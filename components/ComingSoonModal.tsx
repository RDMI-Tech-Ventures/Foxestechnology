'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgb(239 68 68) 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-red-500/20 blur-3xl"></div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:rotate-90"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="relative text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 shadow-lg"
                >
                  <Sparkles className="h-10 w-10 text-white" />
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-4 text-3xl font-black text-white"
                >
                  Coming Soon!
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6 text-base leading-relaxed text-gray-300"
                >
                  We&apos;re working hard to bring you this feature.
                  Get notified when it&apos;s ready!
                </motion.p>

                {/* Email Form */}
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you! We\'ll notify you when this feature launches.');
                    onClose();
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-5 py-3.5 text-white placeholder-white/60 backdrop-blur-md transition-all focus:border-red-500 focus:bg-white/20 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3.5 font-bold text-white shadow-lg transition-all hover:shadow-xl"
                  >
                    <span>Notify Me</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.form>

                {/* Footer Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 text-xs text-gray-500"
                >
                  In the meantime, explore our{' '}
                  <Link href="/solutions" onClick={onClose} className="font-semibold text-red-400 hover:text-red-300">
                    solutions
                  </Link>
                  {' '}or{' '}
                  <Link href="/contact" onClick={onClose} className="font-semibold text-red-400 hover:text-red-300">
                    contact us
                  </Link>
                </motion.p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
