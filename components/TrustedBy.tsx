'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Users, DollarSign, Ticket } from 'lucide-react';
import Image from 'next/image';

// --- Reusable Animated Counter Component (FIXED) ---
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const spring = useSpring(isInView ? value : 0, {
    mass: 0.8,
    stiffness: 100,
    damping: 20,
  });

  const display = useTransform(spring, (current) => {
    if (value >= 1000000) {
      return `${(current / 1000000).toFixed(1)}M+`;
    }
    if (value >= 1000) {
      return `${Math.round(current / 1000)}k+`;
    }
    return Math.round(current).toLocaleString() + '+';
  });

  // This useEffect was missing, which is why the animation didn't trigger
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

// --- Upgraded Logo Component with Image ---
const LogoCard = ({ name, logoSrc }: { name: string; logoSrc: string }) => (
    <div className="mx-4 flex h-24 w-48 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-6 ring-1 ring-gray-200/80 transition-all hover:ring-foxes-orange/50 hover:shadow-lg">
        <Image
            src={logoSrc}
            alt={`${name} Logo`}
            width={120}
            height={40}
            className="h-auto w-full max-w-[120px] object-contain grayscale transition-all duration-300 hover:grayscale-0"
        />
    </div>
);

// --- Infinite Marquee Component ---
const InfiniteMarquee = ({ children, speed = 40 }: { children: React.ReactNode; speed?: number }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent"></div>
      
      <motion.div
        className="flex"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration: speed, repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};


export default function TrustedBy() {
  const stats = [
    { value: 500, label: "Active Operators", icon: Users },
    { value: 50000000, label: "Revenue Processed", icon: DollarSign },
    { value: 1000000, label: "Bookings Managed", icon: Ticket },
  ];

  const logos = [
    { name: "Viator", logoSrc: "/images/logos/viator.svg" },
    { name: "GetYourGuide", logoSrc: "/images/logos/getyourguide.svg" },
    { name: "Klook", logoSrc: "/images/logos/klook.svg" },
    { name: "Pyramids Tours", logoSrc: "/images/logos/pyramids-tours.svg" },
    { name: "Nile Cruises", logoSrc: "/images/logos/nile-cruises.svg" },
    { name: "TripAdvisor", logoSrc: "/images/logos/tripadvisor.svg" },
    { name: "Desert Safari", logoSrc: "/images/logos/desert-safari.svg" },
    { name: "Red Sea Diving", logoSrc: "/images/logos/red-sea-diving.svg" },
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foxes-orange">
            Trusted by the Best
          </h2>
          <p className="mt-4 font-goldplay text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Platform for Industry Leaders and Local Experts
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
            <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center"
            >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-foxes-orange/10 text-foxes-orange">
                    <stat.icon className="h-7 w-7" />
                </div>
                <p className="mt-4 font-goldplay text-5xl font-bold tracking-tight text-gray-900">
                    <Counter value={stat.value} />
                </p>
                <p className="mt-2 text-base font-medium text-dark-grey">{stat.label}</p>
            </motion.div>
            ))}
        </div>
      </div>

      {/* Logos Marquee */}
      <div className="mt-20">
        <div className="mb-8 text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
            Powering Growth for Partners and Operators Worldwide
          </h3>
        </div>
        <InfiniteMarquee>
          <div className="flex">
            {logos.map((logo, index) => (
              <LogoCard key={`${logo.name}-${index}`} name={logo.name} logoSrc={logo.logoSrc} />
            ))}
          </div>
        </InfiniteMarquee>
      </div>
    </section>
  );
}