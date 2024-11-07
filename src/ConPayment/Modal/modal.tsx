import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

interface ModalType{
  content: JSX.Element
}

export default function Modal({content}:ModalType) {

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        {content}
      </div>
    </div>,
    document.querySelector('.modal-container') as Element// Append to modal-root div
  );
}
