import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import TopNavbar from './TopNavbar';
import SideNavBar from './SideNavbar';
import Feed from './Feed';
import AddContent from '../content/AddContent';
import Profile from './Profile'; 
import AddProfile from '../profile/AddProfile'; 
import {getProfile} from '../profile/profileSlice'; 
import EditUser from '../user/EditUser';

export default function Dashboard() {

  // React hook for redirection
  const dispatch = useDispatch();
  const history = useHistory();
  const [view, setView] = useState('dashboard');
  const user = useSelector(state => state.user); 
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const [showUserEdit, setShowUserEdit] = useState(false);
  

  const handleEditClose = () => setShowUserEdit(false);



  useEffect(() => { if (!isAuthenticated) history.push('/') });

  useEffect(() => {
    async function fetch() { dispatch(getProfile(user.profile)) }
    fetch();
  });
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
            {(view === 'add-profile') && <AddProfile setView ={setViewHandler}/>}
            
          </main>
        </Row>
        <EditUser show = {showUserEdit} closeHandler = {handleEditClose} user = {_user} />
      </Container>
    </React.Fragment>
  );
}

//{(view === 'edit-user') && <Test setView={setViewHandler}/>}
//useSelector(state => state.user)
