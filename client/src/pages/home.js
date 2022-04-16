import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Posts from '../components/Posts';
import Notifications from '../components/Notifications'
import ConnectedDevs from '../components/ConnectedDevs'
import SearchBar from '../components/SearchBar';
import PostedContent from '../components/Postedcontent';
import auth from '../utils/auth';
import {Navigate} from "react-router-dom";

import DevsRepos from '../components/DevsRepos'

const Home = () => {

  
//  const currentuser= auth.getUser()

  return (
    <>
      <Container fluid>


        {auth.loggedIn() ?
          (
            <Row className='maincontent ' sm={4}>

              <Col className='sidebar sideMin justify-content-center' sm={4}>
                <SearchBar/>
                <ConnectedDevs />

                  {/* <Notifications /> */}

            
          </Col>

          <Col className='wall ' sm={8}>

            <Posts />

                <div className='wallstuff  px-4'>
                  
              <PostedContent />  
           
            <DevsRepos/>
                </div>

              </Col>

            </Row>

          ) : (

            <Row className='maincontent'>

              <Col className='d-flex justify-content-center mx-4 bg-dark'>

              <p className='text-light'>

              {/* {setTimeout("You need to be logged on !!!", 5000)} */}
                              
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