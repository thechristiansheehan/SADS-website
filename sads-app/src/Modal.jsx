import React, { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default function Modal({ trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Trigger (can be text, card, image, etc.) */}
      <div
        onClick={() => setIsOpen(true)}
        style={{ display: "inline-block", cursor: "pointer", userSelect: "none" }}
      >
        {trigger}
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
            maxWidth: "500px",
            width: "100%",
            padding: "20px",
            borderRadius: "0px",
            fontSize: "15px",
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
