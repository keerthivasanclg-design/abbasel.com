import React from 'react';
import CardSwap, { Card } from './CardSwap';

const workData = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'SO.FAR & YOUR TEAM AT THE BEAUTY TECH AWARDS (WE WON!)',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4b248a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'BEHIND-THE-SCENES AT OUR VIRAL CHALLENGE SHOOT',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'CANDID MOMENTS FROM OUR JOINT PRODUCT DEVELOPMENT WORKSHOPS',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1519671482739-6e3be609148f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'OUR AMAZING TEAMS CELEBRATING THE SUCCESSFUL APP LAUNCH',
  },
];

const OurWorkSection: React.FC = () => {
  return (
    <section className="bg-black py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-white relative z-10">
          Last But Not Least: Fun Moments
        </h2>
        
        <div className="relative w-full flex justify-center items-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
          <div className="relative w-full max-w-[500px] h-[320px] sm:h-[400px]">
             <CardSwap>
              {workData.map((item, index) => (
                <Card
                  key={index}
                  className="!bg-cover !bg-center !border-gray-700 overflow-hidden cursor-pointer"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative p-6 h-full flex items-end">
                    <h3 className="text-white text-base sm:text-lg font-bold uppercase tracking-wide">{item.title}</h3>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;