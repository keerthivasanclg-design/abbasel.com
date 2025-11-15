import React from 'react';

const MarketingProcessSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Marketing Process
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Abbasel Marketing, we follow a structured yet flexible process to make sure every campaign creates meaningful results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <img 
              src="marketingpage1.png" 
              alt="Marketing process charts" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Blueprint & Strategy</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every successful campaign starts with a clear plan. We take the time to understand your business goals, study your audience, and create a marketing roadmap that guides growth.
            </p>
            <a href="#services" className="font-semibold text-amber-500 hover:underline transition-colors duration-300">
              Read More
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <img 
              src="marketingpage2.png" 
              alt="Marketing process charts" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
Creative Development</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
Once we have the strategy, our team creates engaging content, visuals, and ads that connect with your target audience. We focus on originality and impact to ensure your brand stands out from the competition.
            </p>
            <a href="#services" className="font-semibold text-amber-500 hover:underline transition-colors duration-300">
              Read More
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <img 
              src="marketingpage3.png" 
              alt="Marketing process charts" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
Campaign Execution</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
         With the right creative assets ready, we launch your campaigns across the best platforms. From social media to search engines, each step aims to maximize visibility and engagement.   </p>
            <a href="#services" className="font-semibold text-amber-500 hover:underline transition-colors duration-300">
              Read More
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <img 
              src="marketingpage4.png" 
              alt="Marketing process charts" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Reports & Insights
</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
            Transparency is important. We provide clear, easy-to-understand reports so you always know how your campaigns are performing. These insights help plan future strategies and set higher goals for business growth.

</p>
            <a href="#services" className="font-semibold text-amber-500 hover:underline transition-colors duration-300">
              Read More
            </a>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default MarketingProcessSection;