import React from 'react';
import ElevateBrandSection from '../components/ElevateBrandSection';
import MarketingServicesSection from '@/components/Marketingerviceection';
import MarkeingWhatWeDo from '@/components/MarkeingWhatWeDo';
import ImpactSection from '@/components/ImpactSection';
import MarketingProcessSection from '@/components/MarketingProcessSection';
import ModernMarketingSection from '@/components/ModernMarketingSection';
import ModernMarketingCards from '@/components/ModernMarketingCards';

const MarketingPage = () => {
  return (
    <main>
      <section className="bg-black text-white">
        <div className="container mx-auto px-6 py-20 md:py-32 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center items-start space-y-8 animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                Take Your Business to the Next Level with <span className="text-amber-500">Smart Marketing</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-lg">
                From generating leads and enquiries to boosting sales and growing your audience, our result-driven marketing services are built to scale your business in the digital world.
              </p>
              <button className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition-colors duration-300 shadow-lg">
                Get a Free Proposal
              </button>
            </div>
            <div className="flex justify-center items-center animate-fade-in-right">
              <img 
                src="WhatsApp Image 2025-10-25 at 14.59.55.jpeg" 
                alt="Smartphone with social media icons" 
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </div>
        <style>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          @keyframes fade-in-right {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-right {
            animation: fade-in-right 0.8s ease-out 0.2s forwards;
          }
        `}</style>
      </section>
      <ElevateBrandSection />
      <MarketingServicesSection />
      <MarkeingWhatWeDo />
      <ImpactSection />
      <MarketingProcessSection />
      <ModernMarketingSection />
      <ModernMarketingCards />
    </main>
  );
};

export default MarketingPage;