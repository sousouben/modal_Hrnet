import React from "react";
import { useState } from "react";
import Modal from "../lib/Modal";
import "./Button.css";

/**
 * Composant représentant un bouton avec une fonctionnalité de modal.
 * @function Button
 * @returns {JSX.Element} Le composant Button
 */
function Button() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button
        type="submit"
        className="openModal"
        onClick={() => {
          setModal(true);
        }}
      >
        Save
      </button>
      {modal && <Modal closeModal={setModal} />}
    </>
  );
}

export default Button;
