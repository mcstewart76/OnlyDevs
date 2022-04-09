import React from 'react';
import { Card, } from 'react-bootstrap'

const Profile = () => {
  return (
    <>
      <div className='text-white d-flex flex-wrap p-2 mx-auto flex-items-center justify-content-center  container'>
        <div className='sidebarLay boxOut d-flex mb-5'>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='text-dark'>Sidebar Card</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Side</Card.Subtitle>

            </Card.Body>
          </Card>

        </div>
        <div className='mainLay boxOut p-2 d-flex flex-wrap justify-content-center '>

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