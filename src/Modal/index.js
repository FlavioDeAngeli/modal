import React from "react";
import "./style.css";

function Modal({ modalState, setModalState, header }) {
  function handleClick() {
    setModalState(!modalState);
  }

  return (
    <div className="Modal">
      <div className="closeBtn" onClick={handleClick}>
        X
      </div>
      <div className="header">
        <h2>{header}</h2>
      </div>
      <div className="mainContent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum ipsam
        quaerat sit nihil, et voluptas iusto, excepturi enim molestiae veniam
        soluta deleniti consequatur aspernatur officiis aliquam numquam eaque!
        Optio.
      </div>
      <div className="footer">
        <strong>Flavio De Angeli</strong> - Some text - <strong>2023</strong>
      </div>
    </div>
  );
}

export default Modal;
