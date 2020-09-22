import React from 'react';
import Login from '../user/Login';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Landing = () => {
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
            <Login/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
