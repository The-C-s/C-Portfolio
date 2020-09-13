import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createContent, getContent } from '../../features/content/contentSlice';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddContent({ setView }) {  

  const [content, updateContent] = useState({});
  const dispatch = useDispatch();

  const onChangeHandler = e => updateContent({ ...content, [e.target.id]: e.target.value });

  const onSubmitHandler = e => {

    e.preventDefault();

    // Send API call, then re-fetch content and change dashboard view back to default
    dispatch(createContent(content))
      .then(() => dispatch(getContent()))
      .then(() => setView('dashboard'));
  }

  return(
    <React.Fragment>
      <h1 className="h2 ml-5 mt-5">Add Content</h1>
      <Form className="mt-5" onSubmit={onSubmitHandler}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={content.title} onChange={onChangeHandler}/>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Dscription</Form.Label>
          <Form.Control as="textarea" rows="5" value={content.description} onChange={onChangeHandler}/>
        </Form.Group>
        <Button type="submit" variant="info">Create</Button>
      </Form>
    </React.Fragment>
  );
}
