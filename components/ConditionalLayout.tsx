'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComingSoonContent from '@/app/ComingSoonContent';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if coming soon mode is enabled
  const showComingSoon = process.env.NEXT_PUBLIC_SHOW_COMING_SOON === 'true';

  // If coming soon mode is enabled, show coming soon page for all routes
  if (showComingSoon) {
    return <ComingSoonContent />;
  }

  // Pages that should NOT have header and footer
  const noLayoutPages = ['/', '/coming-soon', '/api'];

  const shouldShowLayout = !noLayoutPages.includes(pathname);

  if (!shouldShowLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
