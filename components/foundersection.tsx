import React from 'react';
import { ArrowRightIcon } from './Icons';
import logo from "../asserts/logo.jpeg"

const FounderSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="w-full h-[600px]">
            <img
              src={logo}
              alt="The founder of Abbasel Marketing with a colleague"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Meet Our Founder<span className="text-amber-500">.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-10">
              Nisaanth, CEO of Abbasel Marketing, is passionate about helping businesses grow with modern, practical marketing solutions. With a strong vision and a creative approach, she ensures every client receives strategies that truly work for their business.
            </p>
            <div className="border-t border-gray-200 pt-8">
              <a href="#about" className="group inline-flex items-center font-semibold text-black hover:text-amber-500 transition-colors duration-300">
                <span>Learn More</span>
                <ArrowRightIcon className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
