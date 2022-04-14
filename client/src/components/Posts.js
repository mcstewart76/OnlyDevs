import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useMutation, useQuery } from "@apollo/client"
import { QUERY_ALL_POSTS } from '../utils/queries';
import { ADD_POST } from '../utils/mutations';


export default function Posts({ userName }) {
    let input;

    const [addPost, { data, loading, error }] = useMutation(ADD_POST);

    function post() {
        var postVar = {};
        postVar.description = input.value;
        postVar.title = "New TITLE";
        postVar.userId = "6257759f9659ad9430495f2d";
        addPost({ variables: { post: postVar } });
    }


    return (
        <>

            <div className='posts'>
                <div className='postingbox'>
                    <h1 className='makingposts'>SOMETHING ON YOUR MIND?</h1>
                    <input
                        ref={node => {
                            input = node;
                        }}
                    />
                </div>

                <Button className='buttonz' onClick={post} variant="primary">Post</Button>{' '}
            </div>


        </>
    );
};