import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Nav from 'react-bootstrap/Nav';

import AvatarButton from './AvatarButton';
import EditUser from '../user/EditUser';
import Search from '../search/Search';

export default function TopNav() {
  
  const user = useSelector(state => state.user);
  const [showUserEdit, setShowUserEdit] = useState(false);

  const handleEditClose = () => setShowUserEdit(false);

  return(
    <>
      <EditUser show={showUserEdit} closeHandler={handleEditClose} user={user}/>
      <Nav className="topnav justify-content-end">
        <Nav.Item className="topnav topnav-navitem topnav-search">
          <Search/>
        </Nav.Item>
        <Nav.Item className="topnav topnav-navitem topnav-avatar" onClick={() => setShowUserEdit(true)}>
          <AvatarButton image={user.avatar}/>
        </Nav.Item>
      </Nav>
    </>
  );
}
