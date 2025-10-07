'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Flag, Target, Users, Award, Heart, Globe, Zap, TrendingUp, Shield, Sparkles, CheckCircle } from 'lucide-react';

const BRAND_COLOR_PRIMARY = "bg-red-600";
const BRAND_HOVER_PRIMARY = "hover:bg-red-700";
const BRAND_TEXT_PRIMARY = "text-red-600";

// Main Page Component
export default function AboutPage() {
    return (
        <main className="bg-white">
            <AboutHero />
            <StatsSection />
            <MissionVision />
            <ValuesSection />
            <Timeline />
            <TeamSection />
            <AchievementsSection />
            <CareersCTA />
        </main>
    );
}

// 1. Enhanced Hero Section
function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/about/team-background.jpg"
                    alt="Foxes Technology Team"
                    fill
                    className="object-cover opacity-10"
                />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-red-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(239 68 68) 1px, transparent 0)`,
                    backgroundSize: '48px 48px'
                }}></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/50 px-5 py-2.5 backdrop-blur-sm">
                        <Heart className="h-4 w-4 text-red-400" />
                        <span className="text-sm font-bold text-white">Our Story</span>
                    </div>

                    <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
                        style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
                        Transforming Travel
                        <span className="block bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">
                            One Operator at a Time
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 lg:text-xl"
                       style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
                        We're travel tech experts with a passion for helping tour and activity operators 
                        in Egypt and the GCC unlock their full potential through cutting-edge technology.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className={`group inline-flex items-center gap-2 rounded-full ${BRAND_COLOR_PRIMARY} px-8 py-4 text-base font-bold text-white shadow-lg transition-all ${BRAND_HOVER_PRIMARY}`}
                            >
                                <span>Get in Touch</span>
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </motion.button>
                        </Link>
                        <Link href="#mission">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/20"
                            >
                                Learn More
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// 2. Stats Section
function StatsSection() {
    const stats = [
        { value: '500+', label: 'Active Operators', icon: Users },
        { value: '$50M+', label: 'Revenue Processed', icon: TrendingUp },
        { value: '1M+', label: 'Bookings Managed', icon: CheckCircle },
        { value: '15+', label: 'Years Experience', icon: Award },
    ];

    return (
        <section className="relative -mt-16 z-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-200 lg:grid-cols-4 lg:p-12"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${BRAND_COLOR_PRIMARY}`}>
                                <stat.icon className="h-7 w-7 text-white" />
                            </div>
                            <div className="text-4xl font-black text-slate-900">{stat.value}</div>
                            <div className="mt-2 text-sm font-semibold text-slate-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// 3. Enhanced Mission & Vision
function MissionVision() {
    return (
        <section id="mission" className="bg-gradient-to-b from-white to-slate-50 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-black text-slate-900 lg:text-5xl">
                        Our Purpose
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Driving the future of travel technology in the Middle East
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-10 shadow-lg transition-all hover:border-red-300 hover:shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative">
                            <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${BRAND_COLOR_PRIMARY} shadow-lg`}>
                                <Target className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="mt-6 text-3xl font-black text-slate-900">Our Mission</h3>
                            <p className="mt-4 text-lg leading-relaxed text-slate-700">
                                To drive digital transformation in the tourism industry, empowering businesses to reach 
                                their full potential. We simplify operations, streamline bookings, and enhance the traveler 
                                experience, helping our partners unlock growth and showcase Egypt's rich culture to the world.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-10 shadow-lg transition-all hover:border-red-300 hover:shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative">
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
                                <Flag className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="mt-6 text-3xl font-black text-slate-900">Our Vision</h3>
                            <p className="mt-4 text-lg leading-relaxed text-slate-700">
                                To create a fully digitized travel ecosystem where every tour operator, from large attractions 
                                to individual guides, has the tools to thrive in the global marketplace, making local culture 
                                more accessible to everyone.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// 4. Values Section
function ValuesSection() {
    const values = [
        { 
            icon: Heart, 
            title: 'Customer First', 
            description: 'We put our customers at the heart of everything we do, ensuring their success is our success.',
            color: 'from-red-500 to-red-600'
        },
        { 
            icon: Zap, 
            title: 'Innovation', 
            description: 'We constantly push boundaries to deliver cutting-edge solutions that drive real results.',
            color: 'from-yellow-500 to-orange-600'
        },
        { 
            icon: Shield, 
            title: 'Trust & Security', 
            description: 'We maintain the highest standards of data security and reliability for peace of mind.',
            color: 'from-blue-500 to-blue-600'
        },
        { 
            icon: Globe, 
            title: 'Local Expertise', 
            description: 'Deep understanding of the Middle East market combined with global best practices.',
            color: 'from-green-500 to-green-600'
        },
    ];

    return (
        <section className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-black text-slate-900 lg:text-5xl">
                        Our Core Values
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        The principles that guide everything we do
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group text-center"
                        >
                            <div className={`mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${value.color} shadow-lg transition-transform group-hover:scale-110`}>
                                <value.icon className="h-10 w-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 5. Enhanced Timeline
const timelineEvents = [
    { year: "2009", title: "A Passion for Travel", description: "Founded with over 15 years of prior experience in the tourism sector, our journey began with a deep understanding of what leads to bookings." },
    { year: "2015", title: "First Booking System", description: "We launched our first-generation booking engine, helping local Egyptian operators get online for the first time." },
    { year: "2020", title: "Major Milestone", description: "Reached 100+ active operators and expanded our product suite to include payment processing." },
    { year: "2022", title: "Platform Expansion", description: "Expanded our offerings to include POS hardware, Kiosks, and advanced AI features, creating an all-in-one ecosystem." },
    { year: "2023", title: "Official Partnership", description: "Formalized our partnership with the Ministry of Tourism and Antiquities to accelerate digital transformation nationwide." },
    { year: "Today", title: "500+ Operators & Growing", description: "We proudly serve over 500 active operators across Egypt and the GCC, processing over 1M+ bookings." },
];

function Timeline() {
    return (
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-black text-slate-900 lg:text-5xl">Our Journey</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        From a deep-seated passion for travel to a leading technology partner
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-red-500 via-red-400 to-orange-500 lg:block"></div>

                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={event.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} items-center gap-8`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 top-8 z-10 hidden h-6 w-6 -translate-x-1/2 rounded-full bg-red-600 ring-4 ring-white shadow-lg lg:block"></div>

                                {/* Content Card */}
                                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? '' : 'lg:ml-auto'}`}>
                                    <div className="group rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-red-300 hover:shadow-2xl">
                                        <div className="flex items-start gap-4">
                                            <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${BRAND_COLOR_PRIMARY} shadow-md`}>
                                                <span className="text-xl font-black text-white">{event.year}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
                                                <p className="mt-3 text-base leading-relaxed text-slate-600">{event.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// 6. Enhanced Team Section
const teamMembers = [
    { name: "Fouad Elshazly", title: "Founder & CEO", image: "/images/team/fouad-elshazly.jpg", bio: "15+ years in travel technology" },
    { name: "Sarah Ahmed", title: "Head of Product", image: "/images/team/placeholder-01.jpg", bio: "Former Product Lead at Booking.com" },
    { name: "Mohammed Ali", title: "Lead Engineer", image: "/images/team/placeholder-02.jpg", bio: "Ex-Amazon Software Architect" },
    { name: "Layla Hassan", title: "Head of Customer Success", image: "/images/team/placeholder-03.jpg", bio: "Tourism industry veteran" },
];

function TeamSection() {
    return (
        <section className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-black text-slate-900 lg:text-5xl">
                        Meet Our Leadership
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        A team of travel experts and technologists dedicated to your success
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group text-center"
                        >
                            <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-2xl ring-4 ring-slate-200 transition-all group-hover:ring-red-500">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                            <p className={`mt-1 text-base font-bold ${BRAND_TEXT_PRIMARY}`}>{member.title}</p>
                            <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 7. Achievements Section
function AchievementsSection() {
    return (
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 p-12 shadow-xl ring-2 ring-amber-200"
                >
                    <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2">
                                <Award className="h-5 w-5 text-amber-600" />
                                <span className="text-sm font-bold text-amber-900">Recognition</span>
                            </div>
                            <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
                                Official Partner
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-slate-700">
                                We're proud to be an official technology partner of the Ministry of Tourism and Antiquities, 
                                helping to digitize Egypt's tourism sector and showcase its wonders to the world.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex h-48 w-48 items-center justify-center rounded-3xl bg-amber-100 shadow-2xl lg:h-64 lg:w-64">
                                <Award className="h-32 w-32 text-amber-600 lg:h-40 lg:w-40" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// 8. Enhanced Careers CTA
function CareersCTA() {
    return (
        <section className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-12 shadow-2xl lg:p-16"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(239 68 68) 1px, transparent 0)`,
                            backgroundSize: '32px 32px'
                        }}></div>
                    </div>

                    {/* Decorative Blur */}
                    <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-red-500/20 blur-3xl"></div>

                    <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="flex items-center gap-4">
                                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${BRAND_COLOR_PRIMARY}`}>
                                    <Users className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-black text-white">Join Our Mission</h2>
                                    <p className="mt-2 text-lg text-gray-300">
                                        Help us shape the future of travel technology
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-base leading-relaxed text-gray-400">
                                We're always looking for passionate people who want to make a real impact in the travel industry. 
                                Join our growing team and be part of something special.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                            <Link href="/careers">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-full ${BRAND_COLOR_PRIMARY} px-8 py-4 text-base font-bold text-white shadow-lg transition-all ${BRAND_HOVER_PRIMARY} sm:w-auto`}
                                >
                                    <span>View Openings</span>
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </motion.button>
                            </Link>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/20 sm:w-auto"
                                >
                                    Contact HR
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}