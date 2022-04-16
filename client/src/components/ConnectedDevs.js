import React from 'react'
import { Card, ListGroup, Item } from 'react-bootstrap';
import { QUERY_CONNECTED_DEVS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import auth from '../utils/auth';

export default function ConnectedDevs() {

  const currentUser = auth.getUser();
  var { data } = useQuery(QUERY_CONNECTED_DEVS,
    {
      variables: { id: currentUser.data._id}
    });
    console.log(data)
  const connectedDevsData = data?.getUserById.connectedDevs || [];
  return (
    <>
      <div className='notifications'>
      <h1 className='makingposts'>Connected Devs</h1>
      <div className=' d-flex justify-content-center flex-wrap px-3'>
        <Card className='m-2' style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            {connectedDevsData.map((Dev) => (
              
              <ListGroup.Item className='text-dark' key={Dev.userName}>{Dev.userName}</ListGroup.Item>
              
              ))}
          </ListGroup>

        </Card>
      </div>
      </div>
    </>
  )
}