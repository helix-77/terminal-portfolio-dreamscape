// for index(terminal) page's footer
import React, { useEffect, useState } from 'react';
import { Github, Instagram, Linkedin, Newspaper, Twitter } from 'lucide-react';

const SocialLinks = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const iconSize = isMobile ? 20 : 24;

  return (
    <div className="flex justify-center items-center mt-4 md:mt-8 space-x-4 md:space-x-6">
      <a
        href="https://github.com/helix-77"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-neon-blue transition-colors p-1.5"
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a
        href="https://www.linkedin.com/in/mdatik2003118/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-neon-purple transition-colors p-1.5"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a
        href="https://www.instagram.com/hel.ix__/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-neon-pink transition-colors p-1.5"
        aria-label="Instagram"
      >
        <Instagram size={iconSize} />
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-neon-green transition-colors p-1.5"
        aria-label="FlowCV"
      >
        <Newspaper size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
