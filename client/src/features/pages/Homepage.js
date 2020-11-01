import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from "react-bootstrap/Row";
import TopNav from "../layout/TopNav";
import SideNavbar from "../layout/SideNavbar";
import RightNavbar from "../layout/RightNavbar";

import Nav from "react-bootstrap/Nav";
import NavLink from "../layout/NavLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripHorizontal,
  faUserCircle,
  faCopy,
  faFileUpload,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

import { getProfile } from "../profile/profileSlice";

export default function Homepage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const profile = useSelector(state => state.profile);

  useEffect(() => {

    async function fetch() { dispatch(getProfile(user.profile)) }

    // Skip loading if already in state
    if (user.profile && user.profile !== profile.id) fetch();
  }, [dispatch, user, profile]);

  return (
    <>
      <TopNav />
      <SideNavbar/>
      <RightNavbar/>
      <br />
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <Nav className="flex-column">
          <div className = "homepage-heading">
            <div className="pageheading-rectangle1">
              <h1 className="pageheading-heading">Welcome {user.username}</h1>
              <div className="pageheading-decoration1" />
              <div className="pageheading-decoration2" />
            </div>
          </div>
          <div className="main">
            <Nav.Item>
              <NavLink
                to="/dashboard/content"
                activeOnlyWhenExact={true}
                label={
                  <>
                    <Row>
                      <div className="dashboard">
                        <FontAwesomeIcon
                          className="icon"
                          icon={faGripHorizontal}
                        />
                        <div className="heading">DASHBOARD</div>
                        <div className="rectangle1" />
                        <div className="rectangle2" />
                        <div className="rectangle3" />
                        <div className="rectangle4" />
                      </div>
                    </Row>
                  </>
                }
              />
            </Nav.Item>
            <Row>
              <Nav.Item>
                <NavLink
                  to="/dashboard/profile"
                  label={
                    <>
                      <Row>
                        <div className="profile">
                          <FontAwesomeIcon
                            className="icon"
                            icon={faUserCircle}
                          />
                          <div className="heading">PROFILE</div>
                          <div className="rectangle1" />
                          <div className="rectangle2" />
                          <div className="rectangle3" />
                          <div className="rectangle4" />
                        </div>
                      </Row>
                    </>
                  }
                />
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/dashboard/content/addContent"
                  label={
                    <>
                      <div className="add-content">
                        <FontAwesomeIcon className="icon" icon={faCopy} />
                        <div className="heading">ADD TEXT</div>
                        <div className="rectangle1" />
                        <div className="rectangle2" />
                        <div className="rectangle3" />
                        <div className="rectangle4" />
                      </div>
                    </>
                  }
                />
              </Nav.Item>
            </Row>
            <Nav.Item>
              <NavLink
                to="/dashboard/content/addFile"
                label={
                  <>
                    <div className="add-file">
                      <FontAwesomeIcon className="icon" icon={faFileUpload} />
                      <div className="heading">ADD FILE</div>
                      <div className="rectangle1" />
                      <div className="rectangle2" />
                      <div className="rectangle3" />
                      <div className="rectangle4" />
                    </div>
                  </>
                }
              />
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/dashboard/sharepages"
                label={
                  <>
                    <div className="share">
                      <FontAwesomeIcon className="icon" icon={faAddressCard} />
                      <div className="heading">SHARE VIEW</div>
                      <div className="rectangle1" />
                      <div className="rectangle2" />
                      <div className="rectangle3" />
                      <div className="rectangle4" />
                    </div>
                  </>
                }
              />
            </Nav.Item>
          </div>
        </Nav>
      </main>
    </>
  );
}
