import React from 'react';
import { ArrowRightIcon } from './Icons';
import logo from "../asserts/logo.jpeg"

const ServicePill: React.FC<{ text: string, position: string }> = ({ text, position }) => (
  <div className={`absolute ${position} bg-gray-500 bg-opacity-50 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full shadow-lg`}>
    {text}
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-black text-white min-h-screen flex items-center py-20 md:py-0">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center items-start space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Maximize the Impact of Your Growth by Using the Best <span className="text-yellow-400">Strategies of Digital Marketing</span> and <span className="text-yellow-400">Fuel Your Business</span> with Digital Marketing Services
            </h1>

            <div className="flex items-center">
                <span className="bg-yellow-400 text-black font-bold text-lg px-3 py-1">#</span>
                <span className="border border-white px-4 py-1 font-semibold">Karaikudi</span>
            </div>

            <p className="text-base text-gray-300 max-w-lg">
              "Foster the sustainable growth of your business with our expert digital marketing services. We use innovative marketing strategies that target high-quality leads while amplifying brand visibility to achieve unmatched ROI."
            </p>

            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transform transition-all duration-300 shadow-lg">
              <span>Book an Appointment</span>
              <div className="bg-white rounded-full p-1">
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </button>
          </div>

          <div className="relative flex justify-center items-center w-full h-full min-h-[400px] md:min-h-[500px]">
            <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-8 border-gray-800 shadow-2xl shadow-blue-500/20">
              <img
                src={logo}
                alt="Astronaut looking at Earth from space"
                className="w-full h-full object-cover scale-125"
              />
            </div>
            <ServicePill text="Digital Marketing" position="top-1/4 left-1/4 -translate-x-1/2" />
            <ServicePill text="Google Ads" position="bottom-1/4 left-1/4" />
            <ServicePill text="Meta / Digital" position="bottom-1/3 right-0" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;