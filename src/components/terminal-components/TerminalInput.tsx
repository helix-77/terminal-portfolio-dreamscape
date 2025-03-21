import React, { forwardRef } from 'react';

interface TerminalInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  prompt: string;
  placeholder?: string;
}

const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  ({ value, onChange, onKeyDown, prompt, placeholder }, ref) => {
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
        </div>
      </div>
    );
  }
);

TerminalInput.displayName = 'TerminalInput';

export default TerminalInput;