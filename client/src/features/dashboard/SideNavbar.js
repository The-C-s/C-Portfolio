import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

export default function SideNavbar({ view, setView }) {

  const onSelectHandler = eventKey => {
    setView(eventKey);
  }

  return(
    <>
      {(view !== 'homepage') &&
      <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <Nav className="flex-column" activeKey={view} onSelect={onSelectHandler}>
          <Nav.Item>
            <Nav.Link eventKey="homepage">
              Homepage
            </Nav.Link>
          </Nav.Item>
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
            <Nav.Item>
              <Nav.Link as={Link} to="/share" eventKey="share">
                Share View
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Nav>
    }
    </>
  );
}
