import React, { useState } from 'react';

import EditContent from './EditContent';
import DeleteContent from './DeleteContent';

export default function ContentItem({ content }) {

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleEditClose = () => setShowEdit(false);
  const handleDeleteClose = () => setShowDelete(false);

  const { title, description } = content;

  return(
    <React.Fragment>
      <EditContent content={content} show={showEdit} closeHandler={handleEditClose}/>
      <DeleteContent content={content} show={showDelete} closeHandler={handleDeleteClose}/>
      <div className="row">
        <div className="flex-fill card mt-5 ml-5 mr-5">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <button className="btn btn-link float-right" onClick={() => setShowEdit(true)}>Edit</button>
            <button className="btn btn-link float-right text-danger" onClick={() => setShowDelete(true)}>Delete</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
