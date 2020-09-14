import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../user/userSlice';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function TopNavbar() {

  const dispatch = useDispatch();

  return(
    <Navbar variant="dark" className="fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <Nav.Link as={Link} to="/dashboard" className="navbar-brand col-sm-3 col-md-2 mr-0">Dashboard</Nav.Link>
      <Nav className="px-3">
        <Nav.Item className="text-nowrap">
          <Nav.Link as={Link} to="/" onClick={() => dispatch(logout())}>Sign out</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
