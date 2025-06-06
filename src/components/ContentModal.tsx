import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

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
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
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

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        ref={modalRef}
        className={`glass-panel bg-gray-900 border border-gray-700 rounded-md shadow-xl
          ${isMobile ? 'w-[95vw] h-[92vh]' : 'w-[85vw] md:w-[85vw] max-h-[90vh]'}
          overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 scale-100`}
        style={{
          transform: "translate(-50%, -50%)",
          position: "fixed",
          top: "50%",
          left: "50%",
          maxWidth: isMobile ? '100%' : '1200px'
        }}
      >
        <div
          ref={headerRef}
          className="flex items-center justify-between p-3 border-b border-gray-700 bg-gray-800 sticky top-0 z-10"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        <div className="overflow-y-auto p-2 md:p-4 flex-grow scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">{children}</div>
      </div>
    </div>
  );
};

export default ContentModal;