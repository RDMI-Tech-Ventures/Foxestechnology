'use client';
import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Github,
  Sparkles,
  Globe,
  Star,
  Heart,
  Zap,
  Shield,
  Award,
  Users,
  TrendingUp,
  Send,
  ExternalLink,
  CheckCircle
} from "lucide-react";
import { motion, useInView, AnimatePresence } from 'framer-motion';

/**
 * Footer — Gray background and black text variant
 * - Subtle, professional gray background
 * - Black / dark-gray text for high readability
 * - Clean, modern spacing and micro-animations
 *
 * Notes:
 * - Keep your /public/ images (logo) at the same path or update Image imports if needed.
 * - This component uses Tailwind CSS classes. Adjust tokens if your project uses a custom Tailwind config.
 */

/* -------------------- AnimatedBackground -------------------- */
/* Subtle light-gray decorative background to match gray theme */
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-100 to-gray-200 opacity-80"></div>

      {/* Soft Orbs (very subtle) */}
      <motion.div 
        className="absolute top-12 left-12 w-56 h-56 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.06), transparent 60%)' }}
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-12 right-12 w-72 h-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(14,165,233,0.04), transparent 60%)' }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 0.98, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Fine grid texture (very low contrast) */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.01) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    </div>
  );
};

/* -------------------- NewsletterSignup -------------------- */
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28 }}
          >
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 pr-12"
                required
              />
              <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <motion.button
              type="submit"
              disabled={isLoading}
              className="bg-black/90 hover:bg-black text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 min-w-[120px] justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {isLoading ? (
                <motion.div
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Subscribe
                </>
              )}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            className="flex items-center gap-3 p-4 bg-green-50 border border-green-100 rounded-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-medium">Successfully subscribed!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* -------------------- SocialLinks -------------------- */
const SocialLinks = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' },
    { icon: Github, href: '#', name: 'GitHub' },
  ];

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social, idx) => (
        <motion.a
          key={social.name}
          href={social.href}
          className="p-3 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 group shadow-sm"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.06 }}
          aria-label={social.name}
        >
          <social.icon className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
        </motion.a>
      ))}
    </div>
  );
};

/* -------------------- FooterStats -------------------- */
const FooterStats = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: Globe, value: '150+', label: 'Countries' },
    { icon: Award, value: '99.9%', label: 'Uptime' },
    { icon: TrendingUp, value: '24/7', label: 'Support' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.06 }}
          whileHover={{ scale: 1.03 }}
        >
          <stat.icon className="w-6 h-6 text-gray-700 mx-auto mb-2" />
          <div className="text-xl font-semibold text-gray-900">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

/* -------------------- Footer (main) -------------------- */
const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const footerSections = [
    {
      title: 'Solutions',
      icon: Zap,
      links: [
        { name: 'Hotel Management', href: '#hotel-management' },
        { name: 'Travel Booking', href: '#travel-booking' },
        { name: 'Analytics Dashboard', href: '#analytics' },
        { name: 'Customer Support', href: '#support' },
        { name: 'Revenue Management', href: '#revenue' },
      ]
    },
    {
      title: 'AI Platform',
      icon: Sparkles,
      links: [
        { name: 'Smart Recommendations', href: '#recommendations' },
        { name: 'Predictive Analytics', href: '#predictive' },
        { name: 'Automation Tools', href: '#automation' },
        { name: 'Machine Learning', href: '#ml' },
        { name: 'Data Intelligence', href: '#data' },
      ]
    },
    {
      title: 'Resources',
      icon: Shield,
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'API Reference', href: '#api' },
        { name: 'Case Studies', href: '#cases' },
        { name: 'Blog', href: '#blog' },
        { name: 'Help Center', href: '#help' },
      ]
    },
    {
      title: 'Company',
      icon: Heart,
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Press Kit', href: '#press' },
        { name: 'Partners', href: '#partners' },
        { name: 'Contact', href: '#contact' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative w-full bg-gray-100 text-gray-900 overflow-hidden">
      <AnimatedBackground />

      <motion.div
        className="relative z-10 px-6 lg:px-12 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Top: company + nav */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16" variants={itemVariants}>
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div className="flex items-center gap-4" whileHover={{ scale: 1.01 }}>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow">
                    <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">FOXES</h3>
                  <p className="text-sm text-gray-600">AI Travel Platform</p>
                </div>
              </motion.div>

              <p className="text-gray-700 leading-relaxed max-w-md">
                Revolutionizing the travel industry with practical AI products that improve conversions and operational efficiency for travel operators across regions.
              </p>

              {/* Contact */}
              <div className="space-y-3">
                {[
                  { icon: Mail, text: 'hello@foxes.ai', href: 'mailto:hello@foxes.ai' },
                  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                  { icon: MapPin, text: 'San Francisco, CA', href: '#' }
                ].map((contact, idx) => (
                  <motion.a
                    key={idx}
                    href={contact.href}
                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
                    whileHover={{ x: 4 }}
                    aria-label={contact.text}
                  >
                    <contact.icon className="w-5 h-5 text-gray-600" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900">Follow Us</h4>
                <SocialLinks />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, sectionIdx) => (
                <motion.div key={section.title} className="space-y-4" variants={itemVariants}>
                  <div className="flex items-center gap-2">
                    <section.icon className="w-5 h-5 text-gray-700" />
                    <h4 className="font-semibold text-gray-900">{section.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIdx) => (
                      <motion.li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-700 hover:text-gray-900 transition-all duration-200 group flex items-center gap-2"
                          onMouseEnter={() => setHoveredLink(`${sectionIdx}-${linkIdx}`)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {link.name}
                          </span>
                          <AnimatePresence>
                            {hoveredLink === `${sectionIdx}-${linkIdx}` && (
                              <motion.div
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -6 }}
                                transition={{ duration: 0.16 }}
                              >
                                <ExternalLink className="w-3 h-3 text-gray-600" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mb-12">
            <FooterStats />
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 mb-12 border border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Stay Updated with FOXES</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Get the latest updates on AI travel technology, industry insights and exclusive offers delivered directly to your inbox.
                </p>
              </motion.div>
              <div className="max-w-md mx-auto">
                <NewsletterSignup />
              </div>
            </div>
          </motion.div>

          {/* Bottom row */}
          <motion.div variants={itemVariants} className="pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-600">© {new Date().getFullYear()} FOXES AI Travel Platform. All rights reserved.</p>
                <div className="flex items-center gap-1 text-rose-500">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm text-gray-600">Made with care</span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((link, idx) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <motion.div className="flex items-center gap-1 px-3 py-1 bg-white rounded-full border border-gray-100" whileHover={{ scale: 1.03 }}>
                  <Shield className="w-4 h-4 text-gray-700" />
                  <span className="text-xs text-gray-700 font-medium">SOC 2 Compliant</span>
                </motion.div>
                <motion.div className="flex items-center gap-1 px-3 py-1 bg-white rounded-full border border-gray-100" whileHover={{ scale: 1.03 }}>
                  <Star className="w-4 h-4 text-gray-700" />
                  <span className="text-xs text-gray-700 font-medium">ISO 27001</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Floating Action Button (Back to top) */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        aria-label="Back to top"
      >
        <motion.div animate={{ y: [-2, 2, -2] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowRight className="w-6 h-6 text-white rotate-[-90deg]" />
        </motion.div>
      </motion.button>
    </footer>
  );
};

export default Footer;
