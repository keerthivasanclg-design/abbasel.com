import React from 'react';
import { FacebookIcon, InstagramIcon, XIcon, PinterestIcon } from './Icons';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Nisaanth .M.S',
    role: 'As the founder of Abbasel Digital Marketing, I lead our team to deliver high-quality digital solutions that stand out.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Lenin.S',
    role: 'video editor at Abbasel Marketing. he brings brands to life through high-quality video content that engages and converts.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format=fit&crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Rithika. S',
    role: 'SEO expert who reach the right audience. She specializes in keyword research, on-page optimization, and performance tracking to boost organic growth.',
    imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format=fit&crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Keerthivasan. s',
    role: 'crafts compelling content that capture attention and deliver clear messages. His writing helps shape brand voice and drive audience connection across platforms..',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format=fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="relative w-full aspect-square overflow-hidden mb-6 group">
        <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
      <p className="text-gray-600 mb-4 px-2 flex-grow">{member.role}</p>
      <div className="flex justify-center items-center space-x-4 mt-auto">
        <a href="#" aria-label={`${member.name} Facebook`} className="text-black hover:opacity-75 transition-opacity">
          <FacebookIcon className="w-5 h-5" />
        </a>
        <a href="#" aria-label={`${member.name} X`} className="text-black hover:opacity-75 transition-opacity">
          <XIcon className="w-5 h-5 fill-current" />
        </a>
        <a href="#" aria-label={`${member.name} Instagram`} className="text-black hover:opacity-75 transition-opacity">
          <InstagramIcon className="w-5 h-5" />
        </a>
        <a href="#" aria-label={`${member.name} Pinterest`} className="text-black hover:opacity-75 transition-opacity">
          <PinterestIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are a team of passionate marketers, designers, and strategists dedicated to helping your brand succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;