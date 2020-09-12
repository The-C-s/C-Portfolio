import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../common/api';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { EDIT } from '../../actions/types';

export default function EditContent(props) {

  const [content, updateContent] = useState(props.content);
  const { authType, token } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { show, closeHandler } = props;

  const onChangeHandler = e => updateContent({ ...content, [e.target.id]: e.target.value });

  const editClickHandler = () => {

    const { id, ...newContent } = content;

    api.editContent(id, newContent, authType, token)
      .then(res => dispatch({ type: EDIT, payload: { id, ...res.data }}))
      .catch(err => console.log(err));

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
