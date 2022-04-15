import React, { useState } from 'react';
import { Button, Form, Group, Control, } from 'react-bootstrap';
import { useMutation, useQuery } from "@apollo/client"
import { QUERY_ALL_POSTS } from '../utils/queries';
import { ADD_POST } from '../utils/mutations';
import auth from '../utils/auth';


export default function Posts({ userName }) {
    let input;
    const currentUser= auth.getUser();
    // const [addPost, { data, loading, error }] = useMutation(ADD_POST);

   // function post() 
//{
    //     var postVar = {};
    //     postVar.description = input.value;
    //     postVar.title = currentuser.data.userName;
    //     postVar.userId = currentuser.data._id;
    //     addPost({ variables: { post: postVar } });
    // }

     const [formState, setFormState] = useState({title:currentUser.data.userName, description: '', userId:currentUser.data._id });
    
    const [addPost, {data, error}] = useMutation(ADD_POST);
  
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value});
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addPost({
        variables: {
            post:{
            title:formState.title, 
            description: formState.description,
            userId:formState.userId}} ,

        // {variables: { githubId: userName} }

      });
      window.location.reload();
    //   auth.login(data.login.token);
      // navigate("/home")
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
        title: currentUser.data.userName,
      description: '',
      userId:currentUser.data._id,
    
    });
  };

 

    return (
        <>

            <div className='posts' >
                <div className='postingbox'>
                    <h1 className='makingposts'>SOMETHING ON YOUR MIND?</h1>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        {/* <h1 name="title" type="title" onChange={handleChange}></h1>
                        <h1 name="userId" type="userId" onChange={handleChange}></h1> */}
                  <Form.Control name="description" type="description" as="textarea" value={formState.description} rows={3} onChange={handleChange} />
                </Form.Group>

                    {/* <input
                        ref={node => {
                            input = node;
                        }}
                    /> */}
                </div>

                <Button className='buttonz'  onClick={handleFormSubmit} variant="primary">Post</Button>{' '}
            </div>


        </>
    );
};