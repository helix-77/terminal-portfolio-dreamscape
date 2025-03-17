import { ExternalLink } from "lucide-react";
import React, { useState, useEffect } from "react";
import ProfileSection from "./about-sections/LeftContent";
import RightContent from "./about-sections/RightContent";
import TechStack from "./about-sections/TechStack";
import TypingEffectGui from "./TypingEffectGui";

const About = () => {
  // const [showInterface, setShowInterface] = useState(false);
  // const [typedCommand, setTypedCommand] = useState("");
  // const [cursorVisible, setCursorVisible] = useState(true);

  // const fullCommand = "about --gui";

  // // Typing effect for command
  // useEffect(() => {
  //   if (typedCommand.length < fullCommand.length) {
  //     const timeout = setTimeout(() => {
  //       setTypedCommand(fullCommand.substring(0, typedCommand.length + 1));
  //     }, 90);
  //     return () => clearTimeout(timeout);
  //   } else {
  //     const timeout = setTimeout(() => {
  //       setShowInterface(true);
  //     }, 300);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [typedCommand]);

  // // Blinking cursor effect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCursorVisible((prev) => !prev);
  //   }, 500);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <TypingEffectGui command="about --gui">
      <div className="bg-gray-900 text-gray-200 rounded-md font-mono overflow-hidden">
        {/* Terminal Content */}
        <div className="p-2">
          <div className="mt-4 bg-gray-800/50 rounded-md border border-gray-700 p-4 animate-in fade-in duration-300 select-text">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Profile Section */}
              <ProfileSection />

              {/* About Content */}
              <RightContent />
            </div>

            {/* Tech Stack */}
            <TechStack />


            {/* Terminal Footer */}
            <div className="mt-6 border-t border-gray-700 pt-2 flex items-center justify-between text-xs text-gray-500">
              <div>PID: 2003118</div>
              <div>SHELL: helix_77</div>
              <div className="text-green-400">Exit Code: 77</div>
            </div>
          </div>
        </div>
      </div>
    </TypingEffectGui>
  );
};

export default About;
