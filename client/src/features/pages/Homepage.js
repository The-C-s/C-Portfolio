import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import TopNav from '../layout/TopNav';

import Nav from 'react-bootstrap/Nav';
import NavLink from '../layout/NavLink';

import { getProfile } from '../profile/profileSlice';

export default function Homepage() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {

    async function fetch() {
      dispatch(getProfile(user.profile));
    }
    fetch();
  });

  return(
    <>
      <TopNav/>
      <br/>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
      <Nav className="flex-column">
        <h1> Homepage </h1>
        <hr/>
        <Nav.Item>
          <NavLink to="/dashboard" activeOnlyWhenExact={true} label={<>
            <Row> <h4 style={{ textDecorationLine: 'underline' }}> Dashboard </h4> </Row>
            <Row> <h6> View and edit the content in your portfolio </h6> </Row>
          </>}/>
        </Nav.Item>
        <hr/>
        <Nav.Item>
          <NavLink to="/profile" label={<>
            <Row> <h4 style={{ textDecorationLine: 'underline' }}> Profile </h4> </Row>
            <Row> <h6> View and edit your profile </h6> </Row>
          </>}/>
        </Nav.Item>
        <hr/>
        <Nav.Item>
          <NavLink to="/add" label={<>
            <Row> <h4 style={{ textDecorationLine: 'underline' }}> Add Content </h4> </Row>
            <Row> <h6> Create a new post for your portfolio </h6> </Row>
          </>}/>
        </Nav.Item>
        <hr/>
        <Nav.Item>
          <NavLink to="/share" label={<>
            <Row> <h4 style={{ textDecorationLine: 'underline' }}> Share View </h4> </Row>
            <Row> <h6> See your shared content </h6> </Row>
          </>}/>
        </Nav.Item>
      </Nav>
      </main>
    </>
  );
}
