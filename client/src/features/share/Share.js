import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import ProfileBar from './ProfileBar';
import Showcase from './Showcase';
import ShareContentItem from './ShareContentItem';

import * as fakeData from '../../_mockapi/data';

export default function Share() {

  const { user, profile, content } = fakeData;
  const [contentView, setContentView] = useState(false);
  
  const onClickHandler = () => setContentView(!contentView);

  // Showcase Simulator®
  const randInt = x => Math.floor(Math.random() * x);
  const showcase = [
    content[randInt(content.length)],
    content[randInt(content.length)],
    content[randInt(content.length)],
    content[randInt(content.length)]
  ];

  return(
    <>
      <Container fluid className="share">
        <ProfileBar
          user={user}
          profile={{ ...profile, bio: "Yolo's TSLA calls full time" }}
          expanded={!contentView}
        />
        <main role="main" className="share-main col-sm-9 col-lg-10 ml-sm-auto px-4">
          <Row className="share-section share-showcase">
            <Col>
              <Row>
                <h1 onClick={onClickHandler}>Showcase</h1>
              </Row>
              <Row>
                <Showcase items={showcase}/>
              </Row>
            </Col>
          </Row>
          <Row className="share-section share-education">
            <Col>
              <Row>
                <h1>Education</h1>
              </Row>
              <Row>
                <Card>
                  {profile.education.map((educationItem, index) => 
                    <div key={index}>
                      <h3>{educationItem}</h3>
                      <p>Description of lessons learned.</p>
                      <p><strong>Awards and achievements</strong> Best</p>
                      <p><strong>Extracurricular</strong> Longjump</p>
                    </div>)}
                </Card>
              </Row>
            </Col>
          </Row>
          <Row className="share-section share-experience">
            <Col>
              <Row>
                <h1>Experience</h1>
              </Row>
              <Row>
                <Card>
                  {profile.experience.map((experienceItem, index) => 
                    <div key={index}>
                      <h3>{experienceItem}</h3>
                      <p>Description of experience.</p>
                      <p><strong>Responsibilities</strong> Smart</p>
                      <p><strong>Achievements</strong> Longjump</p>
                    </div>)}
                </Card>
              </Row>
            </Col>
          </Row>
          <Row className="share-section share-projects">
            <Col>
              <Row>
                <h1>Projects</h1>
              </Row>
              {content.map((contentItem, index) => <ShareContentItem content={contentItem} key={index}/>)}
            </Col>
          </Row>
        </main>
      </Container>
    </>
  );
}
