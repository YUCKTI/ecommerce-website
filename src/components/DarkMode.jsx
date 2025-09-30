import React, { useEffect, useState } from 'react';
import LightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/Dark-mode-button.png";

const DarkMode = () => {
  // Initial theme based on localStorage or system preference
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || 
           (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative flex gap-2 justify-end pr-4">
      {/* Show this when in dark mode (click to enable light) */}
      <img
        src={DarkButton}
        alt="Dark mode active"
        onClick={() => setTheme("light")}
        className={`w-12 cursor-pointer drop-shadow-md transition duration-300 ${
          theme === "dark" ? "block" : "hidden"
        }`}
      />

      {/* Show this when in light mode (click to enable dark) */}
      <img
        src={LightButton}
        alt="Light mode active"
        onClick={() => setTheme("dark")}
        className={`w-12 cursor-pointer drop-shadow-md transition duration-300 ${
          theme === "light" ? "block" : "hidden"
        }`}
      />
    </div>
  );
};

export default DarkMode;
