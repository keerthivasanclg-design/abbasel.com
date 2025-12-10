import React from 'react';
import { useInView } from '../hooks/useInView';
import adventurepost from "../asserts/adventurepost.png"
import adventurepost2 from "../asserts/adventurepost2.png"
import adventurepost3 from "../asserts/adventurepost3.png"


const packages = [
    {
        imageUrl: adventurepost,
    },
    {
        imageUrl: adventurepost2,
    },
    {
        imageUrl: adventurepost3,
    },
];


type Package = typeof packages[0];

const PackageCard: React.FC<{ pkg: Package, index: number }> = ({ pkg, index }) => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

    const initialRotation = index === 0 ? '-rotate-2' : index === 2 ? 'rotate-2' : '';

    return (
        <div 
            ref={ref}
            className={`
                bg-brand-cream text-black p-6 rounded-2xl border-4 border-black text-center flex flex-col h-full 
                transform transition-all duration-500 ease-out 
                hover:scale-105 hover:shadow-2xl hover:shadow-white/10
                ${isInView ? 'opacity-100 translate-y-0 rotate-0' : `opacity-0 translate-y-12 ${initialRotation}`}
            `}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="flex-grow flex items-center justify-center mb-4">
                <img src={pkg.imageUrl}  className="max-w-full h-auto" />
            </div>
            <h3 className="font-display text-4xl mb-6"></h3>
            <span className={`inline-block px-4 py-2 rounded-md text-sm font-semibold text-black `}>
                
            </span>
        </div>
    );
};


const AdventureSection: React.FC = () => {
    // FIX: Removed `triggerOnce` property as it's not a valid IntersectionObserverInit property.
    const [titleRef, isTitleInView] = useInView<HTMLHeadingElement>({ threshold: 0.5 });
    // FIX: Removed `triggerOnce` property as it's not a valid IntersectionObserverInit property.
    const [subtitleRef, isSubtitleInView] = useInView<HTMLParagraphElement>({ threshold: 0.5 });
    // FIX: Removed `triggerOnce` property as it's not a valid IntersectionObserverInit property.
    const [buttonRef, isButtonInView] = useInView<HTMLDivElement>({ threshold: 0.5 });
    
    return (
        <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20 md:py-28 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <h2 
                    ref={titleRef}
                    className={`font-display text-5xl md:text-6xl mb-4 transform transition-all duration-700 ease-out ${isTitleInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95'}`}
                >
                    Join the Adventure
                </h2>
                <p 
                    ref={subtitleRef}
                    className={`text-gray-300 text-lg mb-16 transform transition-all duration-700 ease-out delay-150 ${isSubtitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
                >
                    Flexible Options for Every Family
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {packages.map((pkg, index) => (
                        <div  className={index !== 1 ? 'md:mt-16' : ''}>
                           <PackageCard pkg={pkg} index={index} />
                        </div>
                    ))}
                </div>
                <div 
                    ref={buttonRef}
                    className={`mt-20 transform transition-all duration-700 ease-out delay-500 ${isButtonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <button className="bg-amber-500 text-black font-bold py-4 px-10 rounded-full hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/10">
                        We only give what you need
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AdventureSection;