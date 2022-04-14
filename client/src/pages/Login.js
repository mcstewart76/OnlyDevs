import React, { useState} from 'react';
import { Form, Button} from 'react-bootstrap'
import Odie from '../OdieLogo2.0.png'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Link, useNavigate, Navigate } from 'react-router-dom'

import auth from '../utils/auth';


const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();
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
      // navigate("/home")
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
      <div>
        <div className='d-flex justify-content-center mx-4 bg-dark'>
        <div className='loginform my-5 row p-4 align-items-center justify-content-center'>
          <img className='odieIMG' src={Odie} alt="OdieTheDev" />
          {
          data ? (
              <p>
                Success! You may now enter{' '}
                <Link to="/">Homepage.</Link>
                {/* {navigate("/home")} */}
                {/* <Navigate to="/home" replace={true} /> */}
              </p>
            ) : (
          <Form className='formaspects px-2 mx-2' onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Email" onChange={handleChange} />
              <Form.Text className="text-muted">

              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>
            <Button className='libtn ' variant="primary" type="submit">
              Login
            </Button>
          </Form>
          )}

          {error && (
            console.error(error.message)
            
          )}
        </div>
        </div>
      </div>
    </>
  );



 
};

export default Login;
