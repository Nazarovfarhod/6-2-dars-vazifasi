import "./modal.css";

function Modal({ children, closeModal }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children} <button className="close-btn" onClick={() => closeModal()}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
