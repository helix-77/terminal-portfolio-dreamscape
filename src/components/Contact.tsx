import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Twitter, ExternalLink, Link, Facebook, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [showInterface, setShowInterface] = useState(false);
  const [typedCommand, setTypedCommand] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<'contact' | 'links'>('contact');

  const fullCommand = 'contact --connect';

  const links = [
    {
      id: 1,
      title: 'Email Me',
      url: 'mailto:mdatikmouhtasim@gmail.com',
      icon: <Mail size={18} className="text-white" />,
      color: 'bg-purple-900/40 border-purple-500/30 hover:border-purple-500',
      description: 'Direct contact via email'
    },
    {
      id: 2,
      title: 'GitHub',
      url: 'https://github.com/helix-77',
      icon: <Github size={18} className="text-gray-100" />,
      color: 'bg-gray-900/40 border-gray-600/30 hover:border-gray-500',
      description: 'Check out my open-source projects and contributions'
    },
    {
      id: 3,
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mdatik2003118/',
      icon: <Linkedin size={18} className="text-white" />,
      color: 'bg-blue-900/40 border-blue-500/30 hover:border-blue-500',
      description: 'Connect with me professionally'
    },
    {
      id: 4,
      title: 'WhatsApp',
      url: 'https://wa.me/8801719345888',
      icon: <MessageCircle size={18} className="text-white" />,
      color: 'bg-green-900/40 border-green-500/30 hover:border-green-500',
      description: 'Reach me out on WhatsApp'
    },
    {
      id: 5,
      title: 'Facebook',
      url: 'https://www.facebook.com/atik.mouhtasim.rahi',
      icon: <Facebook size={18} className="text-white" />,
      color: 'bg-blue-800/40 border-blue-400/30 hover:border-blue-400',
      description: 'Let\'s grow a bond'
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
      const timeout = setTimeout(() => {
        setShowInterface(true);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [typedCommand]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 rounded-md font-mono overflow-hidden">
      {/* Terminal Content */}
      <div className="p-2">
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
                className={`mr-4 px-3 py-1 rounded-t-md ${activeTab === 'contact' ? 'bg-gray-700 text-purple-400' : 'text-[#6366f1] hover:text-gray-200'}`}
                onClick={() => setActiveTab('contact')}
              >
                contact.sh
              </button>
              <button
                className={`mr-4 px-3 py-1 rounded-t-md ${activeTab === 'links' ? 'bg-gray-700 text-purple-400' : 'text-indigo-400 hover:text-gray-200'}`}
                onClick={() => setActiveTab('links')}
              >
                links.sh
              </button>
            </div>

            {activeTab === 'contact' && (
              <div className="animate-in fade-in duration-200">
                <div className="flex items-center mb-3">
                  <span className="text-cyan-400 mr-2">$</span>
                  <span className="text-yellow-400">echo</span>
                  <span className="text-white mx-2">"Let's Connect"</span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 pl-6 text-sm border-l-2 border-gray-700">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these channels or send a direct message below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-900/50 rounded-md border border-gray-700 p-4">
                    <div className="flex items-center mb-3">
                      <span className="text-cyan-400 mr-2">$</span>
                      <span className="text-yellow-400">cat</span>
                      <span className="text-white mx-2">contact_methods.json</span>
                    </div>

                    <div className="pl-4 space-y-3 border-l border-gray-700">
                      <div className="bg-gray-800/70 p-3 rounded-md border border-gray-700">
                        <div className="text-blue-400 font-bold text-sm">Email</div>
                        <a href="mailto:mdatikmouhtasim@gmail.com" className="text-gray-300 text-sm hover:text-green-400 transition-colors flex items-center gap-1">
                          <Mail size={14} />
                          mdatikmouhtasim@gmail.com
                        </a>
                      </div>

                      <div className="bg-gray-800/70 p-3 rounded-md border border-gray-700">
                        <div className="text-blue-400 font-bold text-sm">WhatsApp</div>
                        <a href="https://wa.me/8801719345888" className="text-gray-300 text-sm hover:text-green-400 transition-colors flex items-center gap-1">
                          <MessageCircle size={14} />
                          +880 1719-345888
                        </a>
                      </div>

                      <div className="bg-gray-800/70 p-3 rounded-md border border-gray-700">
                        <div className="text-blue-400 font-bold text-sm">GitHub</div>
                        <a href="https://github.com/helix-77" className="text-gray-300 text-sm hover:text-green-400 transition-colors flex items-center gap-1">
                          <Github size={14} />
                          helix-77
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 rounded-md border border-gray-700 p-4">
                    <div className="flex items-center mb-3">
                      <span className="text-cyan-400 mr-2">$</span>
                      <span className="text-yellow-400">nano</span>
                      <span className="text-white mx-2">quick_message.txt</span>
                    </div>

                    <form className="pl-4 space-y-3 border-l border-gray-700">
                      <div>
                        <label htmlFor="name" className="block mb-1 text-xs text-gray-400">NAME:</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-3 py-2 bg-gray-800/30 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 text-white text-sm"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block mb-1 text-xs text-gray-400">EMAIL:</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 py-2 bg-gray-800/30 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 text-white text-sm"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block mb-1 text-xs text-gray-400">MESSAGE:</label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-3 py-2 bg-gray-800/30 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 text-white text-sm resize-none"
                          placeholder="Your message here..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="px-4 py-2 bg-gray-800 border border-cyan-600 text-cyan-400 rounded-md hover:bg-cyan-900/30 transition-all flex items-center gap-2 text-sm"
                      >
                        <Send size={14} />
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'links' && (
              <div className="animate-in fade-in duration-200">
                <div className="flex items-center mb-3">
                  <span className="text-cyan-400 mr-2">$</span>
                  <span className="text-yellow-400">find</span>
                  <span className="text-white mx-2">~/links</span>
                  <span className="text-yellow-400">-type</span>
                  <span className="text-white mx-2">f</span>
                  <span className="text-yellow-400">-name</span>
                  <span className="text-white mx-2">"*.url"</span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4 pl-6 text-sm border-l-2 border-gray-700">
                  Found <span className="text-green-400">{links.length}</span> link files. Displaying all available connection methods:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {links.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-md border ${link.color} p-3 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,238,255,0.2)] bg-gray-900/50`}
                    >
                      <div className="flex items-start">
                        <div className="mr-3 bg-black/30 p-2 rounded-md">
                          {link.icon}
                        </div>
                        <div>
                          <h4 className="font-bold flex items-center text-cyan-400">
                            {link.title} <ExternalLink size={12} className="ml-1 opacity-70" />
                          </h4>
                          <p className="text-xs text-gray-400">{link.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

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