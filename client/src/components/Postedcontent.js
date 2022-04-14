import React from 'react';
// import { Button, Form } from 'react-bootstrap';
import { useQuery } from "@apollo/client"
import { QUERY_ALL_POSTS } from '../utils/queries';


export default function UserPostedContent({ userName }) {

    var { data } = useQuery(QUERY_ALL_POSTS,
        {
            variables: { githubId: userName }
        });

    const UserPostedContent = data?.getAllPosts || [];


    return (
        <>
            {UserPostedContent.map((post) => (
                <div className='postbox'>
                    <div>
                        <div className='postcontent'>
                            {post.title}
                        </div>

                        <div>
                            {post.description}
                        </div>
                    </div>
                </div>
            ))}


        </>
    );
};