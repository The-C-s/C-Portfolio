import React from 'react';

import Row from 'react-bootstrap/Row';

import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function Homepage({ setView, setActive }) {

  const onSelectHandler = eventKey => {
    setView(eventKey);
  }

  return(
    <>
      <br/>
      <div style={{display: 'flex',  justifyContent:'left', alignItems:'center'}}>
      <Nav className="flex-column" onSelect={onSelectHandler}>
        <h1> Homepage </h1>
        <hr/>
        <Nav.Item>
          <Nav.Link eventKey="dashboard">
          <Row> <h4 style={{ textDecorationLine: 'underline' }}> Dashboard </h4> </Row>
          <Row> <h6> View and edit the content in your portfolio </h6> </Row>
          </Nav.Link>
        </Nav.Item>
        <hr/>
        <Nav.Item>
          <Nav.Link eventKey="profile">
          <Row> <h4 style={{ textDecorationLine: 'underline' }}> Profile </h4> </Row>
          <Row> <h6> View and edit your profile </h6> </Row>
          </Nav.Link>
        </Nav.Item>
        <hr/>
        <Nav.Item>
          <Nav.Link eventKey="add-content">
          <Row> <h4 style={{ textDecorationLine: 'underline' }}> Add Content </h4> </Row>
          <Row> <h6> Create a new post for your portfolio </h6> </Row>
          </Nav.Link>
        </Nav.Item>
        <hr/>
        <Nav.Item>
          <Nav.Link eventKey="add-profile">
          <Row> <h4 style={{ textDecorationLine: 'underline' }}> Add Profile </h4> </Row>
          <Row> <h6> Create your profile </h6> </Row>
          </Nav.Link>
        </Nav.Item>
        <hr/>
        <Nav.Item>
          <Nav.Link as={Link} to="/share" eventKey="share">
          <Row> <h4 style={{ textDecorationLine: 'underline' }}> Share View </h4> </Row>
          <Row> <h6> See your shared content </h6> </Row>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
    </>
  );
}
