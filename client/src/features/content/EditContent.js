import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//rich text editor
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

  // Input fields are based on state, so typing in them won't work unless we also change the state
  //since the quill element doesn't pass it's ID, have a seperate function for each element
  const onTitleChangeHandler = e => updateContent({ ...content, ['title']: e });
  const onDescriptionChangeHandler = e => updateContent({ ...content, ['description']: e });

  const enabledTools = [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean']
    ]

  return(
    <Modal size="lg" show={show} onHide={closeHandler}>
      <Modal.Header><Modal.Title>Edit Content</Modal.Title></Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <ReactQuill modules = {{toolbar: false}} theme='snow' value={_content.title} onChange={onTitleChangeHandler}/>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <ReactQuill modules = {{toolbar: enabledTools}} theme='snow' value={_content.description} onChange={onDescriptionChangeHandler}/>
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
