import React from "react";
import { useState } from "react";
import Modal from "../lib/Modal";
import "./Button.css";

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
