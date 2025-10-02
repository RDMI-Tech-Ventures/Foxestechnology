'use client';
import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Loader2,
  ArrowRight,
  Shield,
  Star,
  Building,
} from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Light / sophisticated Footer component
 * - White/soft theme
 * - Subtle shadows, gentle accents
 * - Full code (TSX)
 * - Accessible labels, no external citations
 */

const PaymentIcons: Record<string, React.FC> = {
  Visa: () => (
    <svg width="56" height="36" viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="56" height="36" rx="6" fill="#F8FAFC" />
      <path d="M13.6 12.8L10.1 24H12.5L13.8 20.83H18.2L18.9 24H21.1L18.38 12.8H13.6ZM14.6 18.51L16.13 14.31L17.43 18.51H14.6Z" fill="#0F172A" />
      <path d="M27.28 12.8L25.05 19.28L24.3 14.88C24.18 14.06 23.78 13.73 23.22 13.73C23.1 13.73 22.52 13.75 22.52 13.75L22.37 12.8H24.92C25.72 12.8 26.55 13.2 26.76 13.98L27.9 18.35L29.64 12.8H31.78L28.8 24H26.57L27.28 12.8Z" fill="#0F172A" />
      <path d="M40.45 12.8H38.1L36.26 19.82L37.12 15.96C37.29 15.02 37.15 14.4 36.5 14.1L35.5 13.78C35.5 13.78 35.64 13.22 35.72 12.8H37.9L40.14 24H38.12L37.64 21.97L35.44 24H33.28L36.6 12.8H40.45Z" fill="#0F172A" />
    </svg>
  ),
  Mastercard: () => (
    <svg width="56" height="36" viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="56" height="36" rx="6" fill="#F8FAFC" />
      <circle cx="24" cy="18" r="9" fill="#FF6B2D" />
      <circle cx="33.5" cy="18" r="9" fill="#E60023" fillOpacity="0.9" />
    </svg>
  ),
  PayPal: () => (
    <svg width="56" height="36" viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="56" height="36" rx="6" fill="#F8FAFC" />
      <path d="M23.6 13.3C24.12 13.3 24.5 13.4 24.75 13.65C25 13.89 25.1 14.2 25.03 14.62L23.96 20.67C23.92 20.94 23.76 21.12 23.5 21.12H20.84L20.52 22.68C20.48 22.94 20.32 23.12 20.06 23.12H18.02C17.78 23.12 17.58 22.94 17.62 22.68L18.98 13.95C19.02 13.73 19.18 13.55 19.44 13.55H21.96L22.26 12.01C22.3 11.78 22.46 11.6 22.7 11.6H24.42C24.66 11.6 24.86 11.78 24.82 12.01L23.6 13.3Z" fill="#0070BA" />
      <path d="M31.06 15.17C30.46 14.79 29.78 14.6 28.99 14.6H27.5L28.22 9.95C28.26 9.73 28.42 9.55 28.68 9.55H30.38C30.62 9.55 30.82 9.73 30.78 9.95L30.52 11.25C30.49 11.48 30.64 11.66 30.88 11.66H31.26C33.07 11.66 34.48 12.54 35.05 14.22C35.34 15.05 35.14 15.8 34.52 16.38C33.95 16.95 33.12 17.32 32.28 17.32C31.08 17.32 30.14 16.76 29.65 15.94L29.33 17.72C29.29 17.99 29.13 18.17 28.87 18.17H27.02C26.79 18.17 26.59 17.99 26.64 17.72L27.82 7.88C27.86 7.65 28.02 7.47 28.27 7.47H32.26C33.32 7.47 34.24 7.88 34.88 8.67C35.53 9.47 35.86 10.53 35.7 11.75C35.36 13.98 34.34 15.44 32.99 16.11C32.26 16.47 31.48 16.66 30.69 16.66H29.95L31.06 15.17Z" fill="#003087" />
    </svg>
  ),
};

export default function Footer(): JSX.Element {
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [subscribed, setSubscribed] = React.useState(false);
  const [subscribeMessage, setSubscribeMessage] = React.useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setSubscribeMessage('Please enter a valid email address.');
      return;
    }
    setIsLoading(true);
    setSubscribeMessage(null);

    // Simulate API call (replace with real endpoint)
    await new Promise((r) => setTimeout(r, 750));

    try {
      setSubscribed(true);
      setSubscribeMessage('Thanks — you’re on the list.');
      setEmail('');
    } catch {
      setSubscribeMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const solutions = [
    { name: 'Booking & Management', href: '/solutions/booking-engine' },
    { name: 'Handheld POS Terminals', href: '/solutions/pos-terminals' },
    { name: 'Self-Service Kiosks', href: '/solutions/kiosks' },
    { name: 'Turnstile Integration', href: '/solutions/turnstiles' },
    { name: 'AI Chatbot (FoxesBOT)', href: '/solutions/ai-chatbot' },
    { name: 'Social Media Platform', href: '/solutions/social-media' },
  ];

  return (
    <footer className="bg-white text-slate-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand & Contact */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3 group">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-white/80 border border-gray-100 flex items-center justify-center shadow-sm relative"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-sky-400 to-indigo-400 rounded-2xl blur-sm opacity-20 group-hover:opacity-80 transition-opacity duration-300" />
                  <svg className="w-7 h-7 text-sky-600 relative" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  </svg>
                </motion.div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">FOXES Technology</h3>
                  <p className="text-xs text-slate-500">AI-Powered Travel Innovation</p>
                </div>
              </div>
            </Link>

            <p className="text-sm text-slate-600 max-w-xs">
              We design elegant, reliable digital products for travel & hospitality across Egypt and the Gulf.
            </p>

            <div className="space-y-3 text-sm">
              <a
                className="flex items-center gap-3 text-slate-600 hover:text-sky-600 transition-colors"
                href="mailto:info@foxestechnology.com"
              >
                <Mail className="w-5 h-5" />
                <span>info@foxestechnology.com</span>
              </a>

              <a
                className="flex items-center gap-3 text-slate-600 hover:text-sky-600 transition-colors"
                href="tel:+201153855556"
              >
                <Phone className="w-5 h-5" />
                <span>+20 115 385 5556</span>
              </a>

              <div className="flex items-center gap-3 text-slate-600">
                <MapPin className="w-5 h-5" />
                <span>Based in Egypt</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-slate-900">Our Solutions</h3>
            <ul className="space-y-3 text-sm">
              {solutions.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="text-slate-600 hover:text-sky-600 transition-colors group flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:text-sky-600 transition-colors" />
                    <span>{s.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-slate-900">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-sky-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-600 hover:text-sky-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 hover:text-sky-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-sky-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-slate-600 hover:text-sky-600 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-base mb-4 text-slate-900">Join Our Newsletter</h3>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3" noValidate>
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="flex-1 h-12 rounded-md border border-gray-200 bg-white px-4 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300"
                    disabled={isLoading}
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="h-12 px-5 rounded-md text-white bg-sky-600 hover:bg-sky-700 transition-colors text-sm font-semibold flex items-center justify-center disabled:opacity-60"
                    disabled={isLoading}
                    aria-label="Subscribe"
                  >
                    {isLoading ? <Loader2 className="animate-spin" /> : 'Subscribe'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 rounded-md border border-green-100 bg-green-50">
                  <h4 className="font-semibold text-sm text-green-700">You're in — thank you!</h4>
                  <p className="text-sm text-slate-600">We’ll send occasional updates and product news.</p>
                </div>
              )}

              {subscribeMessage && !subscribed && (
                <p className="text-xs mt-2 text-slate-500" role="status">
                  {subscribeMessage}
                </p>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-base mb-4 text-slate-900">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: '#', label: 'Facebook' },
                  { Icon: Instagram, href: '#', label: 'Instagram' },
                  { Icon: Twitter, href: '#', label: 'Twitter' },
                  { Icon: Youtube, href: '#', label: 'YouTube' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white border border-gray-100 text-slate-700 flex items-center justify-center shadow-sm hover:bg-sky-50 transition"
                  >
                    <social.Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-10" />

        {/* Trust & Payments */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="text-left">
              <p className="font-semibold text-slate-900 mb-2">Trusted by our clients</p>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-slate-900">4.9</span>
                <div className="flex">
                  <Star fill="currentColor" size={18} className="text-yellow-400" />
                  <Star fill="currentColor" size={18} className="text-yellow-400" />
                  <Star fill="currentColor" size={18} className="text-yellow-400" />
                  <Star fill="currentColor" size={18} className="text-yellow-400" />
                  <Star fill="currentColor" size={18} className="text-yellow-400/60" />
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-1">Based on 1,200+ reviews</p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <h3 className="font-semibold text-base mb-4 text-slate-900 text-center md:text-left">Secure Payments</h3>
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(PaymentIcons).map(([name, Comp]) => (
                <div
                  key={name}
                  title={name}
                  className="flex items-center justify-center rounded-lg bg-white border border-gray-100 p-3 shadow-sm hover:shadow-md transition"
                >
                  <Comp />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-8" />

        {/* Legal & Copyright */}
        <div className="text-center text-sm text-slate-500">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-4">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-gray-300">•</span>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">
              Terms & Conditions
            </Link>
            <span className="hidden sm:inline text-gray-300">•</span>
            <Link href="/security" className="hover:text-slate-900 transition-colors">
              Security
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Shield size={14} /> SOC 2 Compliant
            </span>
            <span className="inline-flex items-center gap-2">
              <Star size={14} /> ISO 27001 Certified
            </span>
            <span className="inline-flex items-center gap-2">
              <Building size={14} /> Official Partner of the Ministry of Tourism and Antiquities
            </span>
          </div>

          <p className="mt-4 text-slate-500">© {new Date().getFullYear()} FOXES Technology. All Rights Reserved.</p>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-14 h-14 bg-white border border-gray-100 text-sky-600 rounded-full shadow-md flex items-center justify-center z-50"
        whileHover={{ scale: 1.04, y: -4, boxShadow: '0 12px 30px rgba(14,165,233,0.12)' }}
        whileTap={{ scale: 0.96 }}
        aria-label="Back to top"
      >
        <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowRight className="w-6 h-6 -rotate-90" />
        </motion.div>
      </motion.button>
    </footer>
  );
}