// import React from 'react';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import ServiceSection from './components/ServiceSection';
// import WhoWeAreSection from './components/WhoWeAreSection';
// import SpecializationSection from './components/SpecializationSection';
// import SpecializationDetails from './components/SpecializationDetails';
// import MarketingFutureSection from './components/MarketingFutureSection';
// import LeadershipSection from './components/LeadershipSection';
// import FocusSection from './components/FocusSection';
// import TrendingMethodsSection from './components/TrendingMethodsSection';
// import Footer from './components/Footer';
// import about from './components/about';
// const App: React.FC = () => {
//   return (
//     <div className="bg-black text-white font-sans">
//       <Header />
//       <main>
//         <HeroSection />
//         <ServiceSection />
//         <WhoWeAreSection />
//         <div className="relative">
//           <SpecializationSection />
//           <SpecializationDetails />
//         </div>
//         <MarketingFutureSection />
//         <LeadershipSection />
//         <FocusSection />
//         <TrendingMethodsSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
// import FeaturesSection from './components/FeaturesSection';
import SpecializationSection from './components/SpecializationSection';
import SpecializationDetails from './components/SpecializationDetails';
import MarketingFutureSection from './components/MarketingFutureSection';
import LeadershipSection from './components/LeadershipSection';
import FocusSection from './components/FocusSection';
import TrendingMethodsSection from './components/TrendingMethodsSection';
import Footer from './components/Footer';
import AboutPage from './pages/Aboutpage';
import WhoWeAreSection from './components/WhoWeAreSection';
import MarketingPage from './pages/Marketingpage';
import SocialMediaMarketingPage from './pages/SocialMediaMarketing';
import BrandingPage from './pages/BrandingPage';
import Developmentpage from './pages/Developmentpage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPageProp';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#about':
        return <AboutPage />;
         case '#marketing':
        return <MarketingPage />;
        case '#social-media-marketing':
        return <SocialMediaMarketingPage />;
        case '#branding':
        return <BrandingPage />;
         case '#development':
        return <Developmentpage />;
         case '#blog':
        return <BlogPage />;
         case '#blog-post':
        return <BlogPostPage />;
      default:
        return (
          <main>
            <HeroSection />
            <ServiceSection />
            <WhoWeAreSection />
            <div className="relative">
              <SpecializationSection />
              <SpecializationDetails />
            </div>
            {/* <FeaturesSection /> */}
            <MarketingFutureSection />
            <LeadershipSection />
            <FocusSection />
            <TrendingMethodsSection />
          </main>
        );
    }
  };

  return (
    <div className="bg-white text-black font-sans">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;