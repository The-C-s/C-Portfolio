import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Nav from 'react-bootstrap/Nav';

import { faSearch, faBell, faCog } from '@fortawesome/free-solid-svg-icons';

import NavButton from './NavButton';
import AvatarButton from './AvatarButton';
import EditUser from '../user/EditUser';
import Search from '../search/Search';

export default function TopNav() {
  
  const [showUserEdit, setShowUserEdit] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const user = useSelector(state => state.user);

  const handleEditClose = () => setShowUserEdit(false);
  const searchClickHandler = () => setShowSearch(!showSearch);

  return(
    <>
      <EditUser show={showUserEdit} closeHandler={handleEditClose} user={user}/>
      <Nav className="topnav justify-content-end">
        <Nav.Item className="topnav topnav-navitem topnav-search" onClick={searchClickHandler}>
          <Search show={showSearch}/>
          <NavButton icon={faSearch}></NavButton>
        </Nav.Item>
        <Nav.Item className="topnav topnav-navitem topnav-notifications" onClick={() => console.log('\'Notifications\' clicked')}>
          <NavButton icon={faBell}></NavButton>
        </Nav.Item>
        <Nav.Item className="topnav topnav-navitem topnav-settings" onClick={() => console.log('\'Settings\' clicked')}>
          <NavButton icon={faCog}></NavButton>
        </Nav.Item>
        <Nav.Item className="topnav topnav-navitem topnav-avatar" onClick={() => setShowUserEdit(true)}>
          <AvatarButton image={user.avatar}/>
        </Nav.Item>
      </Nav>
    </>
  );
}
