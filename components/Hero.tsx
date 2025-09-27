'use client';
import React, { useEffect, useState, useRef } from "react";
import { Play, Pause, Star, ArrowRight, Sparkles, TrendingUp, Users, Globe2, ChevronLeft, ChevronRight, Zap, Shield, Clock } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Enhanced Particle Animation Component
const ParticleField = () => {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 4 + Math.random() * 3,
    size: Math.random() * 3 + 1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -200, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Image Slider Component
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Mountain landscape with lake"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Tropical beach paradise"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "City skyline at sunset"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group border border-white/20"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group border border-white/20"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Enhanced Software Preview Component
const SoftwarePreview = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const tabs = [
    { id: 'dashboard', name: 'AI Dashboard', icon: TrendingUp },
    { id: 'bookings', name: 'Smart Bookings', icon: Users },
    { id: 'analytics', name: 'Insights', icon: Globe2 }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <div className="p-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">AI Travel Command Center</h3>
                <p className="text-gray-400 mt-1">Real-time insights and automation</p>
              </div>
              <div className="flex gap-3">
                <div className="px-4 py-2 bg-green-500/10 text-green-400 rounded-xl text-sm flex items-center gap-2 border border-green-500/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Live
                </div>
                <div className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-xl text-sm border border-blue-500/20">
                  AI Powered
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Today's Bookings", value: "2,847", change: "+23%", color: "emerald", icon: Users },
                { label: "Revenue", value: "$124,580", change: "+15.2%", color: "blue", icon: TrendingUp },
                { label: "AI Predictions", value: "47", change: "Active", color: "purple", icon: Zap }
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border border-gray-700/30 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-${metric.color}-500/10 rounded-xl flex items-center justify-center border border-${metric.color}-500/20`}>
                      <metric.icon className={`w-6 h-6 text-${metric.color}-400`} />
                    </div>
                    <div className={`text-${metric.color}-400 text-sm font-medium`}>{metric.change}</div>
                  </div>
                  <div className="text-gray-400 text-sm mb-1">{metric.label}</div>
                  <div className="text-3xl font-bold text-white">{metric.value}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-gray-700/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-white">AI Performance Analytics</h4>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl flex items-center justify-center relative overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>
                <div className="text-gray-400 text-sm">Real-time Analytics Visualization</div>
              </div>
            </div>
          </div>
        );
      case 'bookings':
        return (
          <div className="p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">Smart Booking Management</h3>
              <div className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-xl text-sm border border-blue-500/20">
                Auto-optimized
              </div>
            </div>
            {[1,2,3,4].map((_, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-between bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-gray-700/30 backdrop-blur-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/20">
                    <Users className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Luxury Resort Booking #{2840 + idx}</div>
                    <div className="text-gray-400">4 guests • 5 nights • Premium Suite</div>
                    <div className="text-green-400 text-sm font-medium mt-1">✓ AI-Optimized Price</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-bold text-xl">${850 + idx * 50}</div>
                  <div className="text-gray-400 text-sm">per night</div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      default:
        return (
          <div className="p-8 text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Advanced Analytics</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Customer Satisfaction", value: "98.5%" },
                { label: "Conversion Rate", value: "24.3%" },
                { label: "Average Response", value: "0.3s" },
                { label: "Global Reach", value: "150+" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/30">
                  <div className="text-2xl font-bold text-white">{item.value}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div 
      className="relative max-w-6xl mx-auto mt-20"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      <div className="relative">
        {/* Enhanced Glow Effect */}
        <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl opacity-80"></div>
        
        {/* Main Software Preview */}
        <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Enhanced Browser Header */}
          <div className="bg-gradient-to-r from-gray-800/95 to-gray-900/95 px-8 py-5 flex items-center gap-6 border-b border-gray-700/30">
            <div className="flex gap-3">
              <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
            </div>
            <div className="flex-1 bg-gray-700/30 rounded-xl px-6 py-3 text-sm text-gray-300 flex items-center gap-3 border border-gray-600/30">
              <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                <Shield className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium">app.foxes.ai/dashboard</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-400 font-medium">Enterprise Grade</span>
            </div>
          </div>

          {/* Enhanced Tab Navigation */}
          <div className="flex border-b border-gray-700/30 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 text-sm font-semibold transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'text-blue-400 bg-blue-500/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                    layoutId="activeTab"
                  />
                )}
                <tab.icon className="w-5 h-5" />
                {tab.name}
              </motion.button>
            ))}
          </div>
          
          {/* Tab Content with Enhanced Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <motion.div 
        className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-2xl"
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-2xl"
        animate={{ 
          y: [20, -20, 20],
          rotate: [360, 180, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </motion.div>
  );
};

// Enhanced Stats Component
const Stats = () => {
  const stats = [
    { number: "50K+", label: "Global Users", icon: Users, color: "blue" },
    { number: "99.99%", label: "Uptime SLA", icon: Shield, color: "green" },
    { number: "180+", label: "Countries", icon: Globe2, color: "purple" },
    { number: "<100ms", label: "Response Time", icon: Clock, color: "orange" }
  ];

  return (
    <motion.div 
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.8 }}
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          className="group text-center p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500"
          whileHover={{ scale: 1.08, y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          custom={idx}
        >
          <div className={`w-16 h-16 bg-${stat.color}-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-${stat.color}-500/20`}>
            <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
          </div>
          <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">{stat.number}</div>
          <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Main Hero Component
export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const y = useTransform(scrollY, [0, 400], [0, 200]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Enhanced Background with Image Slider */}
      <div className="absolute inset-0 z-0">
        <ImageSlider />
        <ParticleField />
      </div>

      {/* Main Hero Content */}
      <motion.main 
        className="relative z-10 flex flex-col items-center justify-center px-6 lg:px-12 text-center"
        style={{ opacity, scale, y }}
      >
        <div className="max-w-7xl mx-auto pt-32 pb-20">
          {/* Main Heading Section */}
          <motion.div 
            className="max-w-6xl mx-auto space-y-10 mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Enhanced Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20 hover:border-white/30 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-base font-semibold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Next-Generation AI Technology
              </span>
            </motion.div>

            {/* Main Heading with Enhanced Gradient */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-tight">
              <motion.span 
                className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                AI Travel
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Revolution
              </motion.span>
            </h1>
            
            {/* Enhanced Subheading */}
            <motion.p 
              className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-200 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              Transform Tourism with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Intelligent Automation
              </span>{' '}
              and Seamless Experiences
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 max-w-xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <motion.button 
              className="flex-1 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-blue-800 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative">Start Free Trial</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative" />
            </motion.button>
            <motion.button 
              className="flex-1 border-2 border-white/20 text-white font-bold py-5 px-10 rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <Stats />

          {/* Software Preview Section */}
          <SoftwarePreview />
        </div>
      </motion.main>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <motion.div 
          className="w-10 h-16 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-sm hover:border-white/40 transition-colors cursor-pointer"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="w-2 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}