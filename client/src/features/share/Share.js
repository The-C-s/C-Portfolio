import React, { useState } from 'react';

import ReactList from 'react-list';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProfileBar from './ProfileBar';
import ContentItem from '../content/ContentItem';

import * as fakeData from '../../_mockapi/data';

export default function Share() {

  const { user, profile, content } = fakeData;

  // Fake showcase
  const randInt = x => Math.floor(Math.random() * x);
  const showcase = [
    content[randInt(content.length)],
    content[randInt(content.length)],
    content[randInt(content.length)],
    content[randInt(content.length)]
  ];

  console.log(showcase);

  // const [_projects, toggleExpand] = useState(content.map(project => { return { ...project, expand: false } }));

  // const onExpandClick = id => toggleExpand(_projects.map(
  //   project => project.id === id
  //     ? { ...project, expand: !project.expand }
  //     : project
  // ));

  // TODO: replace ContentItem with a variant for the showcase
  const showcaseRenderer = (index, key) => 
    <div className="share-showcase-item" key={key}>
      <ContentItem content={showcase[index]}/>
    </div>

  return(
    <>
      <Container fluid className="share">
        <ProfileBar user={user} profile={{ ...profile, bio: "Yolo's TSLA calls full time" }}/>
        <main role="main" className="share-main col-sm-9 col-lg-10 ml-sm-auto px-4">
          <Row>
            <h1>Showcase</h1>
            <div className="share-showcase">
              <ReactList
                axis="x"
                length={showcase.length}
                minSize={showcase.length}
                itemRenderer={showcaseRenderer}
                type="simple"
              />
            </div>
          </Row>
          <Row className="share-education">
            <h1>Education</h1>
          </Row>
          <Row className="share-experience">
            <h1>Experience</h1>
          </Row>
          <Row className="share-projects">
            <h1>Projects</h1>
          </Row>
        </main>
      </Container>
    </>
  );
}
