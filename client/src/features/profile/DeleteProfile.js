import React from 'react';
import { useDispatch } from 'react-redux';

import { getProfile, deleteProfile } from './profileSlice';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function DeleteProfile({ profile, show, closeHandler }) {

  const dispatch = useDispatch();

  const deleteClickHandler = () => {
    // Wait until profile is updated before dismissing the component
    dispatch(deleteProfile(profile.id))
      .then(() => dispatch(getProfile()))
      .then(() => closeHandler());
  }

  return(
    <Modal show={show} onHide={closeHandler}>
      <Modal.Header><Modal.Title>Delete Profile</Modal.Title></Modal.Header>
      <Modal.Body>Are you sure you want to delete your profile <b>{profile.email}</b>?</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeHandler}>No, cancel</Button>
        <Button variant="danger" onClick={deleteClickHandler}>Yes, delete</Button>
      </Modal.Footer>
    </Modal>
  )
}