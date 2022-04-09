import React from 'react';
import { Card, } from 'react-bootstrap'

const Profile = () => {
  return (
    <>
      <div className='text-white d-flex flex-wrap p-2 mx-auto flex-items-center justify-content-center container'>
        <div className='sidebarLay boxOut d-flex m-4'>
          <Card >
            <Card.Body>
              <div className='devCard text-dark p-2 '>
                <div className='profile '>
                <div className="profile-picture d-flex">
                  <img id="propic" src="https://avatars.githubusercontent.com/u/90533949?v=4" alt="profilepicture" className="rounded-circle rounded mx-auto d-block"></img>
                </div>
                <Card.Title className='text-dark d-flex'>Sidebar Card</Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex">Side</Card.Subtitle>
                </div>
                <div className="biocard p-3 " >I love to build and design things related to engineering or tech!
                  Check out some of my repos!
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