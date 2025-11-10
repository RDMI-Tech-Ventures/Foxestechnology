// app/layout.tsx
import { Inter, Poppins } from 'next/font/google';
import ConditionalLayout from '@/components/ConditionalLayout';
import './globals.css';
import type { Metadata } from 'next';

// Meta Title, Description, and Social Sharing tags added
export const metadata: Metadata = {
  title: {
    default: 'Coming Soon - Foxes Technology | Transform Your Tour Business',
    template: '%s | Foxes Technology',
  },
  description: 'Foxes Technology is launching soon! The ultimate booking system, POS hardware, and AI-powered solutions built exclusively for tours & activities operators in Egypt and the GCC region. Join our waitlist today.',
  openGraph: {
    title: 'Coming Soon - Foxes Technology',
    description: 'The all-in-one platform to digitize and grow your travel business. Launching soon!',
    url: 'https://foxestechnology.com',
    siteName: 'Foxes Technology',
    images: [
      {
        url: '/foxes1.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coming Soon - Foxes Technology',
    description: 'The all-in-one platform to digitize and grow your travel business. Launching soon!',
    images: ['/foxes1.png'],
  },
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-inter bg-white text-slate-800 antialiased`}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}