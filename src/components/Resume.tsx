import React, { useState, useEffect } from "react";
import { FileText, Download, } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypingEffectGui from "./TypingEffectGui";
import WorkExperience from "./resume-sections/WorkExperience";
import Education from "./resume-sections/Education";
import ResumeSkills from "./resume-sections/ResumeSkills";

const Resume = () => {

  const fullCommand = "resume --gui";

  return (

    <TypingEffectGui command={fullCommand}>
      <div className="mt-4 bg-gray-800/50 rounded-md border border-gray-700 p-4 animate-in fade-in duration-300 select-text">
        {/* Top resume download section */}
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
        <WorkExperience />

        {/* Education */}
        <Education />

        {/* Technical Skills */}
        <ResumeSkills />

        {/* Terminal Footer */}
        <div className="mt-6 border-t border-gray-700 pt-2 flex items-center justify-between text-xs text-gray-500">
          <div>PID: 2003119</div>
          <div>SHELL: helix_77</div>
          <div className="text-green-400">Exit Code: 0</div>
        </div>
      </div>
    </TypingEffectGui>

  );
};

export default Resume;