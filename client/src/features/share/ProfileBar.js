import React from 'react';

import Nav from 'react-bootstrap/Nav';

import NavLink from '../layout/NavLink';
import LinkedUL from './LinkedUL';

export default function ProfileBar({ user, profile }) {

  return(
    <Nav className="profilebar flex-column col-sm-3 col-lg-2 d-none d-sm-block">
      <img circle className="profilebar-logo" src={profile.logo} alt="cPortfolio logo"/>
      <div className="profilebar-content">
        <div className="profilebar-name">
          {user.firstName} {user.lastName}
        </div>
        {profile.bio &&
          <div className="profilebar-headline">
            {profile.bio}
          </div>}
        <Nav.Item className="profilebar-item">
          <NavLink label="Education"/>
          <LinkedUL values={profile.education}/>
        </Nav.Item>
        <Nav.Item className="profilebar-item">
          <NavLink label="Experience"/>
          <LinkedUL values={profile.experience}/>
        </Nav.Item>
      </div>
    </Nav>
  );
}
