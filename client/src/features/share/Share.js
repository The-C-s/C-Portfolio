import React, { useState, useRef, useEffect } from 'react';

import { ViewPort, LeftResizable, Fill, Info } from 'react-spaces';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import ProfileBar from './ProfileBar';
import Showcase from './Showcase';
import ShareContentItem from './ShareContentItem';

import * as fakeData from '../../_mockapi/data';

export default function Share() {

  const { user, profile, content } = fakeData;
  const [view, setView] = useState({ viewingContent: false, title: '' });
  
  const handleInfo = info => {
    if (info.width <= 150 && !view.viewingContent) setView({ viewingContent: true, title: '' });
    else if (info.width > 150 && view.viewingContent) setView({ viewingContent: false, title: '' });
  }

  // Refs for scrollTo
  const refs = {
    showcase: useRef(null),
    education: useRef(null),
    experience: useRef(null),
    projects: useRef(null)
  }

  const executeScroll = ref => scrollToRef(ref);

  let scrollToRef;
  useEffect(() => {
    scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
  });

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
      <ViewPort className="share">
        <LeftResizable size={300} maximumSize={350} minimumSize={60} trackSize={true}>
          <Info>{handleInfo}</Info>
          <ProfileBar
            user={user}
            profile={{ ...profile, bio: "Yolo's TSLA calls full time" }}
            condensed={view.viewingContent}
            condensedTitle={view.title}
            refs={refs}
            clickHandler={executeScroll}
          />
        </LeftResizable>
        <Fill className="share-main" scrollable={true}>
            <Row ref={refs.showcase} className="share-section share-showcase">
              <Col>
                <Row>
                  <h1>Showcase</h1>
                </Row>
                <Row>
                  <Showcase items={showcase}/>
                </Row>
              </Col>
            </Row>
            <Row ref={refs.education} className="share-section share-education">
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
            <Row ref={refs.experience} className="share-section share-experience">
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
            <Row ref={refs.projects} className="share-section share-projects">
              <Col>
                <Row>
                  <h1>Projects</h1>
                </Row>
                {content.map((contentItem, index) => <ShareContentItem content={contentItem} key={index}/>)}
              </Col>
            </Row>
        </Fill>
      </ViewPort>
    </>
  );
}
