import React from 'react';
import './Modal.css';

const Modal = ({ onAccept }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">Compartir ubicación</h2>
        <p className="modal__text">Por favor, comparte tu ubicación para ver el mapa en tiempo real.</p>
        <button className="modal__button" onClick={onAccept}>Aceptar</button>
      </div>
    </div>
  );
};

export default Modal;
