import React from 'react';

const OurVisionSection: React.FC = () => {
    return (
        <section className="bg-white py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Content Column */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <p className="text-gray-600 leading-relaxed">
                                This area introduces visitors to the business or brand. Briefly explain who is behind it, what it does, and what makes it special. Share its key values and what the site offers.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.
                            </p>
                        </div>

                        <hr className="border-gray-200 my-8" />

                        <button className="bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                            See Our Service
                        </button>
                    </div>
                    
                    {/* Image Column */}
                    <div>
                        <img 
                            src="asserts/teamimg.png" 
                            alt="Our Vision"
                            className="w-full h-auto object-cover rounded-3xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurVisionSection;