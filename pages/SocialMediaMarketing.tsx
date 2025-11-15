import React from 'react';
import SocialMediaMatter from '../components/SocialMediaMatter';
import MarketingPlatformsSection from '../components/MarketingPlatformsSection';
import ThriveSection from '../components/ThriveSection';
import Hyperspeed from '../components/Hyperspeed';

const SocialMediaMarketingPage: React.FC = () => {
  return (
    <main>
      <section className="relative bg-black text-white py-20 md:py-32 min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-10">
          <Hyperspeed />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              From Visibility to Credibility — We Make <span className="text-amber-500">Social Media</span> Work for You
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Social media is more than just likes and shares — it's the fastest way to connect with your audience and grow your brand. At Abbasel Marketing, we craft strategies that deliver real impact and measurable results.
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-10">
              Reach, Engage, Convert
            </h2>
            <button className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition-colors duration-300 shadow-lg">
              Get a Free Proposal
            </button>
          </div>
        </div>
      </section>
      <SocialMediaMatter />
      <MarketingPlatformsSection />
      <ThriveSection />
    </main>
  );
};

export default SocialMediaMarketingPage;
