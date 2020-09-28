import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createProfile, getProfile } from '../profile/profileSlice';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddProfile({ setView }) {  

  /*
   * useState is a React hook and unrelated to Redux. Creates a little
   * private state inside the component, in this case is used to just handle
   * what's in the input fields before we send it off to Redux.
   */
  const [profile, updateProfile] = useState({});
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
  const onChangeHandler = e => updateProfile({ ...profile, [e.target.id]: e.target.value});

  return(
    <React.Fragment>
      <h1 className="h2 ml-5 mt-5">Add Profile</h1>
      <Form className="mt-5" onSubmit={onSubmitHandler}>
        <Form.Group controlId="education">
          <Form.Label>Education</Form.Label>
          <Form.Control type="textarea" rows="5" value={profile.education} onChange={onChangeHandler}/>
        </Form.Group>
        <Form.Group controlId="experience">
          <Form.Label>Experience</Form.Label>
          <Form.Control as="textarea" rows="5" value={profile.experience} onChange={onChangeHandler}/>
        </Form.Group>
        <Form.Group controlId="projects">
          <Form.Label>Projects</Form.Label>
          <Form.Control as= "textarea" rows="5" value={profile.projects} onChange={onChangeHandler}/>
        </Form.Group>
        <Button type="submit" variant="info">Create</Button>
      </Form>
    </React.Fragment>
  );
}
