//Can probably split this into different fields 
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
//import { produce } from 'immer'; 
import { editProfile, getProfile } from './profileSlice';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'; 

//Problem getting a profile always takes 2 seconds,
//So the initial values are always empty or fails if I don't set them 
//However EditProfile seems to be constructed only once, with said empty profile 
//How to refresh once it has an actual profile? 

//Still messed up if u click on edit before it loads 
//Maybe only display edit button once it's loaded? 
export default function EditProfile({ profile, show, closeHandler }) {
  //_profile is the state variable, updateProfile is a function that updates the state
  //Initial state of profile always takes some time to update
  const [_profile, updateProfile] = useState(profile);
  const dispatch = useDispatch();

  const editClickHandler = () => {
    dispatch(editProfile(_profile))
      .then(() => dispatch(getProfile(_profile.id)))
      .then(() => closeHandler());
  }

  const onChangeHandler = e => updateProfile({ ..._profile, [e.target.id]: e.target.value });
  const onChangeEducationHandler = e => updateProfile({..._profile, [e.target.id]: e.target.value}); 
  //const addNewField = e => produce(_profile => ()); 
  
  return(
    <Modal size="lg" show={show} onHide={closeHandler}>
      <Modal.Header><Modal.Title>Edit Profile</Modal.Title></Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="education">
            <Form.Label>Education</Form.Label>
            {_profile.education.map(education =>
                    <Row>
                       <Form.Control as = "textarea" rows="1" value = {education}/> 
                    </Row>)}
            <Button onClick={onChangeHandler}>Add Education</Button>
          </Form.Group>
          <Form.Group controlId="experience">
            <Form.Label>Experience</Form.Label>
                {_profile.experience.map(experience =>
                    <Row>
                       <Form.Control as = "textarea" rows="1" value = {experience}/> 
                    </Row>)}
            </Form.Group>
          <Form.Group controlId="projects">
            <Form.Label>Projects</Form.Label>
            {_profile.projects.map(projects =>
                    <Row>
                       <Form.Control as = "textarea" rows="1" value = {projects}/> 
                    </Row>)}
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
