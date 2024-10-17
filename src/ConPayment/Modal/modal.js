import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'


export default function Modal({content}) {

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        {content}
      </div>
    </div>,
    document.querySelector('.modal-container') // Append to modal-root div
  );
}
