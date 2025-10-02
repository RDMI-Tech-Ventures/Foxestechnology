'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Settings, 
  TrendingUp, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Rocket,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive onboarding process. No technical expertise required.',
      details: [
        'Create your account',
        'Import existing data',
        'Customize your brand'
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      icon: Settings,
      title: 'Configure & Customize',
      description: 'Tailor the platform to your specific needs with powerful configuration options and integrations.',
      details: [
        'Set pricing rules',
        'Connect payment methods',
        'Configure workflows'
      ],
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Launch & Grow',
      description: 'Go live and watch your business scale with AI-powered automation and real-time insights.',
      details: [
        'Start accepting bookings',
        'Monitor performance',
        'Scale effortlessly'
      ],
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-black to-gray-900/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Get Started in
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Three Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            From setup to success – we make digital transformation effortless
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
              >
                {/* Step Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 h-full group hover:border-white/20 transition-all duration-300">
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                    initial={false}
                  />

                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-6xl font-black bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} bg-opacity-10 flex items-center justify-center border border-white/20`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIdx) => (
                        <motion.li
                          key={detailIdx}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.2 + detailIdx * 0.1 + 0.3 }}
                        >
                          <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <span className="text-gray-400">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Arrow */}
                  {idx < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-20"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + 0.5 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-900 border-2 border-white/20 flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-5 px-12 rounded-2xl flex items-center gap-3 mx-auto group"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg">Start Your Free Trial</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}