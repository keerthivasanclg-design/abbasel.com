import React from 'react';
import BrandSpeaksSection from '@/components/BrandSpeaksSection';
import BrandingHeroImageSection from '@/components/BrandingHeroImageSection';
import WhyBrandingMattersSection from '../components/WhyBrandingMattersSection';
import BrandLegacySection from '@/components/BrandLegacySection';
import BuildBrandTogetherSection from '@/components/BuildBrandTogetherSection';


const BrandingPage: React.FC = () => {
  return (
    <main>
      <BrandSpeaksSection />
      <BrandingHeroImageSection />
      <WhyBrandingMattersSection />
      <BrandLegacySection />
      <BuildBrandTogetherSection />
    </main>
  );
};

export default BrandingPage;