import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

export default function SideNavbar() {

  const [active, setActive] = useState('dashboard');

  const onSelectHandler = eventKey => {
    setActive(eventKey);
  }

  return(
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <Nav className="flex-column" activeKey={active} onSelect={onSelectHandler}>
          <Nav.Item>
            <Nav.Link as={Link} to="/dashboard" eventKey="dashboard">
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/profile" eventKey="profile">
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/add" eventKey="add-content">
              Add Content
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/new" eventKey="add-profile">
              Add Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/share" eventKey="share">
              Share View
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Nav>
  );
}
