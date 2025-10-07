// components/FeaturesSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  Zap, 
  Shield, 
  BarChart3, 
  Headphones, 
  Smartphone 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Globe2,
      title: 'Global Reach',
      description: 'Support for 150+ countries and multiple currencies',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Real-time confirmation and automated processing',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Bank-grade security with PCI compliance',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Powerful insights and revenue optimization',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for your business',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Fully responsive design for all devices',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything you need to grow
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful features designed to help travel businesses succeed
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;