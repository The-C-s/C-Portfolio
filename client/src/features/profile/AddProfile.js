import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createProfile, getProfile } from '../profile/profileSlice';

export default function createProfile({ setView }) {  

  /*
   * useState is a React hook and unrelated to Redux. Creates a little
   * private state inside the component, in this case is used to just handle
   * what's in the input fields before we send it off to Redux.
   */
  const [profile, createProfile] = useState({});
  const dispatch = useDispatch();

  const onSubmitHandler = e => {

    // Prevent 'Submit' from actually doing a traditional submit
    e.preventDefault();

    // Send API call, then re-fetch content and change dashboard view back to default (currently 'dashboard')
    dispatch(createProfile(profile))
      .then(() => dispatch(getProfile()))
      .then(() => setView('dashboard'));
  }

  // Input fields are based on state, so typing in them won't work unless we also change the state
  const onChangeHandler = e => createProfile({ ...profile, [e.target.id]: e.target.value});

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
