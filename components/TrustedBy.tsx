'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, DollarSign, Ticket, TrendingUp, Award, Shield } from 'lucide-react';
import Image from 'next/image';

const BRAND_COLOR_PRIMARY = "bg-red-600";
const BRAND_TEXT_PRIMARY = "text-red-600";

// --- Reusable Animated Counter Component ---
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(isInView ? value : 0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
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

  return <motion.span ref={ref}>{display}</motion.span>;
}

// --- Logo Component ---
const LogoCard = ({ name, subtitle }: { name: string; subtitle: string }) => (
  <div className="relative mx-4 flex h-32 w-48 flex-shrink-0 items-center justify-center rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-red-300 hover:shadow-lg">
    <div className="text-center">
      <div className="text-2xl font-black text-slate-900">{name}</div>
      <div className="mt-1 text-xs font-semibold text-slate-500">{subtitle}</div>
    </div>
  </div>
);

// --- Infinite Marquee Component ---
const InfiniteMarquee = ({ children, speed = 30 }: { children: React.ReactNode; speed?: number }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent"></div>
      
      <motion.div
        className="flex"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default function TrustedBy() {
  const stats = [
    {
      value: 500,
      label: "Active Operators",
      description: "Growing every month",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      value: 50000000,
      label: "Revenue Processed",
      description: "Secure transactions",
      icon: DollarSign,
      color: "from-green-500 to-green-600"
    },
    {
      value: 1000000,
      label: "Bookings Managed",
      description: "Happy customers",
      icon: Ticket,
      color: "from-purple-500 to-purple-600"
    },
  ];

  const partners = [
    { name: "Viator", subtitle: "Global Leader" },
    { name: "GetYourGuide", subtitle: "Top Platform" },
    { name: "Klook", subtitle: "Asia Pacific" },
    { name: "TripAdvisor", subtitle: "Experiences" },
    { name: "Expedia", subtitle: "Things to Do" },
    { name: "Airbnb", subtitle: "Experiences" },
    { name: "Booking.com", subtitle: "Attractions" },
    { name: "Egypt Tours", subtitle: "Local Expert" },
  ];

  const clients = [
    { name: "Pyramids Tours", subtitle: "Cairo, Egypt" },
    { name: "Nile Cruises", subtitle: "Luxor, Egypt" },
    { name: "Desert Safari", subtitle: "Dubai, UAE" },
    { name: "Red Sea Diving", subtitle: "Hurghada" },
    { name: "Petra Guides", subtitle: "Jordan" },
    { name: "Oasis Tours", subtitle: "Morocco" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 sm:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-50 px-5 py-2.5">
            <Award className="h-4 w-4 text-red-600" />
            <span className="text-sm font-bold text-red-900">Trusted Worldwide</span>
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Powering the Best in Travel
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 lg:text-xl">
            From global OTAs to local tour operators, our platform is trusted by industry leaders 
            to manage bookings, process payments, and grow their business.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { icon: Shield, text: 'PCI Compliant' },
            { icon: Award, text: 'Official Partner' },
            { icon: TrendingUp, text: '150% Growth' },
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${BRAND_COLOR_PRIMARY}`}>
                <badge.icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-bold text-slate-700">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Integration Partners Marquee */}
      <div className="mt-16">
        <div className="mb-8 text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            Integration Partners
          </h3>
        </div>
        <InfiniteMarquee speed={40}>
          {partners.map((partner, index) => (
            <LogoCard key={index} name={partner.name} subtitle={partner.subtitle} />
          ))}
        </InfiniteMarquee>
      </div>

      {/* Client Logos Marquee (Reverse Direction) */}
      <div className="mt-8">
        <div className="mb-8 text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            Trusted by Tour Operators
          </h3>
        </div>
        <InfiniteMarquee speed={35}>
          {clients.map((client, index) => (
            <LogoCard key={index} name={client.name} subtitle={client.subtitle} />
          ))}
        </InfiniteMarquee>
      </div>

      {/* Stats Section */}
      <div className="relative mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-12 shadow-2xl lg:p-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(239 68 68) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          {/* Decorative Blur */}
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-red-500/20 blur-3xl"></div>

          <div className="relative">
            <div className="mb-12 text-center">
              <h3 className="text-3xl font-black text-white lg:text-4xl">
                Numbers That Speak for Themselves
              </h3>
              <p className="mt-4 text-lg text-gray-400">
                Real metrics from real operators using our platform
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:border-red-500/50 hover:bg-white/10"
                >
                  <div className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg transition-transform group-hover:scale-110`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <p className="text-5xl font-black text-white lg:text-6xl">
                    <Counter value={stat.value} />
                  </p>
                  <p className="mt-3 text-base font-bold text-white">{stat.label}</p>
                  <p className="mt-1 text-sm text-gray-400">{stat.description}</p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-500/0 to-orange-500/0 opacity-0 transition-opacity group-hover:opacity-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mt-20 max-w-4xl px-6 text-center lg:px-8"
      >
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
          <h3 className="text-2xl font-black text-slate-900">
            Join the Leading Tour Operators
          </h3>
          <p className="mt-4 text-base text-slate-600">
            Start your free 14-day trial and see why operators worldwide trust Foxes Technology
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/get-started"
              className={`inline-flex items-center justify-center gap-2 rounded-full ${BRAND_COLOR_PRIMARY} px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl`}
            >
              <span>Get Started Free</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-900 transition-all hover:border-slate-900 hover:bg-slate-50"
            >
              <span>Contact Sales</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}