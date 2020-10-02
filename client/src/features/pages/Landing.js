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

  //const renderThis = () => register ? <Register/> : <Login onClickHandler={registerClickHandler}/>

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