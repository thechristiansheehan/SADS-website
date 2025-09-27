import { useState } from "react";
import "./navbar.css";
import logo from "../assets/images/sads_logo.png";

const Navbar = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar ${className}`}>
      {/* Logo */}
      <a title="Home" href="/" className="nav-link home-link">
        <img width="80px" src={logo} alt="SADS Logo" />
      </a>

      {/* Hamburger (shows on mobile) */}
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >☰
        <span />
        <span />
        <span />
      </button>

      {/* Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="calendar" onClick={() => setIsOpen(false)}>Calendar</a>
        <a href="resources" onClick={() => setIsOpen(false)}>Resources</a>
      </div>
    </nav>
  );
};

export default Navbar;
