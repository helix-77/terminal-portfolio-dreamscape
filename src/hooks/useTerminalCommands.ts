import { useState, useEffect } from "react";
import { Command } from "../components/Terminal";

export const useTerminalCommands = (commandList: string[]) => {
  const [initialCommands, setInitialCommands] = useState<Command[]>([]);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(true);

  useEffect(() => {
    if (activeModal) {
      setKeyboardVisible(false);
    } else {
      setKeyboardVisible(true);
    }
  }, [activeModal]);

  const handleCommandExecution = (command: string) => {
    let result: string | undefined;
    const isError = false;

    const trimmedCmd = command.trim().toLowerCase();

    const newCommand: Command = {
      id: Date.now().toString(),
      command: trimmedCmd,
      isError: false,
    };

    if (commandList.includes(trimmedCmd)) {
      switch (trimmedCmd) {
        case "help":
          newCommand.result = `Use ↑ ↓ to select and hit Ctrl+Enter. Or manually type the command and hit Enter.
Available commands:
• help
• about
• projects
• skills
• contact
• certificates
• resume
• photos
• clear`;
          break;

        case "about":
          setActiveModal("about");
          setModalTitle("About Me");
          newCommand.result = "Opening about section...";
          break;

        case "projects":
          setActiveModal("projects");
          setModalTitle("Projects & Work");
          newCommand.result = "Loading project portfolio...";
          break;

        case "skills":
          setActiveModal("skills");
          setModalTitle("Skills & Expertise");
          newCommand.result = "Loading skills overview...";
          break;

        case "contact":
          setActiveModal("contact");
          setModalTitle("Contact Me");
          newCommand.result = "Opening contact information...";
          break;

        case "certificates":
          setActiveModal("certificates");
          setModalTitle("Certificates & Achievements");
          newCommand.result = "Loading certificates...";
          break;

        case "resume":
          setActiveModal("resume");
          setModalTitle("Resume");
          newCommand.result = "Opening resume...";
          break;

        case "photos":
          setActiveModal("photos");
          setModalTitle("Photo Gallery");
          newCommand.result = "Loading photo gallery...";
          break;

        case "clear":
          setInitialCommands([]);
          return; // No need to add command to history

        default:
          break;
      }
    } else {
      // Fix 3: Show available commands on error
      newCommand.result = `Command not recognized: $${command}\n\nAvailable commands:
• help
• about
• projects
• skills
• contact
• certificates
• resume
• photos
• clear`;
      newCommand.isError = true;
    }

    // Add the new command to history
    setInitialCommands((prev) => [...prev, newCommand]);
  };

  return {
    initialCommands,
    setInitialCommands,
    activeModal,
    setActiveModal,
    modalTitle,
    handleCommandExecution,
    keyboardVisible,
    setKeyboardVisible,
  };
};
