import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { parseDate } from '../../common/helpers';

const isUrl = require('is-valid-http-url');
const isImage = require('is-image');

export default function ShareContentItem({ content, clickHandler, closeHandler }) {

  const { id, title, description, displayDate } = content;
  const [focused, setFocus] = useState(false);
  const date = parseDate(displayDate);

  // Determine variant of ContentItem to use
  let image = false;
  if (content.content) {
    if (isUrl(content.content)) {
      if (isImage(content.content.split('?')[0])) {
        image = true;
      }
    }
  }

  const contentClickHandler = () => {
    if (!focused) {
      clickHandler(content);
      setFocus(true);
    }
  }

  const closeClickHandler = e => {
    closeHandler(e);
    setFocus(false);
  }

  return(
    <Container
      id={id}
      className={`sharecontentitem sharecontentitem-container${focused ? '-focused' : ''}`}
      key={id}
      onClick={contentClickHandler}
    >
      <div className="sharecontentitem sharecontentitem-card">
        <Row className="sharecontentitem sharecontentitem-head">
          <Col xs={11}>
            <Row className="sharecontentitem sharecontentitem-title">{title}</Row>
            <Row className="sharecontentitem sharecontentitem-date">{date}</Row>
          </Col>
          {focused &&
            <Col>
              <Row className="sharecontentitem sharecontentitem-menu" onClick={closeClickHandler}>
                <strong>goodbye</strong>
              </Row>
            </Col>}
        </Row>
        <Row className="sharecontentitem sharecontentitem-body">
          {image &&
            <Col className="sharecontentitem sharecontentitem-image-container" md={3}>
              <Row className="sharecontentitem sharecontentitem-image-container">
                <img className="sharecontentitem sharecontentitem-image" src={content.content} alt={title}></img>
              </Row>
            </Col>}
          <Col>
            <Row>
              <p className="sharecontentitem sharecontentitem-description">{description}</p>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
