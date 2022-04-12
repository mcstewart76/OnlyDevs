import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Posts = () => {

    return (
      <>
              
              <div className='posts'>
                <div className='postingbox'>
                  <h1 className='makingposts'>SOMETHING ON YOUR MIND?</h1>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </div>
  
                <Button className='buttonz' variant="primary">Post</Button>{' '}
              </div>

  
      </>
    );
  };
  
  export default Posts;