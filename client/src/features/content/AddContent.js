import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//rich text editor
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { createContent, getContent } from '../content/contentSlice';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddContent({ setView }) {

  /*
   * useState is a React hook and unrelated to Redux. Creates a little
   * private state inside the component, in this case is used to just handle
   * what's in the input fields before we send it off to Redux.
   */
  const [content, updateContent] = useState({'title':'','description':''});
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
  //since the quill element doesn't pass it's ID, have a seperate function for each element
  const onTitleChangeHandler = e => updateContent({ ...content, 'title': e });
  const onDescriptionChangeHandler = e => updateContent({ ...content, 'description': e });

  const enabledTools = [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean']
    ]

  return(
    <React.Fragment>
      <h1 className="h2 ml-5 mt-5">Add Content</h1>
      <Form className="mt-5" onSubmit={onSubmitHandler}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <ReactQuill id="title" modules = {{toolbar: false}} theme='snow' value={content.title} onChange={onTitleChangeHandler}/>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <ReactQuill id="description" modules = {{toolbar: enabledTools}} theme='snow' value={content.description} onChange={onDescriptionChangeHandler}/>
        </Form.Group>
        <Button type="submit" variant="info">Create</Button>
      </Form>
    </React.Fragment>
  );
}
