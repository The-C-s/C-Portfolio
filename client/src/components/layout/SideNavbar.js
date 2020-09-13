import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

export default function SideNavbar({ setView }) {

  const [active, setActive] = useState('dashboard');

  const onSelectHandler = eventKey => {
    setActive(eventKey);
    setView(eventKey);
  }

  return(
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar" activeKey={active} onSelect={onSelectHandler}>
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Nav.Link eventKey="dashboard">
              Dashboard
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link eventKey="add-content">
              Add Content
            </Nav.Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
}
