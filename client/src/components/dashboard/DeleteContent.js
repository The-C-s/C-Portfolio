import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

import { DELETE } from '../../actions/types';

export default function DeleteContent({ content, show, closeHandler }) {

  const dispatch = useDispatch();

  const deleteClickHandler = () => {

    dispatch({ type: DELETE, payload: content.id });

    closeHandler();
  }

  return(
    <Modal show={show} onHide={closeHandler}>
      <Modal.Header><Modal.Title>Delete Content</Modal.Title></Modal.Header>
      <Modal.Body>Are you sure you want to delete '{content.title}'?</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={closeHandler}>No, cancel</button>
        <button className="btn btn-danger" onClick={deleteClickHandler}>Yes, delete</button>
      </Modal.Footer>
    </Modal>
  )
}
