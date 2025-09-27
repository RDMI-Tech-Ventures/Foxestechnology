import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Primary font
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Foxes Technology | AI-Powered Digital Transformation for Travel Industry",
  description:
    "Transform offline travel businesses into digital powerhouses with Foxes Technology's AI-driven booking platform, analytics, and enterprise solutions.",
  keywords: [
    "travel technology",
    "AI booking platform",
    "digital transformation",
    "Egypt tourism",
    "GCC travel solutions",
    "tour operators",
    "smart analytics",
  ],
  authors: [{ name: "Foxes Technology" }],
  creator: "Foxes Technology",
  publisher: "Foxes Technology",
  openGraph: {
    title: "Foxes Technology - AI Travel Solutions",
    description:
      "AI-powered booking platform and management solutions built for the travel industry.",
    type: "website",
    locale: "en_US",
    siteName: "Foxes Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foxes Technology - AI-Powered Travel Solutions",
    description: "Transform your travel business with our AI-driven platform",
  },
  // Keep robots default (no explicit max-image/max-video restrictions)
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Essential meta tags only */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FF6B35" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}