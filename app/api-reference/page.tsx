'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Database, Key, Zap, Lock, Activity, CreditCard, Calendar, Users, BarChart3, Webhook } from 'lucide-react';
import { useState } from 'react';

const BRAND_COLOR_PRIMARY = "bg-red-600";
const BRAND_HOVER_PRIMARY = "hover:bg-red-700";
const BRAND_TEXT_PRIMARY = "text-red-600";

export default function APIReferencePage() {
    return (
        <main className="bg-white">
            <APIHero />
            <APIEndpoints />
            <CodeExample />
            <Authentication />
            <RateLimits />
            <SDKCTA />
        </main>
    );
}

// Hero Section
function APIHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(239 68 68) 1px, transparent 0)`,
                    backgroundSize: '48px 48px'
                }}></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-red-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/50 px-5 py-2.5 backdrop-blur-sm">
                        <Code className="h-4 w-4 text-red-400" />
                        <span className="text-sm font-bold text-white">API Reference</span>
                    </div>

                    <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
                        style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
                        Powerful APIs
                        <span className="block bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">
                            For Your Business
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 lg:text-xl"
                       style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
                        RESTful APIs with comprehensive documentation, SDKs in multiple languages,
                        and real-time webhooks for seamless integration.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group inline-flex items-center gap-2 rounded-full ${BRAND_COLOR_PRIMARY} px-8 py-4 text-base font-bold text-white shadow-lg transition-all ${BRAND_HOVER_PRIMARY}`}
                        >
                            <Key className="h-5 w-5" />
                            <span>Get API Keys</span>
                        </motion.button>
                        <Link href="/docs">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/20"
                            >
                                View Documentation
                                <ArrowRight className="h-5 w-5" />
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// API Endpoints
function APIEndpoints() {
    const endpoints = [
        {
            icon: Calendar,
            title: 'Bookings API',
            description: 'Create, update, and manage bookings in real-time',
            color: 'from-blue-500 to-blue-600',
            methods: ['GET /bookings', 'POST /bookings', 'PUT /bookings/:id', 'DELETE /bookings/:id'],
        },
        {
            icon: CreditCard,
            title: 'Payments API',
            description: 'Process payments, refunds, and manage transactions',
            color: 'from-green-500 to-green-600',
            methods: ['POST /payments', 'GET /payments/:id', 'POST /refunds', 'GET /transactions'],
        },
        {
            icon: Users,
            title: 'Customers API',
            description: 'Manage customer profiles, preferences, and history',
            color: 'from-purple-500 to-purple-600',
            methods: ['GET /customers', 'POST /customers', 'PUT /customers/:id', 'GET /customers/:id/bookings'],
        },
        {
            icon: Database,
            title: 'Inventory API',
            description: 'Track availability, pricing, and product catalog',
            color: 'from-orange-500 to-orange-600',
            methods: ['GET /products', 'PUT /products/:id/availability', 'GET /pricing', 'POST /bulk-update'],
        },
        {
            icon: BarChart3,
            title: 'Analytics API',
            description: 'Access reports, metrics, and business insights',
            color: 'from-indigo-500 to-indigo-600',
            methods: ['GET /reports/revenue', 'GET /reports/bookings', 'GET /metrics', 'GET /insights'],
        },
        {
            icon: Webhook,
            title: 'Webhooks',
            description: 'Real-time event notifications for your applications',
            color: 'from-red-500 to-red-600',
            methods: ['booking.created', 'payment.success', 'booking.cancelled', 'customer.updated'],
        },
    ];

    return (
        <section className="relative -mt-16 z-20 pb-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl font-black text-slate-900 lg:text-5xl">
                        API Endpoints
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Complete suite of REST APIs for all your business needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {endpoints.map((endpoint, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-red-300 hover:shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <div className="relative">
                                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${endpoint.color} shadow-lg`}>
                                    <endpoint.icon className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="mt-6 text-xl font-bold text-slate-900">{endpoint.title}</h3>
                                <p className="mt-3 text-sm text-slate-600">{endpoint.description}</p>
                                <div className="mt-4 space-y-2">
                                    {endpoint.methods.map((method, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                                            <code className="text-xs font-mono text-slate-700">{method}</code>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Code Example
function CodeExample() {
    const [activeTab, setActiveTab] = useState<'curl' | 'javascript' | 'python'>('curl');

    const codeExamples = {
        curl: `curl https://api.foxestechnology.com/v1/bookings \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "product_id": "tour_123",
    "date": "2025-12-25",
    "guests": 4,
    "customer": {
      "name": "Ahmed Hassan",
      "email": "ahmed@example.com"
    }
  }'`,
        javascript: `const foxes = require('foxes-sdk');
const client = new foxes.Client('YOUR_API_KEY');

const booking = await client.bookings.create({
  product_id: 'tour_123',
  date: '2025-12-25',
  guests: 4,
  customer: {
    name: 'Ahmed Hassan',
    email: 'ahmed@example.com'
  }
});

console.log('Booking created:', booking.id);`,
        python: `from foxes import Client

client = Client('YOUR_API_KEY')

booking = client.bookings.create(
    product_id='tour_123',
    date='2025-12-25',
    guests=4,
    customer={
        'name': 'Ahmed Hassan',
        'email': 'ahmed@example.com'
    }
)

print(f'Booking created: {booking.id}')`,
    };

    return (
        <section className="bg-gradient-to-b from-white to-slate-50 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-black text-slate-900 lg:text-5xl">
                        Quick Example
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Create a booking in just a few lines of code
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="rounded-3xl border-2 border-slate-200 bg-white shadow-2xl overflow-hidden">
                        {/* Tabs */}
                        <div className="flex border-b border-slate-200 bg-slate-50">
                            {(['curl', 'javascript', 'python'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-4 text-sm font-bold transition-all ${
                                        activeTab === tab
                                            ? 'bg-white text-red-600 border-b-2 border-red-600'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    {tab === 'curl' ? 'cURL' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Code Block */}
                        <div className="p-8 bg-slate-900">
                            <pre className="overflow-x-auto">
                                <code className="text-sm text-green-400 font-mono">
                                    {codeExamples[activeTab]}
                                </code>
                            </pre>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Authentication
function Authentication() {
    return (
        <section className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2">
                            <Lock className="h-5 w-5 text-red-600" />
                            <span className="text-sm font-bold text-red-900">Secure by Default</span>
                        </div>
                        <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
                            Authentication
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-slate-700">
                            All API requests require authentication using API keys. You can generate and manage
                            your API keys from the dashboard. Always keep your secret keys secure and never
                            share them publicly.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-4">
                                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${BRAND_COLOR_PRIMARY}`}>
                                    <Key className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">API Keys</h3>
                                    <p className="mt-1 text-sm text-slate-600">
                                        Use Bearer token authentication in the Authorization header
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green-600">
                                    <Lock className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">TLS/SSL Required</h3>
                                    <p className="mt-1 text-sm text-slate-600">
                                        All API requests must be made over HTTPS for security
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border-2 border-slate-200 bg-slate-900 p-8 shadow-2xl"
                    >
                        <div className="mb-4 flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                        <pre className="overflow-x-auto">
                            <code className="text-sm text-green-400 font-mono">
{`// Initialize client with API key
const client = new FoxesClient({
  apiKey: process.env.FOXES_API_KEY,
  environment: 'production'
});

// All requests are authenticated
const bookings = await client.bookings.list();`}
                            </code>
                        </pre>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Rate Limits
function RateLimits() {
    const limits = [
        { tier: 'Free', requests: '1,000', rate: '10 req/sec', features: ['Basic support', 'Standard SLA'] },
        { tier: 'Pro', requests: '100,000', rate: '100 req/sec', features: ['Priority support', '99.9% SLA'] },
        { tier: 'Enterprise', requests: 'Unlimited', rate: 'Custom', features: ['Dedicated support', '99.99% SLA'] },
    ];

    return (
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-black text-slate-900 lg:text-5xl">
                        Rate Limits
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Choose the plan that fits your integration needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {limits.map((limit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`group rounded-3xl border-2 p-8 shadow-lg transition-all ${
                                limit.tier === 'Pro'
                                    ? 'border-red-300 bg-gradient-to-br from-red-50 to-orange-50 shadow-2xl'
                                    : 'border-slate-200 bg-white hover:border-red-300 hover:shadow-2xl'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-black text-slate-900">{limit.tier}</h3>
                                {limit.tier === 'Pro' && (
                                    <span className={`rounded-full ${BRAND_COLOR_PRIMARY} px-3 py-1 text-xs font-bold text-white`}>
                                        Popular
                                    </span>
                                )}
                            </div>
                            <div className="mt-6">
                                <div className="text-4xl font-black text-slate-900">{limit.requests}</div>
                                <div className="mt-1 text-sm text-slate-600">requests/month</div>
                            </div>
                            <div className="mt-4">
                                <div className="text-xl font-bold text-slate-900">{limit.rate}</div>
                                <div className="mt-1 text-sm text-slate-600">sustained rate</div>
                            </div>
                            <ul className="mt-6 space-y-3">
                                {limit.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// SDK CTA
function SDKCTA() {
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

                    <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="flex items-center gap-4">
                                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${BRAND_COLOR_PRIMARY}`}>
                                    <Zap className="h-8 w-8 text-white" />
                                </div>
                                <h2 className="text-4xl font-black text-white">Need Help?</h2>
                            </div>
                            <p className="mt-6 text-lg leading-relaxed text-gray-300">
                                Check out our SDKs, join our developer community, or contact our support team
                                for personalized assistance with your integration.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                            <Link href="/docs">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-full ${BRAND_COLOR_PRIMARY} px-8 py-4 text-base font-bold text-white shadow-lg transition-all ${BRAND_HOVER_PRIMARY} sm:w-auto`}
                                >
                                    <span>View SDKs</span>
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </motion.button>
                            </Link>
                            <Link href="/support">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/20 sm:w-auto"
                                >
                                    Get Support
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
