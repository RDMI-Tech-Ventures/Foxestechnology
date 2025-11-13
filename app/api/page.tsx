'use client';

import dynamic from 'next/dynamic';
import { openApiSpec } from '@/lib/openapi-spec';
import 'swagger-ui-react/swagger-ui.css';

// Dynamically import SwaggerUI to avoid SSR issues
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

export default function APIDocumentationPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Header */}
            <header className="bg-gradient-to-r from-red-600 to-red-700 border-b border-red-800 shadow-lg">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-3">
                                API Documentation
                            </h1>
                            <p className="text-red-100 text-lg max-w-2xl">
                                Comprehensive REST API documentation for Foxes Technology booking and POS platform
                            </p>
                        </div>
                        <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-lg border border-white/30">
                            Version 2.0.0
                        </div>
                    </div>
                </div>
            </header>

            {/* Quick Links */}
            <section className="bg-gray-50 border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-6 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-gray-900 mb-2">Base URL</h3>
                            <code className="text-sm text-red-600 font-mono break-all">
                                https://api-staging.foxestechnology.com
                            </code>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-gray-900 mb-2">Authentication</h3>
                            <p className="text-sm text-gray-600">
                                Use <code className="bg-gray-100 px-2 py-1 rounded text-red-600">Api-Key</code> header
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-gray-900 mb-2">Format</h3>
                            <p className="text-sm text-gray-600">
                                JSON requests and responses
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Swagger UI */}
            <section className="mx-auto max-w-7xl px-6 py-8">
                <div className="swagger-container">
                    <SwaggerUI
                        spec={openApiSpec}
                        docExpansion="list"
                        defaultModelsExpandDepth={1}
                        defaultModelExpandDepth={1}
                        displayRequestDuration={true}
                        filter={true}
                        showExtensions={true}
                        showCommonExtensions={true}
                        tryItOutEnabled={true}
                    />
                </div>
            </section>

            <style jsx global>{`
                /* Custom Swagger UI styling to match Foxes Technology brand */
                .swagger-container .swagger-ui {
                    font-family: inherit;
                }

                .swagger-ui .topbar {
                    display: none;
                }

                .swagger-ui .info {
                    margin: 20px 0;
                }

                .swagger-ui .info .title {
                    font-size: 2rem;
                    color: #1f2937;
                }

                .swagger-ui .scheme-container {
                    background: #f9fafb;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 20px 0;
                }

                .swagger-ui .opblock-tag {
                    border-bottom: 2px solid #e5e7eb;
                    padding: 10px 0;
                    margin: 20px 0;
                }

                .swagger-ui .opblock-tag:hover {
                    background: #f9fafb;
                }

                .swagger-ui .opblock {
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    margin: 10px 0;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
                }

                .swagger-ui .opblock.opblock-get {
                    border-color: #14b8a6;
                    background: rgba(20, 184, 166, 0.05);
                }

                .swagger-ui .opblock.opblock-post {
                    border-color: #10b981;
                    background: rgba(16, 185, 129, 0.05);
                }

                .swagger-ui .opblock.opblock-put {
                    border-color: #f59e0b;
                    background: rgba(245, 158, 11, 0.05);
                }

                .swagger-ui .opblock.opblock-delete {
                    border-color: #dc2626;
                    background: rgba(220, 38, 38, 0.05);
                }

                .swagger-ui .opblock-summary-method {
                    border-radius: 6px;
                    font-weight: 600;
                    min-width: 80px;
                }

                .swagger-ui .opblock.opblock-get .opblock-summary-method {
                    background: #14b8a6;
                }

                .swagger-ui .opblock.opblock-post .opblock-summary-method {
                    background: #10b981;
                }

                .swagger-ui .opblock.opblock-put .opblock-summary-method {
                    background: #f59e0b;
                }

                .swagger-ui .opblock.opblock-delete .opblock-summary-method {
                    background: #dc2626;
                }

                .swagger-ui .btn.authorize {
                    background-color: #dc2626;
                    border-color: #dc2626;
                }

                .swagger-ui .btn.authorize:hover {
                    background-color: #b91c1c;
                }

                .swagger-ui .btn.execute {
                    background-color: #dc2626;
                    border-color: #dc2626;
                }

                .swagger-ui .btn.execute:hover {
                    background-color: #b91c1c;
                }

                .swagger-ui select,
                .swagger-ui input[type=text],
                .swagger-ui input[type=password],
                .swagger-ui input[type=search],
                .swagger-ui input[type=email],
                .swagger-ui input[type=file],
                .swagger-ui textarea {
                    border: 1px solid #d1d5db;
                    border-radius: 6px;
                    padding: 8px 12px;
                }

                .swagger-ui select:focus,
                .swagger-ui input[type=text]:focus,
                .swagger-ui input[type=password]:focus,
                .swagger-ui input[type=search]:focus,
                .swagger-ui input[type=email]:focus,
                .swagger-ui input[type=file]:focus,
                .swagger-ui textarea:focus {
                    border-color: #dc2626;
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
                }

                .swagger-ui .response-col_status {
                    font-weight: 600;
                }

                .swagger-ui .response-col_status .response-undocumented {
                    color: #6b7280;
                }

                .swagger-ui .parameter__name {
                    font-weight: 600;
                    color: #1f2937;
                }

                .swagger-ui .parameter__type {
                    color: #6b7280;
                    font-size: 0.875rem;
                }

                .swagger-ui table thead tr td,
                .swagger-ui table thead tr th {
                    font-weight: 600;
                    color: #1f2937;
                    border-bottom: 2px solid #e5e7eb;
                }

                .swagger-ui .model-box {
                    background: #f9fafb;
                    border-radius: 8px;
                    padding: 15px;
                }

                .swagger-ui .model-title {
                    color: #1f2937;
                    font-weight: 600;
                }

                .swagger-ui section.models {
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    padding: 20px;
                    margin-top: 30px;
                }

                .swagger-ui section.models h4 {
                    color: #1f2937;
                    font-size: 1.5rem;
                    margin-bottom: 15px;
                }

                .swagger-ui .filter-container input[type=search] {
                    border: 2px solid #e5e7eb;
                }

                .swagger-ui .filter-container input[type=search]:focus {
                    border-color: #dc2626;
                }

                /* Response highlighting */
                .swagger-ui .responses-inner h4,
                .swagger-ui .responses-inner h5 {
                    color: #1f2937;
                    font-weight: 600;
                }

                .swagger-ui .response-col_description {
                    color: #4b5563;
                }

                /* Code blocks */
                .swagger-ui .highlight-code,
                .swagger-ui .microlight {
                    background: #1f2937;
                    border-radius: 8px;
                    padding: 15px;
                    font-size: 0.875rem;
                }

                /* Tab styling */
                .swagger-ui .tab {
                    border-radius: 6px 6px 0 0;
                }

                .swagger-ui .tab li {
                    color: #6b7280;
                }

                .swagger-ui .tab li.active {
                    color: #dc2626;
                    border-bottom: 2px solid #dc2626;
                }

                /* Authentication modal */
                .swagger-ui .dialog-ux .modal-ux {
                    border-radius: 12px;
                    border: 1px solid #e5e7eb;
                }

                .swagger-ui .dialog-ux .modal-ux-header {
                    background: #f9fafb;
                    border-bottom: 1px solid #e5e7eb;
                }

                /* Mobile responsiveness */
                @media (max-width: 768px) {
                    .swagger-ui .info .title {
                        font-size: 1.5rem;
                    }

                    .swagger-ui .opblock-tag {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </main>
    );
}
