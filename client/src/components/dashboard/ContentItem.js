import React, { useState } from 'react';


import DeleteContent from './DeleteContent';

export default function ContentItem({ content }) {

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleEditClose = () => setShowEdit(false);
  const handleDeleteClose = () => setShowDelete(false);

  const { id, title, body } = content;

  return(
    <React.Fragment>
      <DeleteContent content={content} show={showDelete} closeHandler={handleDeleteClose}/>
      <div className="row">
        <div className="flex-fill card mt-5 ml-5 mr-5">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{body}</p>
            <button className="btn btn-link float-right" onClick={() => setShowEdit(true)}>Edit</button>
            <button className="btn btn-link float-right text-danger" onClick={() => setShowDelete(true)}>Delete</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
