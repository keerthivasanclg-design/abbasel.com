import React from 'react';
import { InstagramIcon, FacebookIcon, YouTubeIcon, XIcon, PinterestIcon, LinkedInIcon } from './Icons';

const platforms = [
  {
    Icon: InstagramIcon,
    title: 'Instagram',
    description: 'With our Instagram marketing services, we craft visually engaging posts, reels, and stories that reflect your brand personality. Our Instagram marketing strategy helps attract followers, increase engagement, and convert audiences into loyal customers.',
    bgColor: 'bg-red-700',
  },
  {
    Icon: FacebookIcon,
    title: 'Facebook',
    description: 'Our Facebook marketing services focus on creating targeted campaigns, engaging content, and community building. Using a smart Facebook marketing strategy, we help your brand expand reach, boost visibility, and connect with potential customers.',
    bgColor: 'bg-blue-600',
  },
  {
    Icon: YouTubeIcon,
    title: 'YouTube Marketing',
    description: 'Through our YouTube marketing services, we produce creative videos, optimize content for search, and run ad campaigns to grow your channel. Our YouTube marketing strategy ensures your videos reach the right audience and strengthen your brand presence online.',
    bgColor: 'bg-red-700',
  },
  {
    Icon: XIcon,
    title: 'X (Twitter) Marketing',
    description: 'Our X marketing services help your brand participate in trending conversations, post updates, and run ad campaigns. With a focused X marketing strategy, we build engagement, connect with communities, and increase brand reach.',
    bgColor: 'bg-blue-600',
  },
  {
    Icon: PinterestIcon,
    title: 'Pinterest Marketing',
    description: 'Using Pinterest marketing services, we design eye-catching pins and boards to showcase products and ideas. Our Pinterest marketing strategy helps drive traffic, spark interest, and inspire audiences to engage with your brand.',
    bgColor: 'bg-red-700',
  },
  {
    Icon: LinkedInIcon,
    title: 'LinkedIn Marketing',
    description: 'Our LinkedIn marketing services enable you to share thought leadership content, connect with decision-makers, and grow professional credibility. Through a structured LinkedIn marketing strategy, we help your brand establish authority and trust.',
    bgColor: 'bg-blue-600',
  },
];

const MarketingPlatformsSection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Meet our Wonderful Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map(({ Icon, title, description, bgColor }) => (
            <div key={title} className={`${bgColor} text-white p-8 rounded-lg flex flex-col shadow-xl`}>
              <div className="w-16 h-16 mb-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">{title}</h3>
              <p className="mb-6 flex-grow text-gray-200">{description}</p>
              <a href="#contact" className="font-semibold hover:underline mt-auto">Contact Me</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingPlatformsSection;