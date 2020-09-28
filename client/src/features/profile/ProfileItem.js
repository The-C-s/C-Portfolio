import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

/*
 * Having EditContent and DeleteContent created by ContentItem
 * helps keep Dashboard complexity as simple as possible and
 * can be called wherever in the app we decide to put a ContentItem.
 */
import EditProfile from './EditProfile';
import DeleteProfile from './DeleteProfile';

export default function ProfileItem({ profile }) {

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // Modal components will tell ContentItem when they wanna leave
  const handleEditClose = () => setShowEdit(false);
  const handleDeleteClose = () => setShowDelete(false);

  //Input fields for profile 
  //ADD LOGO AND RESUME FIELDS 
  const { education, experience, projects, logo, resume } = profile;

  return(
    <React.Fragment>
      <EditProfile profile={profile} show={showEdit} closeHandler={handleEditClose}/>
      <DeleteProfile profile={profile} show={showDelete} closeHandler={handleDeleteClose}/>
      <Row>
        <Card className="flex-fill mt-5 ml-5 mr-5">
          <Card.Body>
            <p className="card-education">{education}</p>
            <p className="card-experience">{experience}</p>
            <p className="card-projects">{projects}</p>
            <Button variant="link" className="float-right" onClick={() => setShowEdit(true)}>Edit</Button>
            <Button variant="link" className="float-right text-danger" onClick={() => setShowDelete(true)}>Delete</Button>
          </Card.Body>
        </Card>
      </Row>
    </React.Fragment>
  );
}
