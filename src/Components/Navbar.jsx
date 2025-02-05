import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 bg-gray-900 backdrop-blur-sm z-50 rounded-full px-8 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-32'
    }`}>
      <div className="flex items-center justify-center h-16">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-emerald-400 px-4 py-2 rounded-full text-base font-medium transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;