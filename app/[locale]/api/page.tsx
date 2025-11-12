'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Code, Key, Book, Lock, CheckCircle, Copy, ExternalLink, Globe, Zap, Shield, AlertCircle } from 'lucide-react';

const BRAND_COLOR_PRIMARY = "bg-red-600";
const BRAND_TEXT_PRIMARY = "text-red-600";

interface Endpoint {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path: string;
    description: string;
    requiresAuth: boolean;
}

interface ApiSection {
    name: string;
    icon: any;
    color: string;
    endpoints: Endpoint[];
}

export default function APIReferencePage() {
    const [selectedLanguage, setSelectedLanguage] = useState<'curl' | 'javascript' | 'python' | 'php'>('curl');
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const apiSections: ApiSection[] = [
        {
            name: 'Authentication',
            icon: Key,
            color: 'from-blue-500 to-blue-600',
            endpoints: [
                { method: 'POST', path: '/api/v2/auth/login', description: 'Authenticate and obtain API key', requiresAuth: false },
                { method: 'POST', path: '/api/v2/auth/refresh', description: 'Refresh authentication token', requiresAuth: true },
                { method: 'POST', path: '/api/v2/auth/logout', description: 'Invalidate current session', requiresAuth: true },
            ]
        },
        {
            name: 'Activities',
            icon: Zap,
            color: 'from-purple-500 to-purple-600',
            endpoints: [
                { method: 'GET', path: '/api/v2/activities', description: 'List all activities', requiresAuth: true },
                { method: 'GET', path: '/api/v2/activities/{id}', description: 'Get activity details', requiresAuth: true },
                { method: 'POST', path: '/api/v2/activities', description: 'Create new activity', requiresAuth: true },
                { method: 'PUT', path: '/api/v2/activities/{id}', description: 'Update activity', requiresAuth: true },
                { method: 'DELETE', path: '/api/v2/activities/{id}', description: 'Delete activity', requiresAuth: true },
            ]
        },
        {
            name: 'Bookings',
            icon: Book,
            color: 'from-green-500 to-green-600',
            endpoints: [
                { method: 'GET', path: '/api/v2/bookings', description: 'List all bookings', requiresAuth: true },
                { method: 'GET', path: '/api/v2/bookings/{id}', description: 'Get booking details', requiresAuth: true },
                { method: 'POST', path: '/api/v2/bookings', description: 'Create new booking', requiresAuth: true },
                { method: 'PUT', path: '/api/v2/bookings/{id}', description: 'Update booking', requiresAuth: true },
                { method: 'POST', path: '/api/v2/bookings/{id}/cancel', description: 'Cancel booking', requiresAuth: true },
                { method: 'POST', path: '/api/v2/bookings/{id}/confirm', description: 'Confirm booking', requiresAuth: true },
            ]
        },
        {
            name: 'Payments',
            icon: Globe,
            color: 'from-orange-500 to-orange-600',
            endpoints: [
                { method: 'GET', path: '/api/v2/payments', description: 'List all payments', requiresAuth: true },
                { method: 'GET', path: '/api/v2/payments/{id}', description: 'Get payment details', requiresAuth: true },
                { method: 'POST', path: '/api/v2/payments', description: 'Process payment', requiresAuth: true },
                { method: 'POST', path: '/api/v2/payments/{id}/refund', description: 'Refund payment', requiresAuth: true },
            ]
        },
        {
            name: 'Contacts',
            icon: Shield,
            color: 'from-red-500 to-red-600',
            endpoints: [
                { method: 'GET', path: '/api/v2/contacts', description: 'List all contacts', requiresAuth: true },
                { method: 'GET', path: '/api/v2/contacts/{id}', description: 'Get contact details', requiresAuth: true },
                { method: 'POST', path: '/api/v2/contacts', description: 'Create new contact', requiresAuth: true },
                { method: 'PUT', path: '/api/v2/contacts/{id}', description: 'Update contact', requiresAuth: true },
                { method: 'DELETE', path: '/api/v2/contacts/{id}', description: 'Delete contact', requiresAuth: true },
            ]
        },
        {
            name: 'Settings',
            icon: Code,
            color: 'from-indigo-500 to-indigo-600',
            endpoints: [
                { method: 'GET', path: '/api/v2/settings', description: 'Get account settings', requiresAuth: true },
                { method: 'PUT', path: '/api/v2/settings', description: 'Update account settings', requiresAuth: true },
                { method: 'GET', path: '/api/v2/settings/currencies', description: 'Get supported currencies', requiresAuth: false },
                { method: 'GET', path: '/api/v2/settings/countries', description: 'Get supported countries', requiresAuth: false },
            ]
        },
    ];

    const codeExamples = {
        curl: `curl -X POST https://api.foxestechnology.com/api/v2/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "your-email@example.com",
    "password": "your-password"
  }'`,
        javascript: `const response = await fetch('https://api.foxestechnology.com/api/v2/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'your-email@example.com',
    password: 'your-password'
  })
});

const data = await response.json();
console.log(data.api_key);`,
        python: `import requests

response = requests.post(
    'https://api.foxestechnology.com/api/v2/auth/login',
    json={
        'email': 'your-email@example.com',
        'password': 'your-password'
    }
)

data = response.json()
print(data['api_key'])`,
        php: `<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.foxestechnology.com/api/v2/auth/login');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'email' => 'your-email@example.com',
    'password' => 'your-password'
]));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
echo $data['api_key'];
?>`
    };

    const copyToClipboard = (code: string, lang: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(lang);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const getMethodColor = (method: string) => {
        switch (method) {
            case 'GET': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'POST': return 'bg-green-100 text-green-700 border-green-200';
            case 'PUT': return 'bg-orange-100 text-orange-700 border-orange-200';
            case 'PATCH': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'DELETE': return 'bg-red-100 text-red-700 border-red-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <main className="bg-white">
            {/* Hero Section */}
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
                            <span className="text-sm font-bold text-white">API v2.0</span>
                        </div>

                        <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
                            style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
                            API Reference
                            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">
                                Documentation
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 lg:text-xl"
                           style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
                            Complete RESTful API reference for integrating Foxes Technology booking platform
                            into your applications. Build powerful tour and activity management systems.
                        </p>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                            <Link href="#authentication">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`group inline-flex items-center gap-2 rounded-full ${BRAND_COLOR_PRIMARY} px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-red-700`}
                                >
                                    <span>Get Started</span>
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </motion.button>
                            </Link>
                            <a href="https://api.foxestechnology.com/api/v2/doc" target="_blank" rel="noopener noreferrer">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/20"
                                >
                                    <span>Interactive API Docs</span>
                                    <ExternalLink className="h-5 w-5" />
                                </motion.button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Info Cards */}
            <section className="relative -mt-16 z-20 pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {[
                            { icon: Key, title: 'API Key Authentication', desc: 'Secure key-based authentication' },
                            { icon: Globe, title: 'RESTful Design', desc: 'Standard HTTP methods' },
                            { icon: Lock, title: 'HTTPS Only', desc: 'All endpoints are encrypted' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg"
                            >
                                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${BRAND_COLOR_PRIMARY}`}>
                                    <item.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Authentication Section */}
            <section id="authentication" className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-black text-slate-900 lg:text-5xl">
                            Authentication
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
                            All API requests require authentication using an API key. You can obtain your API key from your account settings after signing in.
                        </p>
                    </motion.div>

                    {/* Authentication Info Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 mb-8"
                    >
                        <div className="flex items-start gap-4">
                            <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-bold text-blue-900">Include API Key in Headers</h3>
                                <p className="mt-2 text-sm text-blue-800">
                                    Include your API key in the <code className="px-2 py-1 bg-blue-100 rounded font-mono text-xs">Api-Key</code> header for all authenticated requests.
                                    All dates should be in standard UNIX Epoch time (seconds).
                                </p>
                                <pre className="mt-4 bg-blue-900 text-blue-100 p-4 rounded-lg text-sm overflow-x-auto">
                                    <code>Api-Key: your_api_key_here</code>
                                </pre>
                            </div>
                        </div>
                    </motion.div>

                    {/* Code Example */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden shadow-lg"
                    >
                        <div className="border-b-2 border-slate-200 bg-slate-50 px-6 py-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold text-slate-900">Authentication Example</h3>
                                <div className="flex gap-2">
                                    {(['curl', 'javascript', 'python', 'php'] as const).map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => setSelectedLanguage(lang)}
                                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                                                selectedLanguage === lang
                                                    ? 'bg-red-600 text-white'
                                                    : 'bg-white text-slate-600 hover:bg-slate-100'
                                            }`}
                                        >
                                            {lang === 'curl' ? 'cURL' : lang.charAt(0).toUpperCase() + lang.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <pre className="bg-slate-900 text-slate-100 p-6 overflow-x-auto text-sm">
                                <code>{codeExamples[selectedLanguage]}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(codeExamples[selectedLanguage], selectedLanguage)}
                                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                            >
                                {copiedCode === selectedLanguage ? (
                                    <CheckCircle className="h-5 w-5 text-green-400" />
                                ) : (
                                    <Copy className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* API Endpoints */}
            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-black text-slate-900 lg:text-5xl">
                            API Endpoints
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Complete list of available endpoints organized by resource type
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {apiSections.map((section, sectionIndex) => (
                            <motion.div
                                key={sectionIndex}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: sectionIndex * 0.1 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${section.color} shadow-lg`}>
                                        <section.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900">{section.name}</h3>
                                </div>

                                <div className="space-y-3">
                                    {section.endpoints.map((endpoint, endpointIndex) => (
                                        <motion.div
                                            key={endpointIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: endpointIndex * 0.05 }}
                                            className="group rounded-xl border-2 border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-red-300 hover:shadow-lg"
                                        >
                                            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 flex-wrap">
                                                        <span className={`inline-flex items-center rounded-lg border px-3 py-1 text-xs font-bold ${getMethodColor(endpoint.method)}`}>
                                                            {endpoint.method}
                                                        </span>
                                                        <code className="text-sm font-mono text-slate-700 bg-slate-50 px-3 py-1 rounded-lg">
                                                            {endpoint.path}
                                                        </code>
                                                        {endpoint.requiresAuth && (
                                                            <span className="inline-flex items-center gap-1 rounded-lg bg-amber-50 border border-amber-200 px-2 py-1 text-xs font-semibold text-amber-700">
                                                                <Lock className="h-3 w-3" />
                                                                Auth Required
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="mt-3 text-sm text-slate-600">{endpoint.description}</p>
                                                </div>
                                                <ArrowRight className="h-5 w-5 text-slate-400 transition-all group-hover:text-red-600 group-hover:translate-x-1" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Base URL Section */}
            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Base URL</h3>
                            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                                <code>https://api.foxestechnology.com</code>
                            </pre>
                            <p className="mt-4 text-sm text-slate-600">
                                All API requests should be made to this base URL with the appropriate endpoint path.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Rate Limits</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-sm font-semibold text-slate-700">Standard Plan:</span>
                                    <span className="text-sm text-slate-600">1,000 requests/hour</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm font-semibold text-slate-700">Professional Plan:</span>
                                    <span className="text-sm text-slate-600">5,000 requests/hour</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm font-semibold text-slate-700">Enterprise Plan:</span>
                                    <span className="text-sm text-slate-600">Unlimited</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
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

                        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-red-500/20 blur-3xl"></div>

                        <div className="relative text-center">
                            <h2 className="text-4xl font-black text-white lg:text-5xl">
                                Ready to Get Started?
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
                                Contact our team to get your API credentials and start building amazing experiences.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`group inline-flex items-center gap-2 rounded-full ${BRAND_COLOR_PRIMARY} px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-red-700`}
                                    >
                                        <span>Get API Access</span>
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </motion.button>
                                </Link>
                                <Link href="/docs">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/20"
                                    >
                                        View Documentation
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
