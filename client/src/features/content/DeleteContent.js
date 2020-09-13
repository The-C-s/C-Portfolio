import React from 'react';
import { useDispatch } from 'react-redux';

import { getContent, deleteContent } from '../../features/content/contentSlice';

import Modal from 'react-bootstrap/Modal';

export default function DeleteContent({ content, show, closeHandler }) {

  const dispatch = useDispatch();

  const deleteClickHandler = () => {

    dispatch(deleteContent(content.id))
      .then(() => dispatch(getContent()));
      
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
