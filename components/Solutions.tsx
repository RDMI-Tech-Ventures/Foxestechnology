'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Globe, Smartphone, Server, Bot, BarChart3, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const solutionsData = [
    {
        title: "Online Booking",
        icon: Globe,
        description: "Transform your website into a 24/7 booking machine. Accept reservations, manage inventory, and process payments automatically.",
        features: [
            "Unlimited bookings & products",
            "Mobile-optimized booking widget",
            "Real-time inventory management",
            "Integrated payment processing"
        ],
        image: "/foxes1.png",
        link: "/solutions/online-booking",
        color: "from-blue-500 to-blue-600"
    },
    {
        title: "POS Hardware",
        icon: Smartphone,
        description: "Sell anywhere with our PAX A920 Pro handheld terminals. Secure payments, live inventory sync, and all-day battery life.",
        features: [
            "Portable POS terminals",
            "Accept payments on the go",
            "Live inventory synchronization",
            "Perfect for field sales teams"
        ],
        image: "/pos1.png",
        link: "/solutions/pos-hardware",
        color: "from-green-500 to-green-600"
    },
    {
        title: "Self-Service Kiosk",
        icon: Server,
        description: "Deploy 24/7 sales channels with PAX SK700 kiosks. Reduce queues, lower costs, and serve customers around the clock.",
        features: [
            "24/7 automated selling",
            "Indoor & outdoor placement",
            "Reduce staff workload",
            "Integrated payment system"
        ],
        image: "/pos.png",
        link: "/solutions/kiosk",
        color: "from-purple-500 to-purple-600"
    },
    {
        title: "AI Assistant",
        icon: Bot,
        description: "Automate customer service with FoxesBOT. Provide instant answers, personalized recommendations, and 24/7 support.",
        features: [
            "24/7 customer support automation",
            "Personalized recommendations",
            "Multi-language support",
            "Predictive analytics"
        ],
        image: "/images/3.png",
        link: "/solutions/ai",
        color: "from-orange-500 to-red-600"
    },
    {
        title: "Analytics Dashboard",
        icon: BarChart3,
        description: "Make data-driven decisions with powerful analytics. Track performance, understand customers, and optimize revenue.",
        features: [
            "Real-time business insights",
            "Custom dashboards",
            "Customer behavior tracking",
            "Revenue optimization tools"
        ],
        image: "/images/6.png",
        link: "/solutions/analytics",
        color: "from-cyan-500 to-blue-600"
    },
];

export default function Solutions() {
    const [activeTab, setActiveTab] = useState(0);
    const tabsContainerRef = useRef<HTMLDivElement>(null);

    const handlePrevious = () => {
        if (activeTab > 0) setActiveTab(activeTab - 1);
    };

    const handleNext = () => {
        if (activeTab < solutionsData.length - 1) setActiveTab(activeTab + 1);
    };

    return (
        <section className="relative overflow-hidden py-20 sm:py-28">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero2.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-slate-950/95"></div>
                <div className="absolute inset-0 backdrop-blur-sm"></div>
            </div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(239 68 68) 1px, transparent 0)',
                    backgroundSize: '48px 48px'
                }}></div>
            </div>

            {/* Gradient Blur Orbs */}
            <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-red-500/20 blur-3xl z-0"></div>
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl z-0"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-5 py-2.5 backdrop-blur-xl shadow-lg">
                        <CheckCircle className="h-4 w-4 text-red-400" />
                        <span className="text-sm font-bold text-white">Complete Solution Suite</span>
                    </div>

                    <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-2xl"
                        style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.7)' }}>
                        Transform Egyptian Tourism
                        <span className="block bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">
                            With Our Complete Suite
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-200 lg:text-xl"
                       style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
                        From online bookings to AI-powered insights—everything Egyptian tour operators need
                        to compete globally, all in one powerful platform.
                    </p>
                </motion.div>

                <div className="relative mt-14">
                    <div className="relative">
                        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-slate-950 to-transparent lg:hidden"></div>
                        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-slate-950 to-transparent lg:hidden"></div>

                        <div
                            ref={tabsContainerRef}
                            className="scrollbar-hide flex gap-2 overflow-x-auto pb-4 lg:justify-center"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            {solutionsData.map((solution, index) => {
                                const IconComponent = solution.icon;
                                return (
                                    <motion.button
                                        key={solution.title}
                                        onClick={() => setActiveTab(index)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`group relative flex flex-shrink-0 items-center gap-3 rounded-2xl px-6 py-4 text-left transition-all backdrop-blur-xl ${
                                            activeTab === index
                                                ? 'bg-white/95 text-slate-900 shadow-2xl ring-2 ring-red-500 shadow-red-500/20'
                                                : 'border-2 border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/20 shadow-lg'
                                        }`}
                                        style={{ scrollSnapAlign: 'center' }}
                                    >
                                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${solution.color} ${
                                            activeTab === index ? '' : 'opacity-70 group-hover:opacity-100'
                                        }`}>
                                            <IconComponent className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold">{solution.title}</div>
                                            {activeTab === index && (
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '100%' }}
                                                    className="mt-1 h-0.5 bg-gradient-to-r from-red-500 to-orange-500"
                                                />
                                            )}
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block">
                        <button
                            onClick={handlePrevious}
                            disabled={activeTab === 0}
                            className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-xl shadow-xl transition-all hover:border-white/50 hover:bg-white/20 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            <ChevronLeft className="h-6 w-6 text-white drop-shadow-lg" />
                        </button>
                    </div>
                    <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
                        <button
                            onClick={handleNext}
                            disabled={activeTab === solutionsData.length - 1}
                            className="-mr-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-xl shadow-xl transition-all hover:border-white/50 hover:bg-white/20 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            <ChevronRight className="h-6 w-6 text-white drop-shadow-lg" />
                        </button>
                    </div>
                </div>

                <div className="relative mt-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl lg:p-12"
                        >
                            {/* Glassmorphism inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                            <div className="absolute inset-0 bg-gradient-to-tl from-red-500/5 via-transparent to-blue-500/5"></div>

                            {/* Content wrapper */}
                            <div className="relative z-10">
                            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

                                <div className="order-2 lg:order-1">
                                    {(() => {
                                        const IconComponent = solutionsData[activeTab].icon;
                                        return (
                                            <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${solutionsData[activeTab].color} shadow-lg`}>
                                                <IconComponent className="h-8 w-8 text-white" />
                                            </div>
                                        );
                                    })()}

                                    <h3 className="mt-6 text-3xl font-black text-white lg:text-4xl drop-shadow-lg"
                                        style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
                                        {solutionsData[activeTab].title}
                                    </h3>

                                    <p className="mt-4 text-lg leading-relaxed text-gray-100"
                                       style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>
                                        {solutionsData[activeTab].description}
                                    </p>

                                    <ul className="mt-8 space-y-4">
                                        {solutionsData[activeTab].features.map((feature, index) => (
                                            <motion.li
                                                key={feature}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="flex-shrink-0">
                                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/30 backdrop-blur-sm ring-1 ring-green-400/30">
                                                        <CheckCircle className="h-4 w-4 text-green-400 drop-shadow-lg" />
                                                    </div>
                                                </div>
                                                <span className="text-base font-medium text-gray-100"
                                                      style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>
                                                    {feature}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <Link href={solutionsData[activeTab].link}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-red-500/30 transition-all hover:shadow-red-500/50"
                                        >
                                            <span className="relative z-10">Learn More</span>
                                            <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
                                        </motion.button>
                                    </Link>
                                </div>

                                <div className="order-1 lg:order-2">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/30 shadow-2xl backdrop-blur-sm"
                                    >
                                        <Image
                                            src={solutionsData[activeTab].image}
                                            alt={`${solutionsData[activeTab].title} showcase`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                                        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl"></div>
                                    </motion.div>
                                </div>
                            </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-8 flex justify-center gap-2 lg:hidden">
                    {solutionsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`h-2 rounded-full transition-all backdrop-blur-xl ${
                                activeTab === index
                                    ? 'w-8 bg-gradient-to-r from-red-500 to-orange-500 shadow-lg shadow-red-500/50'
                                    : 'w-2 bg-white/30 hover:bg-white/50 border border-white/20'
                            }`}
                            aria-label={`Go to solution ${index + 1}`}
                        />
                    ))}
                </div>

                {activeTab === 0 && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ delay: 3, duration: 1 }}
                        className="mt-6 text-center lg:hidden"
                    >
                        <p className="text-sm text-gray-400">
                            Swipe or tap to explore solutions
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
