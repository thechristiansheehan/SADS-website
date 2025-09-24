import React, { useState, useEffect } from "react";
import Modal from "./components/modal.jsx";
import Banner from "./components/Banner";
import ducks1 from "./assets/images/ducks.jpg";
import ducks2 from "./assets/images/ducks2.jpg";
import ducks3 from "./assets/images/ducks3.jpg";
import ducks4 from "./assets/images/ducks4.jpg";
import ducks6 from "./assets/images/ducks6.png";
import logo from "./assets/images/sads_logo2.png";
import banner from "./assets/images/sadsbanner.mp4";
import NavBar from "./components/navbar.jsx";
import "./Home.css";

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
            <a href="#about" className="header-link">
              About
            </a>
            <a href="calendar" className="header-link">
              Calendar
            </a>
            <a href="resources" className="header-link">
              Resources
            </a>
          </div>
        </div>
      </div>

{/* NavBar always exists, className changes based on scroll */}
<NavBar className={showNav ? "navbar-visible" : "navbar-hidden"} />

      <br />
      <Banner />
      <br />
      <br />

      {/* Cards Section */}
      <div className="cards-container">
        <Modal
          trigger={
            <div className="card">
              <img src={ducks1} alt="duck card" />
              <div className="card-content">
                <h4>Duck</h4>
                <p>quack</p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>This is a modal.</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Go SADS! but stay there...
          </p>
          <img src={ducks1} style={{ width: "300px" }} alt="inside modal" />
        </Modal>

        <Modal
          trigger={
            <div className="card">
              <img src={ducks2} alt="duck card" />
              <div className="card-content">
                <h4>Duck 2</h4>
                <p>quack quack</p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>This is a modal.</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Go SADS! but stay there...
          </p>
          <img src={ducks2} style={{ width: "300px" }} alt="inside modal" />
        </Modal>

        <Modal
          trigger={
            <div className="card">
              <img src={ducks3} alt="duck card" />
              <div className="card-content">
                <h4>Duck 3</h4>
                <p>quack quack quack</p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>This is a modal.</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Go SADS! but stay there...
          </p>
          <img src={ducks3} style={{ width: "300px" }} alt="inside modal" />
        </Modal>

        <Modal
          trigger={
            <div className="card">
              <img src={ducks4} alt="duck card" />
              <div className="card-content">
                <h4>Duck 4</h4>
                <p>quack quack quack quack</p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>This is a modal.</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Go SADS! but stay there...
          </p>
          <img src={ducks4} style={{ width: "300px" }} alt="inside modal" />
        </Modal>
      </div>
      <br />
      <div id="about" className="aboutsection">
  <div className="aboutcontent">
  <div className="abouttext">SADS is a club at SMU. SADS is a club at SMU. SADS is a club at SMU. SADS is a club at SMU. quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack
    <br/><br/><a href="">Meet the team →</a>
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