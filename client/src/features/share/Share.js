import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import ProfileLeft from './ProfileLeft';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEnvelope, faArrowCircleDown, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

const isUrl = require('is-valid-http-url');
const isImage = require('is-image');

export default function Share() {

  const { user, profile, content } = useSelector(state => state);

  const [_projects, toggleExpand] = useState(content.map(project => { return { ...project, expand: false } }));

  const onExpandClick = id => toggleExpand(_projects.map(
    project => project.id === id
      ? { ...project, expand: !project.expand }
      : project
  ));

  const getContentType = userContent => {

    if (userContent) {
      if (isUrl(userContent)) {
        return (isImage(userContent.split('?')[0])) ? 'image' : 'url';
      } else {
        return 'text';
      }
    }

    return null;
  }

  const toLongDate = date => Intl.DateTimeFormat('en-AU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(Date.parse(date));

  return(
    <>
      <Button as={Link} to="/dashboard" variant="link" className="return">Back to dashboard</Button>
      <Container className="share">
        <Col xs={3}>
          <ProfileLeft/>
        </Col>
        <Col xs={9}>
          <Row>
            <Col xs="auto">
              <Image roundedCircle className="logo" src={profile.logo}/>
            </Col>
            <Col>
              <Row className="name">{user.firstName} {user.lastName}</Row>
              <Row className="bio">
                <Col>
                  <h6>Experience</h6>
                  {profile.experience.map(experience => <p className="bio-item">{experience}</p>)}
                </Col>
                <Col>
                  <h6>Education</h6>
                  {profile.education.map(education => <p className="bio-item">{education}</p>)}
                </Col>
              </Row>
              <Row className="links">
                <Button as="a" href={profile.resume} target="_blank" variant="link"><FontAwesomeIcon icon={faFilePdf}/> Resume</Button>
                <Button as="a" href={`mailto:${user.email}`} variant="link"><FontAwesomeIcon icon={faEnvelope}/> {user.email}</Button>
              </Row>
            </Col>
          </Row>
          <Row>
            {_projects.map(project =>
              <Row key={project.id} className="project">
                <Row>
                  <Col xs="auto" className="date">{toLongDate(project.displayDate)}</Col>
                  <Col>
                    <Row className="title">{project.title}</Row>
                    <Row className="description">{project.description}</Row>
                    <Button variant="link" onClick={() => onExpandClick(project.id)}>
                      {project.expand && <>Hide project <FontAwesomeIcon icon={faArrowCircleUp}/></>}
                      {!project.expand && <>Show project <FontAwesomeIcon icon={faArrowCircleDown}/></>}
                    </Button>
                  </Col>
                </Row>
                <Collapse in={project.expand}>
                  <Row>
                    {(getContentType(project.content) === 'text') && <div dangerouslySetInnerHTML={{ __html: project.content }}/>}
                    {(getContentType(project.content) === 'image') && <a href={project.content} target="_blank" rel="noopener noreferrer"><Image src={project.content}/></a>}
                    {(getContentType(project.content) === 'url') && <a href={project.content} target="_blank" rel="noopener noreferrer">External link</a>}
                  </Row>
                </Collapse>
                <hr/>
              </Row>
            )}
          </Row>
        </Col>
      </Container>
    </>
  );
}
