import React from 'react';

const steps = [
    { number: '01', title: 'Discovery & Planning', description: 'We start by understanding your goals, audience, and technical requirements to create a detailed project roadmap.' },
    { number: '02', title: 'UI/UX Design', description: 'Our team designs intuitive and beautiful interfaces that provide an exceptional user experience.' },
    { number: '03', title: 'Development & Coding', description: 'Using modern technologies, we write clean, efficient, and scalable code to bring the design to life.' },
    { number: '04', title: 'Testing & QA', description: 'We rigorously test the application across devices and scenarios to ensure it is bug-free and performs flawlessly.' },
    { number: '05', title: 'Deployment & Launch', description: 'We handle the deployment process, ensuring a smooth launch of your website or application.' },
    { number: '06', title: 'Support & Maintenance', description: 'Our partnership doesn\'t end at launch. We provide ongoing support to keep your digital product running smoothly.' },
];

const OurDevelopmentProcessSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Development Process
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We follow a proven, transparent process to deliver high-quality digital products on time and on budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <span className="text-amber-500 font-bold text-2xl">{step.number}</span>
              <h3 className="text-2xl font-bold my-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDevelopmentProcessSection;