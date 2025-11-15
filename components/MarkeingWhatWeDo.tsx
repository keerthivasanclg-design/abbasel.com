
import React from 'react';
import { useInView } from './useInView';

const SocialMediaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="9" x2="20" y2="9"></line>
    <line x1="4" y1="15" x2="20" y2="15"></line>
    <line x1="10" y1="3" x2="8" y2="21"></line>
    <line x1="16" y1="3" x2="14" y2="21"></line>
  </svg>
);

const ContentMarketingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

const InfluencerMarketingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="3" />
    <path d="M17 18v-2a5 5 0 0 0-10 0v2" />
    <circle cx="18.5" cy="4.5" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="5.5" cy="4.5" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="12" cy="1.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const EmailMarketingIcon = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center bg-black rounded-full ${className}`}>
    <svg className="w-1/2 h-1/2 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  </div>
);

const services = [
  {
    icon: SocialMediaIcon,
    title: 'Social Media Marketing',
    description: 'Our marketing services are designed to help your business grow, connect with your audience, and strengthen your brand awareness.',
  },
  {
    icon: ContentMarketingIcon,
    title: 'Content Marketing',
    description: 'Our content marketing strategies are designed to deliver valuable, relevant, and consistent content that helps your business attract and retain the right audience.',
  },
  {
    icon: InfluencerMarketingIcon,
    title: 'Influencer Marketing',
    description: 'We create effective influencer marketing strategies to connect your brand with trusted personalities in your industry.',
  },
  {
    icon: EmailMarketingIcon,
    title: 'Email Marketing',
    description: 'We make sure your audience gets the right message at the right time, which strengthens your brand awareness.',
  },
];

interface ServiceCardProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: IconComponent, title, description, index }) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-amber-400 text-black p-8 flex flex-col h-full transform transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <IconComponent className="h-12 w-12 mb-6" />
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-black leading-relaxed mb-6 flex-grow">{description}</p>
      <a href="#" className="font-semibold mt-auto hover:underline self-start">
        Read More
      </a>
    </div>
  );
};


const MarketingServicesSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black">
              Marketing that we do for your Brand
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingServicesSection;
