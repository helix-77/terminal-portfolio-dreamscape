import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: [
        "C++",
        "React Native",
        "React, Next.js",
        "TypeScript",
        "HTML/CSS",
        "Python",
        "PHP",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Supabase",
        "Express",
        "Python",
        "GraphQL",
        "RESTful APIs",
      ],
    },
    {
      category: "Databases",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "Redis",
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        "Git/GitHub",
        "Docker",
        "CI/CD",
        "AWS",
        "Testing",
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-200 p-4 font-mono rounded-md border border-gray-700 max-h-96 overflow-y-auto">
      <div className="mb-4 border-b border-gray-700 pb-2">
        <span className="text-purple-400">helix@portfolio:~$ </span>
        <span className="text-green-400">skills --list</span>
      </div>

      {skillCategories.map((category, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">$ </span>
            <span className="text-purple-400 ml-2">{category.category}</span>
          </div>

          <div className="pl-6 grid grid-cols-1 md:grid-cols-2 gap-1">
            {category.skills.map((skill, i) => (
              <div key={i} className="flex items-center">
                <span className="text-cyan-400 mr-2">→</span>
                <span className="text-green-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-4 border-t border-gray-700 pt-2">
        <span className="text-purple-400">helix@portfolio:~$ </span>
        <span className="text-green-400 animate-pulse">_</span>
      </div>
    </div>
  );
};

export default Skills;