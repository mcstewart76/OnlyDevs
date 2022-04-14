import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Notifications from '../components/Notifications'
import ConnectedDevs from '../components/ConnectedDevs'
import SearchBar from '../components/SearchBar';
import auth from '../utils/auth';
import { Link } from 'react-router-dom'

const Home = () => {

  const currentuser= auth.getUser()

  return (
    <>
      <Container fluid>


        {auth.loggedIn() ?
          (
            <Row className='maincontent'>

              <Col className='sidebar' sm={4}>

                <ConnectedDevs />

                <Notifications />

                <SearchBar userName={currentuser.data.userName} />
              </Col>

              <Col className='wall' sm={8}>

                <div className='posts'>
                  <div className='postingbox'>
                    <h1 className='makingposts'>SOMETHING ON YOUR MIND?</h1>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </div>

                  <Button className='buttonz' variant="primary">Post</Button>{' '}
                </div>

                <div className='wallstuff'>
                  {/* <div className='repobox'>
                <div className='repocontent'>
                  Repo content here
                </div>
                <div>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Coment text here" />
                    </Form.Group>
                    <Button className='buttons' variant="primary" type="submit">
                      Comment
                    </Button>
                  </Form>
                </div>
              </div> */}

                  {/* <div className='repobox'>
                <div>
                  <div className='repocontent'>
                    Repo content here
                  </div>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Coment text here" />
                    </Form.Group>
                    <Button className='buttons' variant="primary" type="submit">
                      Comment
                    </Button>
                  </Form>
                </div>
              </div> */}

                  {/* <div className='postbox'>
                <div>
                  <div className='postcontent'>
                    Post content here
                  </div>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Coment text here" />
                    </Form.Group>
                    <Button className='buttons' variant="primary" type="submit">
                      Comment
                    </Button>
                  </Form>
                </div>
              </div> */}

                </div>

              </Col>

            </Row>

          ) : (

            <Row className='maincontent'>

              <Col className='d-flex justify-content-center mx-4 bg-dark'>

              <p className='text-light'>
                You need to be logged on !!!
                
              </p>

               
              </Col>

             
            </Row>

          )}



      </Container>

    </>
  );
};

export default Home;