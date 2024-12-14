import React from "react";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Ne rien afficher si le modal est fermé

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
