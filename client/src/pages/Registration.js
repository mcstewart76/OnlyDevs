import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Odie from '../OdieLogo2.0.png'
import { ADD_USER } from '../utils/mutations'
import { Link, useNavigate } from 'react-router-dom';

import auth from '../utils/auth';

const Registration = () => {

  const [formState, setFormState] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      auth.login(data.addUser.token);
      navigate("/home");
    } catch (e) {
      console.error(e);
    }

  };

  return (
    <>
      <div>
        <div className='d-flex justify-content-center mx-4 bg-dark'>
          <div className='loginform my-5 row p-4 align-items-center justify-content-center'>
            <img className='odieIMG' src={Odie} alt="OdieTheDev" />
            {
            // data ? (
            //   <p>
            //     Success! You may now head{' '}
               
            //     {navigate("/home")}
            //   </p>
            // ) : 
            // (
            <Form className='formaspects px-2 mx-2' onSubmit={handleFormSubmit}>
              <Form.Group className="mb-2" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control name="userName" type="username" placeholder="Username" value={formState.userName} onChange={handleChange} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Email" value={formState.email} onChange={handleChange} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" value={formState.password} onChange={handleChange} />
              </Form.Group>
              <Button className='libtn ' variant="primary" type="submit">
                Create Account
              </Button>
            </Form>
            // )
            
            }

              {error && (
                console.error(error.message)
                
              )}
          </div>
        </div>
      </div>
    </>
  )
};

export default Registration;
