import React from 'react';

const TrendingMethodsSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
          MAKE YOUR BRAND STORY TREND
        </p>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto mb-10">
          We specialize in 2025 trending Digital Marketing methods that combine.
        </h2>
        <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300">
          1:1 Meet
        </button>
      </div>
    </section>
  );
};

export default TrendingMethodsSection;