// contact.tsx
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Facebook, MessageCircle, Paperclip, ScrollText } from 'lucide-react';
import ContactTab from './contact-tabs/ContactTab';
import LinkTab, { Link } from './contact-tabs/LinkTab';

const Contact: React.FC = () => {
  const [showInterface, setShowInterface] = useState(false);
  const [typedCommand, setTypedCommand] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<'contact' | 'links'>('contact');

  const fullCommand = 'contact --connect';

  const links: Link[] = [
    {
      id: 3,
      title: 'Email Me',
      url: 'mailto:mdatikmouhtasim@gmail.com',
      icon: <Mail size={18} className="text-white" />,
      color: 'bg-purple-900/20 border-purple-500/30 hover:border-purple-500',
      description: 'Direct contact via email',
    },
    {
      id: 1,
      title: 'GitHub',
      url: 'https://github.com/helix-77',
      icon: <Github size={18} className="text-gray-100" />,
      color: 'bg-gray-800/40 border-gray-400/30 hover:border-gray-500',
      description: 'Check out my open-source projects and contributions',
    },
    {
      id: 2,
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mdatik2003118/',
      icon: <Linkedin size={18} className="text-white" />,
      color: 'bg-indigo-900/40 border-indigo-500/30 hover:border-indigo-500',
      description: 'Connect with me professionally',
    },
    {
      id: 5,
      title: 'Facebook',
      url: 'https://www.facebook.com/atik.mouhtasim.rahi',
      icon: <Facebook size={18} className="text-white" />,
      color: 'bg-blue-500/20 border-blue-700/30 hover:border-blue-400',
      description: "Let's grow a bond",
    },
    {
      id: 4,
      title: 'WhatsApp',
      url: 'https://wa.me/8801719345888',
      icon: <MessageCircle size={18} className="text-white" />,
      color: 'bg-green-900/40 border-green-500/30 hover:border-green-500',
      description: 'Reach me out on WhatsApp',
    },
    {
      id: 6,
      title: 'FlowCV',
      url: 'https://flowcv.com/resume/ske29udov5vv',
      icon: <ScrollText size={18} className="text-white" />,
      color: 'bg-pink-500/10 border-pink-500/30 hover:border-pink-500',
      description: 'View my live resume',
    },


  ];

  // Typing effect for command
  useEffect(() => {
    if (typedCommand.length < fullCommand.length) {
      const timeout = setTimeout(() => {
        setTypedCommand(fullCommand.substring(0, typedCommand.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setShowInterface(true), 300);
      return () => clearTimeout(timeout);
    }
  }, [typedCommand]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 rounded-md font-mono overflow-hidden">
      <div className="p-2">
        {/* Terminal Prompt */}
        <div className="mb-2">
          <span className="text-purple-400">helix@portfolio:~$ </span>
          <span className="text-green-400">{typedCommand}</span>
          {!showInterface && cursorVisible && <span className="text-white">▋</span>}
        </div>

        {showInterface && (
          <div className="mt-4 bg-gray-800/50 rounded-md border border-gray-700 p-4 animate-in fade-in duration-300 select-text">
            {/* Terminal Header with Tabs */}
            <div className="flex items-center border-b border-gray-700 pb-2 mb-4">
              <div className="text-cyan-400 mr-2">\></div>
              <button
                className={`mr-4 px-3 py-1 rounded-t-md ${activeTab === 'contact' ? 'bg-gray-700 text-yellow-400' : 'text-yellow-400/70 hover:text-gray-200'
                  }`}
                onClick={() => setActiveTab('contact')}
              >
                contact.sh
              </button>
              <button
                className={`mr-4 px-3 py-1 rounded-t-md ${activeTab === 'links' ? 'bg-gray-700 text-yellow-400' : 'text-yellow-400/70 hover:text-gray-200'
                  }`}
                onClick={() => setActiveTab('links')}
              >
                links.sh
              </button>
            </div>

            {/* Render the selected tab */}
            {activeTab === 'contact' ? <ContactTab /> : <LinkTab links={links} />}

            {/* Terminal Footer */}
            <div className="mt-6 border-t border-gray-700 pt-2 flex items-center justify-between text-xs text-gray-500">
              <div>Session: communication#78621</div>
              <div>MODE: interactive</div>
              <div className="text-green-400">Status: Connected</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
