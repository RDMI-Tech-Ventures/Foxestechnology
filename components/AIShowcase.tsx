'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Bot, MessageSquare, Sparkles, Zap, Globe, Clock, TrendingUp, ArrowRight } from 'lucide-react';

const BRAND_COLOR_PRIMARY = "bg-red-600";
const BRAND_TEXT_PRIMARY = "text-red-600";

export default function AIShowcase() {
    const features = [
        {
            icon: MessageSquare,
            title: "24/7 Instant Support",
            description: "Answer customer questions anytime, anywhere"
        },
        {
            icon: Globe,
            title: "Multi-Language",
            description: "Communicate in Arabic, English, and more"
        },
        {
            icon: Sparkles,
            title: "Smart Recommendations",
            description: "Personalized tour suggestions for every traveler"
        },
        {
            icon: TrendingUp,
            title: "Predictive Analytics",
            description: "Forecast demand and optimize pricing"
        }
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-20 sm:py-28">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(249 115 22) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            {/* Decorative Blurs */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-red-200/20 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-orange-200 bg-orange-50 px-5 py-2.5"
                    >
                        <Bot className="h-5 w-5 text-orange-600" />
                        <span className="text-sm font-bold text-orange-900">Powered by AI</span>
                    </motion.div>

                    <h2 className="text-6xl font-black text-orange-500 sm:text-7xl lg:text-8xl">
                        AI
                    </h2>

                    <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-slate-700 lg:text-2xl">
                        AI technologies such as chatbots, recommendation engines, and predictive analytics 
                        revolutionize country marketing in the travel industry.
                    </p>
                </motion.div>

                {/* FoxesBot Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-16"
                >
                    <div className="relative mx-auto max-w-2xl">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-200 via-red-200 to-orange-200 opacity-30 blur-3xl"></div>
                        
                        {/* FoxesBot Image Container */}
                        <div className="relative">
                            <motion.div
                                animate={{ 
                                    y: [0, -20, 0],
                                }}
                                transition={{ 
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative mx-auto w-full max-w-md"
                            >
                                <Image
                                    src="/botfox.png"
                                    alt="FoxesBot - AI-Powered Travel Assistant"
                                    width={400}
                                    height={400}
                                    className="w-full drop-shadow-2xl"
                                    priority
                                />
                            </motion.div>

                            {/* Floating Particles */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute h-2 w-2 rounded-full bg-orange-400"
                                    style={{
                                        top: `${20 + i * 30}%`,
                                        left: `${10 + i * 15}%`,
                                    }}
                                    animate={{
                                        y: [0, -30, 0],
                                        opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.5,
                                    }}
                                />
                            ))}
                        </div>

                        {/* FoxesBot Branding */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 text-center"
                        >
                          
                            <p className="mt-3 text-lg font-semibold text-slate-600">
                                Your AI-Powered Travel Assistant
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg transition-all hover:border-orange-300 hover:shadow-xl"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            
                            <div className="relative">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="mt-4 text-lg font-bold text-slate-900">{feature.title}</h4>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col gap-4 sm:flex-row">
                        <Link href="/solutions/ai">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className={`group inline-flex items-center gap-2 rounded-full ${BRAND_COLOR_PRIMARY} px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl`}
                            >
                                <span>Explore FoxesBot</span>
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </motion.button>
                        </Link>
                        <Link href="/demo">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-sm transition-all hover:border-slate-900 hover:bg-slate-50"
                            >
                                <Bot className="h-5 w-5" />
                                <span>See Demo</span>
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg"
                >
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                        {[
                            { value: "10k+", label: "Conversations", subtext: "Per month" },
                            { value: "98%", label: "Accuracy", subtext: "Response rate" },
                            { value: "<2s", label: "Response Time", subtext: "Average" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl font-black text-slate-900">{stat.value}</div>
                                <div className="mt-2 text-base font-bold text-slate-700">{stat.label}</div>
                                <div className="mt-1 text-sm text-slate-500">{stat.subtext}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}