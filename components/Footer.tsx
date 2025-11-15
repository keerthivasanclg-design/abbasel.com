import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const Footer: React.FC = () => {
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  return (
    <footer className="bg-amber-500 text-black">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Name */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold leading-tight">
              Abbasel
              <br />
              Digital
              <br />
              Marketing
            </h2>
          </div>

          {/* Column 2: Menu */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Menu</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <ul className="space-y-3">
                <li><a href="#home" className="hover:underline text-white font-semibold">home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li
                  className="relative"
                  onMouseEnter={() => setIsServiceMenuOpen(true)}
                  onMouseLeave={() => setIsServiceMenuOpen(false)}
                >
                  <a href="#services" className="flex items-center hover:underline cursor-pointer">
                    service <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServiceMenuOpen ? 'rotate-180' : ''}`} />
                  </a>
                  {isServiceMenuOpen && (
                    <div className="absolute left-0 bottom-full mb-2 bg-white rounded-md shadow-lg p-1 z-10 border border-gray-200 w-max">
                        <ul className="space-y-1">
                          <li><a href="#marketing" className="text-black hover:bg-amber-100 block whitespace-nowrap px-3 py-2 text-sm rounded-md">Marketing</a></li>
                          <li><a href="#social-media-marketing" className="text-black hover:bg-amber-100 block whitespace-nowrap px-3 py-2 text-sm rounded-md">Social Media Marketing</a></li>
                          <li><a href="#branding" className="text-black hover:bg-amber-100 block whitespace-nowrap px-3 py-2 text-sm rounded-md">Branding</a></li>
                        </ul>
                    </div>
                  )}
                </li>
                <li><a href="#blog" className="hover:underline">Blog</a></li>
              </ul>
              <ul className="space-y-3">
                <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:underline">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Social */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Social</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 4: Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Info</h3>
            <div className="space-y-3 text-sm">
              <p>500 Terry Francine Street,<br />San Francisco, CA 94158</p>
              <p><a href="mailto:info@mysite.com" className="hover:underline">info@mysite.com</a></p>
              <p><a href="tel:123-456-7890" className="hover:underline">123-456-7890</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6 text-xs">
        <p>© 2025 by Abbasel Digital Marketing. Developed by Abbasel</p>
      </div>
    </footer>
  );
};

export default Footer;