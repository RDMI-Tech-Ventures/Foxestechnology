// components/HeroVariant3.tsx
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroVariant3() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-slate-900 mb-8 leading-none animate-fade-in">
          Whatever your
          <br />
          flavor of business,
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-teal-500 bg-clip-text text-transparent">
            build and grow
          </span>
          <br />
          on your terms.
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 animate-slide-up animation-delay-200">
          From tour operators to attractions, we provide the technology platform to digitize, automate, and scale your travel business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-400">
          <Link
            href="/get-started"
            className="group px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/solutions"
            className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-full font-semibold text-lg hover:border-slate-900 transition-all duration-300"
          >
            Explore solutions
          </Link>
        </div>

        {/* Business type cards */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in animation-delay-600">
          {[
            { emoji: '🎭', label: 'Tours & Activities' },
            { emoji: '🏛️', label: 'Attractions' },
            { emoji: '👨‍🏫', label: 'Tour Guides' },
            { emoji: '🏨', label: 'Hotels' }
          ].map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-orange-50 hover:to-teal-50 border border-slate-200 hover:border-orange-300 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <div className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}