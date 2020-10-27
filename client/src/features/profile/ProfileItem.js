import React, { useState } from "react";
import { useSelector } from "react-redux";

import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ContentItem from "../content/ContentItem";
import EditProfile from "./EditProfile";
import DeleteProfile from "./DeleteProfile";

export default function ProfileItem({ profile, projects }) {
  const user = useSelector((state) => state.user);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  // Modal components will tell ContentItem when they wanna leave
  const handleEditClose = () => setShowEdit(false);
  const handleDeleteClose = () => setShowDelete(false);

  //Fields for profile
  const { logo, education, experience, resume } = profile;

  //Uses google's embedded file viewer
  const resumeUrl = "//docs.google.com/gview?url=" + resume + "&embedded=true";
  //Checks which fields to render (not actually necessary)
  const hasLogo = require("is-image");
  const hasResume = require("is-valid-http-url");
  const hasEducation = education.length > 0;
  const hasExperience = experience.length > 0;
  const hasProjects = projects.length > 0;

  return (
    <React.Fragment>

      <EditProfile
        profile={profile}
        projects={projects}
        show={showEdit}
        closeHandler={handleEditClose}
      />
      <DeleteProfile
        profile={profile}
        show={showDelete}
        closeHandler={handleDeleteClose}
      />
      <Container className="profile-user">
        <Row>
          <Col>
            <Image roundedCircle className="avatar" src={user.avatar} />
          </Col>
          <Col>
            {hasLogo && <Image roundedCircle className="logo" src={logo} />}
          </Col>
        </Row>
        <div className="line1"></div>
      </Container>
      <Container className="profile-details">
        <div className="name">
          {user.firstName} {user.lastName}
        </div>
        <div className="email">{user.email}</div>
        <div className="line2"></div>
      </Container>
      <Container className="profile-resume">
        <Row>
          <h4 className="heading">Resume</h4>
          {hasResume && (
            <iframe
              title="resume"
              src={resumeUrl}
              style={{ width: 400, height: 500 }}
              frameBorder="0"
            ></iframe>
          )}
        </Row>
      </Container>
      <Container className="profile">
        <Row>
        <Button
        variant="link"
        className="profile-edit"
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
        </Row>
        <Container className="profile-education">
          <div className="box"><h4 className="heading">Education</h4></div>
          {hasEducation && (
            <div className="field">
              {education.map((education) => (
                <div key={education}>{education}</div>
              ))}
            </div>
          )}
        </Container>

        <Container className="profile-experience">
          <div className="box"><h4 className=" heading">Experience</h4></div>
          {hasExperience && (
            <div className="field">
              {experience.map((experience) => (
                <div key={experience}>{experience}</div>
              ))}
            </div>
          )}
        </Container>
          <Container className="profile-project">
            <div className="box"><h4 className ="heading">Projects</h4></div>
              <p>{"\n"}{"\n"}</p>
            {hasProjects && (
              <div className="card-projects">
                {projects.map((projects) => (
                  <ContentItem content={projects} />
                ))}
              </div>
            )}
            </Container>
      </Container>
    </React.Fragment>
  );
}
