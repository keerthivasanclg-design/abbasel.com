import React from 'react';
import { useInView } from './useInView';

// --- NEW ICONS ---

const EngagementIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.84 21.23a1.69 1.69 0 0 1-1.68 0C6.6 18.57 2 14.59 2 9.17 2 5.22 5.22 2 9.17 2c2.05 0 3.93.89 5.29 2.35a5.1 5.1 0 0 1 0 7.21" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 9.17c0 5.42-4.6 9.4-9.16 12.06" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 10.68h-4.33l-1.67 3.34H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const AudienceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 15V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 7v10" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 7v10" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7v10" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 19 22 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="17" cy="17" r="3" stroke="white" strokeWidth="2"/>
    </svg>
);

const LoyaltyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m12 14.3-3.47 1.82.66-3.86-2.8-2.73 3.88-.56L12 5.67l1.73 3.48 3.88.56-2.8 2.73.66 3.86L12 14.3z" fill="#FBBF24" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
);

const AwarenessIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#FBBF24" strokeWidth="2"/>
        <circle cx="12" cy="12" r="6" stroke="#FBBF24" strokeWidth="2"/>
        <circle cx="12" cy="12" r="2" fill="#FBBF24"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const GrowthIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3v18h18" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 15v-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15v-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 15v-1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 15c2.5-4 5.5-4 8 0s5.5 4 8 0" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const InsightsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.8 16c0-3.3-2-6.3-5.3-7.8" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.2 16c0-3.3 2-6.3 5.3-7.8" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2a10 10 0 0 0-9.8 14" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 20.9a10 10 0 0 0 7.8-4.9" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 18a6 6 0 0 0 6-6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const PartnershipIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m9 14 3-3 3 3" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17v-6" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 20.3a9 9 0 0 1-5.7-4.3 9 9 0 0 1 0-8A9 9 0 0 1 10 3.7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 3.7a9 9 0 0 1 5.7 4.3 9 9 0 0 1 0 8 9 9 0 0 1-5.7 4.3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);


// --- COMPONENT ---

type ImpactItemType = {
    text: string[];
    Icon: React.FC<{ className?: string }>;
}

const impactItems: ImpactItemType[] = [
    { Icon: EngagementIcon, text: ['Higher Brand', 'Engagement Rates'] },
    { Icon: AudienceIcon, text: ['Wider Audience', 'Reach Globally'] },
    { Icon: LoyaltyIcon, text: ['Increased Customer', 'Loyalty Value'] },
    { Icon: AwarenessIcon, text: ['Stronger Brand', 'Awareness Presence'] },
    { Icon: GrowthIcon, text: ['Consistent Business', 'Growth Momentum'] },
    { Icon: InsightsIcon, text: ['Data-Driven', 'Campaigns Insights'] },
    { Icon: PartnershipIcon, text: ['Long-Term Partnership', 'for Success Together'] },
];

const ImpactItem: React.FC<{ item: ImpactItemType, index: number }> = ({ item, index }) => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
    const { Icon } = item;
    
    return (
        <div 
            ref={ref}
            className={`
                bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 
                flex items-center space-x-6 
                transform transition-all duration-700 ease-out 
                hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 hover:bg-gray-900
                [transform-style:preserve-3d] hover:[transform:rotateX(10deg)_rotateY(-5deg)_translateZ(20px)]
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-black/30 rounded-full">
                <Icon className="w-8 h-8"/>
            </div>
            <div className="flex-grow">
                <p className="font-semibold text-lg leading-tight">
                    {item.text[0]}
                    {item.text[1] && <br />}
                    {item.text[1]}
                </p>
                <div className="mt-2 border-b-2 border-amber-500 w-3/4"></div>
            </div>
        </div>
    );
};

const ImpactSection: React.FC = () => {
    return (
        <section className="bg-black text-white py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">The Impact We Deliver</h2>
                    <p className="text-gray-400 text-lg">As a growing agency, our focus is on helping your business achieve:</p>
                </div>
                <div className="[perspective:1000px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {impactItems.map((item, index) => (
                            <ImpactItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImpactSection;
