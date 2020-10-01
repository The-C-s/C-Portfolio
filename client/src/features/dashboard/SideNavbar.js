import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';

export default function SideNavbar({ setView }) {

  const [active, setActive] = useState('dashboard');

  const onSelectHandler = eventKey => {
    setActive(eventKey);
    setView(eventKey);
  }

  return(
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <Nav className="flex-column" activeKey={active} onSelect={onSelectHandler}>
          <Nav.Item>
            <Nav.Link eventKey="dashboard">
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="profile">
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="add-content">
              Add Content
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="add-profile">
              Add Profile
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Nav>
  );
}
