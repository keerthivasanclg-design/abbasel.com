import React from 'react';

const benefits = [
  'Reach millions of potential customers worldwide',
  'Build trust and long-term relationships with your audience.',
  'Showcase your brand personality through creative content.',
  'Generate leads, sales, and stronger brand awareness.',
];

const WhySocialMediaMattersSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              Why Social Media Matters
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Connect with audiences across different regions, cultures, and industries using precise targeting. Marketing makes sure your message meets both B2B and B2C needs. This gives your brand the ability to grow globally. Outperform competitors by using smarter strategies, new ad formats, and market trends. Marketing helps your business stay relevant, grow faster, and achieve consistent long-term growth. Data-driven strategies make sure every campaign provides measurable results. With real-time tracking and clear insights, you will always know how your investment is performing and how your audience is responding.
            </p>
          </div>
          {/* Right Column */}
          <div className="lg:col-span-2">
            {benefits.map((benefit, index) => (
              <div key={index} className={`py-6 ${index > 0 ? 'border-t border-gray-300' : ''}`}>
                <p className="text-xl font-semibold text-gray-900">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySocialMediaMattersSection;