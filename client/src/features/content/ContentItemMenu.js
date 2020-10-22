import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import EditContent from './EditContent';
import DeleteContent from './DeleteContent';

export default function ContentItemMenu({ content }) {

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleEditClose = () => setShowEdit(false);
  const handleDeleteClose = () => setShowDelete(false);

  return(
    <>
      <EditContent content={content} show={showEdit} closeHandler={handleEditClose}/>
      <DeleteContent content={content} show={showDelete} closeHandler={handleDeleteClose}/>
      <Dropdown className="contentitemmenu" alignRight>
        <Dropdown.Toggle className="contentitemmenu contentitemmenu-button" as={FontAwesomeIcon} icon={faEllipsisV} size="lg"></Dropdown.Toggle>
        <Dropdown.Menu className="contentitemmenu contentitemmenu-dropdown" alignRight>
          <Dropdown.Item className="contentitemmenu contentitemmenu-item" onClick={() => setShowEdit(true)}>Edit</Dropdown.Item>
          <Dropdown.Item className="contentitemmenu contentitemmenu-item" onClick={() => setShowDelete(true)}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
