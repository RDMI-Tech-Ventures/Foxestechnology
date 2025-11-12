import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { locales } from '@/i18n/request';
import ConditionalLayout from '@/components/ConditionalLayout';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: {
      default: t('defaultTitle'),
      template: '%s | Foxes Technology',
    },
    description: t('defaultDescription'),
    openGraph: {
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      url: 'https://foxestechnology.com',
      siteName: 'Foxes Technology',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
        },
      ],
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      images: ['/og-image.png'],
    },
  };
}

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

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Get messages for the locale
  const messages = await getMessages();

  // Determine text direction based on locale
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body className={`${inter.variable} ${poppins.variable} font-inter bg-white text-slate-800 antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ConditionalLayout>{children}</ConditionalLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
