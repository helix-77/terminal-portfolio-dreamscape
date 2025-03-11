import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface Link {
    id: number;
    title: string;
    url: string;
    icon: JSX.Element;
    color: string;
    description: string;
}

interface LinkTabProps {
    links: Link[];
}

const LinkTab: React.FC<LinkTabProps> = ({ links }) => {
    return (
        <div className="animate-in fade-in duration-200">
            <div className="flex items-center mb-3">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-yellow-400">find</span>
                <span className="text-white mx-2">~/links</span>
                {/* <span className="text-yellow-400">-type</span>
                <span className="text-white mx-2">f</span>
                <span className="text-yellow-400">-name</span>
                <span className="text-white mx-2">"*.url"</span> */}
            </div>

            <p className="text-gray-400 leading-relaxed mb-4 pl-4 text-xs border-l-2 border-gray-700">
                Found <span className="text-green-400">{links.length}</span> link files. Displaying all available connection methods:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {links.map(link => (
                    <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`rounded-md border ${link.color} p-3 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,238,255,0.2)] bg-gray-900/50`}
                    >
                        <div className="flex items-start">
                            <div className="mr-3 bg-black/30 p-2 rounded-md">{link.icon}</div>
                            <div>
                                <h4 className="font-mono flex items-center text-cyan-400">
                                    {link.title}
                                    <ExternalLink size={12} className="ml-1 opacity-70" />
                                </h4>
                                <p className="text-xs text-gray-400">{link.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default LinkTab;
