import Modal from "./components/Modal.jsx";
import ducks5 from "./assets/images/ducks5.png";
import ducks6 from "./assets/images/ducks6.png";
import ducks7 from "./assets/images/ducks7.png";
import ducks8 from "./assets/images/ducks8.png";
import NavBar from "./components/navbar.jsx";
import "./Home.css";

const MeetTheTeam = () => {
  return (
    <div>
      <NavBar />
      <title>Meet The Team</title>
      <div style={{ marginTop: "80px" }}></div>


      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Squeak */}
        <Modal
          trigger={
            <div
              style={{
                width: "200px",
                overflow: "hidden",
                textAlign: "center",
                backgroundColor: "#404040",
                color: "white",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "brightness(85%)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(100%)")
              }
            >
              <img src={ducks5} alt="duck card" style={{ width: "100%", height: "200px"  }} />
              <div style={{ padding: "8px" }}>
                <h4 style={{ margin: 0 }}>Squeak</h4>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "RionaSansMedium",
                    fontSize: "0.9rem",
                    color: "white",
                  }}
                >
                  President
                </p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>Squeak</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Duck major
          </p>
          <img src={ducks5} style={{ width: "300px" }} alt="inside modal" />
        </Modal>

        {/* Lucky */}
        <Modal
          trigger={
            <div
              style={{
                width: "200px",
                overflow: "hidden",
                textAlign: "center",
                backgroundColor: "#404040",
                color: "white",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "brightness(85%)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(100%)")
              }
            >
              <img src={ducks6} alt="duck card" style={{ width: "100%", height: "200px" }} />
              <div style={{ padding: "8px" }}>
                <h4 style={{ margin: 0 }}>Lucky</h4>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "RionaSansMedium",
                    fontSize: "0.9rem",
                    color: "white",
                  }}
                >
                  Vice President
                </p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>Lucky</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Duck major
          </p>
          <img src={ducks6} style={{ width: "300px" }} alt="inside modal" />
        </Modal>

        {/* Bubbles */}
        <Modal
          trigger={
            <div
              style={{
                width: "200px",
                overflow: "hidden",
                textAlign: "center",
                backgroundColor: "#404040",
                color: "white",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "brightness(85%)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(100%)")
              }
            >
              <img src={ducks7} alt="duck card" style={{ width: "100%", height: "200px"  }} />
              <div style={{ padding: "8px" }}>
                <h4 style={{ margin: 0 }}>Bubbles</h4>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "RionaSansMedium",
                    fontSize: "0.9rem",
                    color: "white",
                  }}
                >
                  Marketing
                </p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>Bubbles</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Duck major
          </p>
          <img src={ducks7} style={{ width: "300px", height: "300px"  }} alt="inside modal" />
        </Modal>

        {/* Fluffy */}
        <Modal
          trigger={
            <div
              style={{
                width: "200px",
                overflow: "hidden",
                textAlign: "center",
                backgroundColor: "#404040",
                color: "white",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "brightness(85%)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(100%)")
              }
            >
              <img src={ducks8} alt="duck card" style={{ width: "100%", height: "200px"  }} />
              <div style={{ padding: "8px" }}>
                <h4 style={{ margin: 0 }}>Fluffy</h4>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "RionaSansMedium",
                    fontSize: "0.9rem",
                    color: "white",
                  }}
                >
                  Duck Resources
                </p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>Fluffy</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Duck major
          </p>
          <img src={ducks8} style={{ width: "300px",  }} alt="inside modal" />
        </Modal>
      </div>

      <br />
    </div>
  );
};

export default MeetTheTeam;