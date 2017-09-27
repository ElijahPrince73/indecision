import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.SelectedOption}
    contentLabel="Selected Option"
    >
    <h3>Selected Option</h3>
    {props.SelectedOption &&<p>{props.SelectedOption}</p>}
    <button>Nice</button>
  </Modal>
);


export default OptionModal;
