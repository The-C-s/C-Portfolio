import React, { Component } from 'react';

const axios = require('axios');

class Login extends Component {

  // Temporary state
  state = {
    username: "",
    password: "",
    skipAPI: true,
    loggedIn: false,
    error: false
  }

  // Temporary auth function, simply POSTs to API and prints the response to browser console
  authenticateUser = async user => {
    
    console.log(`Authenticating <${user.username}>/<${user.password}>`);

    axios.post('/auth', user)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  // State continuously tracks input values
  onUsernameChange = e => this.setState({ username: e.target.value });
  onPasswordChange = e => this.setState({ password: e.target.value });

  // Toggle API skipping
  onSkipAPIChange = () => this.setState({ skipAPI: !this.state.skipAPI });

  // Form submission handler
  onSubmitHandler = e => {

    // Pull user info from state and give it to the authenticator
    const { username, password } = this.state;

    if (this.state.skipAPI) {
      // Skip API validation and proceed as if authenticated
      console.log(`User <${username}> logged in successfully`);
    } else {
      this.authenticateUser({username, password});
    }

    // Stops page reloading when you click submit
    e.preventDefault();
  }

  render() {
    return (
      <div className="card text-white bg-dark mt-3">
        <div className="card-header">Welcome to cPortfolio</div>
        <div className="card-body">
          <form onSubmit={e => this.onSubmitHandler(e)}>
            <div className="form-group">
              <label htmlFor="inputUsername">Username</label>
              <input type="text" className="form-control" id="inputUsername" onChange={e => this.onUsernameChange(e)} />
              <small className="form-text text-muted">Login form for debug only.</small>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control" id="inputPassword" onChange={e => this.onPasswordChange(e)} />
            </div>
            <div className="form-group">
              <div className="custom-control custom-switch mb-3">
                <input type="checkbox" className="custom-control-input" id="inputSkipAPI" defaultChecked onChange={this.onSkipAPIChange} />
                <label className="custom-control-label" htmlFor="inputSkipAPI">Skip API call</label>
            </div>
            <button type="submit" className="btn btn-primary mt-1">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
