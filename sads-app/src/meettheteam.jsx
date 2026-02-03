import NavBar from "./components/navbar.jsx";
import "./Home.css";
import React, { useEffect, useState } from "react";
import Members from "./Members.js";
import "./fonts.css";

const MeetTheTeam = () => {
    const [images2, setImages2] = useState([]);
    const [images3, setImages3] = useState([]);
      const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  // styling modal
  const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalStyle = {
  position: "relative",   // Needed for absolute close button
  background: "#404040",
  padding: "25px",
  width: "90%",
  maxWidth: "450px",
  color: "white",
  marginBottom:'50px',
};


const titleStyle = {
  marginTop: 0,
  marginBottom: "0px",
  fontSize: "1.3rem",
  fontWeight: "bold",
  textAlign: "center",
};

const closeIconWrapper = {
  position: "absolute",
  top: "0px",
  right: "12px",
  fontSize: "2rem",
  cursor: "pointer",
  color: "white",
  userSelect: "none",
};

const iconRow = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
};

const iconHoverStyle = {
  fontSize: "2rem",
  color: "white",
  textDecoration: "none",
  cursor: "pointer",
  marginTop: '15px',
};
  
    useEffect(() => {
      fetch("https://sadsapi-616938642091.europe-west1.run.app/team")
        .then((res) => res.json())
        .then((data) => setImages2(data.images))
        .catch((err) => console.error(err));
    }, []);

        useEffect(() => {
      fetch("https://sadsapi-616938642091.europe-west1.run.app/inactiveteam")
        .then((res) => res.json())
        .then((data) => setImages3(data.images))
        .catch((err) => console.error(err));
    }, []);
  return (
    <div>
      <NavBar />
      <title>Resources</title>
       <div style={{ marginTop: "80px" }}></div>
      {images3 && images3.length > 0 && (
  <h2
  style={{
      fontSize: "1.2rem",
      margin: "0",
      fontWeight: "bold",
      marginTop: "-10px",
      marginBottom: "20px",
      color: 'white'
    }}
  >
    Active Members:
  </h2>
)}
     
            <Members
              images={images2}
              showDelete={false}
              disableLinks={false}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              setModalData={setModalData}
              showLoading={true}
              isActive={true}
              publicView={true}
            />

{images3 && images3.length > 0 && (
  <h2
    style={{
      fontSize: "1.2rem",
      margin: "0",
      fontWeight: "bold",
      marginTop: "30px",
      marginBottom: "20px",
      color: 'white'
    }}
  >
    SADS Graveyard (Inactive Members):
  </h2>
)}

            <Members
              images={images3}
              showDelete={false}
              disableLinks={false}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              setModalData={setModalData}
              showLoading={true}
              isActive={false}
              publicView={true}
            />

            {modalOpen && modalData && (
  <div style={overlayStyle} onClick={() => setModalOpen(false)}>
    <div
      style={modalStyle}
      onClick={(e) => e.stopPropagation()} // prevent background click closing modal
    >
      <div style={closeIconWrapper} onClick={() => setModalOpen(false)}>×</div>

      <h2 style={titleStyle}>{modalData.name} • {modalData.role}</h2>
      <p style={{fontFamily: "RionaSansMedium", lineHeight: "20px", fontSize:'1rem', marginBottom: '5px', marginTop: "15px", whiteSpace: "pre-line" }}>
  {modalData.bio}
</p>
<div style={iconRow}>
  {modalData.linkedin && (
    <a
  href={modalData.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  style={iconHoverStyle}
  onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
  onMouseLeave={(e) => (e.target.style.opacity = "1")}
>
  <i className="fa-brands fa-linkedin"></i>
</a>

  )}

  {modalData.github && (
 <a
  href={modalData.github}
  target="_blank"
  rel="noopener noreferrer"
  style={iconHoverStyle}
  onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
  onMouseLeave={(e) => (e.target.style.opacity = "1")}
>
  <i className="fa-brands fa-github"></i>
</a>
  )}

  {modalData.website && (
  
<a
  href={modalData.website}
  target="_blank"
  rel="noopener noreferrer"
  style={iconHoverStyle}
  onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
  onMouseLeave={(e) => (e.target.style.opacity = "1")}
>
  <i className="fa-solid fa-user"></i>
</a>
  )}
</div>

<img
                src={`https://storage.googleapis.com/messagesapi/${modalData.filename}`}
                alt={modalData.originalName}
                style={{
                  width: "300px",
                  objectFit: "cover",
                  marginTop: '15px',
                }}
              />
    </div>
  </div>
)}
<div style={{ marginTop: "10px" }}></div>
    </div>
  );
};

export default MeetTheTeam;
