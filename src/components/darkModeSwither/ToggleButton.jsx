/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import moon from "../../assets/images/pngwing.com (1).png";
import sun from "../../assets/images/sun.png";
const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="toggle"
        style={{ display: "none" }}
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label className="toggle" htmlFor="toggle">
        {isDarkMode ? (
          <img src={moon} alt="Sun" style={{ width: "24px", height: "24px" }} />
        ) : (
          <img src={sun} alt="Moon" style={{ width: "24px", height: "24px" }} />
        )}
      </label>
      <div
        className="background"
        style={isDarkMode ? { background: "white" } : {}}
      ></div>
    </div>
  );
};

export default ToggleButton;
