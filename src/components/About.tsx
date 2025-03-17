import { ExternalLink } from "lucide-react";
import React, { useState, useEffect } from "react";

const About = () => {
  const [showInterface, setShowInterface] = useState(false);
  const [typedCommand, setTypedCommand] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const fullCommand = "about --gui";

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Profile Section */}
              <div className="md:col-span-1 flex flex-col items-center space-y-3 bg-gray-900/50 p-4 rounded-md border border-gray-700">
                <div className="text-center mb-2">
                  <p className="text-xs text-gray-400">~/profile.jpg</p>
                </div>
                <div className="border-2 border-purple-500/30 rounded-md p-1 w-48 h-48">
                  <div className=" rounded-md flex items-center justify-center text-gray-500">
                    <img
                      src="/images/profile.jpg"
                      alt="Profile Picture"
                      className="rounded-md"
                    />
                  </div>
                </div>

                <div className="text-center space-y-1 w-full">
                  <h3 className="text-purple-400 text-lg font-bold">
                    Atik Mouhtasim Rahi
                  </h3>
                  <p className="text-green-400 text-sm">
                    CS Student & Developer
                  </p>
                  <div className="border-t border-gray-700 my-2"></div>
                  <div className="text-gray-400 text-xs">
                    Status: <span className="text-green-400">Online</span>
                  </div>
                  <div className="text-gray-400 text-xs">
                    Location:{" "}
                    <span className="text-yellow-400">Bangladesh</span>
                  </div>
                  <div className="text-gray-400 text-xs">
                    CV:{" "}
                    <a
                      href="https://flowcv.com/resume/ske29udov5vv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:underline inline-flex items-center"
                    >
                      FlowCV
                      <ExternalLink size={9} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* About Content */}
              <div className="md:col-span-2 space-y-4">
                <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700">
                  <div className="flex items-center mb-2">
                    <span className="text-cyan-400 mr-2">$</span>
                    <span className="text-purple-400 mx-2">cat</span>
                    <span className="text-yellow-400">about.txt</span>
                  </div>
                  <div className="pl-4 text-gray-300 space-y-2 text-sm">
                    <p>
                      I've been fascinated by and using computers for as long as
                      I can remember, which naturally led me to pursue Computer
                      Science at RUET. I love building apps and sites, diving
                      into new technologies, and exploring the depths of AI.
                    </p>
                    <p>
                      As I have a bit more than a year left to graduate, I'm
                      looking for various opportunities where I can put my
                      skills to real use while continuing to learn from
                      experienced professionals.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Education */}
                  <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700">
                    <div className="flex items-center mb-2">
                      <span className="text-cyan-400 mr-2">$</span>
                      <span className="text-purple-400 mx-2">cat</span>
                      <span className="text-yellow-400">education</span>
                    </div>
                    <div className="pl-4">
                      <div className="text-blue-400 text-sm font-bold">
                        (B.Sc.) Computer Science & Engineering
                      </div>
                      <div className="text-gray-400 text-xs mt-1">
                        RUET, Bangladesh
                      </div>
                      <div className="text-gray-500 text-xs">
                        Expected graduation: 2026
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700">
                    <div className="flex items-center mb-2">
                      <span className="text-cyan-400 mr-2">$</span>
                      <span className="text-purple-400 mx-2">cat</span>
                      <span className="text-yellow-400">experience</span>
                    </div>
                    <div className="pl-4">
                      <div className="text-green-500 font-bold text-sm">
                        App & Web Development
                      </div>
                      <div className="text-gray-400 text-xs mt-1">
                        1+ years experience
                      </div>
                      <div className="text-gray-500 text-xs">
                        Various projects & freelance work
                      </div>
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700 md:col-span-2">
                    <div className="flex items-center mb-2">
                      <span className="text-cyan-400 mr-2">$</span>
                      <span className="text-purple-400 mr-2">grep</span>
                      <span className="text-yellow-400">"interests"</span>
                    </div>
                    <div className="pl-4 flex flex-wrap gap-2">
                      {[
                        "AI",
                        "Web Development",
                        "App Development",
                        "Gaming",
                        "Computers",
                      ].map((interest) => (
                        <span
                          key={interest}
                          className="bg-gray-800 text-pink-400 px-2 py-1 text-xs rounded-md border border-gray-700"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-6 bg-gray-900/50 p-4 rounded-md border border-gray-700">
              <div className="flex items-center mb-3">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-purple-400">find</span>
                <span className="text-yellow-400 mx-2">~/comfortable-with</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {[
                  "React Native",
                  "Expo",
                  "React",
                  "Next.js",
                  "Supabase",
                  "Tailwind CSS",
                  "C++",
                  "Latex",
                  "Laravel",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="bg-gray-800 p-2 text-center text-xs rounded-md border border-gray-700 hover:border-blue-500/50 transition-colors"
                  >
                    <span className="text-blue-400">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="mt-6 border-t border-gray-700 pt-2 flex items-center justify-between text-xs text-gray-500">
              <div>PID: 2003118</div>
              <div>SHELL: helix_77</div>
              <div className="text-green-400">Exit Code: 77</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
