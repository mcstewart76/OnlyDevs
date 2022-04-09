import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { QUERY_GITHUB_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';


const Profile = () => {
  
      //  const [getGitHubUserState, setGitHubUserState] = useState({
      //   githubId: 'jack-bartlett'});

  const {data} = useQuery(QUERY_GITHUB_USER, {
    variables: {githubId: 'mcstewart76'}
  });
  

  // try {
  //   const { data } = trial({
  //     variables: { getGitHubUserState }
  //   });

    console.log(data);
    const profile = data.getGitHubUser;

  // } catch (err) {
  //   console.error(err);
  // }

  return (
    <>
      <div className='text-white d-flex flex-wrap p-2 mx-auto flex-items-center justify-content-center container'>
        <div className='sidebarLay boxOut d-flex m-4'>
          <Card >
            <Card.Body>
              <div className='devCard text-dark p-2 '>
                <div className='profile '>
                <div className="profile-picture d-flex">
                  <img id="propic" src={profile.avatar_url} alt="profilepicture" className="rounded-circle rounded mx-auto d-block"></img>
                </div>
                <Card.Title className='text-dark d-flex'>Name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex">Side</Card.Subtitle>
                </div>
                <div className="biocard p-3 " >
                </div>
                
              </div>
              
              

            </Card.Body>
          </Card>

        </div>
        <div className='mainLay boxOut p-2 d-flex flex-wrap justify-content-center m-4 '>

          <div className=' d-flex justify-content-center flex-wrap px-3'>
            <Card className='m-2' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className='text-dark'>Sample Repo</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Javascript</Card.Subtitle>

              </Card.Body>
            </Card>

            <Card className='m-2' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className='text-dark'>Sample Repo</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Javascript</Card.Subtitle>

              </Card.Body>
            </Card>

          </div>
          <div className=' d-flex justify-content-center flex-wrap px-3'>
            <Card className='m-2 ' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className='text-dark'>Sample Repo</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Javascript</Card.Subtitle>

              </Card.Body>
            </Card>

            <Card className='m-2 ' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className='text-dark'>Sample Repo</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Javascript</Card.Subtitle>

              </Card.Body>
            </Card>

          </div>
          <div className=' d-flex justify-content-center flex-wrap px-3'>
            <Card className='m-2 ' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className='text-dark'>Sample Repo</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Javascript</Card.Subtitle>

              </Card.Body>
            </Card>

            <Card className='m-2 ' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className='text-dark'>Sample Repo</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Javascript</Card.Subtitle>

              </Card.Body>
            </Card>

          </div>

        </div>

      </div>

    
    </>
  );
};

export default Profile;