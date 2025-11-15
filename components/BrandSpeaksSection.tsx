import React from 'react';

const BrandSpeaksSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-20 md:py-32">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto mb-8">
          Build a Brand, That Speaks for Itself
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          At Abbasel Marketing, we believe branding is more than just a logo or color scheme—it’s the voice, personality, and trust your business builds with people. A strong brand creates recognition, drives loyalty, and makes you stand out in a crowded market.
        </p>
        <button className="px-8 py-3 border border-gray-400 text-black font-semibold rounded-full hover:bg-black hover:text-white transition-colors duration-300">
          Scroll to know
        </button>
      </div>
    </section>
  );
};

export default BrandSpeaksSection;