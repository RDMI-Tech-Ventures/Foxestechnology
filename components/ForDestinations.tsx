'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChartHorizontal, Globe, Ticket } from 'lucide-react';

const destinationGoals = [
    {
        icon: Globe,
        title: "Attract More Tourists",
        description: "Unlocking new global markets by making local experiences instantly bookable."
    },
    {
        icon: Ticket,
        title: "Digitize All Experiences",
        description: "Bringing every tour, activity, and attraction online under a unified, modern platform."
    },
    {
        icon: BarChartHorizontal,
        title: "Promote Unique Brands",
        description: "Empowering local operators to build their brand and showcase Egypt's rich culture to the world."
    },
];

export default function ForDestinations() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <section className="bg-dark-grey text-white py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column: Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2 variants={itemVariants} className="text-sm font-semibold uppercase tracking-wider text-foxes-orange">
                            For Destinations
                        </motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 font-goldplay text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Developing Tourism Projects for Digital Destinations.
                        </motion.p>
                        <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-300">
                            Our mission extends beyond individual operators. We partner with governments and tourism boards to tackle destination-level challenges, digitize entire ecosystems, and drive sustainable growth for the nation's travel industry.
                        </motion.p>
                        <motion.div variants={itemVariants} className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-black/20 p-6">
                             <div>
                                <p className="text-3xl font-bold text-foxes-orange">80% of tours are booked offline.</p>
                                <p className="mt-1 text-gray-400">We see this as a monumental opportunity for growth, bringing local operators into the global digital marketplace.</p>
                            </div>
                            <div className="border-t border-white/10 pt-4">
                                <p className="text-sm font-semibold text-white">In official partnership with:</p>
                                <p className="text-lg text-gray-300">The Ministry of Tourism and Antiquities, Egypt</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="mt-8">
                             <Link href="/destinations">
                                <div className="group inline-flex items-center justify-center gap-2 rounded-full bg-foxes-orange px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105">
                                    Learn About Destination Projects
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <div className="relative h-[500px] lg:h-full">
                         <Image
                            src="/images/destinations/nile-view.jpg"
                            alt="A stunning view of the Nile river with feluccas at sunset"
                            fill
                            className="rounded-2xl object-cover"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-dark-grey/80 via-dark-grey/20 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8 space-y-4">
                            {destinationGoals.map((goal, index) => (
                                <motion.div
                                    key={goal.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                                    viewport={{ once: true }}
                                    className="rounded-xl border border-white/10 bg-black/30 p-4 shadow-xl backdrop-blur-md"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-foxes-orange/20 text-foxes-orange">
                                            <goal.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">{goal.title}</p>
                                            <p className="text-sm text-gray-300">{goal.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}