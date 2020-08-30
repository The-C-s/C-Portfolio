import React, { Component } from 'react';

class Login extends Component {

  render() {
    return (
      <div className="card border-primary mt-3">
        <div className="card-header">Welcome to cPortfolio</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="inputUsername">Username</label>
              <input type="email" className="form-control" id="inputUsername"/>
              <small className="form-text text-muted">Login form for debug only.</small>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control" id="inputPassword"/>
            </div>
            <div className="form-check mb-2">
              <input type="radio" className="form-check-input" name="submitMode" id="submitModeSkip" value="skipAPI" checked/>
              <label htmlFor="submitModeSkip" className="form-check-label">Skip API call</label>
            </div>
            <div className="form-check mb-2">
              <input type="radio" className="form-check-input" name="submitMode" id="submitModeAPI" value="checkAPI"/>
              <label htmlFor="submitModeSkip" className="form-check-label">Validate with API call</label>
            </div>
            <button type="submit" className="btn btn-primary mt-1">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
