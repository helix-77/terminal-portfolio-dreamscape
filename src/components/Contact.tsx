
import React from 'react';
import { Mail, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-4">
        <Mail className="text-neon-blue" size={24} />
        <h3 className="text-xl font-semibold">Contact Me</h3>
      </div>

      <p className="text-lg leading-relaxed">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following channels:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="glass-panel p-5 rounded-xl">
          <h4 className="text-lg font-semibold mb-4 text-neon-purple">Get In Touch</h4>
          
          <div className="space-y-4">
            <a 
              href="mailto:hello@example.com" 
              className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue transition-colors group"
            >
              <Mail size={18} className="group-hover:text-neon-blue" />
              <span>hello@example.com</span>
            </a>
            
            <a 
              href="#" 
              className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} className="group-hover:text-neon-blue" />
              <span>linkedin.com/in/username</span>
            </a>
            
            <a 
              href="#" 
              className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} className="group-hover:text-neon-blue" />
              <span>github.com/username</span>
            </a>
            
            <a 
              href="#" 
              className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={18} className="group-hover:text-neon-blue" />
              <span>twitter.com/username</span>
            </a>
          </div>
        </div>
        
        <div className="glass-panel p-5 rounded-xl">
          <h4 className="text-lg font-semibold mb-4 text-neon-green">Quick Message</h4>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 bg-secondary/30 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-blue text-white"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1 text-sm">Your Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-secondary/30 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-blue text-white"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1 text-sm">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 bg-secondary/30 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-blue text-white resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-md hover:shadow-[0_0_15px_rgba(0,238,255,0.5)] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="glass-panel p-5 rounded-xl mt-6">
        <h4 className="text-lg font-semibold mb-4 text-neon-pink">Other Ways To Connect</h4>
        
        <div className="space-y-3">
          <a 
            href="#" 
            className="flex items-center space-x-3 text-gray-300 hover:text-neon-pink transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} />
            <span>Book a 15-minute chat</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center space-x-3 text-gray-300 hover:text-neon-pink transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} />
            <span>Subscribe to my newsletter</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
