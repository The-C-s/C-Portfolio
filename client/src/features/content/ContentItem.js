import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import Tags from './Tags';
import VisibilityDot from './VisibilityDot';
import EditContent from './EditContent';
import DeleteContent from './DeleteContent';

const isUrl = require('is-valid-http-url');
const isImage = require('is-image');

export default function ContentItem({ content }) {

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // Modal components will tell ContentItem when they wanna leave
  const handleEditClose = () => setShowEdit(false);
  const handleDeleteClose = () => setShowDelete(false);
  const handleTitleClick = () => console.log(`${content.id} clicked.`);

  const { id, title, description, tags, displayDate } = content;
  const showTags = tags.length > 0;

  // Determine variant of ContentItem to use
  let image = false;
  if (content.content) {
    if (isUrl(content.content)) {
      if (isImage(content.content.split('?')[0])) {
        image = true;
      }
    }
  }

  const date = Intl.DateTimeFormat('en-AU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(Date.parse(displayDate));

  return(
    <React.Fragment>
      <EditContent content={content} show={showEdit} closeHandler={handleEditClose}/>
      <DeleteContent content={content} show={showDelete} closeHandler={handleDeleteClose}/>
      <Row>
        <Card>
        {image ?
          <React.Fragment>
            <Card.Img src={content.content} alt={title}/>
            <Card.ImgOverlay className="contentitem-header" onClick={handleTitleClick}>
              <div className="contentitem-title-visibility">
                <VisibilityDot id={id}/>
                <div className="contentitem-title">{title}</div>
              </div>
              <div className="contentitem-date">{date}</div>
            </Card.ImgOverlay>
          </React.Fragment>
        :
          <Card.Header className="contentitem-header" onClick={handleTitleClick}>
            <div className="contentitem-title-visibility">
              <VisibilityDot id={id}/>
              <div className="contentitem-title">{title}</div>
            </div>
            <div className="contentitem-date">{date}</div>
          </Card.Header>
        }
          <Card.Body>
            <div className="contentitem-container">
              <div className="contentitem-tags">
                {showTags && <Tags tags={tags}/>}
              </div>
              <Dropdown alignRight>
                <Dropdown.Toggle as={FontAwesomeIcon} icon={faEllipsisV} size="lg"></Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                  <Dropdown.Item onClick={() => setShowEdit(true)}>Edit</Dropdown.Item>
                  <Dropdown.Item onClick={() => setShowDelete(true)}>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <h3>Description</h3>
            <p className="card-text">{description}</p>
          </Card.Body>
        </Card>
      </Row>
    </React.Fragment>
  );
}
