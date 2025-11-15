import React from 'react';
import DevelopmentHeroSection from '@/components/DevelopmentHeroSection'
import OurDevelopmentProcessSection from '@/components/OurDevelopmentProcessSection';
import DevelopmentServicesSection from '@/components/DevelopmentServicesSection';

const DevelopmentPage: React.FC = () => {
  return (
    <main>
      <DevelopmentHeroSection />
      <OurDevelopmentProcessSection />
      <DevelopmentServicesSection />
    </main>
  );
};

export default DevelopmentPage;