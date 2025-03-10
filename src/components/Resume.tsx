
import React from 'react';
import { FileText, Download, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-4">
        <FileText className="text-neon-blue" size={24} />
        <h3 className="text-xl font-semibold">Resume</h3>
      </div>

      <div className="flex justify-end mb-6">
        <Button className="bg-neon-purple hover:bg-purple-600 text-white" asChild>
          <a href="/resume.pdf" download className="flex items-center">
            <Download size={16} className="mr-2" /> Download PDF
          </a>
        </Button>
      </div>

      <div className="glass-panel p-6 rounded-lg">
        <section className="mb-8">
          <h4 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4 text-neon-blue flex items-center">
            <Briefcase size={18} className="mr-2" /> Professional Experience
          </h4>
          
          <div className="mb-6">
            <div className="flex justify-between items-start">
              <h5 className="font-semibold">Senior Frontend Developer</h5>
              <span className="text-sm text-terminal-comment">2022 - Present</span>
            </div>
            <p className="text-neon-purple mb-1">Tech Innovations Inc.</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Led the development of the company's flagship React application</li>
              <li>Implemented CI/CD pipelines that reduced deployment time by 40%</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start">
              <h5 className="font-semibold">Frontend Developer</h5>
              <span className="text-sm text-terminal-comment">2020 - 2022</span>
            </div>
            <p className="text-neon-purple mb-1">Web Solutions Ltd</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Developed responsive web applications using React and TypeScript</li>
              <li>Collaborated with designers to implement UI/UX improvements</li>
              <li>Reduced application bundle size by 30% through code optimization</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h4 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4 text-neon-blue flex items-center">
            <GraduationCap size={18} className="mr-2" /> Education
          </h4>
          
          <div>
            <div className="flex justify-between items-start">
              <h5 className="font-semibold">B.S. Computer Science</h5>
              <span className="text-sm text-terminal-comment">2016 - 2020</span>
            </div>
            <p className="text-neon-purple">University of Technology</p>
          </div>
        </section>
        
        <section>
          <h4 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4 text-neon-blue flex items-center">
            <Code size={18} className="mr-2" /> Technical Skills
          </h4>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <h5 className="font-semibold mb-1">Frontend</h5>
              <p className="text-sm">React, TypeScript, Next.js, Tailwind CSS</p>
            </div>
            <div>
              <h5 className="font-semibold mb-1">Backend</h5>
              <p className="text-sm">Node.js, Express, Firebase, Supabase</p>
            </div>
            <div>
              <h5 className="font-semibold mb-1">Tools</h5>
              <p className="text-sm">Git, GitHub, VS Code, Docker</p>
            </div>
            <div>
              <h5 className="font-semibold mb-1">Other</h5>
              <p className="text-sm">Agile methodologies, CI/CD, Unit Testing</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
