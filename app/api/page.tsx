'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Parameter {
    name: string;
    type: string;
    location: string;
    description: string;
}

interface Response {
    code: number;
    description: string;
    example?: string;
}

interface Endpoint {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
    description: string;
    parameters?: Parameter[];
    responses?: Response[];
}

interface ApiSection {
    name: string;
    endpoints: Endpoint[];
}

export default function APIReferencePage() {
    const [expandedSections, setExpandedSections] = useState<string[]>(['Activities']);
    const [expandedEndpoints, setExpandedEndpoints] = useState<string[]>([]);

    const toggleSection = (sectionName: string) => {
        setExpandedSections(prev =>
            prev.includes(sectionName)
                ? prev.filter(name => name !== sectionName)
                : [...prev, sectionName]
        );
    };

    const toggleEndpoint = (endpointId: string) => {
        setExpandedEndpoints(prev =>
            prev.includes(endpointId)
                ? prev.filter(id => id !== endpointId)
                : [...prev, endpointId]
        );
    };

    const apiSections: ApiSection[] = [
        {
            name: 'Activities',
            endpoints: [
                {
                    method: 'GET',
                    path: '/api/v2/activities',
                    description: 'Shows all available activities (owned and agent assigned) for current user',
                    parameters: [
                        { name: 'description', type: 'string', location: 'query', description: 'Filter activities by description' },
                        { name: 'departureDateFrom', type: 'integer', location: 'query', description: 'Filter by departure date from' },
                        { name: 'departureDateTo', type: 'integer', location: 'query', description: 'Filter by departure date to' },
                        { name: 'priceFrom', type: 'number', location: 'query', description: 'Filter by departure price' },
                        { name: 'priceTo', type: 'number', location: 'query', description: 'Filter by departure price' },
                        { name: 'p', type: 'integer', location: 'query', description: 'Page number' },
                    ],
                    responses: [
                        {
                            code: 200,
                            description: 'Returned when successful, along with the array of Activity objects',
                            example: `{
  "page": 0,
  "items": 0,
  "totalItems": 0,
  "payload": [
    {
      "id": "1",
      "title": "Activity Title",
      "referenceCode": "f5c9fdf805975e296a25798c8109adbc (activity identifier)",
      "coverId": "1 (cover image identifier)",
      "coverTitle": "Image (cover image title)",
      "coverUrl": "Direct URL to image",
      "scheduledDepartures": "5 (number of departures)",
      "updated": "2018-12-17 07:50:14",
      "owner": "Supplier 1 (displayed only if the authorized user is not the owner of the Activity)",
      "currencyLabel": "€",
      "departureFrom": "1530601200",
      "departureTo": "1561705200",
      "priceFrom": "100"
    }
  ]
}`
                        },
                        { code: 401, description: 'Returned when trying to access this resource without being authorized' },
                        { code: 403, description: 'Returned when trying to access this resource with wrong credentials' },
                    ]
                },
                {
                    method: 'GET',
                    path: '/api/v2/activity/{referenceCode}',
                    description: 'Shows details about activity (owned or agent assigned) for current user',
                    parameters: [
                        { name: 'referenceCode', type: 'string', location: 'path', description: 'Activity reference code' },
                    ],
                    responses: [
                        { code: 200, description: 'Activity details returned successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Activity not found' },
                    ]
                },
                {
                    method: 'PUT',
                    path: '/api/v2/activity/{referenceCode}',
                    description: 'Updates an Activity resource.',
                    parameters: [
                        { name: 'referenceCode', type: 'string', location: 'path', description: 'Activity reference code' },
                    ],
                    responses: [
                        { code: 200, description: 'Activity updated successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Activity not found' },
                    ]
                },
                {
                    method: 'DELETE',
                    path: '/api/v2/activity/{referenceCode}',
                    description: 'Deletes an Activity resource.',
                    parameters: [
                        { name: 'referenceCode', type: 'string', location: 'path', description: 'Activity reference code' },
                    ],
                    responses: [
                        { code: 204, description: 'Activity deleted successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Activity not found' },
                    ]
                },
                {
                    method: 'GET',
                    path: '/api/v2/activity/{referenceCode}/{type}',
                    description: 'Shows details about activity (owned or agent assigned) for current user',
                    parameters: [
                        { name: 'referenceCode', type: 'string', location: 'path', description: 'Activity reference code' },
                        { name: 'type', type: 'string', location: 'path', description: 'Activity type' },
                    ],
                    responses: [
                        { code: 200, description: 'Activity details returned successfully' },
                        { code: 401, description: 'Unauthorized access' },
                    ]
                },
                {
                    method: 'POST',
                    path: '/api/v2/activity',
                    description: 'Create an Activity resource.',
                    responses: [
                        { code: 201, description: 'Activity created successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 400, description: 'Bad request' },
                    ]
                },
                {
                    method: 'PUT',
                    path: '/api/v2/activity/settings/{referenceCode}',
                    description: 'Update activity settings (agent assigned) for current user.',
                    parameters: [
                        { name: 'referenceCode', type: 'string', location: 'path', description: 'Activity reference code' },
                    ],
                    responses: [
                        { code: 200, description: 'Settings updated successfully' },
                        { code: 401, description: 'Unauthorized access' },
                    ]
                },
            ]
        },
        {
            name: 'BookNow',
            endpoints: [
                {
                    method: 'GET',
                    path: '/api/v2/booknow/activity/{referenceCode}',
                    description: 'Display details about Booking-ready Activity with departure dates in the future.',
                    parameters: [
                        { name: 'referenceCode', type: 'string', location: 'path', description: 'Activity reference code' },
                    ],
                    responses: [
                        { code: 200, description: 'Activity details returned successfully' },
                        { code: 404, description: 'Activity not found' },
                    ]
                },
            ]
        },
        {
            name: 'Bookings',
            endpoints: [
                {
                    method: 'GET',
                    path: '/api/v2/bookings',
                    description: 'List all created bookings.',
                    parameters: [
                        { name: 'p', type: 'integer', location: 'query', description: 'Page number' },
                        { name: 'status', type: 'string', location: 'query', description: 'Filter by booking status' },
                    ],
                    responses: [
                        { code: 200, description: 'List of bookings returned successfully' },
                        { code: 401, description: 'Unauthorized access' },
                    ]
                },
                {
                    method: 'POST',
                    path: '/api/v2/booking/{override}',
                    description: 'Create new Booking resource.',
                    parameters: [
                        { name: 'override', type: 'boolean', location: 'path', description: 'Override booking restrictions' },
                    ],
                    responses: [
                        { code: 201, description: 'Booking created successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 400, description: 'Bad request' },
                    ]
                },
                {
                    method: 'GET',
                    path: '/api/v2/booking/{referenceCode}',
                    description: "Get a single booking by it's reference code.",
                    parameters: [
                        { name: 'referenceCode', type: 'string', location: 'path', description: 'Booking reference code' },
                    ],
                    responses: [
                        { code: 200, description: 'Booking details returned successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Booking not found' },
                    ]
                },
                {
                    method: 'PUT',
                    path: '/api/v2/booking/{referenceCode}',
                    description: "Get a single booking by it's reference code and update it.",
                    parameters: [
                        { name: 'referenceCode', type: 'string', location: 'path', description: 'Booking reference code' },
                    ],
                    responses: [
                        { code: 200, description: 'Booking updated successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Booking not found' },
                    ]
                },
                {
                    method: 'PUT',
                    path: '/api/v2/booking/payment/{referenceCode}',
                    description: 'Add a Booking payment to booking.',
                    parameters: [
                        { name: 'referenceCode', type: 'string', location: 'path', description: 'Booking reference code' },
                    ],
                    responses: [
                        { code: 200, description: 'Payment added successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Booking not found' },
                    ]
                },
                {
                    method: 'PUT',
                    path: '/api/v2/booking/status/{referenceCode}',
                    description: "Get a single booking by it's reference code and update its status.",
                    parameters: [
                        { name: 'referenceCode', type: 'string', location: 'path', description: 'Booking reference code' },
                    ],
                    responses: [
                        { code: 200, description: 'Booking status updated successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Booking not found' },
                    ]
                },
                {
                    method: 'GET',
                    path: '/api/v2/booking/payments/{referenceCode}',
                    description: 'List all payments for a given Booking.',
                    parameters: [
                        { name: 'referenceCode', type: 'string', location: 'path', description: 'Booking reference code' },
                    ],
                    responses: [
                        { code: 200, description: 'List of payments returned successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Booking not found' },
                    ]
                },
            ]
        },
        {
            name: 'Contacts',
            endpoints: [
                {
                    method: 'GET',
                    path: '/api/v2/contacts',
                    description: 'Retreive a list of contacts.',
                    parameters: [
                        { name: 'p', type: 'integer', location: 'query', description: 'Page number' },
                    ],
                    responses: [
                        { code: 200, description: 'List of contacts returned successfully' },
                        { code: 401, description: 'Unauthorized access' },
                    ]
                },
                {
                    method: 'GET',
                    path: '/api/v2/contact/{id}',
                    description: 'Retrieve a single contact.',
                    parameters: [
                        { name: 'id', type: 'integer', location: 'path', description: 'Contact ID' },
                    ],
                    responses: [
                        { code: 200, description: 'Contact details returned successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Contact not found' },
                    ]
                },
                {
                    method: 'PUT',
                    path: '/api/v2/contact/{id}',
                    description: 'Update Contact resource.',
                    parameters: [
                        { name: 'id', type: 'integer', location: 'path', description: 'Contact ID' },
                    ],
                    responses: [
                        { code: 200, description: 'Contact updated successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Contact not found' },
                    ]
                },
                {
                    method: 'DELETE',
                    path: '/api/v2/contact/{id}',
                    description: 'Deletes Contact resource.',
                    parameters: [
                        { name: 'id', type: 'integer', location: 'path', description: 'Contact ID' },
                    ],
                    responses: [
                        { code: 204, description: 'Contact deleted successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Contact not found' },
                    ]
                },
                {
                    method: 'POST',
                    path: '/api/v2/contact',
                    description: 'Create a Contact resource.',
                    responses: [
                        { code: 201, description: 'Contact created successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 400, description: 'Bad request' },
                    ]
                },
            ]
        },
        {
            name: 'Login',
            endpoints: [
                {
                    method: 'POST',
                    path: '/api/v2/login',
                    description: 'Login',
                    parameters: [
                        { name: 'email', type: 'string', location: 'body', description: 'User email address' },
                        { name: 'password', type: 'string', location: 'body', description: 'User password' },
                    ],
                    responses: [
                        { code: 200, description: 'Login successful, returns API key' },
                        { code: 401, description: 'Invalid credentials' },
                    ]
                },
            ]
        },
        {
            name: 'Settings',
            endpoints: [
                {
                    method: 'GET',
                    path: '/api/v2/settings',
                    description: 'Get account settings',
                    responses: [
                        { code: 200, description: 'Settings returned successfully' },
                        { code: 401, description: 'Unauthorized access' },
                    ]
                },
                {
                    method: 'PUT',
                    path: '/api/v2/settings',
                    description: 'Update account settings',
                    responses: [
                        { code: 200, description: 'Settings updated successfully' },
                        { code: 401, description: 'Unauthorized access' },
                    ]
                },
            ]
        },
        {
            name: 'Coupons',
            endpoints: [
                {
                    method: 'GET',
                    path: '/api/v2/coupons',
                    description: 'Get list of coupons from logged in agency',
                    parameters: [
                        { name: 'p', type: 'integer', location: 'query', description: 'Page number' },
                    ],
                    responses: [
                        { code: 200, description: 'List of coupons returned successfully' },
                        { code: 401, description: 'Unauthorized access' },
                    ]
                },
                {
                    method: 'GET',
                    path: '/api/v2/coupon/{id}',
                    description: 'Retrieve a single coupon.',
                    parameters: [
                        { name: 'id', type: 'integer', location: 'path', description: 'Coupon ID' },
                    ],
                    responses: [
                        { code: 200, description: 'Coupon details returned successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Coupon not found' },
                    ]
                },
                {
                    method: 'PUT',
                    path: '/api/v2/coupon/{id}',
                    description: 'Updates Coupon resource.',
                    parameters: [
                        { name: 'id', type: 'integer', location: 'path', description: 'Coupon ID' },
                    ],
                    responses: [
                        { code: 200, description: 'Coupon updated successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Coupon not found' },
                    ]
                },
                {
                    method: 'DELETE',
                    path: '/api/v2/coupon/{id}',
                    description: 'Deletes Coupon resource.',
                    parameters: [
                        { name: 'id', type: 'integer', location: 'path', description: 'Coupon ID' },
                    ],
                    responses: [
                        { code: 204, description: 'Coupon deleted successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Coupon not found' },
                    ]
                },
                {
                    method: 'POST',
                    path: '/api/v2/coupon',
                    description: 'Create Coupon resource.',
                    responses: [
                        { code: 201, description: 'Coupon created successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 400, description: 'Bad request' },
                    ]
                },
                {
                    method: 'GET',
                    path: '/api/v2/coupon/{code}',
                    description: 'Retrieve a single coupon.',
                    parameters: [
                        { name: 'code', type: 'string', location: 'path', description: 'Coupon code' },
                    ],
                    responses: [
                        { code: 200, description: 'Coupon details returned successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 404, description: 'Coupon not found' },
                    ]
                },
            ]
        },
        {
            name: 'Feeder Data',
            endpoints: [
                {
                    method: 'GET',
                    path: '/api/v2/feederData',
                    description: 'Get feeder data',
                    responses: [
                        { code: 200, description: 'Feeder data returned successfully' },
                        { code: 401, description: 'Unauthorized access' },
                    ]
                },
            ]
        },
        {
            name: 'Payments',
            endpoints: [
                {
                    method: 'POST',
                    path: '/api/v2/mollie/request',
                    description: 'Request Mollie payment URL',
                    parameters: [
                        { name: 'bookingReference', type: 'string', location: 'body', description: 'Booking reference code' },
                        { name: 'amount', type: 'number', location: 'body', description: 'Payment amount' },
                    ],
                    responses: [
                        { code: 200, description: 'Payment URL returned successfully' },
                        { code: 401, description: 'Unauthorized access' },
                        { code: 400, description: 'Bad request' },
                    ]
                },
            ]
        },
    ];

    const getMethodColor = (method: string) => {
        switch (method) {
            case 'GET': return 'bg-teal-500 hover:bg-teal-600';
            case 'POST': return 'bg-green-500 hover:bg-green-600';
            case 'PUT': return 'bg-yellow-500 hover:bg-yellow-600';
            case 'DELETE': return 'bg-red-500 hover:bg-red-600';
            default: return 'bg-gray-500 hover:bg-gray-600';
        }
    };

    return (
        <main className="bg-white min-h-screen pb-20">
            {/* Header */}
            <header className="bg-teal-600 border-b border-teal-700">
                <div className="mx-auto max-w-7xl px-6 py-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">
                                Foxes Technology API Documentation
                            </h1>
                            <div className="inline-block bg-teal-700 text-white text-sm font-bold px-3 py-1 rounded">
                                2.0.0
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Base URL Section */}
            <section className="border-b border-gray-200 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-6">
                    <p className="text-gray-700 mb-3">
                        <span className="font-semibold">[ Base URL:</span>{' '}
                        <code className="text-teal-600 font-mono">https://api-staging.foxestechnology.com</code>{' '}
                        <span className="font-semibold">]</span>
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-6 py-8">
                    <div className="prose max-w-none">
                        <p className="text-gray-700 mb-4">
                            Here you can find all the necessary API documentation and sandbox solutions for Foxes Technology.
                            Use this documentation to help you implement Foxes Technology into your applications.
                        </p>
                        <p className="text-gray-700 mb-4">
                            In order to access routes other than <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/api/v2/login</code>,
                            you need to pass a header <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">Api-Key</code> with a value of{' '}
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">account.apiAccessKey</code> property you get after logging in through{' '}
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/api/v2/login</code>. You can also find your{' '}
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">Api-Key</code> in Foxes Technology application,
                            under <span className="text-gray-900 font-semibold">&quot;Gear&quot; icon / your name &gt; Settings &gt; General information &gt; Api Key</span>.
                        </p>
                        <p className="text-gray-700 mb-4">
                            When passing <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">date</code> values, use standard UNIX Epoch time in seconds.
                            Example: <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-teal-600">1525676400</code>
                        </p>
                        <p className="text-gray-700 mb-4">
                            For any parameters you need ID&apos;s, that are not your own resources, refer to{' '}
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-teal-600">Feeder Data</code> section.
                        </p>
                        <div className="flex gap-4 text-sm">
                            <Link href="/" className="text-blue-600 hover:underline">
                                Foxes Technology - Website
                            </Link>
                            <Link href="/contact" className="text-blue-600 hover:underline">
                                Send email to Foxes Technology
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* API Endpoints */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-8">
                    {apiSections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-6">
                            {/* Section Header */}
                            <button
                                onClick={() => toggleSection(section.name)}
                                className="w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 px-6 py-4 rounded-lg transition-colors"
                            >
                                <h2 className="text-2xl font-bold text-gray-900">{section.name}</h2>
                                {expandedSections.includes(section.name) ? (
                                    <ChevronUp className="h-6 w-6 text-gray-600" />
                                ) : (
                                    <ChevronDown className="h-6 w-6 text-gray-600" />
                                )}
                            </button>

                            {/* Endpoints */}
                            {expandedSections.includes(section.name) && (
                                <div className="mt-2">
                                    {section.endpoints.map((endpoint, endpointIndex) => {
                                        const endpointId = `${section.name}-${endpointIndex}`;
                                        const isExpanded = expandedEndpoints.includes(endpointId);

                                        return (
                                            <div key={endpointIndex} className="mb-2">
                                                {/* Endpoint Header */}
                                                <button
                                                    onClick={() => toggleEndpoint(endpointId)}
                                                    className="w-full flex items-start gap-4 bg-white border border-gray-200 hover:border-teal-400 rounded px-6 py-4 transition-colors text-left"
                                                >
                                                    <span
                                                        className={`flex-shrink-0 text-white text-xs font-bold px-4 py-2 rounded min-w-[80px] text-center ${getMethodColor(endpoint.method)}`}
                                                    >
                                                        {endpoint.method}
                                                    </span>
                                                    <div className="flex-1 min-w-0">
                                                        <code className="text-sm font-mono text-gray-800 break-all">
                                                            {endpoint.path}
                                                        </code>
                                                        <p className="text-sm text-gray-600 mt-1">{endpoint.description}</p>
                                                    </div>
                                                </button>

                                                {/* Expanded Details */}
                                                {isExpanded && (
                                                    <div className="bg-gray-50 border-l-4 border-teal-500 px-6 py-4 mt-1">
                                                        {/* Parameters */}
                                                        {endpoint.parameters && endpoint.parameters.length > 0 && (
                                                            <div className="mb-6">
                                                                <h3 className="text-lg font-bold text-gray-900 mb-3 bg-gray-200 px-4 py-2 rounded">
                                                                    Parameters
                                                                </h3>
                                                                <div className="bg-white border border-gray-200 rounded overflow-hidden">
                                                                    <table className="w-full">
                                                                        <thead className="bg-gray-100 border-b border-gray-200">
                                                                            <tr>
                                                                                <th className="text-left px-4 py-2 text-sm font-semibold text-gray-700">Name</th>
                                                                                <th className="text-left px-4 py-2 text-sm font-semibold text-gray-700">Description</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {endpoint.parameters.map((param, paramIndex) => (
                                                                                <tr key={paramIndex} className="border-b border-gray-200 last:border-0">
                                                                                    <td className="px-4 py-3 align-top">
                                                                                        <div>
                                                                                            <code className="text-sm font-mono text-gray-900 font-semibold">
                                                                                                {param.name}
                                                                                            </code>
                                                                                            <div className="text-xs text-gray-600 mt-1">
                                                                                                {param.type}
                                                                                            </div>
                                                                                            <div className="text-xs text-gray-500 italic">
                                                                                                ({param.location})
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="px-4 py-3 text-sm text-gray-700">
                                                                                        {param.description}
                                                                                    </td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Responses */}
                                                        {endpoint.responses && endpoint.responses.length > 0 && (
                                                            <div>
                                                                <h3 className="text-lg font-bold text-gray-900 mb-3 bg-gray-200 px-4 py-2 rounded">
                                                                    Responses
                                                                </h3>
                                                                <div className="space-y-3">
                                                                    {endpoint.responses.map((response, responseIndex) => (
                                                                        <div key={responseIndex} className="bg-white border border-gray-200 rounded p-4">
                                                                            <div className="flex items-start gap-4">
                                                                                <div className="flex-shrink-0">
                                                                                    <span className="text-lg font-bold text-gray-900">{response.code}</span>
                                                                                </div>
                                                                                <div className="flex-1">
                                                                                    <p className="text-sm text-gray-700 italic mb-2">
                                                                                        {response.description}
                                                                                    </p>
                                                                                    {response.example && (
                                                                                        <pre className="bg-gray-900 text-gray-100 text-xs p-4 rounded overflow-x-auto font-mono">
                                                                                            <code>{response.example}</code>
                                                                                        </pre>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
