import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { editContent, getContent } from './contentSlice';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function EditContent(props) {

  const { show, closeHandler } = props;
  const [content, updateContent] = useState(props.content);
  const dispatch = useDispatch();

  const editClickHandler = () => {

    // Wait until content is updated before dismissing the component
    dispatch(editContent(content))
      .then(() => dispatch(getContent()))
      .then(() => closeHandler());
  }

  const onChangeHandler = e => updateContent({ ...content, [e.target.id]: e.target.value });

  return(
    <Modal size="lg" show={show} onHide={closeHandler}>
      <Modal.Header><Modal.Title>Edit Content</Modal.Title></Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={content.title} onChange={onChangeHandler}/>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="5" value={content.description} onChange={onChangeHandler}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={closeHandler}>Cancel</button>
        <button className="btn btn-warning" onClick={editClickHandler}>Save changes</button>
      </Modal.Footer>
    </Modal>
  )
}
