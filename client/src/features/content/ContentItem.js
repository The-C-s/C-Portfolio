import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import Tags from './Tags';
import VisibilityDot from './VisibilityDot';

const isUrl = require('is-valid-http-url');
const isImage = require('is-image');

/*
 * Having EditContent and DeleteContent created by ContentItem
 * helps keep Dashboard complexity as simple as possible and
 * can be called wherever in the app we decide to put a ContentItem.
 */
import EditContent from './EditContent';
import DeleteContent from './DeleteContent';

export default function ContentItem({ content }) {

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // Modal components will tell ContentItem when they wanna leave
  const handleEditClose = () => setShowEdit(false);
  const handleDeleteClose = () => setShowDelete(false);

  const { id, title, description, tags, displayDate } = content;
  const showTags = tags.length > 0;

  // Determine variant of ContentItem to use
  if (isUrl(content.body) && isImage(content.body)) {
    const image = true;
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
          <Card.Header>
            <div className="contentitem-title-visibility">
              <VisibilityDot id={id}/>
              <div className="contentitem-title">{title}</div>
            </div>
            <div className="contentitem-date">{date}</div>
          </Card.Header>
          <Card.Body>
            <div className="contentitem-container">
              <div>
                <div className="contentitem-tags">
                  {showTags && <Tags tags={tags}/>}
                </div>
                <h3>Description</h3>
              </div>
            </div>
            <p className="card-text">{description}</p>
            {/*<Button variant="link" className="float-right" onClick={() => setShowEdit(true)}>Edit</Button>
            <Button variant="link" className="float-right text-danger" onClick={() => setShowDelete(true)}>Delete</Button>*/}
          </Card.Body>
        </Card>
      </Row>
    </React.Fragment>
  );
}
