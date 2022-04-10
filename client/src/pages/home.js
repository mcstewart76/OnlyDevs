import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container fluid>

        <Row className='maincontent'>

          <Col className='sidebar' sm={4}>

            <div className='devs'>
              <h1>Connected Devs</h1>
              <div> Dev contacts go here</div>
            </div>

            <div className='notifications'>
              <h1>Notifications</h1>
              <div> messages, notification, Devs currently online, or whatever can go here</div>
            </div>

            <div className='search'>
              <h1>Search</h1>
              <div>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Find Devs</Form.Label>
                    <Form.Control placeholder="You type here" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                </Form>
              </div>
            </div>
          </Col>

          <Col className='wall' sm={8}>
            
            <div className='posts'>
              <div>
                <h1>Making posts</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </div>

              <Button variant="primary">Post</Button>{' '}
            </div>

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

export default Home;