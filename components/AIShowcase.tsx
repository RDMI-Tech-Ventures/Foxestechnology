'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bot, MessageSquare, Sparkles, Zap, Globe, Clock, TrendingUp, ArrowRight } from 'lucide-react';

const BRAND_COLOR_PRIMARY = "bg-red-600";
const BRAND_TEXT_PRIMARY = "text-red-600";

export default function AIShowcase() {
    const features = [
        {
            icon: MessageSquare,
            title: "24/7 Customer Support",
            description: "Handle unlimited guest inquiries in real-time, freeing your team for high-value tasks"
        },
        {
            icon: Globe,
            title: "Arabic & English",
            description: "Seamlessly communicate with Egyptian and international tourists in their preferred language"
        },
        {
            icon: Sparkles,
            title: "Smart Recommendations",
            description: "AI-powered tour suggestions based on guest preferences, weather, and local events"
        },
        {
            icon: TrendingUp,
            title: "Demand Forecasting",
            description: "Predict booking patterns and optimize pricing for maximum revenue in peak seasons"
        }
    ];

    return (
        <section className="relative overflow-hidden py-20 sm:py-28">
            {/* Background with Heavy Glassmorphism Effect */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/1.png"
                    alt="AI Background"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/98 via-orange-50/98 to-white/98"></div>
                <div className="absolute inset-0 backdrop-blur-3xl"></div>
            </div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(249 115 22) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            {/* Decorative Blurs */}
            <div className="absolute top-0 right-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-orange-300/40 to-red-300/30 blur-3xl z-0"></div>
            <div className="absolute bottom-0 left-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-red-300/30 to-orange-300/40 blur-3xl z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full bg-blue-200/20 blur-3xl z-0"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <div className="text-center animate-fade-in">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/50 bg-orange-100/60 px-5 py-2.5 backdrop-blur-xl shadow-lg">
                        <Sparkles className="h-5 w-5 text-orange-600" />
                        <span className="text-sm font-bold text-orange-900">AI-Powered Intelligence</span>
                    </div>

                    <h2 className="text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl">
                        Meet
                        <span className="block mt-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent text-6xl sm:text-7xl lg:text-8xl">
                            FoxesBot
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-700 lg:text-xl">
                        Your AI assistant that transforms Egyptian tourism operations with 24/7 multilingual support,
                        smart recommendations, and predictive analytics—helping you serve more guests while reducing costs.
                    </p>
                </div>

                {/* FoxesBot Showcase */}
                <div className="mt-16">
                    <div className="relative mx-auto max-w-2xl">
                        {/* Enhanced Glow Effect */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-300/40 via-red-300/40 to-orange-300/40 blur-3xl"></div>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-orange-200/20 to-transparent blur-2xl"></div>

                        {/* FoxesBot Image Container with Glass Effect */}
                        <div className="relative rounded-3xl border border-white/40 bg-white/20 p-8 backdrop-blur-sm shadow-2xl">
                            <div className="relative mx-auto w-full max-w-md animate-float">
                                <Image
                                    src="/botfox.png"
                                    alt="FoxesBot - AI-Powered Travel Assistant"
                                    width={400}
                                    height={400}
                                    className="w-full drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>

                        {/* FoxesBot Branding */}
                        <div className="mt-8 text-center">
                            <p className="text-xl font-bold text-slate-800">
                                Serving Egyptian Tourism{' '}
                                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                    24/7 in Arabic & English
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-xl transition-all hover:border-orange-300 hover:shadow-2xl hover:bg-white/80 hover:-translate-y-2 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Glassmorphism layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent opacity-50"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-red-100/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

                            <div className="relative">
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg group-hover:shadow-orange-500/50 transition-all group-hover:scale-110">
                                    <feature.icon className="h-7 w-7 text-white" />
                                </div>
                                <h4 className="mt-4 text-lg font-black text-slate-900">{feature.title}</h4>
                                <p className="mt-2 text-sm leading-relaxed text-slate-700">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col gap-4 sm:flex-row">
                        <Link href="/solutions/ai">
                            <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-orange-500/30 transition-all hover:shadow-orange-500/50 hover:scale-105 active:scale-95">
                                <span className="relative z-10">Explore FoxesBot</span>
                                <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            </button>
                        </Link>
                        <Link href="/demo">
                            <button className="inline-flex items-center gap-2 rounded-full border border-slate-300/50 bg-white/80 px-8 py-4 text-base font-bold text-slate-900 shadow-lg backdrop-blur-xl transition-all hover:border-slate-400 hover:bg-white hover:shadow-xl hover:scale-105 active:scale-95">
                                <Bot className="h-5 w-5" />
                                <span>See Demo</span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="relative mt-16 rounded-3xl border border-white/60 bg-white/70 p-10 shadow-2xl backdrop-blur-2xl overflow-hidden">
                    {/* Glass effect layers */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 via-white/30 to-transparent"></div>

                    <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-3">
                        {[
                            { value: "50k+", label: "Guest Inquiries", subtext: "Handled monthly", icon: MessageSquare },
                            { value: "98%", label: "Satisfaction Rate", subtext: "From travelers", icon: Sparkles },
                            { value: "<1s", label: "Response Time", subtext: "Average", icon: Zap },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="relative text-center group"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg mb-4 group-hover:scale-110 transition-transform">
                                    <stat.icon className="h-7 w-7 text-white" />
                                </div>
                                <div className="text-5xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{stat.value}</div>
                                <div className="mt-2 text-base font-bold text-slate-900">{stat.label}</div>
                                <div className="mt-1 text-sm text-slate-600">{stat.subtext}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}