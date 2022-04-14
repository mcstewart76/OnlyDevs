import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Posts from '../components/Posts.js';
import SearchBar from '../components/SearchBar';
import PostedContent from '../components/Postedcontent';

const Home = () => {

  return (
    <>
      <Container fluid>

        <Row className='maincontent'>

          <Col className='sidebar' sm={4}>

            <div className='devs'>
              <h1 className='makingposts'>Connected Devs</h1>
              <div> Dev contacts go here</div>
            </div>

            <div className='notifications'>
              <h1 className='makingposts'>Notifications</h1>
              <div> messages, notification, Devs currently online, or whatever can go here</div>
            </div>

            <SearchBar userName="mcstewart76" />
          </Col>

          <Col className='wall' sm={8}>

            <Posts />



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
                    <Button className='buttons' variant="primary" type="submit">
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
                    <Button className='buttons' variant="primary" type="submit">
                      Comment
                    </Button>
                  </Form>
                </div>
              </div>

            <PostedContent />  

            </div>

          </Col>

        </Row>

      </Container>

    </>
  );
};

export default Home;