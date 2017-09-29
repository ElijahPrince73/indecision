import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.SelectedOption}
      onRequestClose={props.closeModal}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
      >
      <h3 className="modal__title">Selected Option</h3>
      {props.SelectedOption &&<p className="modal__body">{props.SelectedOption}</p>}
      <button className="button" onClick={props.closeModal}>Nice</button>
    </Modal>
  )
};


export default OptionModal;
