import React, { useState, useEffect } from "react";

const Projects = () => {
    const [showInterface, setShowInterface] = useState(false);
    const [typedCommand, setTypedCommand] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    const fullCommand = "projects --list --gui";

    // Typing effect for command
    useEffect(() => {
        if (typedCommand.length < fullCommand.length) {
            const timeout = setTimeout(() => {
                setTypedCommand(fullCommand.substring(0, typedCommand.length + 1));
            }, 90);
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
            setCursorVisible((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    // Sample projects data
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "Personal portfolio website built with Next.js and Tailwind CSS",
            tech: ["React", "Next.js", "Tailwind CSS"],
            image: "/images/portfolio.jpg",
            github: "https://github.com/username/portfolio",
            live: "https://portfolio.dev",
            featured: true,
        },
        {
            id: 2,
            title: "Task Manager App",
            description: "A mobile task management application with real-time updates",
            tech: ["React Native", "Expo", "Supabase"],
            image: "/images/taskapp.jpg",
            github: "https://github.com/username/taskapp",
            featured: true,
        },
        {
            id: 3,
            title: "E-commerce Dashboard",
            description: "Admin dashboard for managing products, orders, and customers",
            tech: ["React", "Laravel", "Tailwind CSS"],
            image: "/images/dashboard.jpg",
            github: "https://github.com/username/dashboard",
            live: "https://dashboard-demo.dev",
            featured: true,
        },
        {
            id: 4,
            title: "Weather Application",
            description: "Weather forecast app with location detection",
            tech: ["React", "OpenWeather API"],
            image: "/images/weather.jpg",
            github: "https://github.com/username/weather",
            featured: false,
        },
    ];

    return (
        <div className="bg-gray-900 text-gray-200 rounded-md font-mono overflow-hidden">
            {/* Terminal Content */}
            <div className="p-2">
                <div className="mb-2">
                    <span className="text-purple-400">helix@portfolio:~$ </span>
                    <span className="text-green-400">{typedCommand}</span>
                    {!showInterface && cursorVisible && (
                        <span className="text-white">▋</span>
                    )}
                </div>

                {showInterface && (
                    <div className="mt-4 bg-gray-800/50 rounded-md border border-gray-700 p-4 animate-in fade-in duration-300 select-text">
                        {/* Projects Header */}
                        <div className="mb-4 bg-gray-900/50 p-4 rounded-md border border-gray-700">
                            <div className="flex items-center mb-2">
                                <span className="text-cyan-400 mr-2">$</span>
                                <span className="text-purple-400 mx-2">cat</span>
                                <span className="text-yellow-400">projects/README.md</span>
                            </div>
                            <div className="pl-4 text-gray-300 space-y-2 text-sm">
                                <p>
                                    Welcome to my projects showcase. Below you'll find a selection of my
                                    work, ranging from web applications to mobile apps. Each project includes
                                    details about the technologies used and links to repositories.
                                </p>
                            </div>
                        </div>

                        {/* Featured Projects */}
                        <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700 mb-4">
                            <div className="flex items-center mb-3">
                                <span className="text-cyan-400 mr-2">$</span>
                                <span className="text-purple-400">find</span>
                                <span className="text-yellow-400 mx-2">~/projects</span>
                                <span className="text-white mx-1">-name</span>
                                <span className="text-green-400">"*featured*"</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {projects
                                    .filter((project) => project.featured)
                                    .map((project) => (
                                        <div
                                            key={project.id}
                                            className="bg-gray-800/50 rounded-md border border-gray-700 overflow-hidden hover:border-purple-500/30 transition-colors"
                                        >
                                            <div className="border-b border-gray-700 p-1">
                                                <p className="text-xs text-gray-400 text-center">
                                                    ~/projects/{project.id}.jpg
                                                </p>
                                            </div>
                                            <div className="h-40 bg-gray-900/50 flex items-center justify-center">
                                                <div className="text-gray-500 text-sm">
                                                    [Project Image: {project.title}]
                                                </div>
                                            </div>
                                            <div className="p-3">
                                                <h3 className="text-purple-400 font-bold mb-1">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-300 text-xs mb-2">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-1 mb-3">
                                                    {project.tech.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="bg-gray-900 text-blue-400 px-2 py-0.5 text-xs rounded-md border border-gray-700"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex justify-between text-xs">
                                                    <a
                                                        href={project.github}
                                                        className="text-green-400 hover:underline"
                                                    >
                                                        $ git clone
                                                    </a>
                                                    {project.live && (
                                                        <a
                                                            href={project.live}
                                                            className="text-yellow-400 hover:underline"
                                                        >
                                                            $ view --live
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* All Projects */}
                        <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700">
                            <div className="flex items-center mb-3">
                                <span className="text-cyan-400 mr-2">$</span>
                                <span className="text-purple-400">ls</span>
                                <span className="text-yellow-400 mx-2">-la</span>
                                <span className="text-white">~/projects/all</span>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-xs">
                                    <thead className="text-gray-400 border-b border-gray-700">
                                        <tr>
                                            <th className="pb-2 text-left">Name</th>
                                            <th className="pb-2 text-left">Description</th>
                                            <th className="pb-2 text-left">Technologies</th>
                                            <th className="pb-2 text-left">Links</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.map((project) => (
                                            <tr key={project.id} className="border-b border-gray-800/30 hover:bg-gray-800/20">
                                                <td className="py-2 pr-4 text-purple-400 whitespace-nowrap">
                                                    {project.title}
                                                </td>
                                                <td className="py-2 pr-4 text-gray-300 max-w-xs">
                                                    {project.description}
                                                </td>
                                                <td className="py-2 pr-4">
                                                    <div className="flex flex-wrap gap-1">
                                                        {project.tech.map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="bg-gray-900 text-blue-400 px-1 py-0.5 text-xs rounded-sm"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="py-2 whitespace-nowrap">
                                                    <div className="flex gap-2">
                                                        <a
                                                            href={project.github}
                                                            className="text-green-400 hover:underline"
                                                        >
                                                            GitHub
                                                        </a>
                                                        {project.live && (
                                                            <a
                                                                href={project.live}
                                                                className="text-yellow-400 hover:underline"
                                                            >
                                                                Live
                                                            </a>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Terminal Footer */}
                        <div className="mt-6 border-t border-gray-700 pt-2 flex items-center justify-between text-xs text-gray-500">
                            <div>PID: 2003119</div>
                            <div>SHELL: helix_77</div>
                            <div className="text-green-400">Found: {projects.length} projects</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;