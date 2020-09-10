import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

export default function SideNavbar() {

  const [active, setActive] = useState('dashboard');

  return(
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar" activeKey={active} onSelect={eventKey => setActive(eventKey)}>
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Nav.Link as={Link} to="/dashboard" eventKey="dashboard">
              Dashboard
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link as={Link} to="/create" eventKey="add-content">
              Add Content
            </Nav.Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
}
