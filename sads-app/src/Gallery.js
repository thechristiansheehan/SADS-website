import React, { useState } from "react";

function Gallery({
  images,
  showDelete = false,
  onDelete,
  disableLinks = false,
  publicView = false,
  loading = false, // 👈 new optional prop to explicitly control loading state
}) {
  const orderedImages = images ? images.slice().reverse() : [];

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
        marginTop: "20px",
        paddingBottom: "10px",
        scrollBehavior: "smooth",
        whiteSpace: "nowrap",
      };

  // Show loading state if explicitly passed or if images are not yet available
  if (loading || (!images && images !== null)) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "#aaa", fontSize: "40px" }}>
        Loading...
      </div>
    );
  }

  // If images is explicitly null or empty, show a friendly message
  if (!images || orderedImages.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "#aaa" }}>
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
                {img.subtitle && (
                  <p
                    style={{
                      margin: 0,
                      fontSize,
                      fontWeight: "bold",
                      textWrap: "auto",
                    }}
                  >
                    {img.subtitle}
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
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#9e2e24ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c0392b")}
                >
                  <i className="fa-solid fa-x"></i>
                </button>
              )}
            </div>
          );

          if (!disableLinks && img.link) {
            return (
              <a
                key={img.filename}
                href={img.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {cardContent}
              </a>
            );
          }
          return cardContent; // No link wrapper if disabled or no link
        })}
      </div>
    </div>
  );
}

export default Gallery;