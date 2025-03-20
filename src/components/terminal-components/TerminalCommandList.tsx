import React from 'react';

interface TerminalCommandListProps {
  suggestions: string[];
  selectedCommandIndex: number;
  onCommandClick: (command: string, index: number) => void;
}

const TerminalCommandList: React.FC<TerminalCommandListProps> = ({
  suggestions,
  selectedCommandIndex,
  onCommandClick
}) => {
  return (
    <div className="w-56 border-r border-gray-700 py-2 overflow-y-auto bg-[#1E1E2E]/70 backdrop-blur-xl">
      <div className="px-3 py-2 text-[#CCCCCC] text-sm border-b border-gray-700 mb-2 flex items-center">
        <span className="text-[#FF79C6] mr-2">❯</span>
        <span>Available Commands</span>
      </div>

      <div className="flex flex-col text-sm">
        {suggestions.map((cmd, index) => (
          <button
            key={cmd}
            onClick={() => onCommandClick(cmd, index)}
            className={`group text-left px-3 py-2 transition-all duration-200 ease-in-out flex items-center border-l-2 ${index === selectedCommandIndex
              ? 'bg-[#FEF7CD]/20 text-[#F97316] border-[#F97316]'
              : 'text-[#CCCCCC] border-transparent hover:bg-[#2A2A3C] hover:text-white hover:border-[#BD93F9]'
              }`}
          >
            <span
              className={`mr-2 ${index === selectedCommandIndex
                ? 'text-[#F97316]'
                : 'text-[#BD93F9] group-hover:text-white'
                }`}
            >
              $
            </span>
            <span>{cmd}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TerminalCommandList;