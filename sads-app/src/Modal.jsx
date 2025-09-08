import React, { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default function Modal({ triggerText, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        style={{
          display: "inline-block",
          padding: "12px 20px",
          backgroundColor: "#f5f5f5",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          cursor: "pointer",
          userSelect: "none",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#eaeaea")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#f5f5f5")
        }
      >
        {triggerText}
      </div>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Reusable Modal"
        style={{
          overlay: {
            zIndex: 1100,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "20vh",
          },
          content: {
            position: "relative",
            inset: "unset",
            maxWidth: "400px",
            width: "100%",
            padding: "20px",
          },
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: "none",
            border: "none",
            fontSize: "2rem",
            color: "black",
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          ×
        </button>

        {children}
      </ReactModal>
    </div>
  );
}
