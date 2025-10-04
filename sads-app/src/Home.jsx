import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import ducks6 from "./assets/images/ducks6.png";
import logo from "./assets/images/sads_logo2.png";
import banner from "./assets/images/sadsbanner.mp4";
import Navbar from "./components/navbar.jsx";
import { HashLink } from 'react-router-hash-link';

import "./Home.css";
import Upcoming from "./UpcomingEvents.jsx"

const Home = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 345) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div className="banner-container">
        <video
          src={banner}
          autoPlay
          loop
          muted
          playsInline
          className="banner-video"
        />

        {/* Overlay Content */}
        <div className="banner-overlay">
          <img src={logo} alt="header logo" className="banner-logo" />

          <div className="banner-links">
            <HashLink smooth to="/#about">
    About
  </HashLink>
            <a href="#/calendar" className="header-link">
              Calendar
            </a>
            <a href="#/resources" className="header-link">
              Resources
            </a>
          </div>
        </div>
      </div>

<Navbar 
  showNav={showNav} 
  className={showNav ? "navbar-visible" : "navbar-hidden"} 
/>


      <Banner />
      <br />
      <Upcoming />
      <br />
      <div id="about" className="aboutsection">
  <div className="aboutcontent">
  <div className="abouttext">SADS is a club at SMU. SADS is a club at SMU. SADS is a club at SMU. SADS is a club at SMU. quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack
    <br/><br/><a href="#/meettheteam">Meet the team →</a>
  </div>
  <div className="aboutimage">
  <img src={ducks6}></img>
  </div>
  </div>
</div>

    </div>
  );
};

export default Home;