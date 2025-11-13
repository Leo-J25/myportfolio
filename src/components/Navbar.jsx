import React, { useState } from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="devLogo">
        <img
          src="/Assets/devLogo.png"
        />
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#intro">Intro</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "bar1" : ""}`}></span>
        <span className={`bar ${isOpen ? "bar2" : ""}`}></span>
        <span className={`bar ${isOpen ? "bar3" : ""}`}></span>
      </div>
    </div>
  );
};

export default Navbar;
