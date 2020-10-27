import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { parseDate } from '../../common/helpers';

const isUrl = require('is-valid-http-url');
const isImage = require('is-image');

export default function ShareContentItem({ content }) {

  const { id, title, description, displayDate } = content;
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

  return(
    <Container className="sharecontentitem sharecontentitem-container" key={id}>
      <div className="sharecontentitem sharecontentitem-card">
        <Row className="sharecontentitem sharecontentitem-head">
          <Col xs={11}>
            <Row className="sharecontentitem sharecontentitem-title">{title}</Row>
            <Row className="sharecontentitem sharecontentitem-date">{date}</Row>
          </Col>
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
