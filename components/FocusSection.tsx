import React from 'react';

const focusAreas = [
  {
    title: 'Smart Ad Campaigns',
    description: 'In the world we live in, there’s no such thing as a waste of money for advertisements. Our Google and Meta campaigns have target objectives that are gauged to a return on investment basis. They are proven to have sustainable growth and with proper supervision, we maximize the potential of the targeted campaign.',
  },
  {
    title: 'Brand Experience Management',
    description: 'Marketing goes beyond just promotion; it’s about building trust. We help your business create lasting relationships through consistent branding, clear communication, and a customer-first approach that boosts loyalty.',
  },
  {
    title: 'Analytics & Insights',
    description: 'Numbers reveal the true picture. We deliver detailed reports and insights that explain performance, monitor audience behavior, and help make better decisions for future campaigns.',
  },
];

const FocusSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
          At Abbasel Digital Marketing Agency, <span className="text-yellow-400">we focus on</span>
        </h2>

        <div>
          {focusAreas.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start py-8 border-t border-gray-800">
              <div className="md:col-span-1">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;