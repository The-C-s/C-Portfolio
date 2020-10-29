import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Nav from 'react-bootstrap/Nav';
import Collapse from 'react-bootstrap/Collapse';

import { faAddressCard, faPray, faFolderPlus, faSignOutAlt, faStream, faHotTub } from '@fortawesome/free-solid-svg-icons';

import NavLink from './NavLink';

import { logout } from '../user/userSlice';

export default function SideNavbar() {

  const dispatch = useDispatch();
  const [expandContent, toggleContent] = useState(false);

  const onContentClick = () => toggleContent(!expandContent);

  return(
    <Nav className="sidenav flex-column col-sm-3 col-lg-2 d-none d-sm-block">
      <img className="sidenav-logo" src="/images/logo_white_transparent.png" alt="cPortfolio logo"/>
      <Nav.Item className="sidenav-item">
        <NavLink
          to="/homepage"
          label="Overview"
          icon={faHotTub}
        />
      </Nav.Item>
      <div className={`sidenav-group${expandContent ? ' sidenav-group-expanded' : ''}`}>
        <Nav.Item className="sidenav-item" onClick={onContentClick}>
          <NavLink
            dropdown
            expanded={expandContent}
            to="/dashboard/content"
            label="Content"
            icon={faStream}
            activeOnlyWhenExact={true}
          />
        </Nav.Item>
        <Collapse in={expandContent}>
          <div className="collapse-group">
            <Nav.Item className="sidenav-item">
              <NavLink
                sub
                to="/dashboard/content/add"
                label="New project"
                icon={faFolderPlus}
              />
            </Nav.Item>
            <Nav.Item className="sidenav-item">
              <NavLink
                sub
                to="/dashboard/content/upload"
                label="New file upload"
                icon={faFolderPlus}
              />
            </Nav.Item>
          </div>
        </Collapse>
      </div>
      <Nav.Item className="sidenav-item">
        <NavLink
          to="/dashboard/profile"
          label="Profile"
          icon={faAddressCard}
        />
      </Nav.Item>
      <Nav.Item className="sidenav-item">
        <NavLink
          to="/dashboard/sharepages"
          label="Share"
          icon={faPray}
        />
      </Nav.Item>
      <Nav.Item className="sidenav-item">
        <NavLink
          to="/"
          label="Sign out"
          icon={faSignOutAlt}
          activeOnlyWhenExact={true}
          onClick={() => dispatch(logout())}
        />
      </Nav.Item>
    </Nav>
  );
}
