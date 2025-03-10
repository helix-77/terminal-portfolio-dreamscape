
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-6">
      <a 
        href="https://github.com/username" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-neon-blue transition-colors"
        aria-label="GitHub"
      >
        <Github size={24} />
      </a>
      <a 
        href="https://linkedin.com/in/username" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-neon-purple transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
      <a 
        href="https://twitter.com/username" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-neon-pink transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
