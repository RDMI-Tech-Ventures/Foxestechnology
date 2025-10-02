'use client';
import React, { useEffect, useState, useRef } from "react";
import { Play, Pause, Star, ArrowRight, Sparkles, TrendingUp, Users, Globe2, ChevronLeft, ChevronRight, Zap, Shield, Clock, Award, CheckCircle, Rocket } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';

// Enhanced Particle Animation Component with more variety
const ParticleField = () => {
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: Math.random() * 4 + 1,
    type: Math.random() > 0.7 ? 'star' : 'circle',
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.type === 'star' ? 'bg-yellow-400/30' : 'bg-blue-400/20'} ${particle.type === 'star' ? 'rotate-45' : 'rounded-full'}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -250, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: particle.type === 'star' ? [45, 225, 45] : 0,
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

// Animated Background Gradient
const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-purple-600/40 to-pink-600/40"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-cyan-600/30 via-blue-600/30 to-purple-600/30"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

// Enhanced Image Slider with Ken Burns effect
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
    },
    {
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Sunset over water"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
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
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.1] }}
            transition={{ duration: 7, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Enhanced overlay with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      <AnimatedGradient />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group border border-white/30 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group border border-white/30 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 bg-black/20 backdrop-blur-md px-4 py-3 rounded-full border border-white/10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 h-3 bg-white rounded-full' 
                : 'w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Live Metrics Component
const LiveMetrics = () => {
  const [bookings, setBookings] = useState(2847);
  const [activeUsers, setActiveUsers] = useState(1234);

  useEffect(() => {
    const interval = setInterval(() => {
      setBookings(prev => prev + Math.floor(Math.random() * 3));
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute top-32 right-8 z-20 bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hidden xl:block"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-white font-semibold text-sm">Live Now</span>
      </div>
      <div className="space-y-3">
        <div>
          <div className="text-gray-400 text-xs mb-1">Today's Bookings</div>
          <div className="text-white text-2xl font-bold">{bookings.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-gray-400 text-xs mb-1">Active Users</div>
          <div className="text-white text-2xl font-bold">{activeUsers.toLocaleString()}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Trust Badges Component
const TrustBadges = () => {
  const badges = [
    { icon: Shield, text: "Enterprise Security" },
    { icon: Award, text: "ISO Certified" },
    { icon: CheckCircle, text: "99.99% Uptime" },
    { icon: Zap, text: "Lightning Fast" },
  ];

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-6 mt-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      {badges.map((badge, idx) => (
        <motion.div
          key={idx}
          className="flex items-center gap-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7 + idx * 0.1 }}
          whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.3)" }}
        >
          <badge.icon className="w-5 h-5 text-blue-400" />
          <span className="text-white text-sm font-medium">{badge.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Enhanced Software Preview Component
const SoftwarePreview = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const tabs = [
    { id: 'dashboard', name: 'AI Dashboard', icon: TrendingUp },
    { id: 'bookings', name: 'Smart Bookings', icon: Users },
    { id: 'analytics', name: 'Analytics', icon: Globe2 }
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
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border border-gray-700/30 backdrop-blur-sm relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${metric.color}-500/20 to-${metric.color}-600/20 rounded-xl flex items-center justify-center border border-${metric.color}-500/20`}>
                        <metric.icon className={`w-6 h-6 text-${metric.color}-400`} />
                      </div>
                      <div className={`text-${metric.color}-400 text-sm font-medium`}>{metric.change}</div>
                    </div>
                    <div className="text-gray-400 text-sm mb-1">{metric.label}</div>
                    <div className="text-3xl font-bold text-white">{metric.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-gray-700/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-white">AI Performance Analytics</h4>
                <div className="flex gap-2">
                  {['blue', 'purple', 'green'].map((color, idx) => (
                    <motion.div
                      key={idx}
                      className={`w-3 h-3 bg-${color}-400 rounded-full`}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                    />
                  ))}
                </div>
              </div>
              <div className="h-40 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl flex items-end justify-between p-4 relative overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>
                {Array.from({ length: 12 }).map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="w-8 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg relative z-10"
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.random() * 80 + 20}%` }}
                    transition={{ duration: 1, delay: idx * 0.1, repeat: Infinity, repeatDelay: 5 }}
                  />
                ))}
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
                className="flex items-center justify-between bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-gray-700/30 backdrop-blur-sm group relative overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/20">
                    <Users className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Luxury Resort Booking #{2840 + idx}</div>
                    <div className="text-gray-400">4 guests • 5 nights • Premium Suite</div>
                    <div className="text-green-400 text-sm font-medium mt-1 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      AI-Optimized Price
                    </div>
                  </div>
                </div>
                <div className="text-right relative z-10">
                  <div className="text-green-400 font-bold text-xl">${850 + idx * 50}</div>
                  <div className="text-gray-400 text-sm">per night</div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      default:
        return (
          <div className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">Advanced Analytics</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Customer Satisfaction", value: "98.5%", icon: Star },
                { label: "Conversion Rate", value: "24.3%", icon: TrendingUp },
                { label: "Average Response", value: "0.3s", icon: Zap },
                { label: "Global Reach", value: "150+", icon: Globe2 }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 border border-gray-700/30 text-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="relative max-w-6xl mx-auto mt-24"
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="relative">
        {/* Enhanced Glow Effect */}
        <motion.div
          className="absolute -inset-12 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Main Software Preview */}
        <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Enhanced Browser Header */}
          <div className="bg-gradient-to-r from-gray-800/95 to-gray-900/95 px-8 py-5 flex items-center gap-6 border-b border-gray-700/30">
            <div className="flex gap-3">
              {['red', 'yellow', 'green'].map((color, idx) => (
                <motion.div
                  key={color}
                  className={`w-4 h-4 bg-${color}-500 rounded-full shadow-lg cursor-pointer`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            <div className="flex-1 bg-gray-700/30 rounded-xl px-6 py-3 text-sm text-gray-300 flex items-center gap-3 border border-gray-600/30">
              <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                <Shield className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium">app.foxes.ai/dashboard</span>
              <motion.div
                className="ml-auto w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
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
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
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
        className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{ 
          y: [-30, 30, -30],
          x: [-15, 15, -15],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-12 -left-12 w-36 h-36 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{ 
          y: [30, -30, 30],
          x: [15, -15, 15],
          rotate: [360, 180, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

// Enhanced Stats Component
const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { number: "50K+", label: "Global Users", icon: Users, color: "blue" },
    { number: "99.99%", label: "Uptime SLA", icon: Shield, color: "green" },
    { number: "180+", label: "Countries", icon: Globe2, color: "purple" },
    { number: "<100ms", label: "Response Time", icon: Clock, color: "orange" }
  ];

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-20"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          className="group text-center p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: idx * 0.15, duration: 0.6 }}
          whileHover={{ scale: 1.08, y: -10 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <motion.div
              className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-${stat.color}-500/30`}
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
            </motion.div>
            <motion.div
              className="text-3xl lg:text-4xl font-bold text-white mb-2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: idx * 0.15 + 0.3, type: "spring", stiffness: 200 }}
            >
              {stat.number}
            </motion.div>
            <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Typewriter effect for hero text
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          className="inline-block w-1 h-8 md:h-12 lg:h-16 bg-blue-400 ml-2"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </motion.span>
  );
};

// Main Hero Component
export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const y = useTransform(scrollY, [0, 500], [0, 250]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Enhanced Background with Image Slider */}
      <div className="absolute inset-0 z-0">
        <ImageSlider />
        <ParticleField />
      </div>

      {/* Live Metrics */}
      <LiveMetrics />

      {/* Main Hero Content */}
      <motion.main 
        className="relative z-10 flex flex-col items-center justify-center px-6 lg:px-12 text-center"
        style={{ opacity, scale, y }}
      >
        <div className="max-w-7xl mx-auto pt-40 pb-24">
          {/* Main Heading Section */}
          <motion.div 
            className="max-w-6xl mx-auto space-y-10 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Enhanced Badge with animation */}
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-full px-8 py-4 border border-white/30 hover:border-white/50 transition-colors relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-blue-400" />
              </motion.div>
              <span className="text-base font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent relative z-10">
                Next-Generation AI Technology
              </span>
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Main Heading with Enhanced Gradient and Stagger Animation */}
            <div className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-tight">
              <motion.div 
                className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 40, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.7, type: "spring", stiffness: 100 }}
              >
                AI Travel
              </motion.div>
              <motion.div 
                className="block mt-4"
                initial={{ opacity: 0, y: 40, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  Revolution
                </motion.span>
              </motion.div>
            </div>
            
            {/* Enhanced Subheading with Word Stagger */}
            <motion.div
              className="text-xl md:text-2xl lg:text-3xl font-light text-gray-200 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              {["Transform", "Tourism", "with"].map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block mr-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + idx * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                Intelligent Automation
              </motion.span>
              {["and", "Seamless", "Experiences"].map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block ml-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + idx * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.button 
              className="relative flex-1 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center gap-3 text-lg">
                <Rocket className="w-6 h-6" />
                Start Free Trial
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 border-2 border-white/20 rounded-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.button>
            <motion.button 
              className="flex-1 border-2 border-white/30 text-white font-bold py-6 px-12 rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-xl relative overflow-hidden group text-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <TrustBadges />

          {/* Stats Section */}
          <Stats />

          {/* Software Preview Section */}
          <SoftwarePreview />
        </div>
      </motion.main>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
      >
        <motion.div 
          className="w-10 h-16 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm hover:border-white/50 transition-colors cursor-pointer relative group"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          whileHover={{ scale: 1.15 }}
        >
          <motion.div 
            className="w-2 h-6 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full mt-3"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <div className="absolute -bottom-12 text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Scroll to explore
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}