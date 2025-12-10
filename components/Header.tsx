import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';
import logo from "../asserts/logo.jpeg"


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isMobileServiceMenuOpen, setMobileServiceMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { 
      href: '#services', 
      label: 'Service',
      subLinks: [
        { href: '#marketing', label: 'Marketing' },
        { href: '#social-media-marketing', label: 'Social Media Marketing' },
        { href: '#branding', label: 'Branding' },
                { href: '#development', label: 'Development' },

      ]
    },
    { href: '#blog', label: 'Blog' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/nisaanth-m-s-363809205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { href: 'https://www.instagram.com/abbasel_official?igsh=N3hjcXR3ajh2cWlz', label: 'Instagram' },
    { href: 'https://www.facebook.com/profile.php?id=61580302659703', label: 'Facebook' },
  ];

  return (
    <header className="bg-white text-black sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.subLinks ? (
              <div 
                key={link.label}
                className="relative"
                onMouseEnter={() => setIsServiceMenuOpen(true)}
                onMouseLeave={() => setIsServiceMenuOpen(false)}
              >
                <a href={link.href} className="flex items-center hover:text-blue-600 transition-colors duration-300 font-medium text-gray-700 cursor-pointer">
                  {link.label}
                  <ChevronDownIcon className="ml-1 w-4 h-4" />
                </a>
                {isServiceMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-max bg-white rounded-md shadow-lg py-2 z-20 border border-gray-100">
                    {link.subLinks.map(subLink => (
                      <a key={subLink.href} href={subLink.href} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={link.href} href={link.href} className="flex items-center hover:text-blue-600 transition-colors duration-300 font-medium text-gray-700">
                {link.label}
              </a>
            )
          ))}
        </nav>

        <div className="flex-1 md:text-center">
          
          <a href="#home" className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900 tracking-wide">
            <img src={logo} className="w-6 h-6 rounded"  alt="" />
            <span> Abbasel</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {socialLinks.map(link => (
            <a key={link.label} href={link.href} className="hover:text-blue-600 transition-colors duration-300 text-gray-700 font-medium">
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              link.subLinks ? (
                <div key={link.label} className="w-full text-center">
                    <button 
                        onClick={() => setMobileServiceMenuOpen(!isMobileServiceMenuOpen)} 
                        className="w-full flex items-center justify-center hover:text-blue-600 transition-colors duration-300 font-medium"
                    >
                        {link.label}
                        <ChevronDownIcon className={`ml-1 w-4 h-4 transition-transform ${isMobileServiceMenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileServiceMenuOpen && (
                        <div className="flex flex-col items-center space-y-3 mt-3 py-3 bg-gray-50 w-full">
                            {link.subLinks.map(subLink => (
                                <a 
                                    key={subLink.href} 
                                    href={subLink.href} 
                                    className="hover:text-blue-600 transition-colors duration-300 font-medium text-gray-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {subLink.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
              ) : (
                <a key={link.href} href={link.href} className="flex items-center hover:text-blue-600 transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              )
            ))}
          </nav>
          <div className="flex flex-col items-center space-y-4 mt-4 pt-4 border-t border-gray-200">
            {socialLinks.map(link => (
            <a key={link.label} href={link.href} className="hover:text-blue-600 transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;