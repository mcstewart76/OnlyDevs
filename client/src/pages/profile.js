import React from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';

const Profile = () => {
  return (
    <>
      <Container fluid>

        <Row className='maincontent'>

          <Col className='sidebar' sm={4}>

            <div className='profile card'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <div className='User name'>Dev Name Here</div>
                  <div className='bio'>
                    Dev Bio goes here.
                    Test text, Test text, Test text, Test text, Test text, Test text, Test text
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className='connecteddevs'>
              <h1>Notifications</h1>
              <div> messages, notification, Devs currently online, or whatever can go here</div>
            </div>
          </Col>

          <Col className='wall' sm={8}>
            <div className='wallstuff'>
              <div className='repobox'>
                <div className='repocontent'>
                  Repo content here
                </div>
                <div>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Coment text here" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Comment
                    </Button>
                  </Form>
                </div>
              </div>

              <div className='repobox'>
                <div>
                  <div className='repocontent'>
                    Repo content here
                  </div>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Coment text here" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Comment
                    </Button>
                  </Form>
                </div>
              </div>

              <div className='postbox'>
                <div>
                  <div className='postcontent'>
                    Post content here
                  </div>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Coment text here" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Comment
                    </Button>
                  </Form>
                </div>
              </div>

            </div>

          </Col>

        </Row>

      </Container>
    </>
  );
};

export default Profile;