import React, { useState } from 'react';

/*
 * Having EditContent and DeleteContent created by ContentItem
 * helps keep Dashboard complexity as simple as possible and
 * can be called wherever in the app we decide to put a ContentItem.
 */
import EditContent from '.EditContent';
import DeleteContent from './DeleteContent';

export default function ContentItem({ content }) {

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // Modal components will tell ContentItem when they wanna leave
  const handleEditClose = () => setShowEdit(false);
  const handleDeleteClose = () => setShowDelete(false);

  /*
   * This component can be passed content as a prop so never has to be
   * tied up with Redux but its kids have full Redux functionality. Also its simple
   * enough in layout and only has Modal kids so it can be thrown anywhere.
   */
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
