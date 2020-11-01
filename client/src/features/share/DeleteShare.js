import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { deleteSharepage } from '../share/shareSlice';
import { authenticate } from '../user/userSlice';

export default function DeleteShare({ share, show, closeHandler }) {

  const dispatch = useDispatch();
  const history = useHistory();

  const deleteClickHandler = () => {
    console.log("deleteShare");
    console.log(share.id);
    // Wait until content is updated before dismissing the component
    dispatch(deleteSharepage(share.id))
      .then(() => dispatch(authenticate()))
      .then(() => closeHandler())
      .then(() => history.replace("/dashboard/sharepages"));
  }

  return(
    <Modal show={show} onHide={closeHandler}>
      <Modal.Header><Modal.Title>Delete Sharepage</Modal.Title></Modal.Header>
      <Modal.Body>Are you sure you want to delete <b>{share.id}</b>?</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeHandler}>No, cancel</Button>
        <Button variant="danger" onClick={deleteClickHandler}>Yes, delete</Button>
      </Modal.Footer>
    </Modal>
  )
}
