// app/page.tsx
import HeroVariant2 from '@/components/HeroVariant2';
import TrustedBy from '@/components/TrustedBy';
import Solutions from '@/components/Solutions';
import Ecosystem from '@/components/Ecosystem';
import ForDestinations from '@/components/ForDestinations';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
// Note: The Footer is in your layout.tsx file, so it doesn't need to be imported here.
import AIShowcase from '@/components/AIShowcase';
import WhoWeServe from '@/components/WhoWeServe';
import HandheldPOS from '@/components/sections/HandheldPOS';
import SelfServiceKiosk from '@/components/sections/SelfServiceKiosk';
import MobileApps from '@/components/sections/MobileApps';

export default function Home() {
  return (
    <>
      <main>
        {/* 1. Hero: Grabs attention and states the core value proposition. */}
        <HeroVariant2 />
        <Ecosystem />

        {/* 2. TrustedBy: Builds immediate credibility with logos and key metrics. */}

        {/* 3. Solutions: Shows the breadth of what you offer with interactive tabs. */}
        <Solutions />

        {/* 4. Ecosystem: Explains how your products work together in a dynamic way. */}
              <AIShowcase />


        {/* 5. For Destinations: Elevates the brand to a strategic, nation-level partner. */}
        <ForDestinations />
      <HandheldPOS />
<SelfServiceKiosk />
        {/* 6. Testimonials: Adds the human element and qualitative social proof. */}
              <WhoWeServe />
        <TrustedBy />

        <Testimonials />

        {/* 7. FAQ: Proactively answers common questions to reduce friction. */}
        <FAQ />

        {/* 8. CTA: The final, decisive call to action before the footer. */}
        <CTA />
        <MobileApps />
      </main>
    </>
  );
}