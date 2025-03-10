
import React from 'react';
import ContentModal from './ContentModal';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Certificates from './Certificates';
import Resume from './Resume';
import Links from './Links';
import Photos from './Photos';

interface TerminalModalsProps {
  activeModal: string | null;
  modalTitle: string;
  onClose: () => void;
}

const TerminalModals: React.FC<TerminalModalsProps> = ({
  activeModal,
  modalTitle,
  onClose,
}) => {
  return (
    <>
      <ContentModal 
        isOpen={activeModal === 'about'} 
        onClose={onClose}
        title={modalTitle}
      >
        <About />
      </ContentModal>
      
      <ContentModal 
        isOpen={activeModal === 'projects'} 
        onClose={onClose}
        title={modalTitle}
      >
        <Projects />
      </ContentModal>
      
      <ContentModal 
        isOpen={activeModal === 'skills'} 
        onClose={onClose}
        title={modalTitle}
      >
        <Skills />
      </ContentModal>
      
      <ContentModal 
        isOpen={activeModal === 'contact'} 
        onClose={onClose}
        title={modalTitle}
      >
        <Contact />
      </ContentModal>
      
      <ContentModal 
        isOpen={activeModal === 'certificates'} 
        onClose={onClose}
        title={modalTitle}
      >
        <Certificates />
      </ContentModal>
      
      <ContentModal 
        isOpen={activeModal === 'resume'} 
        onClose={onClose}
        title={modalTitle}
      >
        <Resume />
      </ContentModal>
      
      <ContentModal 
        isOpen={activeModal === 'links'} 
        onClose={onClose}
        title={modalTitle}
      >
        <Links />
      </ContentModal>
      
      <ContentModal 
        isOpen={activeModal === 'photos'} 
        onClose={onClose}
        title={modalTitle}
      >
        <Photos />
      </ContentModal>
    </>
  );
};

export default TerminalModals;
