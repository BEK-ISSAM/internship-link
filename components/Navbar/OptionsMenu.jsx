import React from "react";
import { useState } from "react";
import "./OptionsMenu.css"

const OptionsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="options-menu">
      <button className="menu-button" onClick={toggleMenu}>
        Options
      </button>

      {isOpen && (
        <ul className="menu-list">
          <li className="menu-item">Option 1</li>
          <li className="menu-item">Option 2</li>
          <li className="menu-item">Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default OptionsMenu;
