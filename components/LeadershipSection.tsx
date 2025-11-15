import React from 'react';

const LeadershipSection: React.FC = () => {
  const strategies = [
    {
      title: 'AI-Powered Strategies',
      description: 'To gauge audience activity, we apply automation and predictive targeting, enabling us to offer personalized campaigns. This means the brand message is delivered more than anything else right to the audience, engagement, and conversion processes being increased.',
    },
    {
      title: 'Next-Gen SEO & Voice Search',
      description: 'Unlike other SEO strategies, ours does not simply stop at the keywords, addressing other website aspects needed to rank in voice-based search queries, and being align with the fast-changing digital world in 2025.',
    },
    {
      title: 'Social Media Growth & Sales',
      description: 'Social channels have transitioned from a being means of potential audience to engagement sources. Campaigns designed for Instagram, Facebook, and Youtube help gain followers and translate user activity to paying customers.',
    },
  ];

  return (
    <section id="leadership" className="bg-black text-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="md:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
              How Abbasel Leads
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                In the year 2025, the world of digital communication is at a breakneck pace. Audiences don't respond to campaigns anymore; they expect personalized, interactive, and trustworthy experiences. Brands need to adjust from AI insights to immersive content formats and fast enough to remain relevant.
              </p>
              <p>
                At Abbasel Digital Marketing Agency, we focus on turning these changes into opportunities for your business:
              </p>
            </div>
          </div>
          <div className="md:col-span-2 space-y-10">
            {strategies.map((strategy, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">{strategy.title}</h3>
                <p className="text-gray-300 leading-relaxed">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;