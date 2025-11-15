import React from 'react';

const BrandLegacySection: React.FC = () => {
  return (
    <section className="bg-white text-black py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-12">
          Your brand deserves more than a logo—it deserves a legacy. Let's build an identity that speaks louder than words.”
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          At Abbasel Marketing, we create branding that is 100% unique. Every strategy is carefully tailored to match your business goals, ensuring that your brand truly represents who you are. Our creative team blends design expertise with marketing insights to deliver impactful results that not only look great but also drive growth. And the best part? We provide all of this through affordable packages without compromising on quality.
        </p>
        <button className="bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
          Read More
        </button>
      </div>
    </section>
  );
};

export default BrandLegacySection;