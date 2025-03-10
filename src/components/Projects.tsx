
import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "UniCompanion App",
      description: "A cross-platform app to streamline academic management. It centralizes attendance tracking, class management, and assessments, reducing reliance on tools like Google Classroom and messaging apps.",
      technologies: ["React Native", "Expo", "Supabase", "NativeWind", "RNR"],
      githubUrl: "https://github.com/helix-77/UniCompanion-readme",
      liveUrl: "/upcoming",
    },
    {
      title: "Portfolio Terminal",
      description: "A sleek, interactive terminal-style website built with React and TypeScript, designed to showcases personal details, skills, and tools through an elegant, modern UI with a focus on usability and aesthetics.",
      technologies: ["Vue.js", "Python", "OpenAI API", "Firebase"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Health & Fitness Tracker",
      description: "Mobile-first application to track workouts, nutrition, and health metrics with visualization.",
      technologies: ["React Native", "GraphQL", "TypeScript", "D3.js"],
      githubUrl: "#",
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Platform for teams to collaborate on documents and projects in real-time with chat functionality.",
      technologies: ["Angular", "Socket.io", "Express", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-4">
        <Folder className="text-neon-blue" size={24} />
        <h3 className="text-xl font-semibold">Projects</h3>
      </div>

      <p className="text-lg leading-relaxed mb-6">
        Here's a selection of projects I've worked on. Each one represents different challenges and learning opportunities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-panel rounded-xl p-5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,238,255,0.3)] group"
          >
            <h4 className="text-xl font-semibold mb-2 group-hover:text-neon-blue transition-colors">
              {project.title}
            </h4>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-terminal-text"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-end space-x-3 mt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github size={18} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
