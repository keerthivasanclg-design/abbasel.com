import React from 'react';
import Lightning from './Lightning';

const DevelopmentHeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 md:py-32 min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Lightning hue={210} intensity={1.2} speed={0.5} size={0.8} />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Custom Web & App Development that <span className="text-amber-500">Powers Growth</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            From sleek websites to powerful applications, we build digital experiences that are fast, scalable, and user-friendly. Let us turn your vision into a high-performance reality.
          </p>
          <button className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition-colors duration-300 shadow-lg">
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentHeroSection;