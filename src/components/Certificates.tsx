import React, { useState, useEffect } from "react";
import { Award, ExternalLink, X } from "lucide-react";

const Certificates = () => {
  const [showInterface, setShowInterface] = useState(false);
  const [typedCommand, setTypedCommand] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const fullCommand = "certificates --view all";

  const certificates = [
    {
      id: 1,
      title: "Supervised ML: Regression and Classification",
      issuer: "Coursera",
      date: "April 2023",
      link: "https://www.coursera.org/account/accomplishments/verify/UKGEVW72STB3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      image: "/public/certificates/certificate_ml1.png",
    },
    {
      id: 2,
      title: "EDGE Course on PHP & Laravel",
      issuer: "Bangladesh Computer Council and RUET",
      date: "January 2023",
      link: "https://edge.gov.bd/",
      image: "/public/certificates/certificate_edge.png",
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      issuer: "Programming Hero",
      date: "October 2022",
      link: "https://www.programming-hero.com/",
      image: "/public/certificates/certificate_ph.png", // Path to certificate image in your repo
    },

  ];

  // Typing effect for command
  useEffect(() => {
    if (typedCommand.length < fullCommand.length) {
      const timeout = setTimeout(() => {
        setTypedCommand(fullCommand.substring(0, typedCommand.length + 1));
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setShowInterface(true);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [typedCommand]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Handle modal open
  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
    // Prevent scrolling while modal is open
    document.body.style.overflow = "hidden";
  };

  // Handle modal close
  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertificate(null);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  // Close modal when clicking outside or pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (modalOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [modalOpen]);

  return (
    <div className="bg-gray-900 text-gray-200 rounded-md font-mono overflow-hidden">
      {/* Terminal Content */}
      <div className="px-4 py-1">
        <div className="mb-2">
          <span className="text-purple-400">helix@portfolio:~$ </span>
          <span className="text-green-400">{typedCommand}</span>
          {!showInterface && cursorVisible && (
            <span className="text-white">▋</span>
          )}
        </div>

        {showInterface && (
          <div className="mt-4 bg-gray-800/50 rounded-md border border-gray-700 p-4 animate-in fade-in duration-300 select-text">
            <p className="text-gray-400 leading-relaxed mb-6 pl-6 text-xs border-l-2 border-gray-700">
              Most of my learning comes from hands-on practice and  <span className="text-green-400">Youtube</span> tutorials,
              so I've got only few certificates which are here only to validate my learning ability.

            </p>


            <div className="mt-6 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-gray-900/50 p-3 rounded-md border border-gray-700 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex items-center mb-2">
                      <Award size={16} className="text-yellow-400 mr-2" />
                      <span className="text-cyan-400 font-semibold text-sm">
                        {cert.title}
                      </span>
                    </div>
                    <div className="pl-6 border-l border-gray-700 space-y-1">
                      <p className="text-xs text-gray-300">
                        Issued by:{" "}
                        <span className="text-gray-400">{cert.issuer}</span>
                      </p>
                      <p className="text-xs text-gray-300">
                        Date: <span className="text-gray-400">{cert.date}</span>
                      </p>
                      <div className="pt-1 flex items-center justify-between">
                        <div
                          className="text-xs text-blue-400 hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
                          onClick={() => openModal(cert)}
                        >
                          <ExternalLink size={10} />
                          <code>preview</code>{" "}
                        </div>
                        {cert.link && (
                          <a
                            href={cert.link}
                            rel="noreferrer"
                            target="_blank"
                            className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                          >
                            View Site
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {modalOpen && selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background overlay with blur */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal content */}
          <div className="relative bg-black-500/70 backdrop-blur-sm rounded-lg shadow-xl max-w-4xl z-10 overflow-hidden">
            <div className="relative flex items-center justify-center rounded-md">
              <button
                onClick={closeModal}
                className="absolute top-8 right-4 text-gray-200 hover:text-white transition-colors bg-gray-800/50 backdrop-blur-sm rounded-full p-1"
              >
                <X size={23} />
              </button>

              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} Certificate`}
                className="max-w-full h-auto max-h-[70vh] object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
