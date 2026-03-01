import React, { useState } from "react";

function ProjectGallery({
  images,
  showDelete = false,
  onDelete,
  disableLinks = false,
  publicView = false,
  loading = false,
  setModalOpen,
  setModalData,
  showLoading,
}) {
  const orderedImages = images ? images.slice(): [];

  const containerStyle = publicView
    ? {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px",
      }
    : {
        display: "flex",
        flexDirection: "row",
        overflowX: "auto",
        overflowY: "hidden",
        gap: "15px",
        marginTop: "10px",
        paddingBottom: "10px",
        scrollBehavior: "smooth",
        whiteSpace: "nowrap",
        alignItems: "center",
        maxWidth: "90vw"
      };

  // Show loading state if explicitly passed or if images are not yet available

if (loading && showLoading) {
  return (
    <div style={{ textAlign: "center", padding: "0px", color: "#aaa", fontSize: "1.2rem" }}>
      Loading...
    </div>
  );
}

  // If images is explicitly null or empty, show a friendly message
  if (showLoading && (!images || orderedImages.length === 0)) {
    return (
      <div style={{ textAlign: "center", padding: "0px", color: "#aaa", fontSize: "1.2rem", padding: "20px" }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "0px" }}>

      <div style={containerStyle}>
        {orderedImages.map((img) => {
          const cardWidth = publicView ? "200px" : "175px";
          const fontSize = publicView ? "1.0rem" : "0.9rem";
          const cardContent = (
            <div
              key={img.filename}
              style={{
                width: cardWidth,
                overflow: "hidden",
                display: "flex",
                flex: "0 0 auto",
                flexDirection: "column",
                textAlign: "center",
                backgroundColor: "#404040",
                color: "white",
                cursor: disableLinks ? "default" : "pointer",
                textDecoration: "none",
                position: "relative",
              }}
              onMouseEnter={publicView ? (e) => (e.currentTarget.style.filter = "brightness(85%)") : undefined}
              onMouseLeave={publicView ? (e) => (e.currentTarget.style.filter = "brightness(100%)") : undefined}
            >
              <img
                src={`https://storage.googleapis.com/messagesapi/${img.filename}`}
                alt={img.originalName}
                style={{
                  width: "100%",
                  height: cardWidth,
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "10px" }}>
                {img.title && (
                  <p
                    style={{
                      margin: 0,
                      fontSize: '1rem',
                      fontWeight: "bold",
                      textWrap: "auto",
                    }}
                  >
                    {img.title}
                  </p>
                )}
                                {img.author && (
                  <p
                    style={{
                      marginTop: 5,
                      marginBottom: 0,
                      fontSize,
                      fontWeight: "normal",
                      textWrap: "auto",
                      fontFamily: "RionaSansMedium",
                    }}
                  >
                    {img.author}
                  </p>
                )}
              </div>
              {showDelete && (
                <button
                  onClick={() => onDelete(img.id)}
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    background: "#a93226",
                    color: "white",
                    border: "none",
                    width: "25px",
                    height: "25px",
                    cursor: "pointer",
                    zIndex: 2,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.7)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
                >
                  <i className="fa-solid fa-x"></i>
                </button>
              )}
            </div>
          );

          if (!disableLinks) {
  return (
    <div
      key={img.filename}
      onClick={() => {
        setModalData(img);   // whatever you want to show inside modal
        setModalOpen(true);  // open the modal
      }}
      style={{
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit"
      }}
    >
      {cardContent}
    </div>
  );
}

          return cardContent; // No link wrapper if disabled or no link
        })}
      </div>
    </div>
  );
}

export default ProjectGallery;