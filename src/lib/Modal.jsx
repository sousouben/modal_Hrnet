import React from "react";
import "./modal.css";

/**
 * Composant représentant une modal.
 * @function Modal
 * @param {Object} props - Les propriétés du composant.
 * @param {function} props.closeModal - La fonction de fermeture de la modal.
 * @param {string} props.message - Le message à afficher dans la modal.
 * @returns {JSX.Element} Le composant Modal
 */
function Modal({ closeModal, message }) {
  return (
    <>
      <div className="bcgModal">
        <div className="modal-wrapper">
          <div className="modal">
            <button
              type="button"
              className="modal-close-button"
              onClick={() => closeModal(false)}
            >
              {" "}
              X{" "}
            </button>

            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
