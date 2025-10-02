'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Monitor, 
  Bot, 
  Users, 
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function SolutionsOverview() {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      id: 0,
      icon: Monitor,
      title: 'Smart Booking Platform',
      subtitle: 'Complete Digital Transformation',
      description: 'Enterprise-grade booking engine with real-time inventory management, dynamic pricing, and multi-channel distribution.',
      features: [
        'AI-powered pricing optimization',
        'Multi-currency & multi-language',
        'Real-time availability sync',
        'Advanced analytics dashboard'
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
    },
    {
      id: 1,
      icon: Smartphone,
      title: 'Handheld POS Terminals',
      subtitle: 'On-the-Go Payments',
      description: 'Portable payment solutions for tour guides and field staff. Accept payments anywhere, anytime with secure mobile terminals.',
      features: [
        'Contactless payments',
        'Offline mode capability',
        'Instant receipt generation',
        'Multi-payment methods'
      ],
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800'
    },
    {
      id: 2,
      icon: Users,
      title: 'Self-Service Kiosks',
      subtitle: 'Automated Check-in',
      description: 'Reduce queues and enhance visitor experience with intelligent self-service kiosks for tickets, check-ins, and information.',
      features: [
        'Multi-language interface',
        'QR code scanning',
        'Payment integration',
        'Customizable branding'
      ],
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
    },
    {
      id: 3,
      icon: Bot,
      title: 'AI Chatbot (FoxesBOT)',
      subtitle: '24/7 Customer Support',
      description: 'Intelligent conversational AI that handles customer inquiries, bookings, and support in multiple languages.',
      features: [
        'Natural language processing',
        '150+ language support',
        'Smart booking assistance',
        'Learning from interactions'
      ],
      color: 'orange',
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800'
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-white">Complete Solutions Suite</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Everything You Need
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              In One Platform
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            From booking to payment, customer service to analytics – we've got you covered with cutting-edge technology
          </p>
        </motion.div>

        {/* Solutions Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {solutions.map((solution, idx) => (
            <motion.button
              key={solution.id}
              onClick={() => setActiveSolution(idx)}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                activeSolution === idx
                  ? 'border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-blue-600/5'
                  : 'border-white/10 bg-gray-900/40 hover:border-white/20'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeSolution === idx && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} opacity-20 rounded-2xl`}
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} bg-opacity-20 flex items-center justify-center border border-${solution.color}-500/30`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <span className={`text-sm font-semibold text-center ${
                  activeSolution === idx ? 'text-white' : 'text-gray-400'
                }`}>
                  {solution.title}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Solution Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
              {/* Content Side */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 mb-3">
                    <solutions[activeSolution].icon className="w-5 h-5" />
                    {solutions[activeSolution].subtitle}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {solutions[activeSolution].title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {solutions[activeSolution].description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {solutions[activeSolution].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/5"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    className={`flex-1 bg-gradient-to-r ${solutions[activeSolution].gradient} text-white font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-2 group`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.button
                    className="flex-1 border-2 border-white/20 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/5 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Demo
                  </motion.button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative">
                <motion.div
                  className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={solutions[activeSolution].image}
                    alt={solutions[activeSolution].title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${solutions[activeSolution].gradient} opacity-20`} />
                </motion.div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-gray-900/95 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hidden lg:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-1">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}