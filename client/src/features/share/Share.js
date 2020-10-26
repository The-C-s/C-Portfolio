import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import ProfileBar from './ProfileBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEnvelope, faArrowCircleDown, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

import { parseDate, getContentType } from '../../common/helpers';

export default function Share() {

  const user = useSelector(state => state.user);
  const profile = useSelector(state => state.profile);
  const content = useSelector(state => state.content);

  const [_projects, toggleExpand] = useState(content.map(project => { return { ...project, expand: false } }));

  const onExpandClick = id => toggleExpand(_projects.map(
    project => project.id === id
      ? { ...project, expand: !project.expand }
      : project
  ));

  return(
    <>
      <Button as={Link} to="/dashboard" variant="link" className="return">Back to dashboard</Button>
      <Container className="share">
        <Col xs={3}>
          <ProfileBar user={user} profile={{ ...profile, bio: "Yolo's TSLA calls full time" }}/>
        </Col>
        <Col xs={9}>
          
        </Col>
      </Container>
    </>
  );
}
