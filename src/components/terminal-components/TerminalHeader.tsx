import React from 'react';

interface TerminalHeaderProps {
  title: string;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#1E1E2E] border-b border-gray-700">
      <div className="flex items-center space-x-2">
        <div className="text-[#CCCCCC] text-sm">{title}</div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57] cursor-pointer hover:opacity-80 transition-opacity"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] cursor-pointer hover:opacity-80 transition-opacity"></div>
        <div className="w-3 h-3 rounded-full bg-[#28C840] cursor-pointer hover:opacity-80 transition-opacity"></div>
      </div>
    </div>
  );
};

export default TerminalHeader;