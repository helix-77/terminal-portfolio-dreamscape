// for index(terminal) page's footer
import React from 'react';
import { Github, Instagram, Linkedin, Newspaper, Twitter } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-6">
      <a
        href="https://github.com/helix-77"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-neon-blue transition-colors"
        aria-label="GitHub"
      >
        <Github size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/mdatik2003118/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-neon-purple transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://www.instagram.com/hel.ix__/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-neon-pink transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>
      <a
        href="https://flowcv.com/resume/ske29udov5vv"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-neon-green transition-colors"
        aria-label="FlowCV"
      >
        <Newspaper size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
