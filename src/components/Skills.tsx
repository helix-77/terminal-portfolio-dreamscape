import React, { useState, useEffect } from "react";

const Skills = () => {
  const [showInterface, setShowInterface] = useState(false);
  const [typedCommand, setTypedCommand] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const fullCommand = "skills";

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
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Skills from the image
  const technicalSkills = {
    SE: ["Cpp", "Python", "Tkinter", "Numpy", "Matplotlib"],
    Frontend: ["React Native", "React", "TypeScript", "Next.js", "Tailwind CSS"],
    Backend: ["Supabase", "MySQL", "PHP", "Laravel", "Firebase", "Node.js",],
    Tools: ["Linux", "Git", "Latex", "GitHub", "MS Office", "GPTs", "Canva", "Notion"],
  };

  // Personal interests/skills
  const personalInterests = [
    "Driving", "Photography", "Cooking", "Gaming",
    "Hiking", "Music", "Cycling"
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
            {/* Tech Skills Grid */}
            <div className="mb-6">
              <div className="flex items-center mb-3 text-sm">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-yellow-400 mx-2">~/tech-skills/</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category} className="bg-gray-900/50 p-4 rounded-md border border-gray-700">
                    <h3 className="text-blue-500 mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-800 text-pink-400 px-3 py-1 text-xs rounded-md  hover:border-purple-500/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Interests */}
            <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700">
              <div className="flex items-center mb-3 text-sm">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-yellow-400">../personal-interests.skills</span>
              </div>

              <div className="pl-4">
                <div className="flex flex-wrap gap-2">
                  {personalInterests.map((interest) => (
                    <span
                      key={interest}
                      className="bg-gray-800 text-blue-400 px-3 py-1 text-xs rounded-md  hover:border-blue-500/50 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Skill Visualization */}
            <div className="mt-6 bg-gray-900/50 p-4 rounded-md border border-gray-700">
              <div className="flex items-center mb-3 text-sm">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-purple-400">cat</span>
                <span className="text-yellow-400 mx-2">~/proficiency.log</span>
              </div>

              <div className="space-y-3 pl-4">
                {[
                  { skill: "Front-end Development", level: 75 },
                  { skill: "App Development", level: 85 },
                  { skill: "Back-end Development", level: 70 },
                  { skill: "UI/UX Design", level: 75 },
                  { skill: "Software Engineering", level: 70 },
                ].map((item) => (
                  <div key={item.skill} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{item.skill}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="mt-6 border-t border-gray-700 pt-2 flex items-center justify-between text-xs text-gray-500">
              <div>PID: 2003120</div>
              <div>SHELL: helix_77</div>
              <div className="text-green-400">Exit Code: 0</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;