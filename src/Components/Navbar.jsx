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

    window.addEventListener('scroll', controlNavbar);

    
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
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 bg-gray-900 backdrop-blur-sm z-50 rounded-full px-8 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-32'
    }`}>
      <div className="flex items-center justify-center h-16">
        {/* Mobile menu button */}
        <button
            onClick={handleMenuClick}
            className="md:hidden p-2 text-gray-300 hover:text-emerald-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        {/* Desktop menu */}
        <div className="hidden md:flex md:space-x-8">
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
          className={`absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-emerald-400 px-4 py-2 rounded-full text-base font-medium transition-colors duration-200"
                onClick={handleNavClick}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
    </nav>

    {/* Overlay for mobile menu */}
    {isMenuOpen && (
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
        onClick={handleNavClick}
        aria-hidden="true"
      />
    )}
  </>
  );
};

export default NavBar;