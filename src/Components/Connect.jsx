import React from 'react';
import { Mail, Github, Linkedin, Twitter, Coffee } from 'lucide-react';

const Connect = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:manishpyakurel67@gmail.com',
      color: 'hover:text-emerald-400',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/manish689',
      color: 'hover:text-emerald-400',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/manish-pyakurel-a59a741b8/',
      color: 'hover:text-emerald-400',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      href: 'https://x.com/flyoderr',
      color: 'hover:text-emerald-400',
    },
  ];

  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-gray-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`p-4 bg-gray-900 rounded-full border text-white border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-500 ${link.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <a
            href="https://www.buymeacoffee.com/YourBuyMeACoffeeUsername"
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-all duration-300 transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            title="Support my work by buying me a coffee!"
          >
            <Coffee className="w-5 h-5" />
            <span>Buy me a coffee</span>
          </a>

          <div className="mt-12 p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Quick Contact</h3>
            <p className="text-gray-400 mb-6">
              Want to work together? Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div className="inline-flex items-center gap-2 text-emerald-400">
              <Mail className="w-5 h-5" />
              <span>manishpyakurel67@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;