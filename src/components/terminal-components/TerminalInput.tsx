import React, { forwardRef } from 'react';

interface TerminalInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  prompt: string;
  placeholder?: string;
  onSendClick?: () => void;
  isMobile?: boolean;
}

const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  ({ value, onChange, onKeyDown, prompt, placeholder, onSendClick, isMobile }, ref) => {
    return (
      <div className="flex items-center w-full ">
        <span className="text-[#BD93F9] mr-2 whitespace-nowrap flex-shrink-0 ">{prompt}</span>
        <div className="flex items-center w-full min-w-0 flex-grow overflow-hidden relative">
          <input
            ref={ref}
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className="bg-transparent text-[#F8F8F2] outline-none font-mono"
            autoFocus
            placeholder={placeholder}
          />

          {isMobile && (
            <button
              onClick={onSendClick}
              className="absolute right-0 mr-4 p-1 bg-[#2D2D3D] text-[#F8F8F2] rounded-md border border-gray-700 hover:bg-[#3D3D4D] transition-colors flex-shrink-0"
              aria-label="Execute command"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }
);

TerminalInput.displayName = 'TerminalInput';

export default TerminalInput;