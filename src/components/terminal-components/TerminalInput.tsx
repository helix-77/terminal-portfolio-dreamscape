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
      <div className="flex items-center">
        <span className="text-[#BD93F9] mr-2">{prompt}</span>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent text-[#F8F8F2] outline-none font-mono"
          autoFocus
          placeholder={placeholder}
        />
      </div>
    );
  }
);

TerminalInput.displayName = 'TerminalInput';

export default TerminalInput;