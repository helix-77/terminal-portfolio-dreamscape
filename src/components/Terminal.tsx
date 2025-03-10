import React, { useState, useEffect, useRef } from 'react';
import TerminalCommand from './terminal-components/TerminalCommand';
import TerminalHeader from './terminal-components/TerminalHeader';
import TerminalCommandList from './terminal-components/TerminalCommandList';
import NeofetchDisplay from './terminal-components/NeofetchDisplay';
import TerminalInput from './terminal-components/TerminalInput';
import TerminalSuggestions from './terminal-components/TerminalSuggestions';

export interface Command {
  id: string;
  command: string;
  result?: string;
  isError?: boolean;
  isActive?: boolean;
}

interface TerminalProps {
  initialCommands?: Command[];
  onExecuteCommand: (command: string) => void;
  suggestions?: string[];
  showCommandList?: boolean;
}

const Terminal: React.FC<TerminalProps> = ({
  initialCommands = [],
  onExecuteCommand,
  suggestions = ['help', 'about', 'projects', 'skills', 'contact', 'clear'],
  showCommandList = true,
}) => {
  const [history, setHistory] = useState<Command[]>(initialCommands);
  const [currentInput, setCurrentInput] = useState('');
  const [suggestionsVisible, setSuggestionsVisible] = useState(true);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(suggestions);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [selectedCommandIndex, setSelectedCommandIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Update history when initialCommands change
  useEffect(() => {
    setHistory(initialCommands);
  }, [initialCommands]);

  // Filter suggestions based on current input
  useEffect(() => {
    if (currentInput.trim() !== '') {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(currentInput.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setSuggestionsVisible(true);
    } else {
      setFilteredSuggestions(suggestions);
      setSuggestionsVisible(false);
    }
  }, [currentInput, suggestions]);

  // Keyboard shortcut for command list
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && e.ctrlKey && showCommandList) {
        executeCommand(suggestions[selectedCommandIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showCommandList, selectedCommandIndex, suggestions]);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Handle clicks outside suggestion area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsVisible &&
        terminalRef.current &&
        !terminalRef.current.contains(event.target as Node)
      ) {
        setSuggestionsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [suggestionsVisible]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    // Only add to history if not empty
    if (trimmedCmd) {
      onExecuteCommand(trimmedCmd);
    }
    setCurrentInput('');
    setSuggestionsVisible(false);
    if (inputRef.current) inputRef.current.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
    // Only show suggestions if we have input text
    setSuggestionsVisible(e.target.value.trim() !== '');
    setSelectedSuggestionIndex(-1);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentInput.trim() !== '') {
      executeCommand(currentInput);
      setSuggestionsVisible(false);
    } else if (e.key === 'Tab' && suggestionsVisible && filteredSuggestions.length > 0) {
      e.preventDefault();
      if (selectedSuggestionIndex === -1 || selectedSuggestionIndex >= filteredSuggestions.length) {
        setCurrentInput(filteredSuggestions[0]);
        setSelectedSuggestionIndex(0);
      } else {
        const nextIndex = (selectedSuggestionIndex + 1) % filteredSuggestions.length;
        setCurrentInput(filteredSuggestions[nextIndex]);
        setSelectedSuggestionIndex(nextIndex);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (showCommandList) {
        setSelectedCommandIndex(prev =>
          prev === 0 ? suggestions.length - 1 : prev - 1
        );
      } else {
        const lastCommand = [...history].reverse().find(cmd => cmd.command !== '');
        if (lastCommand) {
          setCurrentInput(lastCommand.command);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (showCommandList) {
        setSelectedCommandIndex(prev =>
          prev === suggestions.length - 1 ? 0 : prev + 1
        );
      } else if (suggestionsVisible && filteredSuggestions.length > 0) {
        const nextIndex = selectedSuggestionIndex === -1
          ? 0
          : (selectedSuggestionIndex + 1) % filteredSuggestions.length;
        setSelectedSuggestionIndex(nextIndex);
        setCurrentInput(filteredSuggestions[nextIndex]);
      } else {
        setCurrentInput('');
      }
    } else if (e.key === 'Escape') {
      setSuggestionsVisible(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    executeCommand(suggestion);
    setSuggestionsVisible(false);
  };

  const handleCommandClick = (command: string, index: number) => {
    setSelectedCommandIndex(index);
    executeCommand(command);
  };

  return (
    <div className="kali-terminal w-full h-full overflow-hidden flex flex-col rounded-lg bg-[#1E1E2E]/90 backdrop-blur-xl shadow-2xl border border-gray-700">
      <TerminalHeader title="helix@portfolio:~" />

      <div className="flex flex-1 min-h-0">
        {showCommandList && (
          <TerminalCommandList
            suggestions={suggestions}
            selectedCommandIndex={selectedCommandIndex}
            onCommandClick={handleCommandClick}
          />
        )}

        <div className="flex-1 flex flex-col min-h-0">
          <div
            ref={terminalRef}
            className="flex-1 overflow-y-auto text-sm p-3 bg-[#1E1E2E]/70 backdrop-blur-xl font-mono"
          >
            <NeofetchDisplay />

            <div className="border-t border-gray-700 pt-3 mt-3"></div>

            {history.map((cmd) => (
              <TerminalCommand
                key={cmd.id}
                command={cmd.command}
                result={cmd.result}
                isError={cmd.isError}
                prompt="helix@portfolio:~$"
              />
            ))}
          </div>

          <div className="px-3 py-2 bg-[#1E1E2E] border-t border-gray-700 relative">
            <TerminalInput
              ref={inputRef}
              value={currentInput}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              prompt="helix@portfolio:~$"
              placeholder="Type a command..."
            />

            {suggestionsVisible && filteredSuggestions.length > 0 && (
              <TerminalSuggestions
                suggestions={filteredSuggestions}
                selectedIndex={selectedSuggestionIndex}
                onSuggestionClick={handleSuggestionClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
