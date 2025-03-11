import React from "react";
import { Mail, Github, MessageCircle, Send } from "lucide-react";

const ContactTab: React.FC = () => {
    return (
        <div className="animate-in fade-in duration-200">
            <div className="flex items-center mb-3">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-yellow-400">echo</span>
                <span className="text-white mx-2">"Let's Connect"</span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 pl-6 text-sm border-l-2 border-gray-700">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out through
                any of these channels or send a direct message below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Contact Methods */}
                <div className="bg-gray-900/50 rounded-md border border-gray-700 p-4">
                    <div className="flex items-center mb-3">
                        <span className="text-cyan-400 mr-2">$</span>
                        <span className="text-yellow-400">cat</span>
                        <span className="text-white mx-2">contact_methods.json</span>
                    </div>
                    <div className="pl-4 space-y-3 border-l border-gray-700">
                        <div className="bg-gray-800/70 p-3 rounded-md border border-gray-700">
                            <div className="text-blue-400 font-bold text-sm mb-1">Email</div>
                            <a
                                href="mailto:mdatikmouhtasim@gmail.com"
                                className="text-gray-300 text-sm hover:text-green-400 transition-colors flex items-center gap-1"
                            >
                                <Mail size={14} />
                                mdatikmouhtasim@gmail.com
                            </a>
                        </div>

                        <div className="bg-gray-800/70 p-3 rounded-md border border-gray-700">
                            <div className="text-blue-400 font-bold text-sm mb-1">
                                WhatsApp
                            </div>
                            <a
                                href="https://wa.me/8801719345888"
                                className="text-gray-300 text-sm hover:text-green-400 transition-colors flex items-center gap-1"
                            >
                                <MessageCircle size={14} />
                                +880 1719-345888
                            </a>
                        </div>

                        <div className="bg-gray-800/70 p-3 rounded-md border border-gray-700">
                            <div className="text-blue-400 font-bold text-sm mb-1">GitHub</div>
                            <a
                                href="https://github.com/helix-77"
                                className="text-gray-300 text-sm hover:text-green-400 transition-colors flex items-center gap-1"
                            >
                                <Github size={14} />
                                helix-77
                            </a>
                        </div>
                    </div>
                </div>

                {/* Quick Message Form */}
                <div className="bg-gray-900/50 rounded-md border border-gray-700 p-4">
                    <div className="flex items-center mb-3">
                        <span className="text-cyan-400 mr-2">$</span>
                        <span className="text-yellow-400">nano</span>
                        <span className="text-white mx-2">quick_message.txt</span>
                    </div>

                    <form className="pl-4 space-y-3 border-l border-gray-700">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-1 text-xs text-gray-400"
                            >
                                NAME:
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-3 py-2 bg-gray-800/30 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 text-white text-sm"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-1 text-xs text-gray-400"
                            >
                                EMAIL:
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 bg-gray-800/30 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 text-white text-sm"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block mb-1 text-xs text-gray-400"
                            >
                                MESSAGE:
                            </label>
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
    );
};

export default ContactTab;
