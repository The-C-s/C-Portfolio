import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import TopNavbar from './TopNavbar';
import SideNavBar from './SideNavbar';
import Feed from './Feed';
import AddContent from '../content/AddContent';
import Profile from './Profile'; 
import AddProfile from '../profile/AddProfile';
import EditUser from '../user/EditUser';

import { getProfile } from '../profile/profileSlice';

export default function Dashboard() {

  const dispatch = useDispatch();

  const [view, setView] = useState('dashboard');
  const [showUserEdit, setShowUserEdit] = useState(false);

  const user = useSelector(state => state.user);

  useEffect(() => {

    async function fetch() {
      dispatch(getProfile(user.profile));
    }
    fetch();
  });

  const handleEditClose = () => setShowUserEdit(false);

  /*
   * This is a bad way of doing a dashboard. Simply swaps out whatever component
   * is showing in <main> based on whatever string is set, and changing that
   * string by clicking the links in the navbar. Quick and easy but not nice to
   * maintain.
   */
  const setViewHandler = eventKey => setView(eventKey);

  return(
    <React.Fragment>
      <TopNavbar/>
      <Container fluid>
        <Row>
          <SideNavBar setView={setViewHandler}/>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <Button variant = "link" className = "float-right" onClick = {() => setShowUserEdit(true)}>
            User Details
        </Button>
            {(view === 'dashboard') && <Feed/>}
            {(view === 'add-content') && <AddContent setView={setViewHandler}/>}
            {(view === 'profile') && <Profile/>}            
          </main>
        </Row>
        <EditUser show = {showUserEdit} closeHandler = {handleEditClose} user = {user} />
      </Container>
    </React.Fragment>
  );
}
