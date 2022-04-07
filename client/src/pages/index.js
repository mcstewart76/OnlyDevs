import React from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import Odie from '../OdieLogo2.0.png'

const Login = () => {
  return (
    <>
      <body>
        <Container className='loginform'>
          <img className='odieIMG' src={Odie} alt="OdieTheDev" />
          <Form className='formaspects'>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Username" />
              <Form.Text className="text-muted">

              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className='libtn' variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Container>
      </body>
    </>
  );
};

export default Login;