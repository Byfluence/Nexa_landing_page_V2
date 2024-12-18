import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
  
    { icon: Twitter, href: 'https://x.com/e38234', label: 'Twitter' },
   
    { icon: Linkedin, href: 'https://www.linkedin.com/in/eyasu-tilahun-3128b618a/', label: 'LinkedIn' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
        >
          <Icon className="w-5 h-5 text-gray-400" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;