import React from "react";
import { useInView } from './hooks/useInView';

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

const services = [
  {
    title: "Clarity & Transparency",
    description:
      "Data-driven strategies make sure every campaign provides measurable results. With real-time tracking and clear insights, you will always know how your investment is performing and how your audience is responding.",
  },
  {
    title: "Competitive Growth",
    description:
      "Outperform competitors by using smarter strategies, new ad formats, and market trends. Marketing helps your business stay relevant, grow faster, and achieve consistent long-term growth.",
  },
  {
    title: "Reach & Versatility",
    description:
      "Connect with audiences across different regions, cultures, and industries using precise targeting. Marketing makes sure your message meets both B2B and B2C needs. This gives your brand the ability to grow globally.",
  },
  {
    title: "Engagement & Visibility",
    description:
      "A platform that helps sellers connect with popular consumer apps in India through the ONDC Network.",
  },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, index }) => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 ease-out transform hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

const MarketingServicesSection: React.FC = () => {
    const [titleRef, isTitleInView] = useInView<HTMLHeadingElement>({ threshold: 0.5 });

    return (
        <section className="bg-white text-black pt-20 md:pt-28 pb-16 md:pb-20 overflow-hidden">
            <div className="container mx-auto px-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
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