import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { CREATE } from '../../actions/types';

export default function AddContent() {  

  const [content, updateContent] = useState({});
  const dispatch = useDispatch();

  const onChangeHandler = e => updateContent({ ...content, [e.target.id]: e.target.value });

  const onSubmitHandler = () => {

    dispatch({
      type: CREATE,
      payload: {
        id: uuid(),
        title: content.title,
        body: content.body
      }
    });
  }

  return(
    <React.Fragment>
      <h1 className="h2 ml-5 mt-5">Add Content</h1>
      <Form className="mt-5" onSubmit={onSubmitHandler}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={content.title} onChange={onChangeHandler}/>
        </Form.Group>
        <Form.Group controlId="body">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" rows="5" value={content.body} onChange={onChangeHandler}/>
        </Form.Group>
        <Button type="submit" variant="info">Create</Button>
      </Form>
    </React.Fragment>
  );
}
