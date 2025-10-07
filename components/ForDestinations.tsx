'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Globe, Ticket, TrendingUp, Award, Shield, CheckCircle } from 'lucide-react';

const BRAND_COLOR_PRIMARY = "bg-red-600";
const BRAND_TEXT_PRIMARY = "text-red-600";

const destinationGoals = [
    {
        icon: Globe,
        title: "Attract More Tourists",
        description: "Unlocking new global markets by making local experiences instantly bookable",
        stat: "150%",
        statLabel: "Growth potential"
    },
    {
        icon: Ticket,
        title: "Digitize All Experiences",
        description: "Bringing every tour, activity, and attraction online under a unified platform",
        stat: "80%",
        statLabel: "Still offline"
    },
    {
        icon: TrendingUp,
        title: "Promote Local Brands",
        description: "Empowering operators to showcase Egypt's rich culture to the world",
        stat: "500+",
        statLabel: "Active partners"
    },
];

export default function ForDestinations() {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/image4.png"
                    alt="Beautiful Egyptian destination - Nile river at sunset"
                    fill
                    className="object-cover"
                    quality={100}
                    priority
                />
                {/* Multiple gradient overlays for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80"></div>
            </div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(239 68 68) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-950/50 px-5 py-2.5 backdrop-blur-md"
                        >
                            <Award className="h-4 w-4 text-red-400" />
                            <span className="text-sm font-bold text-white">For Destinations</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
                            style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)' }}
                        >
                            Developing Tourism Projects for{' '}
                            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                                Digital Destinations
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 text-lg leading-relaxed text-gray-300"
                            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}
                        >
                            We partner with governments and tourism boards to digitize entire ecosystems, 
                            tackle destination-level challenges, and drive sustainable growth for the nation's travel industry.
                        </motion.p>

                        {/* Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-6 shadow-2xl backdrop-blur-xl"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-600 shadow-lg">
                                    <TrendingUp className="h-6 w-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-3xl font-black text-white">
                                        80% offline opportunity
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                                        We see this as a monumental opportunity for growth, bringing local operators 
                                        into the global digital marketplace.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 border-t border-white/10 pt-6">
                                <div className="flex items-center gap-3">
                                    <Shield className="h-5 w-5 text-red-400" />
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                                            Official Partnership
                                        </p>
                                        <p className="mt-1 text-base font-semibold text-white">
                                            Ministry of Tourism & Antiquities, Egypt
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-8"
                        >
                            <Link href="/destinations">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`group inline-flex items-center gap-2 rounded-full ${BRAND_COLOR_PRIMARY} px-8 py-4 text-base font-bold text-white shadow-2xl shadow-red-500/30 transition-all hover:bg-red-700 hover:shadow-red-500/50`}
                                >
                                    <span>Learn About Destination Projects</span>
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Floating Goal Cards */}
                    <div className="relative flex flex-col justify-center space-y-6">
                        {destinationGoals.map((goal, index) => (
                            <motion.div
                                key={goal.title}
                                initial={{ opacity: 0, x: 50, y: 20 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.3 + index * 0.15,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ scale: 1.03, x: -10 }}
                                className="group relative overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-xl transition-all hover:border-red-500/50"
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                                
                                <div className="relative">
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-1 items-start gap-4">
                                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-600 shadow-lg transition-transform group-hover:scale-110">
                                                <goal.icon className="h-7 w-7 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-black text-white">
                                                    {goal.title}
                                                </h3>
                                                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                                                    {goal.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                                        <div>
                                            <div className="text-2xl font-black text-white">
                                                {goal.stat}
                                            </div>
                                            <div className="text-xs font-semibold text-gray-400">
                                                {goal.statLabel}
                                            </div>
                                        </div>
                                        <CheckCircle className="h-6 w-6 text-green-400 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl lg:p-12"
                >
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                        {[
                            { value: "20+", label: "Destination Projects", icon: Globe },
                            { value: "500+", label: "Operators Digitized", icon: Ticket },
                            { value: "$50M+", label: "Economic Impact", icon: TrendingUp },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-600 shadow-lg">
                                    <stat.icon className="h-7 w-7 text-white" />
                                </div>
                                <div className="text-4xl font-black text-white">
                                    {stat.value}
                                </div>
                                <div className="mt-2 text-sm font-semibold text-gray-400">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}