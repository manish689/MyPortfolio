import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'My Works', href: '#works' },
    { name: 'Connect', href: '#connect' }
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) { 
        setIsVisible(false);
        setIsMenuOpen(false);
      } else { 
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);


  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <nav className={`fixed top-6 w-full px-4 md:left-1/2 md:-translate-x-1/2 md:w-auto transition-transform duration-300 z-50  ${
      isVisible ? 'translate-y-0' : '-translate-y-32'
    }`}>
      <div className="relative flex items-center h-16">
        {/* Mobile menu button */}
        <button
            onClick={handleMenuClick}
            className="md:hidden absolute left-0 p-2 text-gray-300 hover:text-emerald-400 transition-colors bg-gray-900 backdrop-blur-sm rounded-full"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        {/* Desktop menu */}
        <div className="hidden md:flex md:space-x-8 p-3 bg-gray-900 backdrop-blur-sm rounded-full px-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-emerald-400 px-4 py-2 rounded-full text-base font-medium transition-colors duration-200"
              onClick={handleNavClick}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

       {/* Mobile menu dropdown */}
       <div
          className={`fixed left-0 right-0 top-0 bg-black/95 backdrop-blur-sm transition-all duration-300 md:hidden ${
            isMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="pt-24 px-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-emerald-400 px-4 py-4 text-xl font-medium transition-colors duration-200 border-b border-gray-800"
                onClick={handleNavClick}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        </nav>
        </>
  );
};

export default NavBar;
