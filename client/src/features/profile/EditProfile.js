import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { editProfile, getProfile } from './profileSlice';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function EditProfile({ profile, show, closeHandler }) {

  const [_profile, updateProfile] = useState(profile);
  const dispatch = useDispatch();

  const editClickHandler = () => {

    dispatch(editProfile(_profile))
      .then(() => dispatch(getProfile()))
      .then(() => closeHandler());
  }

  const onChangeHandler = e => updateProfile({ ..._profile, [e.target.id]: e.target.value });

  return(
    <Modal size="lg" show={show} onHide={closeHandler}>
      <Modal.Header><Modal.Title>Edit Profile</Modal.Title></Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="education">
            <Form.Label>Education</Form.Label>
            <Form.Control type="textarea" rows="5" value={_profile.education} onChange={onChangeHandler}/>
          </Form.Group>
          <Form.Group controlId="experience">
            <Form.Label>Experience</Form.Label>
            <Form.Control as="textarea" rows="5" value={_profile.experience} onChange={onChangeHandler}/>
          </Form.Group>
          <Form.Group controlId="projects">
            <Form.Label>Experience</Form.Label>
            <Form.Control as="textarea" rows="5" value={_profile.projects} onChange={onChangeHandler}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeHandler}>Cancel</Button>
        <Button variant="warning" onClick={editClickHandler}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  )
}
