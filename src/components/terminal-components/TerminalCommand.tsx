import React, { useState, useEffect, useRef } from 'react';

interface TerminalCommandProps {
  prompt?: string;
  command: string;
  isTyping?: boolean;
  typingSpeed?: number;
  onComplete?: () => void;
  isActive?: boolean;
  result?: string;
  isError?: boolean;
}

const TerminalCommand: React.FC<TerminalCommandProps> = ({
  prompt = 'helix@portfolio:~$',
  command,
  isTyping = false,
  typingSpeed = 50,
  onComplete,
  isActive = false,
  result,
  isError = false,
}) => {
  const [displayedCommand, setDisplayedCommand] = useState(
    isTyping ? '' : command
  );
  const [cursorVisible, setCursorVisible] = useState(isActive);
  const [isCompleted, setIsCompleted] = useState(!isTyping);
  const commandRef = useRef<HTMLSpanElement>(null);

  // Typing effect
  useEffect(() => {
    if (!isTyping || isCompleted) return;

    let currentCharIndex = 0;
    const interval = setInterval(() => {
      if (currentCharIndex <= command.length) {
        setDisplayedCommand(command.substring(0, currentCharIndex));
        currentCharIndex++;
      } else {
        clearInterval(interval);
        setIsCompleted(true);
        onComplete?.();
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [command, isTyping, typingSpeed, onComplete, isCompleted]);

  // Cursor blinking effect
  useEffect(() => {
    if (!isActive) {
      setCursorVisible(false);
      return;
    }

    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, [isActive]);

  // Scroll into view when result appears
  useEffect(() => {
    if (commandRef.current && isCompleted && result) {
      commandRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isCompleted, result]);

  return (
    <div className="my-2 w-full max-w-full ">
      <div className="flex flex-wrap  whitespace-pre-wrap break-words overflow-x-auto">
        <span className="text-[#BD93F9] mr-2">{prompt}</span>
        <span className="text-[#F8F8F2]" ref={commandRef}>
          {displayedCommand}
          {isActive && cursorVisible && (
            <span className="animate-blink">|</span>
          )}
        </span>
      </div>

      {isCompleted && result && (
        <div
          className={`
            mt-1 m-6
            whitespace-pre-wrap
            break-words

            ${isError ? 'text-[#FF5555]' : 'text-[#F8F8F2]'}
          `}
        >
          {result}
        </div>
      )}
    </div>
  );
};

export default TerminalCommand;