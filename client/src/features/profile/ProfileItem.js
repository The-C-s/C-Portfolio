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
        show={showEdit}
        closeHandler={handleEditClose}
      />
      <DeleteProfile
        profile={profile}
        show={showDelete}
        closeHandler={handleDeleteClose}
      />
      <Container>
        <Row>
          <Col className="mt-3 ml-5 mr-5">
            <Image src={logo} roundedCircle fluid />
          </Col>
        </Row>
      </Container>
      <Row>
        <ListGroup className="mt-3 ml-5 mr-5">
          <h4 className="mt-3 mb-5">Education</h4>
          <div className="card-education">
            {education.map((education) => (
              <ListGroup.Item className="flex-fill ml-4 mr-5" key={education}>{education}</ListGroup.Item>
            ))}
          </div>
        </ListGroup>
      </Row>
      <Row>
        <ListGroup className="mt-3 ml-5 mr-5">
          <h4 className="mt-3 mb-5">Experience</h4>
          <div className="card-experience">
            {experience.map((experience) => (
              <ListGroup.Item className="flex-fill ml-4 mr-5" key={experience}>{experience}</ListGroup.Item>
            ))}
          </div>
        </ListGroup>
      </Row>
      <Row>
        <ListGroup className="mt-5 ml-5 mr-5">
          <h4 className="mt-3 mb-5">Resume</h4>
            <iframe title = "resume" src= {resumeUrl} style={{width:600, height:500}} frameBorder="0"></iframe>
        </ListGroup>
     </Row>
      <Row>
        <ListGroup className="mt-5 ml-5 mr-5">
          <h4>Projects</h4>
          <div className="card-projects">
            {projects.map(projects => <ContentItem content = {projects}/>)}
          </div>
        </ListGroup>
      </Row>
      
    </React.Fragment>
  );
}
