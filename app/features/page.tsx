'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import {
    ArrowRight,
    CheckCircle,
    Calendar,
    CreditCard,
    Globe,
    Smartphone,
    BarChart3,
    Users,
    MessageSquare,
    Shield,
    Zap,
    Clock,
    Mail,
    Bell,
    QrCode,
    Star,
    TrendingUp,
    Sparkles,
    Layers,
    Infinity,
    Rocket,
    Award,
    Target,
    HeartHandshake
} from 'lucide-react';

const BRAND_COLOR_PRIMARY = "bg-red-600";
const BRAND_HOVER_PRIMARY = "hover:bg-red-700";

export default function FeaturesPage() {
    return (
        <main className="bg-white overflow-hidden">
            <HeroSection />
            <TrustedBySection />
            <InteractiveFeaturesShowcase />
            <PremiumFeatureCategories />
            <VisualComparisonSection />
            <IntegrationsGallery />
            <TestimonialsSection />
            <CTASection />
        </main>
    );
}

function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1),transparent_50%)]" />

                {/* Floating Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                />
            </div>

            <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32">
                <div className="text-center">
                    {/* Floating Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl mb-8"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="h-5 w-5 text-yellow-400" />
                        </motion.div>
                        <span className="text-sm font-bold text-white">100+ Premium Features</span>
                        <div className="h-1 w-1 rounded-full bg-green-400 animate-pulse" />
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8"
                    >
                        <span className="block text-white drop-shadow-2xl">
                            Built for
                        </span>
                        <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                            Excellence
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
                    >
                        Experience the most powerful, beautiful, and intuitive booking platform
                        designed for modern tour operators
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-6 justify-center"
                    >
                        <Link
                            href="/get-started"
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-orange-600 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-red-500/50 transition-all hover:shadow-red-500/70 hover:scale-105"
                        >
                            <span className="relative z-10">Start Free Trial</span>
                            <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-700 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                        <Link
                            href="#features"
                            className="group inline-flex items-center gap-3 rounded-full border-2 border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-xl transition-all hover:border-white/40 hover:bg-white/10"
                        >
                            Explore Features
                            <motion.div
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                ↓
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-white/60 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}

function TrustedBySection() {
    const stats = [
        { icon: Users, number: '500+', label: 'Tour Operators', color: 'from-blue-500 to-cyan-500' },
        { icon: Globe, number: '50+', label: 'Countries', color: 'from-green-500 to-emerald-500' },
        { icon: TrendingUp, number: '$50M+', label: 'Revenue Processed', color: 'from-purple-500 to-pink-500' },
        { icon: Star, number: '4.9/5', label: 'Customer Rating', color: 'from-yellow-500 to-orange-500' },
    ];

    return (
        <section className="relative py-24 bg-gradient-to-b from-slate-950 to-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-black text-gray-900 mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-xl text-gray-600">Join hundreds of tour operators growing with Foxes Technology</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100">
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-4`}>
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function InteractiveFeaturesShowcase() {
    const categories = [
        {
            id: 'booking',
            title: 'Smart Booking',
            icon: Calendar,
            gradient: 'from-blue-500 to-cyan-500',
            features: [
                { name: 'Real-Time Availability', description: 'Live inventory sync across all channels' },
                { name: '24/7 Online Booking', description: 'Accept bookings around the clock' },
                { name: 'Multi-Language', description: 'Serve customers in 50+ languages' },
                { name: 'Digital Tickets', description: 'QR code tickets for contactless entry' }
            ],
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop'
        },
        {
            id: 'payments',
            title: 'Secure Payments',
            icon: CreditCard,
            gradient: 'from-green-500 to-emerald-500',
            features: [
                { name: 'Global Payments', description: '130+ currencies, all payment methods' },
                { name: 'Instant Refunds', description: 'One-click refund processing' },
                { name: 'Dynamic Pricing', description: 'AI-powered pricing optimization' },
                { name: 'PCI Compliant', description: 'Bank-level security standards' }
            ],
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop'
        },
        {
            id: 'analytics',
            title: 'Smart Analytics',
            icon: BarChart3,
            gradient: 'from-purple-500 to-pink-500',
            features: [
                { name: 'Real-Time Dashboards', description: 'Live performance metrics' },
                { name: 'Predictive AI', description: 'Forecast revenue and demand' },
                { name: 'Custom Reports', description: 'Build any report you need' },
                { name: 'Revenue Insights', description: 'Optimize pricing and inventory' }
            ],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop'
        },
        {
            id: 'automation',
            title: 'AI Automation',
            icon: Zap,
            gradient: 'from-yellow-500 to-orange-500',
            features: [
                { name: '24/7 AI Assistant', description: 'Handles customer inquiries automatically' },
                { name: 'Smart Notifications', description: 'Automated emails and SMS' },
                { name: 'Auto-Reminders', description: 'Never miss a follow-up' },
                { name: 'Workflow Automation', description: 'Save hours every day' }
            ],
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop'
        }
    ];

    return (
        <section id="features" className="py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                        Features That
                        <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                            Scale With You
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to run, grow, and dominate your market
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Content */}
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className={`inline-flex items-center gap-3 rounded-full bg-gradient-to-r ${category.gradient} p-1 pr-6 mb-6`}>
                                    <div className="bg-white rounded-full p-2">
                                        <category.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-bold text-white">{category.title}</span>
                                </div>

                                <h3 className="text-4xl font-black text-gray-900 mb-6">
                                    {category.title}
                                </h3>

                                <div className="space-y-6">
                                    {category.features.map((feature, fIndex) => (
                                        <motion.div
                                            key={fIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: fIndex * 0.1 }}
                                            className="flex gap-4 group cursor-pointer"
                                        >
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                <CheckCircle className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                                                    {feature.name}
                                                </h4>
                                                <p className="text-gray-600">{feature.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Visual */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={index % 2 === 1 ? 'lg:order-1' : ''}
                            >
                                <div className="relative group">
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity`} />
                                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src={category.image}
                                            alt={category.title}
                                            className="w-full h-[400px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="flex items-center gap-2 text-white">
                                                <div className="flex -space-x-2">
                                                    {[1, 2, 3].map((i) => (
                                                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/50 backdrop-blur-sm" />
                                                    ))}
                                                </div>
                                                <span className="text-sm font-semibold">Trusted by 500+ operators</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PremiumFeatureCategories() {
    const allFeatures = [
        { icon: Globe, title: 'Multi-Currency', category: 'Global', color: 'blue' },
        { icon: Shield, title: 'Bank-Level Security', category: 'Security', color: 'green' },
        { icon: Smartphone, title: 'Mobile Apps', category: 'Technology', color: 'purple' },
        { icon: Users, title: 'Team Management', category: 'Operations', color: 'pink' },
        { icon: MessageSquare, title: 'Live Chat', category: 'Support', color: 'cyan' },
        { icon: Star, title: 'Reviews & Ratings', category: 'Marketing', color: 'yellow' },
        { icon: Mail, title: 'Email Campaigns', category: 'Marketing', color: 'orange' },
        { icon: QrCode, title: 'QR Tickets', category: 'Technology', color: 'indigo' },
        { icon: Clock, title: 'Real-Time Sync', category: 'Operations', color: 'red' },
        { icon: Bell, title: 'Smart Alerts', category: 'Automation', color: 'violet' },
        { icon: Target, title: 'Dynamic Pricing', category: 'Revenue', color: 'emerald' },
        { icon: Infinity, title: 'Unlimited Bookings', category: 'Scale', color: 'teal' },
    ];

    const colorClasses: Record<string, string> = {
        blue: 'from-blue-500 to-cyan-500',
        green: 'from-green-500 to-emerald-500',
        purple: 'from-purple-500 to-pink-500',
        pink: 'from-pink-500 to-rose-500',
        cyan: 'from-cyan-500 to-blue-500',
        yellow: 'from-yellow-500 to-orange-500',
        orange: 'from-orange-500 to-red-500',
        indigo: 'from-indigo-500 to-purple-500',
        red: 'from-red-500 to-orange-500',
        violet: 'from-violet-500 to-purple-500',
        emerald: 'from-emerald-500 to-teal-500',
        teal: 'from-teal-500 to-cyan-500',
    };

    return (
        <section className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.1),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                        40+ Premium Features
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Every feature you need, beautifully designed and incredibly powerful
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {allFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative"
                        >
                            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:shadow-2xl">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[feature.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    {feature.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link
                        href="/pricing"
                        className="inline-flex items-center gap-2 text-white hover:text-red-400 font-bold text-lg group"
                    >
                        View All Features & Pricing
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

function VisualComparisonSection() {
    const comparison = {
        before: ['Manual bookings', 'Phone calls only', 'Paper records', 'No analytics', 'Limited reach'],
        after: ['Automated 24/7', 'Omnichannel sales', 'Cloud-based', 'Real-time insights', 'Global reach']
    };

    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-black text-gray-900 mb-6">
                        Transform Your Business
                    </h2>
                    <p className="text-xl text-gray-600">See the difference Foxes Technology makes</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Before */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gray-100 rounded-3xl" />
                        <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 font-bold text-sm mb-4">
                                    ❌ Before
                                </div>
                                <h3 className="text-2xl font-black text-gray-900">Traditional Way</h3>
                            </div>
                            <ul className="space-y-4">
                                {comparison.before.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs">✗</span>
                                        </div>
                                        <span className="text-gray-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* After */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl" />
                        <div className="relative bg-white rounded-2xl p-8 shadow-2xl border-2 border-red-200">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-sm mb-4">
                                    ✓ After
                                </div>
                                <h3 className="text-2xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                                    Foxes Technology
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {comparison.after.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray-900 font-semibold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function IntegrationsGallery() {
    const integrations = [
        { name: 'Stripe', logo: '💳', category: 'Payments' },
        { name: 'QuickBooks', logo: '📊', category: 'Accounting' },
        { name: 'Mailchimp', logo: '📧', category: 'Marketing' },
        { name: 'WhatsApp', logo: '💬', category: 'Communication' },
        { name: 'Google Analytics', logo: '📈', category: 'Analytics' },
        { name: 'Zapier', logo: '⚡', category: 'Automation' },
        { name: 'Viator', logo: '🎫', category: 'OTA' },
        { name: 'Xero', logo: '💼', category: 'Accounting' },
    ];

    return (
        <section className="py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <Layers className="w-16 h-16 mx-auto mb-6 text-red-600" />
                    <h2 className="text-5xl font-black text-gray-900 mb-6">
                        Connects With Everything
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Seamlessly integrate with 50+ tools you already love
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {integrations.map((integration, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center group cursor-pointer"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{integration.logo}</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{integration.name}</h3>
                            <span className="text-sm text-gray-500">{integration.category}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 font-semibold">
                        + 40 more integrations available
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Foxes Technology transformed our business overnight. Our bookings increased by 200% in the first month.",
            author: "Sarah Johnson",
            role: "CEO, Desert Safari Tours",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop"
        },
        {
            quote: "The AI assistant handles 80% of our customer inquiries. It's like having a 24/7 support team.",
            author: "Mohamed Ahmed",
            role: "Operations Manager, Nile Cruises",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop"
        },
        {
            quote: "Best investment we've made. The analytics alone saved us thousands in optimizing our pricing.",
            author: "Lisa Chen",
            role: "Founder, Red Sea Adventures",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_70%)]" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <HeartHandshake className="w-16 h-16 mx-auto mb-6 text-red-400" />
                    <h2 className="text-5xl font-black text-white mb-6">
                        Loved by Operators
                    </h2>
                    <p className="text-xl text-gray-400">See what our customers say</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-white text-lg mb-6 leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-bold text-white">{testimonial.author}</div>
                                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="relative py-32 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-white/10 rounded-full blur-3xl"
                />
            </div>

            <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="inline-block mb-8"
                    >
                        <Rocket className="w-20 h-20 text-white" />
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
                        Join 500+ tour operators who've scaled their business with Foxes Technology.
                        Start your free trial today - no credit card required.
                    </p>

                    <div className="flex flex-wrap gap-6 justify-center">
                        <Link
                            href="/get-started"
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-12 py-6 text-lg font-bold text-red-600 shadow-2xl transition-all hover:shadow-white/50 hover:scale-105"
                        >
                            <span className="relative z-10">Start Free Trial</span>
                            <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 rounded-full border-2 border-white bg-white/10 px-12 py-6 text-lg font-bold text-white backdrop-blur-xl transition-all hover:bg-white/20"
                        >
                            Talk to Sales
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/90">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            <span>Free 30-day trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            <span>Cancel anytime</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
