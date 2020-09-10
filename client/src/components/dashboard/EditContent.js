import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { EDIT } from '../../actions/types';

export default function EditContent(props) {

  const [content, updateContent] = useState(props.content);
  const dispatch = useDispatch();
  const { show, closeHandler } = props;

  const onChangeHandler = e => updateContent({ ...content, [e.target.id]: e.target.value });

  const editClickHandler = () => {

    dispatch({ type: EDIT, payload: content });

    closeHandler();
  }

  return(
    <Modal size="lg" show={show} onHide={closeHandler}>
      <Modal.Header><Modal.Title>Edit Content</Modal.Title></Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={content.title} onChange={onChangeHandler}/>
          </Form.Group>
          <Form.Group controlId="body">
            <Form.Label>Body</Form.Label>
            <Form.Control as="textarea" rows="5" value={content.body} onChange={onChangeHandler}/>
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
