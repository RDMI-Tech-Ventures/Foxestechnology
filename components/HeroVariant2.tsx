'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useInView, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, BarChart3, DollarSign, TrendingUp } from 'lucide-react';

// --- Configuration ---
const BACKGROUND_IMAGES = [
  { src: '/hero3.png', alt: 'Tourists visiting the Pyramids of Giza at sunset' },
  { src: '/hero2.png', alt: 'Stunning view of Luxor Temple with a tour group' },
  { src: '/hero3.png', alt: 'A tour operator using a handheld device to sell tickets' },
];

const BRAND_COLOR_PRIMARY = "bg-red-600";
const BRAND_HOVER_PRIMARY = "hover:bg-red-700";
const BRAND_TEXT_PRIMARY = "text-red-600";

// --- Reusable Animated Counter Component ---
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const spring = useSpring(isInView ? value : 0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => {
    if (value >= 1000000) return `${(current / 1000000).toFixed(1)}M+`;
    if (value >= 1000) return `${Math.round(current / 1000)}k+`;
    return Math.round(current).toLocaleString() + '+';
  });

  useEffect(() => { if (isInView) { spring.set(value); } }, [isInView, value, spring]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

// --- Main Hero Component ---
export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      <BackgroundSlider />
      
      {/* Enhanced Gradient Overlays for Better Text Visibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
      
      {/* Subtle Grain Texture for Premium Feel */}
      <div className="absolute inset-0 z-10 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-screen grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <HeroContent isInView={isInView} />
          <DeviceMockup isInView={isInView} />
        </div>
      </div>
    </section>
  );
}

// --- Sub-component: Background Image Slider ---
const BackgroundSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => { 
      setCurrentImage((prev) => (prev + 1) % BACKGROUND_IMAGES.length); 
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentImage]);

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={BACKGROUND_IMAGES[currentImage].src}
            alt={BACKGROUND_IMAGES[currentImage].alt}
            fill
            className="object-cover"
            priority={currentImage === 0}
            quality={90}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- Sub-component: Hero Content ---
const HeroContent = ({ isInView }: { isInView: boolean }) => {
  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } 
  };
  
  const itemVariants = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } 
  };

  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate={isInView ? "visible" : "hidden"} 
      className="z-20 space-y-6 text-center lg:space-y-8 lg:text-left"
    >
      {/* Badge */}
      <motion.div variants={itemVariants}>
        <div className="inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-950/50 px-4 py-2.5 shadow-lg shadow-red-900/20 backdrop-blur-md ring-1 ring-white/10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
          </span>
          <span className="text-sm font-bold text-white">AI-Powered Travel Technology</span>
        </div>
      </motion.div>

      {/* Main Heading with Enhanced Visibility */}
      <motion.h1 
        variants={itemVariants} 
        className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        style={{
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 1)'
        }}
      >
        Transform Your
        <span className="block bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">
          Travel Business
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p 
        variants={itemVariants} 
        className="mx-auto max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg lg:mx-0 lg:text-xl"
        style={{
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)'
        }}
      >
        Digitize your tour business with our cutting-edge booking system, AI chatbots, and seamless payment solutions. Built for operators in Egypt and the GCC.
      </motion.p>

      {/* Feature Pills - Mobile Friendly */}
      <motion.div variants={itemVariants} className="hidden sm:flex flex-wrap items-center justify-center gap-3 lg:justify-start">
        {[
          { icon: CheckCircle, text: 'Unlimited Bookings' },
          { icon: Users, text: '500+ Operators' },
          { icon: TrendingUp, text: '$50M+ Processed' },
        ].map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md ring-1 ring-white/20"
          >
            <item.icon className="h-4 w-4 text-red-400" />
            <span className="text-sm font-semibold text-white">{item.text}</span>
          </div>
        ))}
      </motion.div>

      {/* CTA Buttons - Mobile Optimized */}
      <motion.div 
        variants={itemVariants} 
        className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
      >
        <Link href="/get-started" className="w-full sm:w-auto">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px -10px rgba(239, 68, 68, 0.6)" }} 
            whileTap={{ scale: 0.98 }} 
            className={`group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full ${BRAND_COLOR_PRIMARY} px-8 py-4 text-base font-bold text-white shadow-2xl shadow-red-500/30 transition-all duration-300 ${BRAND_HOVER_PRIMARY} sm:text-lg`}
          >
            <span className="relative z-10">Get Started Free</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </motion.button>
        </Link>
        
        <Link href="/demo" className="w-full sm:w-auto">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)" }} 
            whileTap={{ scale: 0.98 }} 
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:text-slate-900 sm:text-lg"
          >
            <span>Watch Demo</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Trust Indicators - Mobile Friendly */}
      <motion.div 
        variants={itemVariants} 
        className="flex flex-col items-center gap-4 pt-4 text-sm text-gray-300 sm:flex-row lg:items-start"
        style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}
      >
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-slate-400 to-slate-600 ring-2 ring-white/20"></div>
            ))}
          </div>
          <span className="font-semibold">Trusted by 500+ operators</span>
        </div>
        <div className="hidden h-4 w-px bg-white/30 sm:block"></div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-semibold">4.9/5 rating</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Sub-component: Device Mockup ---
const DeviceMockup = ({ isInView }: { isInView: boolean }) => {
  const containerVariants = { 
    hidden: { opacity: 0, scale: 0.85, y: 50 }, 
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20, delay: 0.4 } } 
  };
  
  const cardVariants = (delay: number) => ({ 
    hidden: { opacity: 0, y: 40, scale: 0.9 }, 
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 15, delay: 0.8 + delay } } 
  });

  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate={isInView ? "visible" : "hidden"} 
      className="relative hidden lg:flex h-full w-full items-center justify-center"
    >
      {/* iPad Container */}
      <div className="relative w-full max-w-3xl">
        <div className="relative" style={{ paddingBottom: '75%' }}>
          {/* Device Frame */}
          <div 
            className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-slate-100 via-white to-slate-200 shadow-2xl"
            style={{ 
              padding: '0.75rem',
              boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.8), inset 0 -1px 2px rgba(0, 0, 0, 0.1)',
              transform: 'perspective(2000px) rotateY(-3deg) rotateX(2deg)'
            }}
          >
            {/* Screen Display */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-black">
              <div className="absolute inset-0 bg-white">
                <Image
                  src="/images/dashboard-screenshot.jpg"
                  alt="Foxes Technology Dashboard"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="50vw"
                />
              </div>
              
              {/* Screen Glare */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
            </div>
            
            {/* Camera */}
            <div 
              className="absolute left-2 top-1/2 z-10 h-2 w-2 -translate-y-1/2 rounded-full bg-slate-800 ring-1 ring-slate-700"
              style={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2)' }}
            ></div>
          </div>
          
          {/* Buttons */}
          <div 
            className="absolute right-24 top-0 h-1 w-16 rounded-b-md bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300"
            style={{ boxShadow: 'inset 0 -1px 2px rgba(0, 0, 0, 0.2)', transform: 'translateY(-0.75rem)' }}
          ></div>
        </div>
      </div>

      {/* Floating Stats Cards */}
      <FloatingCard variants={cardVariants(0)} className="absolute -left-8 top-12 w-56 xl:-left-16">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-4xl font-black text-slate-900"><Counter value={500} /></div>
            <div className="mt-1 text-sm font-bold text-slate-600">Active Operators</div>
          </div>
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg">
            <Users className="h-6 w-6" />
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="h-2 flex-1 rounded-full bg-slate-200">
            <div className={`h-2 w-3/4 rounded-full ${BRAND_COLOR_PRIMARY}`}></div>
          </div>
          <span className="text-xs font-bold text-slate-500">75%</span>
        </div>
      </FloatingCard>

      <FloatingCard variants={cardVariants(0.15)} className="absolute -right-8 top-1/3 w-60 xl:-right-16">
        <div className="flex items-start justify-between">
          <div>
            <div className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-4xl font-black text-transparent">
              <Counter value={50000000} />
            </div>
            <div className="mt-1 text-sm font-bold text-slate-600">Revenue Processed</div>
          </div>
          <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${BRAND_COLOR_PRIMARY} text-white shadow-lg`}>
            <DollarSign className="h-6 w-6" />
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-green-600">
          <TrendingUp className="h-4 w-4" />
          <span>+23% this month</span>
        </div>
      </FloatingCard>

      <FloatingCard variants={cardVariants(0.3)} className="absolute -left-4 bottom-16 w-56 xl:-left-12">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-4xl font-black text-slate-900"><Counter value={1000000} /></div>
            <div className="mt-1 text-sm font-bold text-slate-600">Bookings Managed</div>
          </div>
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
            <BarChart3 className="h-6 w-6" />
          </div>
        </div>
      </FloatingCard>
    </motion.div>
  );
};

const FloatingCard = ({ 
  children, 
  className, 
  variants 
}: { 
  children: React.ReactNode; 
  className: string; 
  variants: any;
}) => (
  <motion.div 
    variants={variants} 
    className={`${className} transform-gpu rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-2xl backdrop-blur-md ring-1 ring-white/50`}
  >
    {children}
  </motion.div>
);