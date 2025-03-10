
import React from 'react';
import { Link, ExternalLink, Github, Linkedin, Twitter, Mail, Globe, FileCode } from 'lucide-react';

const Links = () => {
  const links = [
    {
      id: 1,
      title: 'GitHub',
      url: 'https://github.com/username',
      icon: <Github size={20} className="text-gray-100" />,
      color: 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800',
      description: 'Check out my open-source projects and contributions'
    },
    {
      id: 2,
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/username',
      icon: <Linkedin size={20} className="text-white" />,
      color: 'bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700',
      description: 'Connect with me professionally'
    },
    {
      id: 3,
      title: 'Twitter',
      url: 'https://twitter.com/username',
      icon: <Twitter size={20} className="text-white" />,
      color: 'bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400',
      description: 'Follow me for tech updates and thoughts'
    },
    {
      id: 4,
      title: 'Personal Blog',
      url: 'https://myblog.com',
      icon: <Globe size={20} className="text-white" />,
      color: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600',
      description: 'Read my articles on web development and design'
    },
    {
      id: 5,
      title: 'CodePen',
      url: 'https://codepen.io/username',
      icon: <FileCode size={20} className="text-white" />,
      color: 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700',
      description: 'See my coding experiments and demos'
    },
    {
      id: 6,
      title: 'Email Me',
      url: 'mailto:email@example.com',
      icon: <Mail size={20} className="text-white" />,
      color: 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600',
      description: 'Direct contact via email'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-4">
        <Link className="text-neon-blue" size={24} />
        <h3 className="text-xl font-semibold">Important Links</h3>
      </div>

      <p className="text-lg leading-relaxed mb-6">
        Connect with me through these platforms and resources.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.color} rounded-lg p-4 flex items-center transition-all duration-300 hover:scale-102 hover:shadow-glow`}
          >
            <div className="mr-4 bg-black/20 p-3 rounded-full">
              {link.icon}
            </div>
            <div>
              <h4 className="font-bold flex items-center">
                {link.title} <ExternalLink size={12} className="ml-1 opacity-70" />
              </h4>
              <p className="text-xs opacity-80">{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Links;
