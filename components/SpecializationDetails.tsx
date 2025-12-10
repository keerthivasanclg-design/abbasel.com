// import React from 'react';
// import { useInView } from '../hooks/useInView';

// interface DetailCardProps {
//   number: string;
//   title: string;
//   description: string;
//   imageUrl: string;
// }

// const DetailCard: React.FC<DetailCardProps> = ({ number, title, description, imageUrl }) => {
//   const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  
//   const textContent = (
//     <div className="flex-1 flex flex-col justify-center">
//       <p className="text-gray-500 font-semibold mb-2">{number}</p>
//       <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">{title}</h3>
//       <p className="text-gray-600 leading-relaxed mb-8">{description}</p>
//       <button className="self-start bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors">
//         Get Started
//       </button>
//     </div>
//   );
  
//   const imageContent = (
//     <div className="flex-1">
//       <img src={imageUrl} alt={title} className="w-full h-auto object-cover rounded-2xl shadow-xl" />
//     </div>
//   );

//   return (
//     <div
//       ref={ref}
//       className={`flex flex-col md:flex-row gap-12 md:gap-16 items-center transform transition-all duration-1000 ease-in-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
//     >
//       {textContent}
//       {imageContent}
//     </div>
//   );
// };

// const SpecializationDetails: React.FC = () => {
//   const specializations = [
//     {
//       number: '01',
//       title: 'Branding',
//       description: 'We develop and narrate brand stories that resonate with your belief systems. Your brand is easily identifiable, highly visible, and instantly recalled as a result of our strategic approach to storytelling. This approach fosters trust in your brand and promotes its global expansion.',
//       imageUrl: 'https://images.unsplash.com/photo-1599837569155-19a0a4c01d4a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      
//     },
//     {
//       number: '02',
//       title: 'Social Media Marketing',
//       description: 'With the goal of augmenting brand awareness and facilitating deeper audience engagement, we have crafted tailored marketing plans. Measurable outcomes and significant influence are achieved through a collaborative approach consisting of SMM, content marketing, as well as influencer and email marketing.',
//       imageUrl: 'https://images.unsplash.com/photo-1570717461341-355b5a23a303?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
//     {
//       number: '03',
//       title: 'Paid Advertisement',
//       description: 'We implement tailored strategies and comprehensive cloud-based services to advertise your business on the social media platforms and search engines that your ideal clients use every day. This ensures that we meet their contact lens and comfort needs.',
//             imageUrl: 'https://images.unsplash.com/photo-1570717461341-355b5a23a303?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

//     },
//   ];

//   return (
//     <div className="relative z-20">
//         <div className="container mx-auto px-6">
//             <div className="bg-white rounded-3xl p-8 md:p-16 space-y-20 md:space-y-28 ">
//                 {specializations.map((spec) => (
//                     <DetailCard 
//                         key={spec.number}
//                         number={spec.number}
//                         title={spec.title}
//                         description={spec.description}
//                         imageUrl={spec.imageUrl}
//                     />
//                 ))}
//             </div>
//         </div>
//     </div>
//   );
// };

// export default SpecializationDetails;


import React from 'react';
import { useInView } from '../hooks/useInView';
import branding from "../asserts/branding.png";
import socialmediamarketing from "../asserts/socialmediamarketing.png";
import paidpromotion from "../asserts/paidpromotion.png";


interface DetailCardProps {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const DetailCard: React.FC<DetailCardProps> = ({ number, title, description, imageUrl, link }) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  
  const textContent = (
    <div className="flex-1 flex flex-col justify-center">
      <p className="text-gray-500 font-semibold mb-2">{number}</p>
      <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-8">{description}</p>

      {/* ✅ Use dynamic link here */}
      <a
        href={link}
        className="self-start bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
  
  const imageContent = (
    <div className="flex-1">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto object-cover rounded-2xl shadow-xl"
      />
    </div>
  );

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row gap-12 md:gap-16 items-center transform transition-all duration-1000 ease-in-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {textContent}
      {imageContent}
    </div>
  );
};

const SpecializationDetails: React.FC = () => {
  const specializations = [
    {
      number: '01',
      title: 'Branding',
      description:
        'We develop and narrate brand stories that resonate with your belief systems. Your brand is easily identifiable, highly visible, and instantly recalled as a result of our strategic approach to storytelling. This approach fosters trust in your brand and promotes its global expansion.',
      imageUrl:
        branding,
      link: '#branding', // 🔗 custom link for first card
    },
    {
      number: '02',
      title: 'Social Media Marketing',
      description:
        'With the goal of augmenting brand awareness and facilitating deeper audience engagement, we have crafted tailored marketing plans. Measurable outcomes and significant influence are achieved through a collaborative approach consisting of SMM, content marketing, as well as influencer and email marketing.',
      imageUrl:
        socialmediamarketing,
      link: '#social-media-marketing', // 🔗 second card link
    },
    {
      number: '03',
      title: 'Paid Advertisement',
      description:
        'We implement tailored strategies and comprehensive cloud-based services to advertise your business on the social media platforms and search engines that your ideal clients use every day. This ensures that we meet their contact lens and comfort needs.',
      imageUrl:
        paidpromotion,
      link: '#social-media-marketing', // 🔗 third card link
    },
  ];

  return (
    <div className="relative z-20">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-16 space-y-20 md:space-y-28">
          {specializations.map((spec) => (
            <DetailCard
              key={spec.number}
              number={spec.number}
              title={spec.title}
              description={spec.description}
              imageUrl={spec.imageUrl}
              link={spec.link} // ✅ pass the link to DetailCard
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecializationDetails;
