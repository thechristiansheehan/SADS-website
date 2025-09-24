import './navbar.css';
import logo from '../assets/images/sads_logo.png';

const Navbar = ({ className = "" }) => {
  return (
    <nav className={`navbar ${className}`}>
      <a title="Home" href="/" className="nav-link home-link">
        <img width="80px" src={logo} alt="SADS Logo" />
      </a>
      <div className="nav-links">
        <a href="/#about">About</a>
        <a href="calendar">Calendar</a>
        <a href="resources">Resources</a>
      </div>
    </nav>
  );
};

export default Navbar;