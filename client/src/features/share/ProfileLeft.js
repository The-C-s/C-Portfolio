import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Nav from 'react-bootstrap/Nav';
import Collapse from 'react-bootstrap/Collapse';

import { faAddressCard, faPray, faFolderPlus, faSignOutAlt, faStream, faHotTub } from '@fortawesome/free-solid-svg-icons';

import NavLink from '../layout/NavLink';

import { getProfile } from '../profile/profileSlice';

export default function ProfileLeft() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const profile = useSelector(state => state.profile);
  const content = useSelector(state => state.content);
  const [expandContent, toggleContent] = useState(false);

  useEffect(() => {

    async function fetch() {
      dispatch(getProfile(user.profile));
    }
    fetch();
  },[]);

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
    </Nav>
  );
}
