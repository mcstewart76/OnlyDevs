import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Posts from '../components/Posts';
import Notifications from '../components/Notifications'
import ConnectedDevs from '../components/ConnectedDevs'
import SearchBar from '../components/SearchBar';
import PostedContent from '../components/Postedcontent';
import ConnectedDevRepos from '../components/ConnectedDevRepos';
import auth from '../utils/auth';
import {Navigate} from "react-router-dom";


const Home = () => {

// const currentuser= auth.getUser()

  return (
    <>
      <Container fluid>


        {auth.loggedIn() ?
          (
            <Row className='maincontent' sm={4}>

              <Col className='sidebar' sm={4}>

                <ConnectedDevs />

                {/* <Notifications /> */}

            <SearchBar userName="mcstewart76" />
          </Col>

          <Col className='wall' sm={8}>

            <Posts />
                <div className='wallstuff'>
                 
              <PostedContent />  
              
              {/* <ConnectedDevRepos /> */}

                </div>

              </Col>

            </Row>

          ) : (

            <Row className='maincontent'>

              <Col className='d-flex justify-content-center mx-4 bg-dark'>

              <p className='text-light'>

              {setTimeout("You need to be logged on !!!", 5000)}
                              
              <Navigate replace to="/login" />
                
              </p>

               
              </Col>

             
            </Row>

          )}



      </Container>

    </>
  );
};

export default Home;