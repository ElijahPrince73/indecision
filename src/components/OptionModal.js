import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.SelectedOption}
      onRequestClose={props.closeModal}
      contentLabel="Selected Option"
      >
      <h3>Selected Option</h3>
      {props.SelectedOption &&<p>{props.SelectedOption}</p>}
      <button onClick={props.closeModal}>Nice</button>
    </Modal>
  )
};


export default OptionModal;
