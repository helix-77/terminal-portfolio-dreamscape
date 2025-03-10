import React from 'react';

interface TerminalSuggestionsProps {
  suggestions: string[];
  selectedIndex: number;
  onSuggestionClick: (suggestion: string) => void;
}

const TerminalSuggestions: React.FC<TerminalSuggestionsProps> = ({
  suggestions,
  selectedIndex,
  onSuggestionClick
}) => {
  return (
    <div className="absolute bottom-full left-0 w-full bg-[#1E1E2E] border border-gray-700 rounded-md shadow-xl mb-1 max-h-36 overflow-y-auto z-20">
      {suggestions.map((suggestion, index) => (
        <div
          key={suggestion}
          className={`px-3 py-1 cursor-pointer hover:bg-[#2A2A3C] text-[#F8F8F2] ${index === selectedIndex ? 'bg-[#2A2A3C]' : ''}`}
          onClick={() => onSuggestionClick(suggestion)}
        >
          {suggestion}
        </div>
      ))}
    </div>
  );
};

export default TerminalSuggestions;