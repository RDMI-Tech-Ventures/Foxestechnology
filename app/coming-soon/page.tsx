'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ExitIntentModal from '@/components/ExitIntentModal';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer (until December 31, 2025)
  useEffect(() => {
    const targetDate = new Date('2025-12-31T23:59:59');

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving from the top of the viewport
      // and hasn't been shown before and user hasn't already submitted
      if (e.clientY <= 0 && !hasShownExitIntent && !isSubmitted) {
        setShowExitIntent(true);
        setHasShownExitIntent(true);
      }
    };

    // Add a small delay before enabling exit intent (let user see the page first)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000); // Wait 5 seconds before enabling exit intent

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShownExitIntent, isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 5000);
  };

  const handleExitIntentEmailSubmit = (email: string) => {
    console.log('Exit intent email submitted:', email);
    // Here you would normally send this to your backend/email service
  };

  return (
    <>
      {/* Exit Intent Modal */}
      <ExitIntentModal
        isOpen={showExitIntent}
        onClose={() => setShowExitIntent(false)}
        onEmailSubmit={handleExitIntentEmailSubmit}
      />
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background Image with Glassmorphism */}
      <div className="absolute inset-0">
        <Image
          src="/foxeshero.png"
          alt="Background"
          fill
          className="object-cover opacity-5 blur-sm"
          priority
        />
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Animated background elements with improved motion */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: [0.45, 0.05, 0.55, 0.95],
          }}
        />
        <motion.div
          className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: [0.45, 0.05, 0.55, 0.95],
          }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: [0.45, 0.05, 0.55, 0.95],
          }}
        />
        {/* Additional floating particles for premium feel */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-2 h-2 bg-red-500/40 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-blue-400/40 rounded-full"
          animate={{
            y: [0, -80, 0],
            x: [0, -40, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full"
          animate={{
            y: [0, -60, 0],
            x: [0, 30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        {/* Logo Image with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.34, 1.56, 0.64, 1],
            type: "spring",
            stiffness: 100,
          }}
          className="mb-8 flex justify-center"
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 blur-3xl bg-red-600/30 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: {
                  rotate: { duration: 0.5 },
                  scale: { duration: 0.3 }
                }
              }}
            >
              <Image
                src="/foxes1.png"
                alt="Foxes Technology"
                width={200}
                height={200}
                className="relative w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl cursor-pointer"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Logo/Brand with enhanced glow effect */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="mb-12"
        >
          <div className="relative inline-block">
            <motion.h1
              className="relative text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight"
              animate={{
                textShadow: [
                  "0 0 20px rgba(220, 38, 38, 0.3)",
                  "0 0 40px rgba(220, 38, 38, 0.5)",
                  "0 0 20px rgba(220, 38, 38, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Foxes Technology
            </motion.h1>
          </div>
          <motion.div
            className="h-1.5 w-32 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto rounded-full"
            animate={{
              opacity: [0.5, 1, 0.5],
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Main heading with enhanced gradient and animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="mb-8 relative"
          style={{ perspective: "1000px" }}
        >
          <motion.h2
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Coming Soon
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.5,
              delay: 0.6,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="h-1 max-w-md mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-3xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          The ultimate booking and POS platform for tours & activities businesses in{' '}
          <span className="text-red-500 font-semibold">Egypt</span> and the{' '}
          <span className="text-red-500 font-semibold">GCC region</span>
        </motion.p>

        {/* Launch Date Badge with enhanced premium animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="mb-8 flex justify-center"
        >
          <motion.div
            className="relative group"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-full blur-xl group-hover:blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="relative px-8 py-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-xl border border-red-500/30 rounded-full overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(220, 38, 38, 0.2)",
                  "0 0 30px rgba(220, 38, 38, 0.4)",
                  "0 0 20px rgba(220, 38, 38, 0.2)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                }}
              />

              <div className="flex items-center gap-3 relative z-10">
                <motion.svg
                  className="w-5 h-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </motion.svg>
                <motion.p
                  className="text-white font-semibold text-lg md:text-xl"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(255, 255, 255, 0.3)",
                      "0 0 20px rgba(255, 255, 255, 0.5)",
                      "0 0 10px rgba(255, 255, 255, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Launching on <span className="text-red-400">December 31st, 2025</span>
                </motion.p>
                <motion.div
                  className="relative w-2 h-2"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-red-500 rounded-full"
                    animate={{
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 bg-red-500 rounded-full"
                    animate={{
                      scale: [1, 2.5],
                      opacity: [0.6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Countdown Timer with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mb-16"
        >
          {[
            { value: timeLeft.days, label: 'Days', color: 'from-red-600/20' },
            { value: timeLeft.hours, label: 'Hours', color: 'from-orange-600/20' },
            { value: timeLeft.minutes, label: 'Minutes', color: 'from-yellow-600/20' },
            { value: timeLeft.seconds, label: 'Seconds', color: 'from-blue-600/20' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.0 + index * 0.15,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="relative group cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent rounded-2xl blur-xl`}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              />
              <motion.div
                className="relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-red-500/50 group-hover:bg-white/10 transition-all duration-300 overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(220, 38, 38, 0.1)",
                    "0 0 30px rgba(220, 38, 38, 0.2)",
                    "0 0 20px rgba(220, 38, 38, 0.1)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                <motion.div
                  className="text-4xl md:text-6xl font-bold text-white mb-2 tabular-nums"
                  key={item.value}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.value.toString().padStart(2, '0')}
                </motion.div>
                <div className="text-sm md:text-base text-slate-400 uppercase tracking-widest">
                  {item.label}
                </div>
                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-red-500/20 to-transparent"
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Email signup form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="max-w-xl mx-auto mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Reserve Your Spot for Launch Day
          </h3>
          <p className="text-slate-400 mb-6">
            Get exclusive early access and launch updates on December 31st, 2025.
          </p>

          <form onSubmit={handleSubmit} className="relative">
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                className="flex-1 relative group"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      "linear-gradient(to right, rgba(220, 38, 38, 0.2), rgba(37, 99, 235, 0.2))",
                      "linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(220, 38, 38, 0.2))",
                      "linear-gradient(to right, rgba(220, 38, 38, 0.2), rgba(37, 99, 235, 0.2))",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={isSubmitted}
                  className="relative w-full px-6 py-5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileFocus={{
                    borderColor: "rgba(220, 38, 38, 0.5)",
                  }}
                />
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitted}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-red-600/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {/* Ripple effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: 2,
                    opacity: [0, 0.3, 0],
                    transition: { duration: 0.6 }
                  }}
                >
                  <div className="absolute inset-0 bg-white rounded-xl" />
                </motion.div>
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitted ? (
                    <>
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                      Subscribed!
                    </>
                  ) : (
                    'Notify Me'
                  )}
                </span>
              </motion.button>
            </div>
          </form>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 backdrop-blur-xl"
              >
                <p className="text-green-400 font-medium flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  You're all set! We'll send you updates before December 31st, 2025.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Features preview with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {[
            {
              icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
              title: 'Online Booking',
              description: 'Seamless reservation system with real-time availability',
              gradient: 'from-blue-600/20 to-cyan-600/20',
            },
            {
              icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              ),
              title: 'POS Hardware',
              description: 'Modern point-of-sale solutions for your business',
              gradient: 'from-red-600/20 to-orange-600/20',
            },
            {
              icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              title: 'AI-Powered',
              description: 'Smart automation to streamline your operations',
              gradient: 'from-purple-600/20 to-pink-600/20',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.8 + index * 0.15,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="relative group cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl`}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />
              <motion.div
                className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-500 h-full overflow-hidden"
                whileHover={{
                  boxShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.1)",
                    "0 0 40px rgba(255, 255, 255, 0.2)",
                  ],
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)`,
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="text-white mb-4 relative z-10"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: {
                      rotate: { duration: 0.6 },
                      scale: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }
                    }
                  }}
                >
                  {feature.icon}
                </motion.div>

                <motion.h3
                  className="text-xl md:text-2xl font-bold text-white mb-3 relative z-10"
                  initial={{ opacity: 1 }}
                  whileHover={{
                    textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {feature.title}
                </motion.h3>

                <p className="text-slate-400 leading-relaxed relative z-10">
                  {feature.description}
                </p>

                {/* Corner decoration */}
                <motion.div
                  className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact and social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="text-slate-400 space-y-4"
        >
          <p className="text-lg">
            Questions? Contact us at{' '}
            <a
              href="mailto:info@foxestechnology.com"
              className="text-red-500 hover:text-red-400 transition-colors font-medium underline decoration-red-500/30 hover:decoration-red-500"
            >
              info@foxestechnology.com
            </a>
          </p>

          {/* Social links with enhanced animations */}
          <div className="flex justify-center gap-6 pt-4">
            {[
              { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
              { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
              { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href="#"
                className="relative w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group overflow-hidden"
                aria-label={social.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 2.3 + index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -10, 10, 0],
                  transition: {
                    rotate: { duration: 0.4 },
                    scale: { duration: 0.2 }
                  }
                }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-red-600/30 blur-lg opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-red-500/50 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: [1, 1.5],
                    opacity: [0.5, 0],
                    transition: { duration: 0.6, repeat: Infinity }
                  }}
                />

                <motion.svg
                  className="relative w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <path d={social.icon} />
                </motion.svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
