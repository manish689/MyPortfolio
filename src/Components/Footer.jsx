import React from 'react';
import { Heart, Code2, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Code2 className="w-5 h-5 text-emerald-400" />
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React & Tailwind</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400">© {2025} Manish Pyakurel.</span>
            <a
              href="https://www.buymeacoffee.com/YourBuyMeACoffeeUsername"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="Support my work by buying me a coffee!"
            >
              <Coffee className="w-4 h-4" />
              <span>Buy me a coffee</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;