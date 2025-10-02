import Hero from '@/components/Hero';
import Header from '@/components/Header';
import PartnershipBanner from '@/components/PartnershipBanner';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import SolutionsOverview from '@/components/SolutionsOverview';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <Header />
      <Hero />
      <PartnershipBanner />
      <ProblemSolutionSection />
      <SolutionsOverview />
      <HowItWorks />
      <Footer />
    </main>
  );
}