import React from 'react';
import { useSelector } from 'react-redux';

import Nav from 'react-bootstrap/Nav';

import { faSearch, faBell, faCog } from '@fortawesome/free-solid-svg-icons';

import NavButton from './NavButton';
import AvatarButton from './AvatarButton';

export default function TopNav() {

  const avatar = useSelector(state => state.user.avatar);

  return(
    <Nav className="topnav justify-content-end">
      <Nav.Item>
        <NavButton icon={faSearch}></NavButton>
      </Nav.Item>
      <Nav.Item>
        <NavButton icon={faBell}></NavButton>
      </Nav.Item>
      <Nav.Item>
        <NavButton icon={faCog}></NavButton>
      </Nav.Item>
      <Nav.Item>
        <AvatarButton image={avatar}/>
      </Nav.Item>
    </Nav>
  );
}
