'use client';
import React, { useState, useEffect } from "react";
import { Globe, HelpCircle, User, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Solutions', 
      href: '#solutions',
      submenu: ['Hotel Management', 'Travel Booking', 'Analytics', 'Customer Support']
    },
    { 
      name: 'AI Platform', 
      href: '#ai-platform',
      submenu: ['Smart Recommendations', 'Predictive Analytics', 'Automation Tools']
    },
    { name: 'Industries', href: '#industries' },
    { 
      name: 'Resources', 
      href: '#resources',
      submenu: ['Documentation', 'API Reference', 'Case Studies', 'Blog']
    },
    { name: 'About', href: '#about' }
  ];

  return (
    <>
      {/* Top Banner */}
      <motion.div 
        className="relative z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <span className="text-sm font-medium">
            🚀 Transform your business with AI-powered travel technology
          </span>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium transition-all duration-300">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4' 
            : 'bg-transparent py-6'
        }`}
        style={{ marginTop: isScrolled ? '0' : '60px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <nav className="px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur opacity-20"></div>
              </div>
              <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                FOXES
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, idx) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.submenu ? item.name : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-1 text-white hover:text-blue-400 font-medium transition-all duration-300 text-sm tracking-wide group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.submenu.map((subItem, subIdx) => (
                          <motion.a
                            key={subItem}
                            href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIdx * 0.05 }}
                          >
                            {subItem}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right side icons */}
            <div className="hidden lg:flex items-center gap-3">
              {[HelpCircle, Globe, User].map((Icon, idx) => (
                <motion.button
                  key={idx}
                  className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </motion.button>
              ))}
              <motion.button
                className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button 
              className="lg:hidden p-3 hover:bg-white/10 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-6 space-y-4">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-300 hover:text-white font-medium transition-colors py-3 border-b border-white/5 last:border-b-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;