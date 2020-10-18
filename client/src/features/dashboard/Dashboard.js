import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import TopNavbar from '../layout/TopNavbar';
import SideNavBar from '../layout/SideNavbar';
import EditUser from '../user/EditUser';

import { getProfile } from '../profile/profileSlice';
import { privateRoutes } from '../../common/routes';

export default function Dashboard() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const routes = privateRoutes.filter(route => route.dashboard !== null);
  const [showUserEdit, setShowUserEdit] = useState(false);

  useEffect(() => {

    async function fetch() {
      dispatch(getProfile(user.profile));
    }
    fetch();
  });

  const handleEditClose = () => setShowUserEdit(false);

  return(
    <>
      <TopNavbar/>
      <Container fluid>
        <Row>
          <SideNavBar/>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Button variant = "link" className = "float-right" onClick = {() => setShowUserEdit(true)}>
              User Details
            </Button>
            <Switch>
              {routes.map((route, index) =>
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={route.dashboard}
                />
              )}
            </Switch>
          </main>
        </Row>
        <EditUser show = {showUserEdit} closeHandler = {handleEditClose} user = {user} />
      </Container>
    </>
  );
}
