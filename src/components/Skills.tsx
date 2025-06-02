import React, { useState, useEffect } from "react";
import TypingEffectGui from "./TypingEffectGui";

const Skills = () => {

  const fullCommand = "skills";


  // Skills from the image
  const technicalSkills = {
    SE: ["Cpp", "Python", "Tkinter", "Numpy", "Matplotlib"],
    Frontend: ["React Native", "React", "TypeScript", "Next.js", "Tailwind CSS"],
    Backend: ["Supabase", "MySQL", "PHP", "Laravel", "Firebase", "Node.js", "Strapi CMS"],
    Tools: ["Linux", "Git", "Latex", "MS Office", "GPTs", "Canva", "Notion"],
  };

  // Personal interests/skills
  const personalInterests = [
    "Driving", "Photography", "Cooking", "Gaming",
    "Hiking", "Music", "Cycling"
  ];

  return (
    <TypingEffectGui command={fullCommand}>
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
              { skill: "Front-end Development", level: 90 },
              { skill: "App Development", level: 93 },
              { skill: "Back-end Development", level: 85 },
              { skill: "UI/UX Design", level: 85 },
              { skill: "Software Engineering", level: 80 },
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
    </TypingEffectGui>
  );
};

export default Skills;