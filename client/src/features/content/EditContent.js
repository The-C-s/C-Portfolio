import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { editContent, getContent } from './contentSlice';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function EditContent({ content, show, closeHandler }) {

  const [_content, updateContent] = useState(content);
  const dispatch = useDispatch();

  const editClickHandler = () => {

    dispatch(editContent(_content))
      .then(() => dispatch(getContent()))
      .then(() => closeHandler());
  }

  const onChangeHandler = e => updateContent({ ..._content, [e.target.id]: e.target.value });

  return(
    <Modal size="lg" show={show} onHide={closeHandler}>
      <Modal.Header><Modal.Title>Edit Content</Modal.Title></Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={_content.title} onChange={onChangeHandler}/>
          </Form.Group>
          <Form.Group controlId="username">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="5" value={_content.description} onChange={onChangeHandler}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeHandler}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
}
