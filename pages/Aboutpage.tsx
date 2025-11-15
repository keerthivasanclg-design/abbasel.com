import React from 'react';
import About from '../components/About';
import OurVisionSection from '@/components/OurVisionSection';
import TeamSection from '../components/TeamSection';
import AdventureSection  from '@/components/Adventuresection';
import FounderSection from '@/components/foundersection';
import OurWorkSection from '@/components/OurWorkSection';

const AboutPage: React.FC = () => {
    return (
        <main>
            <About />
            <OurVisionSection />
            <TeamSection />
            <AdventureSection />
            <OurWorkSection />
            <FounderSection />
        </main>
    );
};

export default AboutPage;
