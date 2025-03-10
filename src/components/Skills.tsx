
import React from 'react';
import { Code, Server, Layout, Database, Smartphone, Settings } from 'lucide-react';

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Languages & Frameworks",
      icon: <Layout className="text-neon-blue" />,
      skills: [
        { name: "C++", level: 75 },
        { name: "React Native", level: 85 },
        { name: "React, Next.js", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "HTML/CSS", level: 85 },
        { name: "Python", level: 65 },
        { name: "PHP", level: 60 },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="text-neon-purple" />,
      skills: [
        { name: "Supabase", level: 80 },
        { name: "Express", level: 75 },
        { name: "Python", level: 70 },
        { name: "GraphQL", level: 65 },
        { name: "RESTful APIs", level: 85 },
      ],
    },
    {
      category: "Databases",
      icon: <Database className="text-neon-green" />,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "Firebase", level: 80 },
        { name: "Redis", level: 60 },
      ],
    },
    {
      category: "Tools & Others",
      icon: <Settings className="text-neon-pink" />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 65 },
        { name: "CI/CD", level: 75 },
        { name: "AWS", level: 60 },
        { name: "Testing", level: 70 },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-4">
        <Code className="text-neon-blue" size={24} />
        <h3 className="text-xl font-semibold">Skills & Expertise</h3>
      </div>

      <p className="text-lg leading-relaxed mb-6">
        I've developed a diverse set of skills throughout my career. Here's an overview of my technical expertise:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-panel rounded-xl p-5">
            <div className="flex items-center space-x-3 mb-4">
              {category.icon}
              <h4 className="text-lg font-semibold">{category.category}</h4>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span className="text-terminal-comment text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
