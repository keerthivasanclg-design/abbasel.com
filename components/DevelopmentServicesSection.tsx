import React from 'react';

const services = [
  { title: 'Website Development', description: 'Custom websites built with performance, SEO, and user experience in mind.' },
  { title: 'Web Application Development', description: 'Complex, data-driven web applications to streamline your business processes.' },
  { title: 'Mobile App Development', description: 'Native and cross-platform mobile apps for iOS and Android.' },
  { title: 'E-commerce Solutions', description: 'Robust e-commerce platforms to sell your products and services online.' },
  { title: 'CMS Development', description: 'Easy-to-manage content management systems tailored to your needs.' },
  { title: 'API Integration', description: 'Connecting your applications with third-party services to extend functionality.' },
];

const DevelopmentServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">What We Build</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentServicesSection;