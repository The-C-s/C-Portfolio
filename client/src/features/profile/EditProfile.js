//Can probably split this into different fields
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProfile, getProfile, addLogo, addResume } from "./profileSlice";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Projects from "./Projects";

export default function EditProfile({ profile, projects, show, closeHandler }) {
  const dispatch = useDispatch();
  //_profile is the state variable, updateProfile is a function that updates the state
  //Initial state of profile always takes some time to update
  const [_profile, updateProfile] = useState(profile);
  const [_projects, updateProjects] = useState(projects);
  const [_education, updateEducation] = useState(profile.education);
  const [_experience, updateExperience] = useState(profile.experience);
  const [_logo, updateLogo] = useState();
  const [_resume, updateResume] = useState();
  const [viewAddProject, setView] = useState(false);

  //Saves all changes
  const editClickHandler = () => {
    dispatch(editProfile(_profile))
      .then(() => dispatch(getProfile(_profile.id)))
      .then(() => closeHandler());
  };

  const saveLogoHandler = () => {
    const _data = new FormData();
    _data.set("file", _logo);
    dispatch(addLogo(_data))
      .then(() => dispatch(getProfile(_profile.id)))
      .then(() => closeHandler());
  };

  const saveResumeHandler = () => {
    const _data = new FormData();
    _data.set("file", _resume);
    dispatch(addResume(_data))
      .then(() => dispatch(getProfile(_profile.id)))
      .then(() => closeHandler());
  };

  //Updates logo field
  const onLogoUploadHandler = (e) => updateLogo(e.target.files[0]);
  const onResumeUploadHandler = (e) => updateResume(e.target.files[0]);
  const deleteLogo = () => updateLogo("undefined");
  const deleteResume = () => updateResume("undefined");

  //Updates and sets education field in profile
  const onChangeEducationHandler = (e) => {
    //Copy and updates tmp array
    const tmp = [..._education];
    tmp[e.target.id] = e.target.value;
    //Updates education array and profile in react state
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

  const addProjectField = () => {
    setView(true);
  };

  const closeProjectField = () => {
    setView(false);
  };

  const deleteProjectField = (id) => {
    //Removes project from state 
    const tmp = [..._projects];
    tmp.splice(id, 1);
    updateProjects(tmp);
    //Convert to ids and update profile
    const tmpIds = [];
    for(let i = 0; i < _projects.length; i++){ 
      tmpIds.push(_projects[i].id); 
    } 
    updateProfile({ ..._profile, projects: tmpIds });
  };

  return (
    <Modal size="lg" show={show} onHide={closeHandler}>
      <Modal.Header>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="logo">
          <Form.Label>Logo</Form.Label>
          <br />
          <input className="mb-3" type="file" name="logo" onChange={onLogoUploadHandler} />
          <br/>
          <Row>
            <Button className="ml-3" onClick={deleteLogo}> Delete </Button>
            <Button className="ml-3" onClick={saveLogoHandler}> Save Logo </Button>
          </Row>
        </Form.Group>
        <Form.Group controlId="resume">
          <Form.Label>Resume</Form.Label>
          <br />
          <input className="mb-3"  type="file" name="resume" onChange={onResumeUploadHandler} />
          <br/>
          <Row>
            <Button className="ml-3" onClick={deleteResume}> Delete </Button>
            <Button className="ml-3" onClick={saveResumeHandler}> Save Resume </Button>
          </Row>
        </Form.Group>
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
                <Form.Control typeof="text" value={projects.title} readOnly />
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
          {"\n"}
          {viewAddProject && (
            <Projects
              projects={_projects}
              profile={_profile}
              updateProfile={updateProfile}
              updateProjects={updateProjects}
              closeProjectField = {closeProjectField}
            />
          )}
          {"\n"}
          {!viewAddProject && <Button onClick={addProjectField}>New Project</Button>}
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
