import React from 'react';

const BrandingHeroImageSection: React.FC = () => {
  return (
    <section className="relative bg-black py-20 md:py-40 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('WhatsApp Image 2025-10-25 at 14.59.55.jpeg')" }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-6 flex justify-center">
        <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-700 transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
          <img
            src="WhatsApp Image 2025-10-25 at 14.59.55.jpeg"
            alt="Instagram live stream on a phone"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandingHeroImageSection;