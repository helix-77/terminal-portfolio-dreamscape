
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Advanced React Development',
      issuer: 'Frontend Masters',
      date: 'April 2023',
      link: 'https://example.com/cert1',
    },
    {
      id: 2,
      title: 'TypeScript Professional',
      issuer: 'TypeScript Academy',
      date: 'January 2023',
      link: 'https://example.com/cert2',
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      issuer: 'Design School Online',
      date: 'October 2022',
      link: 'https://example.com/cert3',
    },
    {
      id: 4,
      title: 'Responsive Web Development',
      issuer: 'Web Dev Institute',
      date: 'July 2022',
      link: 'https://example.com/cert4',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-4">
        <Award className="text-neon-blue" size={24} />
        <h3 className="text-xl font-semibold">Certificates & Achievements</h3>
      </div>

      <p className="text-lg leading-relaxed mb-6">
        Professional certifications and achievements that showcase my ongoing commitment to learning and skill development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className="glass-panel p-4 rounded-lg border border-gray-700 hover:border-neon-blue transition-colors"
          >
            <h4 className="font-semibold text-neon-purple mb-1">{cert.title}</h4>
            <p className="text-sm mb-1">Issued by {cert.issuer}</p>
            <p className="text-xs text-terminal-comment mb-3">{cert.date}</p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                View Certificate <ExternalLink size={14} className="ml-2" />
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
