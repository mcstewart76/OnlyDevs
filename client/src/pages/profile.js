import React from 'react';
import Picture from "../components/Picture"
import RepoContributions from '../components/RepoContributions';
import auth from '../utils/auth';
import {Navigate} from "react-router-dom";
import { Row, Col } from 'react-bootstrap';



const Profile = () => {
  //context.data.userName
  
  const currentuser= auth.getUser()
  // console.log("current user")
  // console.log(currentuser.data.userName)
  return (
    <>

{auth.loggedIn() ? (
    <div className='text-white d-flex flex-wrap p-2 mx-auto flex-items-center justify-content-center container'>
    <Picture userName={currentuser.data.userName}/>
      <div className='mainLay boxOut p-2 d-flex flex-wrap justify-content-center m-4 '>
    <RepoContributions userName={ currentuser.data.userName }/>
        
      </div>
    </div>
):(
  <Row className='maincontent'>

              <Col className='d-flex justify-content-center mx-4 bg-dark'>

              <p className='text-light'>

              {setTimeout("You need to be logged on !!!", 5000)}
                              
              <Navigate replace to="/login" />
                
              </p>

               
              </Col>

             
            </Row>
)}
</>
    
  );
};

export default Profile;