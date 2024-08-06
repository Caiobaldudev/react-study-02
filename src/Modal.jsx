import React from "react";

const Modal = ({modal, setModal}) => {
  if (modal === true) {
    return (
      <div>
        Esse é um modal.{" "}
        <button onClick={() => setModal(false)}>X Fechar</button>
      </div>
    );
  }
  return null;
};

export default Modal;
