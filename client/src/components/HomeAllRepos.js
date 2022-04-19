import React from 'react';
import { Button, Form, Card, Text, Body, Title, Link } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_CONNECTED_DEVS } from '../utils/queries';
import auth from '../utils/auth';
import Markdown from 'marked-react';
import DevsRepos2 from './DevsRepos';



export default function DevsRepos() {
    
  const currentUser = auth.getUser();
  var { data } = useQuery(QUERY_CONNECTED_DEVS,
    {
      variables: { id: currentUser.data._id}
    });
    console.log(data)
  const connectedDevsData = data?.getUserById.connectedDevs || [];


   // console.log("USER REPO CONTENT", UserRepoContent)
    return (
        <>
            {connectedDevsData.map((homie) => (

               
               <>

               <DevsRepos2 currentUser={homie.userName}
               
               />
               
               </>




            ))}


        </>
    );
};