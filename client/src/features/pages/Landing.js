import React from 'react';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Login from '../user/Login';

export default function Landing() {

  const history = useHistory();

  const loginHandler = () => history.push('/homepage');

  return(
    <Container fluid>
      <Row className="no-gutter">
        <Col className="bg-info d-flex justify-content-center">
          <div className="splash-container">
            <h1 className="display-3 text-white">cPortfolio</h1>
          </div>
        </Col>
        <Col>
          <div className="splash-container">
            <Login onLogin={loginHandler}/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
