import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { editContent, getContent } from './contentSlice';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function EditContent({ content, show, closeHandler }) {

  const [_content, updateContent] = useState(content);
  const dispatch = useDispatch();

  const onFileChosen = e => {
    updateContent({ ..._content, 'file': e.target.files[0] });
  }

  const editClickHandler = () => {

    //convert to FormData so we can send files
    const _data = new FormData();
    for (let field in _content) {
      _data.append(field, _content[field]);
    }

    dispatch(editContent(_data))
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
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="5" value={_content.description} onChange={onChangeHandler}/>
          </Form.Group>
          <Form.Group controlId="file">
            <Form.Label>File</Form.Label>
            <br/>
            <input type="file" name="file" onChange={onFileChosen}/>
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
