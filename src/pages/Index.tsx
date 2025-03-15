
import React, { useEffect } from 'react';
import Terminal from '../components/Terminal';
import SocialLinks from '../components/SocialLinks';
import TerminalModals from '../components/TerminalModals';
import { useTerminalCommands } from '../hooks/useTerminalCommands';

const Index = () => {
  const availableCommands = [
    'help',
    'about',
    'projects',
    'skills',
    'contact',
    'certificates',
    'resume',
    'photos',
    'clear',
  ];

  const {
    initialCommands,
    setInitialCommands,
    activeModal,
    setActiveModal,
    modalTitle,
    handleCommandExecution
  } = useTerminalCommands(availableCommands);

  useEffect(() => {
    // Welcome message sequence
    const welcomeSequence = async () => {
      const commands = [
        {
          id: '1',
          command: '',
          result: "Welcome to my interactive portfolio terminal!  Type help to get started.",
          isActive: false,
        },
      ];

      setInitialCommands(commands);
    };

    welcomeSequence();
  }, [setInitialCommands]);

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen grid-bg pt-4 pb-8 px-4 md:px-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl">
        <Terminal
          initialCommands={initialCommands}
          onExecuteCommand={handleCommandExecution}
          suggestions={availableCommands}
          showCommandList={true}
        />
      </div>

      <SocialLinks />

      {/* Content Modals */}
      <TerminalModals
        activeModal={activeModal}
        modalTitle={modalTitle}
        onClose={closeModal}
      />
    </div>
  );
};

export default Index;