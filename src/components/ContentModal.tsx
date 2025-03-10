
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ContentModal: React.FC<ContentModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    // Lock scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-bg animate-in fade-in duration-200">
      <div
        ref={modalRef}
        className="content-section w-[90vw] md:w-[80vw] max-h-[80vh] overflow-y-auto animate-modal-appear"
      >
        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
          <h2 className="text-xl md:text-2xl font-bold text-gradient">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ContentModal;
