import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row className='maincontent'>
          <Col className='sidebar' sm={4}>
            <div className='devs'>
              <h1>Connected Devs</h1>
              <p> Dev contacts go here</p>
            </div>
            <div className='notifications'>
              <h1>Notifications</h1>
              <p> messages, notification, Devs currently online, or whatever can go here</p>
            </div>
          </Col>

          <Col className='wall'sm={8}>
            Giant ass box for wall content
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Home;