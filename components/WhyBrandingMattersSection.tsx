import React from 'react';

// Define the type for a single branding card
interface BrandingCardType {
  title: string;
  color: string;
  description: string;
}

const brandingCards: BrandingCardType[] = [
  {
    title: 'Recognition',
    color: 'bg-[#EBDDFA]',
    description: 'A consistent identity helps people remember and trust your business.'
  },
  {
    title: 'Connection',
    color: 'bg-[#FFF9C4]',
    description: 'Good branding builds emotional bonds with your audience.'
  },
  {
    title: 'Growth',
    color: 'bg-[#FFE0B2]',
    description: 'A clear brand message attracts the right customers  and  keeps them coming back'
  },
  {
    title: 'Trust',
    color: 'bg-[#FFCCBC]',
    description: 'Aprofessional look makes your business feel credible and reliable.'
  },
];

// Define props for the BrandingCard component
interface BrandingCardProps {
  card: BrandingCardType;
}

// IMPORTANT: The BrandingCard helper component is defined OUTSIDE the main component.
// This prevents it from being re-created on every render of its parent.
const BrandingCard: React.FC<BrandingCardProps> = ({ card }) => (
  <div className="bg-black rounded-3xl p-3 h-[320px] transform hover:-translate-y-2 transition-transform duration-300">
    <div className="bg-white w-full h-full rounded-2xl flex flex-col justify-between p-4">
      <p className="text-black text-base font-medium">
        {card.description}
      </p>
      <div className={`${card.color} p-4 rounded-xl flex justify-between items-center`}>
        <span className="font-bold text-lg text-black">{card.title}</span>
        <button className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black/10 transition-colors shrink-0" aria-label={`Learn more about ${card.title}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const WhyBrandingMattersSection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="bg-amber-400 text-black p-8 md:p-12 rounded-3xl">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              Why Branding Matters?
            </h2>
            <hr className="border-t-2 border-black w-24 mx-auto mb-8" />
            <div className="space-y-6 text-lg text-left">
              <p>
                Branding is the core of every successful business. It influences how people perceive you, how they feel about you, and why they prefer you over others. A strong brand not only attracts attention; it builds trust, encourages loyalty, and gives your business a character that customers can relate to.
              </p>
              <p>
                Good branding turns first impressions into lasting relationships, communicates your values without saying a word, and makes your business memorable in a crowded marketplace. It's not just design—it's the story, consistency, and experience that set you apart.
              </p>
            </div>
          </div>

          <div className="bg-black rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {brandingCards.map(card => (
                <BrandingCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBrandingMattersSection;