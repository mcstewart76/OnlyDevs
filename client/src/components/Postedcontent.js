import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useQuery } from "@apollo/client"
import { QUERY_ALL_POSTS } from '../utils/queries';


export default function UserPostedContent({ userName }) {

    var { data } = useQuery(QUERY_ALL_POSTS,
        {
            variables: { githubId: userName }
        });

    const UserPostedContent = data?.getAllPosts || [];
    let counter = 0;

    return (
        <>
            {UserPostedContent.map((post) => (
                
                <div key = {counter++} className='postbox'>
                    <div key = {counter++}>
                        <div key = {counter++} className='postcontent'>
                            {post.title}
                        </div>

                        <div key = {counter++}>
                            {post.description}
                        </div>
                    </div>
                </div>
            ))}


        </>
    );
};