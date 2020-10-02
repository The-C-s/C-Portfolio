import React, { useState } from 'react';
import Login from '../user/Login';
import Register from '../user/Register'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Added logo and removed the text display */

export default function Landing() {

  const [register, setRegister] = useState(false);

  const loginClickHandler = () => setRegister(false);
  const registerClickHandler = () => setRegister(true);

  /* tried adding the validation that was meant to handle the password checks */

  export default function validate()
  {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please re enter to confirm password.";
    }

    if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        
      if (input["password"] != input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    } 

    this.setState({
      errors: errors
    });

    return isValid;
  }

  return(
    <Container fluid>
      <Row className="no-gutter">
        <Col className="bg-info d-flex justify-content-center">
          <div className="splash-container">
            <h1 className="display-3 text-white"><img src="/images/Portfolio.png" alt=""/></h1>
          </div>
        </Col>
        <Col>
          <div className="splash-container">
            {register && <Register onClickHandler = {loginClickHandler}/>}
            {!register && <Login onClickHandler = {registerClickHandler}/>}
          </div>
        </Col>
      </Row>
    </Container>
  );
}