import React from 'react';

const Modal = ({ onClose, currentProject }) => {
  const { name, description, image, technologies, github, deployed } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h2 className="modalTitle">{name} </h2>
        <img
          src={require(`../../assets/small/${image}`).default}
          alt="current project"
        />
        <p>{description}</p>
        <p>{technologies}</p>
        <p>{github}</p>
        <p>{deployed}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
