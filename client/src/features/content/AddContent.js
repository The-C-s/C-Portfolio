import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createContent, getContent } from '../content/contentSlice';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddContent({ setView }) {  

  /*
   * useState is a React hook and unrelated to Redux. Creates a little
   * private state inside the component, in this case is used to just handle
   * what's in the input fields before we send it off to Redux.
   */
  const [content, updateContent] = useState({});
  const dispatch = useDispatch();

  const onSubmitHandler = e => {

    // Prevent 'Submit' from actually doing a traditional submit
    e.preventDefault();

    // Send API call, then re-fetch content and change dashboard view back to default (currently 'dashboard')
    dispatch(createContent(content))
      .then(() => dispatch(getContent()))
      .then(() => setView('dashboard'));
  }

  // Input fields are based on state, so typing in them won't work unless we also change the state
  const onChangeHandler = e => updateContent({ ...content, [e.target.id]: e.target.value });

  return(
    <React.Fragment>
      <h1 className="h2 ml-5 mt-5">Add Content</h1>
      <Form className="mt-5" onSubmit={onSubmitHandler}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={content.title} onChange={onChangeHandler}/>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="5" value={content.description} onChange={onChangeHandler}/>
        </Form.Group>
        <Button type="submit" variant="info">Create</Button>
      </Form>
    </React.Fragment>
  );
}
