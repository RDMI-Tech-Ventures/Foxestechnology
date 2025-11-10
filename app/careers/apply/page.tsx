'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Mail, Phone, User, FileText, Upload, Send, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const BRAND_COLOR_PRIMARY = "bg-red-600";

export default function ApplyPage() {
    const searchParams = useSearchParams();
    const positionTitle = searchParams.get('position') || 'Position';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        resume: null as File | null,
        coverLetter: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({
            ...prev,
            resume: file
        }));
        setFileName(file?.name || '');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after showing success message
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                linkedin: '',
                resume: null,
                coverLetter: ''
            });
            setFileName('');
        }, 3000);
    };

    const isFormValid = formData.name && formData.email && formData.phone && formData.resume;

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            {/* Back Navigation */}
            <div className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <Link
                        href="/careers"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-red-600"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Careers
                    </Link>
                </div>
            </div>

            {/* Application Form Section */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-2.5">
                            <Briefcase className="h-4 w-4 text-red-600" />
                            <span className="text-sm font-bold text-red-600">Job Application</span>
                        </div>

                        <h1 className="text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
                            Apply for{' '}
                            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                                {positionTitle}
                            </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                            We&apos;re excited to learn more about you! Fill out the form below and we&apos;ll get back to you soon.
                        </p>
                    </motion.div>

                    {/* Application Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-12"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-12 text-center shadow-xl"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg"
                                >
                                    <CheckCircle className="h-10 w-10 text-white" />
                                </motion.div>
                                <h2 className="text-2xl font-black text-slate-900">
                                    Application Submitted Successfully!
                                </h2>
                                <p className="mt-4 text-slate-600">
                                    Thank you for applying! Our team will review your application and get back to you within 5-7 business days.
                                </p>
                                <Link href="/careers">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`mt-8 inline-flex items-center gap-2 rounded-full ${BRAND_COLOR_PRIMARY} px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-red-700`}
                                    >
                                        <ArrowLeft className="h-5 w-5" />
                                        Back to Careers
                                    </motion.button>
                                </Link>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-xl">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-slate-900">
                                            <User className="h-4 w-4 text-red-600" />
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 transition-colors focus:border-red-500 focus:outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="mt-6">
                                        <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-slate-900">
                                            <Mail className="h-4 w-4 text-red-600" />
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 transition-colors focus:border-red-500 focus:outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="mt-6">
                                        <label htmlFor="phone" className="flex items-center gap-2 text-sm font-bold text-slate-900">
                                            <Phone className="h-4 w-4 text-red-600" />
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 transition-colors focus:border-red-500 focus:outline-none"
                                            placeholder="+20 123 456 7890"
                                        />
                                    </div>

                                    {/* LinkedIn */}
                                    <div className="mt-6">
                                        <label htmlFor="linkedin" className="flex items-center gap-2 text-sm font-bold text-slate-900">
                                            <FileText className="h-4 w-4 text-red-600" />
                                            LinkedIn Profile (Optional)
                                        </label>
                                        <input
                                            type="url"
                                            id="linkedin"
                                            name="linkedin"
                                            value={formData.linkedin}
                                            onChange={handleInputChange}
                                            className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 transition-colors focus:border-red-500 focus:outline-none"
                                            placeholder="https://linkedin.com/in/johndoe"
                                        />
                                    </div>

                                    {/* Resume Upload */}
                                    <div className="mt-6">
                                        <label htmlFor="resume" className="flex items-center gap-2 text-sm font-bold text-slate-900">
                                            <Upload className="h-4 w-4 text-red-600" />
                                            Resume / CV *
                                        </label>
                                        <div className="mt-2">
                                            <label
                                                htmlFor="resume"
                                                className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-slate-600 transition-all hover:border-red-500 hover:bg-red-50"
                                            >
                                                <Upload className="h-5 w-5" />
                                                <span className="font-semibold">
                                                    {fileName || 'Click to upload your resume (PDF, DOC, DOCX)'}
                                                </span>
                                            </label>
                                            <input
                                                type="file"
                                                id="resume"
                                                name="resume"
                                                onChange={handleFileChange}
                                                accept=".pdf,.doc,.docx"
                                                required
                                                className="hidden"
                                            />
                                            {fileName && (
                                                <p className="mt-2 text-sm text-green-600">
                                                    Selected: {fileName}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Cover Letter */}
                                    <div className="mt-6">
                                        <label htmlFor="coverLetter" className="flex items-center gap-2 text-sm font-bold text-slate-900">
                                            <FileText className="h-4 w-4 text-red-600" />
                                            Cover Letter (Optional)
                                        </label>
                                        <textarea
                                            id="coverLetter"
                                            name="coverLetter"
                                            value={formData.coverLetter}
                                            onChange={handleInputChange}
                                            rows={6}
                                            className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 transition-colors focus:border-red-500 focus:outline-none"
                                            placeholder="Tell us why you're a great fit for this position..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="mt-8">
                                        <motion.button
                                            type="submit"
                                            disabled={!isFormValid || isSubmitting}
                                            whileHover={isFormValid && !isSubmitting ? { scale: 1.02 } : {}}
                                            whileTap={isFormValid && !isSubmitting ? { scale: 0.98 } : {}}
                                            className={`w-full rounded-xl ${BRAND_COLOR_PRIMARY} px-8 py-4 text-base font-bold text-white shadow-lg transition-all ${
                                                !isFormValid || isSubmitting
                                                    ? 'cursor-not-allowed opacity-50'
                                                    : 'hover:bg-red-700'
                                            }`}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                            fill="none"
                                                        />
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        />
                                                    </svg>
                                                    Submitting Application...
                                                </span>
                                            ) : (
                                                <span className="flex items-center justify-center gap-2">
                                                    <Send className="h-5 w-5" />
                                                    Submit Application
                                                </span>
                                            )}
                                        </motion.button>
                                    </div>

                                    <p className="mt-4 text-center text-sm text-slate-500">
                                        By submitting this form, you agree to our{' '}
                                        <Link href="/privacy" className="font-semibold text-red-600 hover:text-red-700">
                                            Privacy Policy
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        )}
                    </motion.div>

                    {/* Additional Info */}
                    {!isSubmitted && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-8 rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6"
                        >
                            <h3 className="font-bold text-slate-900">What happens next?</h3>
                            <ul className="mt-4 space-y-2 text-sm text-slate-600">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span>Our team will review your application within 5-7 business days</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span>If you&apos;re a good fit, we&apos;ll reach out to schedule an interview</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span>The interview process typically includes 2-3 rounds with our team</span>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
}
