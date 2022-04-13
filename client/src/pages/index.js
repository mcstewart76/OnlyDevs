import React, { useState} from 'react';
import { Form, Button} from 'react-bootstrap'
import Odie from '../OdieLogo2.0.png'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import auth from '../utils/auth';


const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <body >
        <div className='d-flex justify-content-center mx-4 bg-dark'>
        <div className='loginform my-5 row p-4 align-items-center justify-content-center'>
          <img className='odieIMG' src={Odie} alt="OdieTheDev" />
          <Form className='formaspects px-2 mx-2' onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Username" onChange={handleChange} />
              <Form.Text className="text-muted">

              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>
            <Button className='libtn ' variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
        </div>
      </body>
    </>
  );
};

export default Login;