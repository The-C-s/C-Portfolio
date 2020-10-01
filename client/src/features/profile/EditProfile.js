//Can probably split this into different fields
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProfile, getProfile } from "./profileSlice";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import Row from 'react-bootstrap/Row';
import InputGroup from "react-bootstrap/InputGroup";

export default function EditProfile({ profile, show, closeHandler }) {
  //_profile is the state variable, updateProfile is a function that updates the state
  //Initial state of profile always takes some time to update
  const [_profile, updateProfile] = useState(profile);
  const [_education, updateEducation] = useState(profile.education);
  const [_experience, updateExperience] = useState(profile.experience);
  const [_projects, updateProjects] = useState(profile.projects);
  const dispatch = useDispatch();
  console.log(_projects);
  console.log(profile);

  //Saves all changes
  const editClickHandler = () => {
    dispatch(editProfile(_profile))
      .then(() => dispatch(getProfile(_profile.id)))
      .then(() => closeHandler());
  };

  //Updates and sets education field in profile
  const onChangeEducationHandler = (e) => {
    //Copy and updates tmp array
    const tmp = [..._education];
    tmp[e.target.id] = e.target.value;
    //Updates education array and profile in react stae
    updateEducation(tmp);
    updateProfile({ ..._profile, education: tmp });
  };

  //Adds an empty education field
  const addEducationField = () => {
    const tmp = [..._education, ""];
    updateEducation(tmp);
    updateProfile({ ..._profile, education: tmp });
  };
  //Deletes an education field
  const deleteEducationField = (id) => {
    const tmp = [..._education];
    //Removes index
    tmp.splice(id, 1);
    updateEducation(tmp);
    updateProfile({ ..._profile, education: tmp });
  };

  const onChangeExperienceHandler = (e) => {
    const tmp = [..._experience];
    tmp[e.target.id] = e.target.value;
    updateExperience(tmp);
    updateProfile({ ..._profile, experience: tmp });
  };

  const addExperienceField = () => {
    const tmp = [..._experience, ""];
    updateExperience(tmp);
    updateProfile({ ..._profile, experience: tmp });
  };

  const deleteExperienceField = (id) => {
    const tmp = [..._experience];
    tmp.splice(id, 1);
    updateExperience(tmp);
    updateProfile({ ..._profile, experience: tmp });
  };

  const onChangeProjectHandler = (e) => {
    const tmp = [..._projects];
    tmp[e.target.id] = e.target.value;
    updateProjects(tmp);
    updateProfile({ ..._projects, projects: tmp });
  };

  const addProjectField = () => {
    const tmp = [..._projects, ""];
    console.log(tmp);
    updateProjects(tmp);
    updateProfile({ ..._profile, projects: tmp });
  };

  const deleteProjectField = (id) => {
    const tmp = [..._projects];
    tmp.splice(id, 1);
    updateProjects(tmp);
    updateProfile({ ..._profile, projects: tmp });
  };

  return (
    <Modal size="lg" show={show} onHide={closeHandler}>
      <Modal.Header>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="education">
            <Form.Label>Education</Form.Label>
          </Form.Group>
          {_education.map((education, i) => (
            <Form.Group controlId={i}>
              <InputGroup className="mb-3">
                <Form.Control
                  as="textarea"
                  rows="1"
                  value={education}
                  onChange={onChangeEducationHandler}
                />
                <InputGroup.Append>
                  <Button
                    variant="outline-secondary"
                    id={i}
                    onClick={(e) => deleteEducationField(i)}
                  >
                    Delete
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          ))}
          <Button onClick={addEducationField}>Add Education</Button>
          <Form.Group className="mt-3" controlId="experience">
            <Form.Label>Experience</Form.Label>
          </Form.Group>
          {_experience.map((experience, i) => (
            <Form.Group controlId={i}>
              <InputGroup className="mb-3">
                <Form.Control
                  as="textarea"
                  rows="1"
                  value={experience}
                  onChange={onChangeExperienceHandler}
                />
                <InputGroup.Append>
                  <Button
                    variant="outline-secondary"
                    id={i}
                    onClick={(e) => deleteExperienceField(i)}
                  >
                    Delete
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          ))}
          <Button onClick={addExperienceField}>Add Experience</Button>
          <Form.Group className="mt-3" controlId="projects">
            <Form.Label>Projects</Form.Label>
          </Form.Group>
          {_projects.map((projects, i) => (
            <Form.Group controlId={i}>
              <InputGroup className="mb-3">
                <Form.Control
                  as="textarea"
                  rows="1"
                  value={projects}
                  onChange={onChangeProjectHandler}
                />
                <InputGroup.Append>
                  <Button
                    variant="outline-secondary"
                    id={i}
                    onClick={(e) => deleteProjectField(i)}
                  >
                    Delete
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          ))}
          <Button onClick={addProjectField}>Add Project</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeHandler}>
          Cancel
        </Button>
        <Button variant="warning" onClick={editClickHandler}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
