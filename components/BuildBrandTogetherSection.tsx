import React from 'react';

const BuildBrandTogetherSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-20 md:py-32">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto mb-8">
          Let's Build Your Brand Together
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Your brand is the first impression people have about your business make it unforgettable. Whether you’re launching a new company or refreshing your current identity, Abbasel Marketing helps you stand out with a brand that works everywhere—online and offline.
        </p>
        <button className="bg-black text-white font-semibold px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300">
          Book Free Call
        </button>
      </div>
    </section>
  );
};

export default BuildBrandTogetherSection;