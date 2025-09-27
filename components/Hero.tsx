'use client';
import React, { useEffect, useState, useRef } from "react";
import { Play, Pause, Star, ArrowRight, Sparkles, TrendingUp, Users, Globe2 } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Particle Animation Component
const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
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

// Enhanced Background Component
const EnhancedBackground = ({ videoSrc, backgroundImage, posterSrc }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      setVideoError(false);
    };

    const handleError = () => {
      setVideoError(true);
      setVideoLoaded(false);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPaused) {
        video.play();
      } else {
        video.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <>
      {/* Video Background */}
      {videoSrc && (
        <motion.video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ y }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </motion.video>
      )}

      {/* Background Image with Parallax */}
      <motion.div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          (!videoSrc || !videoLoaded || videoError) ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          y
        }}
      />

      {/* Animated Gradient Overlays */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-black/60"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(30, 58, 138, 0.4), rgba(88, 28, 135, 0.3), rgba(0, 0, 0, 0.6))",
            "linear-gradient(to bottom right, rgba(88, 28, 135, 0.4), rgba(30, 58, 138, 0.3), rgba(0, 0, 0, 0.6))",
            "linear-gradient(to bottom right, rgba(30, 58, 138, 0.4), rgba(88, 28, 135, 0.3), rgba(0, 0, 0, 0.6))"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Particle Field */}
      <ParticleField />

      {/* Video Control Button */}
      {videoSrc && videoLoaded && !videoError && (
        <motion.button 
          onClick={togglePlayPause}
          className="absolute bottom-8 left-8 z-40 w-14 h-14 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPaused ? (
            <Play className="w-6 h-6 text-white ml-0.5" />
          ) : (
            <Pause className="w-6 h-6 text-white" />
          )}
        </motion.button>
      )}
    </>
  );
};

// Enhanced Software Preview Component
const SoftwarePreview = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: TrendingUp },
    { id: 'bookings', name: 'Bookings', icon: Users },
    { id: 'analytics', name: 'Analytics', icon: Globe2 }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">AI Travel Dashboard</h3>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Live
                </div>
                <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">AI Powered</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Bookings Today", value: "1,247", change: "+12%", color: "green" },
                { label: "Revenue", value: "$84,320", change: "+8.2%", color: "green" },
                { label: "AI Insights", value: "23", change: "New", color: "blue" }
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className={`text-${metric.color}-400 text-sm`}>{metric.change}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gray-800/30 rounded-lg h-32 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
              <div className="text-gray-400 text-sm">Real-time Analytics Visualization</div>
            </div>
          </div>
        );
      case 'bookings':
        return (
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Bookings</h3>
            {[1,2,3].map((_, idx) => (
              <div key={idx} className="flex items-center justify-between bg-gray-800/30 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Hotel Booking #{1234 + idx}</div>
                    <div className="text-gray-400 text-sm">2 guests • 3 nights</div>
                  </div>
                </div>
                <div className="text-green-400 font-medium">$240</div>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="p-6 text-center">
            <div className="text-gray-400">Analytics content</div>
          </div>
        );
    }
  };

  return (
    <motion.div 
      className="relative max-w-5xl mx-auto mt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="relative">
        {/* Enhanced Glow Effect */}
        <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-60"></div>
        
        {/* Main Software Preview */}
        <div className="relative bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Enhanced Browser Header */}
          <div className="bg-gray-800/90 px-6 py-4 flex items-center gap-4 border-b border-gray-700/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 bg-gray-700/50 rounded-lg px-4 py-2 text-sm text-gray-300 flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              app.foxes.ai/dashboard
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-xs text-gray-400">Secured</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-700/50 bg-gray-800/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-500/5'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </div>
          
          {/* Tab Content with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <motion.div 
        className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        animate={{ 
          y: [-15, 15, -15],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        animate={{ 
          y: [15, -15, 15],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
};

// Stats Component
const Stats = () => {
  const stats = [
    { number: "10K+", label: "Active Users", icon: Users },
    { number: "99.9%", label: "Uptime", icon: TrendingUp },
    { number: "150+", label: "Countries", icon: Globe2 },
    { number: "24/7", label: "Support", icon: Sparkles }
  ];

  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
          <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const settings = {
    background: {
      video: '/videos/bg1.mp4',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      poster: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <EnhancedBackground
          videoSrc={settings.background.video}
          backgroundImage={settings.background.image}
          posterSrc={settings.background.poster}
        />
      </div>

      {/* Main Hero Content */}
      <motion.main 
        className="relative z-10 flex flex-col items-center justify-center px-6 lg:px-12 text-center"
        style={{ opacity, scale }}
      >
        <div className="max-w-7xl mx-auto pt-32 pb-20">
          {/* Main Heading Section */}
          <motion.div 
            className="max-w-5xl mx-auto space-y-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium">Powered by Advanced AI</span>
            </motion.div>

            {/* Main Heading with Gradient Text */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                AI Travel
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            {/* Enhanced Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform Tourism, Empower Businesses with{' '}
              <span className="text-blue-400 font-medium">Intelligent Automation</span>
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              className="flex-1 border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Demo
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div 
          className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}