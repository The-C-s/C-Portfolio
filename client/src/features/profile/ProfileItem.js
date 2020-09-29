import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import EditProfile from './EditProfile';
import DeleteProfile from './DeleteProfile';

export default function ProfileItem( profile ) {

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // Modal components will tell ContentItem when they wanna leave
  const handleEditClose = () => setShowEdit(false);
  const handleDeleteClose = () => setShowDelete(false);

  //Fields for profile 
  //ADD LOGO AND RESUME FIELDS
  const {education, experience, projects } = profile;
  //const showEducation = education.length > 0; 
  //const showExperience = experience.length > 0; 
  //const showProjects = projects.length > 0; 

  return(
    <React.Fragment>
      <EditProfile profile={profile} show={showEdit} closeHandler={handleEditClose}/>
      <DeleteProfile profile={profile} show={showDelete} closeHandler={handleDeleteClose}/>
      <Row>
        <Card className="flex-fill mt-5 ml-5 mr-5">
          <Card.Body>
          <h4>Education</h4>
            <p className="card-education">{
                education
            }</p>
          </Card.Body>
         </Card>
      </Row>
      <Row>
      <Card className="flex-fill mt-5 ml-5 mr-5">
         <Card.Body>
          <h4>Experience</h4>
            <p className="card-experience">{
                experience
            }</p>
            </Card.Body>
         </Card>
        </Row>
      <Row>
          <Card className="flex-fill mt-5 ml-5 mr-5">
          <Card.Body>
            <h4>Projects</h4>
            <p className="card-projects">{
                projects
            }</p>
            </Card.Body>
            </Card>
        </Row>
        <Button variant="link" className="float-right" onClick={() => setShowEdit(true)}>Edit</Button>
        <Button variant="link" className="float-right text-danger" onClick={() => setShowDelete(true)}>Delete</Button>

    </React.Fragment>
  );
}
