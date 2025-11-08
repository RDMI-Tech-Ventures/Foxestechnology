'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

const ecosystemData = [
    {
        id: 0,
        title: "Accept payments anywhere, anytime",
        description: "From the Pyramids to the Red Sea—take payments in person, online, or on mobile. Our unified POS platform syncs every transaction in real-time, whether you're selling tours at a kiosk in Luxor or processing bookings from Cairo. One system, zero complexity.",
        image: "/images/1.png"
    },
    {
        id: 1,
        title: "Command your entire operation",
        description: "Real-time inventory tracking, resource scheduling, guest manifests, and multi-channel booking management—all in one intelligent dashboard. See your complete business at a glance, from tour capacity to staff schedules, and make decisions with confidence.",
        image: "/images/5.png"
    },
    {
        id: 2,
        title: "Let AI work for you 24/7",
        description: "FoxesBOT handles customer inquiries around the clock in multiple languages, while our AI engine delivers predictive analytics, trend forecasting, and smart recommendations. Transform data into decisions that drive revenue growth.",
        image: "/hero3.png"
    },
    {
        id: 3,
        title: "Master your business finances",
        description: "Comprehensive revenue analytics, automated accounting exports, and performance dashboards built for Egyptian tourism operators. Track every pound, optimize pricing strategies, and scale profitably with complete financial visibility.",
        image: "/pos.png"
    }
];

export default function Ecosystem() {
    const [expanded, setExpanded] = useState<number | null>(0);

    const handleToggle = (id: number) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <section className="relative bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white py-20 sm:py-28 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column: Sticky Visuals */}
                    <div className="w-full lg:sticky lg:top-32 lg:self-start lg:max-h-[calc(100vh-8rem)]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] w-full"
                        >
                             {/* Base Laptop */}
                            <Image
                                src="/images/6.png"
                                alt="Dashboard on a laptop"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                            {/* Dynamic Screen Content */}
                             <AnimatePresence mode="wait">
                                {expanded !== null && ecosystemData.map(item =>
                                    expanded === item.id && (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain p-[5%]"
                                        />
                                    </motion.div>
                                    )
                                )}
                            </AnimatePresence>

                             {/* Floating POS Device */}
                            <motion.div
                                initial={{ y: 20, x: -20, opacity: 0 }}
                                whileInView={{ y: 0, x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-12 -left-20 w-1/3"
                            >
                                <Image
                                    src="/pos.png"
                                    alt="POS Handheld Device"
                                    width={400}
                                    height={400}
                                    className="object-contain drop-shadow-2xl"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 backdrop-blur-sm mb-6">
                                <span className="text-sm font-bold text-red-400">Complete Digital Ecosystem</span>
                            </div>
                            <h2 className="font-goldplay text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Everything you need to transform your business
                            </h2>
                            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
                                A unified platform designed specifically for Egyptian tour operators. From payments to AI-powered insights, manage every aspect of your tourism business in one place.
                            </p>
                        </motion.div>

                        <div className="mt-12 space-y-2 border-t border-white/10">
                            {ecosystemData.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    isOpen={expanded === item.id}
                                    onClick={() => handleToggle(item.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Accordion Item Sub-component ---
function AccordionItem({ isOpen, onClick, title, description }: {
    isOpen: boolean;
    onClick: () => void;
    title: string;
    description: string;
}) {
    return (
        <div className="border-b border-white/10 py-6 last:border-none">
            <motion.header
                initial={false}
                onClick={onClick}
                className="flex cursor-pointer items-center justify-between group"
            >
                <h3 className={`text-xl sm:text-2xl font-bold transition-colors ${
                    isOpen ? 'text-red-400' : 'text-white group-hover:text-red-400'
                }`}>
                    {title}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4"
                >
                    <div className={`rounded-full p-2 transition-all ${
                        isOpen
                            ? 'bg-red-600 scale-110'
                            : 'bg-white/10 group-hover:bg-red-600'
                    }`}>
                        {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </div>
                </motion.div>
            </motion.header>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto', marginTop: '20px' },
                            collapsed: { opacity: 0, height: 0, marginTop: '0px' },
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <p className="max-w-prose text-base sm:text-lg leading-relaxed text-gray-300">
                            {description}
                        </p>
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
}