
import React from 'react';

const Header = () => {
  return (
    <div className="glass-panel p-4 md:p-6 rounded-xl backdrop-blur-xl bg-background/60 shadow-lg w-full max-w-7xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        <span className="text-gradient">Portfolio Terminal</span>
      </h1>
      <p className="text-md md:text-lg opacity-80">
        Explore my work through this interactive Kali-inspired terminal
      </p>
    </div>
  );
};

export default Header;
