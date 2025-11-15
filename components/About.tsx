import React from 'react';

const about: React.FC = () => {
    return (
        <section id="about" className="bg-white text-black py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Who We Are
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At Abbasel Marketing, we think every business deserves professional marketing without overspending. Based in Karaikudi, our agency focuses on helping brands of all sizes stand out, grow, and succeed with creative and affordable strategies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-gray-50 p-8 md:p-12 rounded-lg">
                    <div className="text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Founded with a passion for helping businesses thrive in the digital landscape, Abbasel started as a small team with a big vision. We saw a gap for high-quality, data-driven marketing that was both accessible and effective. Today, we've grown into a full-service agency, but our core mission remains the same: to empower our clients with strategies that deliver real, measurable results.
                        </p>
                        <a href="#services" className="inline-block px-6 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                            Explore 
                        </a>
                    </div>
                    <div>
                        <img 
                            src="aboutimg1.png" 
                            alt="Our Team Working" 
                            className="rounded-lg shadow-md w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about;