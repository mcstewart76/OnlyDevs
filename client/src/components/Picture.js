import React from 'react'
import {useQuery} from "@apollo/client"
import { QUERY_GITHUB_USER } from '../utils/queries';
import { Card } from 'react-bootstrap';

export default function Picture({userName}) {

    var { data } = useQuery(QUERY_GITHUB_USER,
        {
          variables: { githubId: userName} }
        );
      const p = data?.getGitHubUser || [];
     
      console.log(p);
  return (
    
      <div className='sidebarLay rounded boxOut d-flex m-4'>
        <Card className='profilecard' >
          <Card.Body>
            <div className='devCard text-dark p-2'>
              <div className='profile'>
                <div className="profile-picture d-flex mx-auto">
                  <img id="propic" src={p.avatar_url} alt="profilepicture" className="rounded-circle rounded mx-auto d-block"></img>
                </div>
                <Card.Title className='biotitle d-flex'> {p.name} </Card.Title>
                <Card.Subtitle className="biosubtitle mx-auto d-flex">{p.bio}</Card.Subtitle>
                <div className='followersfollowing'>
                <p> Followers:  {p.followers}   ·   Following:  {p.following}</p> 
                </div>
              </div>
              <div className="biocard p-3 " >
              </div>

            </div>



          </Card.Body>
        </Card>
        
      </div>
    
  )
}
