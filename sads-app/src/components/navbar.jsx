import './navbar.css';
import logo from '../assets/images/sads_logo.png';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a title="Home" href="/" className="nav-link home-link">
        <img width="80px" src={logo} alt="SADS Logo" />
      </a>
      <div className="nav-links">
        <a href="#temp">About</a>
        <a href="calendar">Calendar</a>
        <a href="resources">Resources</a>
      </div>
    </nav>
  );
};

export default Navbar;
