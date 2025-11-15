import React from 'react';
import { useInView } from '../hooks/useInView';

const StatCard: React.FC<{ value: string; label: string; delay?: number }> = ({ value, label, delay }) => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay || 0}ms` }}
            className={`bg-gray-900 p-8 rounded-xl border border-gray-800 text-center transform transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <p className="text-5xl font-extrabold text-yellow-400">{value}</p>
            <h4 className="mt-3 text-lg font-medium text-gray-300">{label}</h4>
        </div>
    );
};

const WhoWeAreSection: React.FC = () => {
    return (
        <section id="home" className="bg-black text-white py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 items-start mb-20 md:mb-28">
                    <div>
                        <div className="w-48 h-px bg-white mb-6"></div>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest">
                            Who We Are
                        </h2>
                    </div>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        Based in the digital marketing company at the central region of Chettindau, Karaikudi, we are Abbasel Marketing. To obtain actionable outcomes, intelligent marketing frameworks are created, and comprehensive marketing services are tailored and provided. Through quality SEO, PPC, performance content, and various other marketing strategies, we focus on lead generation, engagement, and revenue growth. In a nutshell,, we help organizations turn online visibility into growth.
                    </p>
                </div>

                <div className="max-w-4xl mb-24">
                     <h3 className="text-4xl md:text-6xl font-bold leading-tight">
                        Your Growth is Our First <span className="text-yellow-400">Success</span>
                        <br />
                        <span className="text-yellow-400">Story</span>
                    </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <StatCard value="4+" label="Happy Clients" />
                    <StatCard value="4.3" label="Star Rating" delay={150} />
                    <StatCard value="2+" label="Social Media Branding" delay={300} />
                </div>

            </div>
        </section>
    );
};

export default WhoWeAreSection;