import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import ContentItem from "../content/ContentItem"; 
import EditProfile from "./EditProfile";
import DeleteProfile from "./DeleteProfile";

export default function ProfileItem({ profile, projects }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  // Modal components will tell ContentItem when they wanna leave
  const handleEditClose = () => setShowEdit(false);
  const handleDeleteClose = () => setShowDelete(false);

  //Fields for profile
  const { logo, education, experience, resume} = profile;
  
  //Uses google's embedded file viewer
  const resumeUrl = "//docs.google.com/gview?url=" + resume + "&embedded=true";
  //Checks which fields to render (not actually necessary)
  const hasLogo = require('is-image'); 
  const hasResume = require('is-valid-http-url'); 
  const hasEducation = education.length > 0; 
  const hasExperience = experience.length > 0; 
  const hasProjects = projects.length > 0;  

  return (
    <React.Fragment>
        <Button
        variant="link"
        className="float-right"
        onClick={() => setShowEdit(true)}
      >
        Edit
      </Button>
      <Button
        variant="link"
        className="float-right text-danger"
        onClick={() => setShowDelete(true)}
      >
        Delete
      </Button>
      <EditProfile
        profile={profile}
        projects = {projects}
        show={showEdit}
        closeHandler={handleEditClose}
      />
      <DeleteProfile
        profile={profile}
        show={showDelete}
        closeHandler={handleDeleteClose}
      />
      <Container className = "profile">
        <Row>
        <h4 className="mt-3 mb-5">Logo</h4>
          <Col className="mt-3 ml-5 mr-5">
            {hasLogo && <Image className= "profile profile-logo" src={logo} roundedCircle/>} 
          </Col>
        </Row>
      </Container>
      <Row>
        <ListGroup className="mt-3 ml-5 mr-5">
          <h4 className="mt-3 mb-5">Education</h4>
          {hasEducation && 
          <div className="card-education">
            {education.map((education) => (
              <ListGroup.Item className="flex-fill ml-4 mr-5" key={education}>{education}</ListGroup.Item>
            ))}
          </div>}
        </ListGroup>
      </Row>
      <Row>
        <ListGroup className="mt-3 ml-5 mr-5">
          <h4 className="mt-3 mb-5">Experience</h4>
          {hasExperience && 
            <div className="card-experience">
            {experience.map((experience) => (
              <ListGroup.Item className="flex-fill ml-4 mr-5" key={experience}>{experience}</ListGroup.Item>))}
          </div>}
        </ListGroup>
      </Row>
      <Row>
        <ListGroup className="mt-5 ml-5 mr-5">
          <h4 className="mt-3 mb-5">Resume</h4>
            {hasResume && <iframe title = "resume" src= {resumeUrl} style={{width:600, height:500}} frameBorder="0"></iframe>}
        </ListGroup>
     </Row>
      <Row>
        <ListGroup className="profile-projects">
          <h4>Projects</h4>
          { hasProjects && 
          <div className="card-projects">
            {projects.map(projects => <ContentItem content = {projects}/>)}
          </div>
          }
        </ListGroup>
      </Row>
    </React.Fragment>
  );
}
