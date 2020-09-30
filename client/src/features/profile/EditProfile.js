//Can probably split this into different fields 
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
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
  const [_education, updateEducation] = useState(profile.education); 
  const [_experience, updateExperience] = useState(profile.experience); 
  const [_projects, updateProjects] = useState(profile.projects); 
  const dispatch = useDispatch();
  const editClickHandler = () => {
    dispatch(editProfile(_profile))
      .then(() => dispatch(getProfile(_profile.id)))
      .then(() => closeHandler());
  }

  
  const onChangeHandler = e => updateProfile({ ..._profile, [e.target.id]: e.target.value });
  //Both of these functions work seperately, but updating any field after adding a new one always resets the array to empty 
  //Assume its an issue with concurrent modification? 
  //Updates a single field 
  const onChangeEducationHandler = e => updateEducation([e.target.value]); 
  //Adds an empty education field 
  const addEducationField = e => updateEducation([..._education, '']); 
  
  return(
    <Modal size="lg" show={show} onHide={closeHandler}>
      <Modal.Header><Modal.Title>Edit Profile</Modal.Title></Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="education">
            <Form.Label>Education</Form.Label>
            {_education.map(education =>
                    <Row>
                       <Form.Control as = "textarea" rows="1" value = {education} onChange={onChangeEducationHandler}/> 
                    </Row>)}
            <Button onClick={addEducationField}>Add Education</Button>
          </Form.Group>
          <Form.Group controlId="experience">
            <Form.Label>Experience</Form.Label>
                {_experience.map(experience =>
                    <Row>
                       <Form.Control as = "textarea" rows="1" value = {experience}/> 
                    </Row>)}
            </Form.Group>
          <Form.Group controlId="projects">
            <Form.Label>Projects</Form.Label>
            {_projects.map(projects =>
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
