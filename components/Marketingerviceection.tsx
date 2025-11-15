
import React, { useState, useEffect, useRef } from 'react';

const VisualStorytellingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EngagingContentIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const CommunityBuildingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const AudienceInsightsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line>
  </svg>
);

const MarketingAuditIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const CampaignOptimizationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const services = [
  {
    icon: VisualStorytellingIcon,
    title: 'Visual Storytelling',
    description: 'Unique graphics and creatives that capture attention and leave a strong brand impression.',
  },
  {
    icon: EngagingContentIcon,
    title: 'Engaging Content',
    description: 'Content that informs, entertains, and converts your audience into customers.',
  },
  {
    icon: CommunityBuildingIcon,
    title: 'Community Building',
    description: 'We help you build loyal brand communities that drive long-term growth.',
  },
  {
    icon: AudienceInsightsIcon,
    title: 'Audience Insights',
    description: 'Understand your audience better to create campaigns that truly connect.',
  },
  {
    icon: MarketingAuditIcon,
    title: 'Marketing Audit',
    description: 'Detailed audits that highlight strengths, weaknesses, and growth opportunities.',
  },
  {
    icon: CampaignOptimizationIcon,
    title: 'Campaign Optimization',
    description: 'Targeted ad management that ensures every rupee spent brings measurable returns.',
  },
];

interface ServiceCardProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: IconComponent, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translateY(0px)');

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const speed = -0.12;
          const yOffset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
          setTransform(`translateY(${yOffset}px)`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={cardRef} 
      style={{ transform }} 
      className="transition-transform duration-500 ease-out will-change-transform"
    >
      <div className="w-14 h-14 mb-6 flex items-center justify-center bg-amber-500/10 rounded-xl">
        <IconComponent className="h-8 w-8 text-amber-500" />
      </div>
      <h3 className="text-2xl font-bold text-amber-500 mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};


const MarketingServicesSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
            {/* <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
                Comprehensive Marketing Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
                We provide a full suite of services to build your brand, engage your audience, and drive growth.
            </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingServicesSection;