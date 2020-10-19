import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Tags from './Tags';
import ContentItemMenu from './ContentItemMenu';

import { parseDate } from '../../common/helpers';

const isUrl = require('is-valid-http-url');
const isImage = require('is-image');

export default function ContentItem({ content }) {

  const { id, title, description, displayDate } = content;
  const date = parseDate(displayDate);
  let { tags } = content;
  const showTags = tags.length > 1 || (tags.length === 1 && tags[0] !== "");

  // Bandaid
  if (tags.length === 1) tags = tags[0].split(',');

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
    <>
      <Container className="contentitem contentitem-container" key={id}>
        <Card className="contentitem contentitem-card">
          <Row className="contentitem contentitem-head">
            <Col xs={11}>
              <Row className="contentitem contentitem-title">{title}</Row>
              <Row className="contentitem contentitem-date">{date}</Row>
            </Col>
            <Col>
              <Row className="contentitem contentitem-menu">
                <ContentItemMenu content={content}/>
              </Row>
            </Col>
          </Row>
          <Row className="contentitem contentitem-body">
            {image &&
              <Col md={3} className="contentitem contentitem-image-container">
                <Row className="contentitem contentitem-image-container">
                  <img className="contentitem contentitem-image" src={content.content}></img>
                </Row>
              </Col>}
            <Col>
              <Row>
                <p className="contentitem contentitem-description">{description}</p>
              </Row>
            </Col>
          </Row>
          <Row className="contentitem contentitem-footer">
            <Container className="contentitem contentitem-container contentitem-tags">
              {showTags && <Tags tags={tags}/>}
            </Container>
          </Row>
        </Card>
      </Container>
    </>
  );
}
