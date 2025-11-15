import React from 'react';

const ThriveSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <div className="max-w-5xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            With our Social Media Marketing Services, your brand doesn’t just exist online—it <span className="text-amber-500">thrives, grows, and stands out from competitors.</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Social media is more than just likes and shares — it’s the fastest way to connect with your audience and grow your brand. At Abbasel Marketing, we craft strategies that deliver real impact and measurable results.
          </p>
          <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThriveSection;