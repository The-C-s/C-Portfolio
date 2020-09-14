import React from 'react';
import { useDispatch } from 'react-redux';

import { getContent, deleteContent } from '../../features/content/contentSlice';

import Modal from 'react-bootstrap/Modal';

export default function DeleteContent({ content, show, closeHandler }) {

  const dispatch = useDispatch();

  const deleteClickHandler = () => {

    // Wait until content is updated before dismissing the component
    dispatch(deleteContent(content.id))
      .then(() => dispatch(getContent()))
      .then(() => closeHandler());
  }

  return(
    <Modal show={show} onHide={closeHandler}>
      <Modal.Header><Modal.Title>Delete Content</Modal.Title></Modal.Header>
      <Modal.Body>Are you sure you want to delete <b>{content.title}</b>?</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={closeHandler}>No, cancel</button>
        <button className="btn btn-danger" onClick={deleteClickHandler}>Yes, delete</button>
      </Modal.Footer>
    </Modal>
  )
}
