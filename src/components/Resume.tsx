import React, { useState, useEffect } from "react";
import { FileText, Download, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const [showInterface, setShowInterface] = useState(false);
  const [typedCommand, setTypedCommand] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const fullCommand = "resume";

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
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="text-cyan-400" size={22} />
              <h3 className="text-purple-400 text-lg font-mono font-bold">Resume</h3>
            </div>

            <div className="flex justify-end mb-6">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white" asChild>
                <a href="/resume.pdf" download className="flex items-center">
                  <Download size={16} className="mr-2" /> Download PDF
                </a>
              </Button>
            </div>

            {/* Professional Experience */}
            <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700 mb-4">
              <div className="flex items-center mb-3">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-yellow-400">work & experiences.txt</span>
              </div>

              <div className="pl-4 space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <h5 className="font-semibold text-green-400">Industrial Trainee</h5>
                    <span className="text-sm text-gray-400">March, 2025</span>
                  </div>
                  <p className="text-purple-400 mb-1 text-sm">TEXLAB IT</p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Learned industry best practices, team collaboration, and agile workflows. </li>
                    <li>• Gained hands-on experience in a professional software development environment</li>
                    <li>• Developed a strong foundation in professionalism and workplace ethics before graduation.</li>
                    <li>• Learned collaboration, issue tracking, and async communication using GitHub, Slack, etc.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <h5 className="font-semibold text-green-400">Cross-Platform App Developer</h5>
                    <span className="text-sm text-gray-400">2024 - Present</span>
                  </div>
                  <p className="text-gray-400 mb-1 text-sm">Independent</p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Developing a React Native mobile app to streamline academic processes for students and teachers.</li>
                    <li>• Integrated Supabase for authentication, real-time database, and cloud storage.</li>
                    <li>• Built class management, attendance tracking, and messaging features.</li>
                    <li>• Future enhancements include Google Classroom integration and gamification.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-gray-400">Other miscelonus works </span>
                    <span className="text-sm text-gray-400">2023 - Present</span>
                  </div>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Built a Population Prediction Model using Newton’s Interpolation and curve fitting on historical data.</li>
                    <li>• Created a Utility Software using Python & Tkinter with multiple productivity tools.</li>
                    <li>• Built class management, attendance tracking, and messaging features.</li>
                    <li>• Developed various web apps, including a food delivery website and a portfolio site.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700 mb-4">
              <div className="flex items-center mb-3">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-yellow-400">education.txt</span>
              </div>

              <div className="pl-4">
                <div className="flex justify-between items-start">
                  <h5 className="font-semibold text-blue-400">B.Sc. Computer Science & Engineering (CSE)</h5>
                  <span className="text-sm text-gray-400">Dec, 2021 - present</span>
                </div>
                <p className="text-gray-400 text-sm">Rajshahi University of Engineering & Technology</p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700">
              <div className="flex items-center mb-3">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-yellow-400 mx-2">~/technical-skills</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                <div className="bg-gray-800/60 p-3 rounded-md border border-gray-700">
                  <h5 className="font-semibold mb-2 text-green-400">Frontend</h5>
                  <div className="flex flex-wrap gap-2">
                    {["React Native", "React", "TypeScript", "Next.js", "Tailwind CSS"].map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-900 text-pink-400 px-2 py-1 text-xs rounded-md border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/60 p-3 rounded-md border border-gray-700">
                  <h5 className="font-semibold mb-2 text-green-400">Backend</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Supabase", "Laravel", "Firebase", "Node.js"].map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-900 text-pink-400 px-2 py-1 text-xs rounded-md border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/60 p-3 rounded-md border border-gray-700">
                  <h5 className="font-semibold mb-2 text-green-400">Tools</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "VS Code", "Cursor", "GPTs"].map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-900 text-pink-400 px-2 py-1 text-xs rounded-md border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/60 p-3 rounded-md border border-gray-700">
                  <h5 className="font-semibold mb-2 text-green-400">Other</h5>
                  <div className="flex flex-wrap gap-2">
                    {["MS office", "Linux", "Canva", "Notion"].map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-900 text-pink-400 px-2 py-1 text-xs rounded-md border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="mt-6 border-t border-gray-700 pt-2 flex items-center justify-between text-xs text-gray-500">
              <div>PID: 2003119</div>
              <div>SHELL: helix_77</div>
              <div className="text-green-400">Exit Code: 0</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;