import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import API from '../../common/api';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { CREATE } from '../../actions/types';

export default function AddContent({ setView }) {  

  const [content, updateContent] = useState({});
  const { email, authType, token } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onChangeHandler = e => updateContent({ ...content, [e.target.id]: e.target.value });

  const onSubmitHandler = e => {

    e.preventDefault();

    const payload = {
      user: email,
      title: content.title,
      description: content.description
    }

    API.createContent(payload, authType, token)
      .then(res => {

        dispatch({
          type: CREATE,
          payload: res.data
        });

        setView('dashboard');
      })
      .catch(err => console.log(err));
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
