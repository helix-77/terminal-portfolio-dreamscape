import React, { useState, useEffect } from "react";

const TypingEffectGui = ({
    command,
    typingSpeed = 70,
    delayBeforeShow = 300,
    children
}) => {
    const [typedCommand, setTypedCommand] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const [showContent, setShowContent] = useState(false);

    // Typing effect for command
    useEffect(() => {
        if (typedCommand.length < command.length) {
            const timeout = setTimeout(() => {
                setTypedCommand(command.substring(0, typedCommand.length + 1));
            }, typingSpeed);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setShowContent(true);
            }, delayBeforeShow);
            return () => clearTimeout(timeout);
        }
    }, [typedCommand, command, typingSpeed, delayBeforeShow]);

    // Blinking cursor effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-900 text-gray-200 rounded-md font-mono overflow-hidden">
            <div className="p-2">
                <div>
                    <span className="text-purple-400">helix@portfolio:~$ </span>
                    <span className="text-green-400">{typedCommand}</span>
                    {!showContent && cursorVisible && (
                        <span className="text-white">▋</span>
                    )}
                </div>

                {showContent && (
                    <div>
                        {children}
                    </div>
                    // <div className="mt-4 bg-gray-800/50 rounded-md border border-gray-700 p-4 animate-in fade-in duration-300 select-text">
                    // </div>
                )}
            </div>
        </div>
    );
};

export default TypingEffectGui;