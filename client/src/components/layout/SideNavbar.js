import React, { Component } from 'react';

export default class SideNavbar extends Component {
  render() {
    return(
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <span data-feather="home"></span>
                Dashboard <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file"></span>
                New Post
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
