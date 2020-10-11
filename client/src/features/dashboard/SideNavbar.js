import React from 'react';

import Nav from 'react-bootstrap/Nav';

import NavLink from './NavLink';

export default function SideNavbar() {
  return(
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <Nav className="flex-column">
          <Nav.Item>
            <NavLink to="/dashboard" activeOnlyWhenExact={true} label="Dashboard"/>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/profile" label="Profile"/>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/add" label="Add Content"/>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/new" label="Add Profile"/>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/share" label="Share View"/>
          </Nav.Item>
        </Nav>
      </div>
    </Nav>
  );
}
