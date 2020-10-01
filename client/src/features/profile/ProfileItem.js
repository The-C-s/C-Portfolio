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
  //ADD LOGO AND RESUME FIELDS
  const { logo, education, experience} = profile;

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
          <Col xs={3} md={3}>
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
          <h4>Projects</h4>
          <div className="card-projects">
              {/*}
            {projects.map((projects) => (
              <ListGroup.Item key={projects}>{projects}</ListGroup.Item>
            ))}*/}
            {projects.map(projects => <ContentItem content = {projects}/>)}
          </div>
        </ListGroup>
      </Row>
      
    </React.Fragment>
  );
}
