import React, { useState } from 'react';

export default function ContentItem({ content }) {

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

    const { id, title, body } = content;

    return(
      <div className="row">
        <div className="flex-fill card mt-5 ml-5 mr-5">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{body}</p>
            <a href="#" className="card-link float-right ml-3">Edit</a>
            <a href="#" className="card-link float-right text-danger">Delete</a>
          </div>
        </div>
      </div>
    );
}
