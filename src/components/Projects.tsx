import React, { useState, useEffect } from 'react';
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
  const [showInterface, setShowInterface] = useState(false);
  const [typedCommand, setTypedCommand] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  const fullCommand = 'projects --view all';

  const projects: Project[] = [
    {
      title: "UniCompanion App",
      description: "A cross-platform app to streamline academic management. It centralizes attendance tracking, class management, and assessments, reducing reliance on tools like Google Classroom and messaging apps (wip)",
      technologies: ["React Native", "Expo", "Supabase", "NativeWind", "PostgreSQL", "Yarn"],
      githubUrl: "https://github.com/helix-77/UniCompanion-readme",
      liveUrl: "/upcoming",
    },
    {
      title: "Portfolio Web-Terminal",
      description: "A sleek, interactive terminal-style website built to showcase my personal details, skills, and tools through an unique & elegant UI (wip)",
      technologies: ["React", "Typescript", "Tailwind CSS", "Framer Motion", "Github Pages"],
      githubUrl: "https://github.com/helix-77/terminal-portfolio-dreamscape",
      liveUrl: "/upcoming",
    },
    {
      title: "Population Prediction Model",
      description: "Predict city population growth using historical data from a CSV with Year and Population columns. Develop an integrated model combining Newton's Interpolation, Newton's Raphson Method, and curve fitting to analyze and forecast trends.",
      technologies: ["C++", "CSV"],
      githubUrl: "https://github.com/helix-77/Projects/tree/main/Numerical%20Integrated%20Population%20Prediction",
    },
    {
      title: "ForgeCV",
      description: "ForgeCV is a versatile platform that helps you create professional resumes and CVs with ease. Currently in development phase (wip)",
      technologies: ["Next.js", "Typescript", "Tailwind CSS", "PNPM"],
      githubUrl: "https://github.com/helix-77/ForgeCV",
      liveUrl: "/upcoming",
    },
    {
      title: "Voting App",
      description: "This project was built with RN, Expo, Supabase, and NativeWind, enabling real-time poll creation and participation. It features seamless backend integration, user authentication, and a responsive UI. Designed to explore and experiment with modern mobile development technologies.",
      technologies: ["React Native", "Expo", "Supabase", "PostgreSQL", "NativeWind", "NPM"],
      githubUrl: "https://github.com/helix-77/Voting-app/tree/main",
    },
  ];

  // Typing effect for command
  useEffect(() => {
    if (typedCommand.length < fullCommand.length) {
      const timeout = setTimeout(() => {
        setTypedCommand(fullCommand.substring(0, typedCommand.length + 1));
      }, 70);
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
            <div className="flex items-center space-x-3">
              <div className="text-cyan-400 mr-2">$</div>
              <Folder className="text-yellow-400" size={20} />
              <h3 className="text-sm font-mono text-purple-400">ls -la projects/</h3>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-md border border-gray-700 p-4 transition-all duration-300 hover:border-cyan-500/50 group"
                >
                  {/* <div className="flex items-center mb-2 text-sm ">
                    <span className="text-cyan-400 mr-2">$</span>
                    <span className="text-yellow-400">cat</span>
                    <span className="text-white mx-2">project_{index + 1}.json</span>
                  </div> */}

                  <div className="pl-4 border-l border-gray-700">
                    <h4 className="text-blue-400 text-lg font-mono font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                    <div className="mb-3">
                      <div className="text-gray-500 text-xs mb-1">tech-stack.list</div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-md bg-gray-800 text-pink-400 border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 mt-4 border-t border-gray-700 pt-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <Github size={16} />
                          <span className="text-xs">repo</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink size={16} />
                          <span className="text-xs">demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Footer */}
            <div className="mt-6 border-t border-gray-700 pt-2 flex items-center justify-between text-xs text-gray-500">
              <div>Found: {projects.length} projects</div>
              <div>MODE: display</div>
              <div className="text-green-400">Exit Code: 77</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
