
import React from 'react';
import { useInView } from '../hooks/useInView';

const ServiceSection: React.FC = () => {
  const [titleRef, isTitleInView] = useInView<HTMLHeadingElement>({ threshold: 0.5 });
  const [contentRef, isContentInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="services" className="relative bg-white text-black py-20 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=2')" }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative container mx-auto px-6 text-center z-10">
        <h2 
          ref={titleRef}
          className={`text-5xl md:text-7xl font-extrabold text-white mb-8 transform transition-all duration-1000 ease-out ${isTitleInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-90'}`}
        >
          OUR SERVICE
        </h2>
        <div 
          ref={contentRef}
          className={`max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed transition-opacity duration-1000 delay-300 ${isContentInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <p>
            We deliver a comprehensive suite of digital marketing services designed to connect you with your audience and drive tangible results. From SEO and content creation to social media management and PPC campaigns, we've got you covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
