import React, { useState, useEffect } from 'react';
import Modal from "./components/Modal";
import Banner from "./components/Banner";
import ducks1 from "./assets/images/ducks.jpg";
import ducks2 from "./assets/images/ducks2.jpg";
import ducks3 from "./assets/images/ducks3.jpg";
import ducks4 from "./assets/images/ducks4.jpg";
import logo from './assets/images/sads_logo2.png';
import banner from "./assets/images/sadsbanner.mp4";
import NavBar from './components/navbar.jsx';
import './Home.css';

const Home = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
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
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <video
          src={banner}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
          }}
        />

        {/* Overlay Content */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <img
            src={logo}
            alt="header logo"
            style={{
              height: "200px",
              objectFit: "contain",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          />

         <div
  style={{
    display: "flex",
    gap: "60px",
    marginTop: "20px",
    marginBottom: "20px",
  }}
>
  <a href="about" className="header-link">
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

      {/* NavBar shows once you scroll past header */}
      {showNav && <NavBar />}
<br />
      <Banner />
      <br />
      <br />

      {/* Cards Section */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Modal
          trigger={
            <div
              style={{
                width: "200px",
                overflow: "hidden",
                textAlign: "center",
                backgroundColor: "#eaeaeaff",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "brightness(85%)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(100%)")
              }
            >
              <img src={ducks1} alt="duck card" style={{ width: "100%" }} />
              <div style={{ padding: "8px" }}>
                <h4 style={{ margin: 0 }}>Duck</h4>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "RionaSansMedium",
                    fontSize: "0.9rem",
                    color: "#000",
                  }}
                >
                  quack
                </p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>This is a modal.</h2>
          <p
            style={{
              fontFamily: "RionaSansMedium",
              fontSize: "15px",
            }}
          >
            Go SADS! but stay there...
          </p>
          <img src={ducks1} style={{ width: "300px" }} alt="inside modal" />
        </Modal>
<Modal
  trigger={
    <div
      style={{
        width: "200px",
        overflow: "hidden",
        textAlign: "center",
        backgroundColor: "#eaeaeaff",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(85%)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(100%)")}
    >
      <img src={ducks2} alt="duck card" style={{ width: "100%" }} />
      <div style={{ padding: "8px" }}>
        <h4 style={{ margin: 0 }}>Duck 2</h4>
        <p style={{ margin: "4px 0 0", fontFamily: "RionaSansMedium", fontSize: "0.9rem", color: "#000" }}>
          quack quack
        </p>
      </div>
    </div>
  }
>
  <h2 style={{ fontFamily: "RionaSansBlack" }}>This is a modal.</h2>
  <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>Go SADS! but stay there...</p>
  <img src={ducks2} style={{ width: "300px" }} alt="inside modal" />
</Modal>

<Modal
  trigger={
    <div
      style={{
        width: "200px",
        overflow: "hidden",
        textAlign: "center",
        backgroundColor: "#eaeaeaff",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(85%)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(100%)")}
    >
      <img src={ducks3} alt="duck card" style={{ width: "100%" }} />
      <div style={{ padding: "8px" }}>
        <h4 style={{ margin: 0 }}>Duck 3</h4>
        <p style={{ margin: "4px 0 0", fontFamily: "RionaSansMedium", fontSize: "0.9rem", color: "#000" }}>
          quack quack quack
        </p>
      </div>
    </div>
  }
>
  <h2 style={{ fontFamily: "RionaSansBlack" }}>This is a modal.</h2>
  <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>Go SADS! but stay there...</p>
  <img src={ducks3} style={{ width: "300px" }} alt="inside modal" />
</Modal>

<Modal
  trigger={
    <div
      style={{
        width: "200px",
        overflow: "hidden",
        textAlign: "center",
        backgroundColor: "#eaeaeaff",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(85%)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(100%)")}
    >
      <img src={ducks4} alt="duck card" style={{ width: "100%" }} />
      <div style={{ padding: "8px" }}>
        <h4 style={{ margin: 0 }}>Duck 4</h4>
        <p style={{ margin: "4px 0 0", fontFamily: "RionaSansMedium", fontSize: "0.9rem", color: "#000" }}>
          quack quack quack quack
        </p>
      </div>
    </div>
  }
>
  <h2 style={{ fontFamily: "RionaSansBlack" }}>This is a modal.</h2>
  <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>Go SADS! but stay there...</p>
  <img src={ducks4} style={{ width: "300px" }} alt="inside modal" />
</Modal>
</div>
      <br />
   
</div>
  );
};

export default Home;
