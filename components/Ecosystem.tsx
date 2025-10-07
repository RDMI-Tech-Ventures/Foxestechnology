'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

const ecosystemData = [
    {
        id: 0,
        title: "Take payments, everywhere",
        description: "Sell anything in person, online, or on the go with a point of sale platform that syncs your entire operation in real-time. One central hub for every transaction.",
        image: "/images/ecosystem/screen-payments.png"
    },
    {
        id: 1,
        title: "Manage your entire operation",
        description: "From live inventory and resource scheduling to guest manifests and channel management, our central dashboard gives you a complete, top-down view of your business.",
        image: "/images/ecosystem/screen-dashboard.png"
    },
    {
        id: 2,
        title: "Automate with intelligent AI",
        description: "Deploy FoxesBOT to handle customer inquiries 24/7. Use our AI to get predictive insights, analyze sales trends, and make smarter decisions, faster.",
        image: "/images/ecosystem/screen-ai.png"
    },
    {
        id: 3,
        title: "Control your cash flow",
        description: "Get detailed analytics and accounting exports to understand your revenue streams. Track performance, optimize pricing, and accelerate your growth with data-driven insights.",
        image: "/images/ecosystem/screen-analytics.png"
    }
];

export default function Ecosystem() {
    const [expanded, setExpanded] = useState(0);

    return (
        <section className="bg-black text-white py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column: Sticky Visuals */}
                    <div className="w-full lg:sticky lg:top-24">
                        <div className="relative aspect-[4/3] w-full">
                             {/* Base Laptop */}
                            <Image
                                src="/images/ecosystem/laptop-base.png"
                                alt="Dashboard on a laptop"
                                fill
                                className="object-contain"
                                priority
                            />
                            {/* Dynamic Screen Content */}
                             <AnimatePresence mode="wait">
                                {ecosystemData.map(item =>
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
                                            className="object-contain p-[5%]" // Adjust padding to fit inside the laptop screen
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
                                    src="/images/ecosystem/pos-device.png"
                                    alt="POS Handheld Device"
                                    width={400}
                                    height={400}
                                    className="object-contain"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="w-full">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="font-goldplay text-4xl font-bold tracking-tight text-white sm:text-5xl"
                        >
                            See your whole business click into place.
                        </motion.h2>

                        <div className="mt-12 space-y-2 border-t border-white/10">
                            {ecosystemData.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    isOpen={expanded === item.id}
                                    onClick={() => setExpanded(item.id)}
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
                className="flex cursor-pointer items-center justify-between"
            >
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    {isOpen ? <Minus /> : <Plus />}
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
                            open: { opacity: 1, height: 'auto', marginTop: '16px' },
                            collapsed: { opacity: 0, height: 0, marginTop: '0px' },
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <p className="max-w-prose text-lg text-gray-300">
                            {description}
                        </p>
                         <div className="group mt-4 inline-flex items-center gap-2 font-semibold text-foxes-orange transition-colors hover:text-orange-400">
                            Learn more
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
}