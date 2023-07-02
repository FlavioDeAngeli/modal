import "./App.css";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [modalState, setModalState] = useState(false);

  function handleClick() {
    setModalState(!modalState);
  }

  return (
    <div className="App">
      <button className="openModal" onClick={handleClick}>
        {modalState ? "Close Modal" : "Open Modal"}
      </button>
      {modalState && (
        <Modal
          modalState={modalState}
          setModalState={setModalState}
          header={"Modal Title"}
        />
      )}
    </div>
  );
}

export default App;
