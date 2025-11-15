import React from 'react';
import { useInView } from '../hooks/useInView';

interface FeatureCardProps {
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, delay }) => {
    // FIX: Removed `triggerOnce` property as it's not a valid IntersectionObserverInit option. The useInView hook already implements "trigger once" logic.
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

    return (
        <div
            ref={ref}
            style={{ transitionDelay: delay }}
            className={`bg-white text-black p-8 rounded-2xl shadow-lg transform transition-all duration-700 ease-in-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const FeaturesSection: React.FC = () => {
    const features = [
        {
            title: "Data-Driven Strategy",
            description: "We leverage analytics and market research to craft strategies that deliver measurable results and high ROI.",
            delay: "0ms"
        },
        {
            title: "Creative Content",
            description: "Our team produces compelling content that captures attention, tells your brand's story, and engages your target audience.",
            delay: "200ms"
        },
        {
            title: "Multi-Channel Campaigns",
            description: "We build integrated campaigns across various platforms to maximize your reach and create a cohesive brand experience.",
            delay: "400ms"
        }
    ];

    return (
        <section id="blog" className="bg-black text-white py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">Our Approach</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We combine proven methods with innovative thinking to keep you ahead of the curve.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard 
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            delay={feature.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;