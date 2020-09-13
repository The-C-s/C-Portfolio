import React from 'react';
import Login from '../user/Login';

const Landing = () => {
  return(
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-6 bg-info d-flex justify-content-center">
          <div className="splash-container">
            <h1 className="display-3 text-white">cPortfolio</h1>
          </div>
        </div>
        <div className="col-6">
          <div className="splash-container">
            <Login/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
