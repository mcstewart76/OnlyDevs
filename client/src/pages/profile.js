import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { QUERY_GITHUB_USER, QUERY_GITHUB_REPOS, QUERY_USERS } from '../utils/queries';
import { useQuery } from '@apollo/client';


const Profile = () => {

  //  const [getGitHubUserState, setGitHubUserState] = useState({
  //   githubId: 'jack-bartlett'});

  const { loading: loading1, data: data1 } = useQuery(QUERY_GITHUB_USER,
    {
      variables: { githubId: 'ernestotham' }
    });
  const p = data1?.getGitHubUser || [];

  console.log(p);

  // variables: {githubId: 'mcstewart'}
  // });

  var { loading: loading2, data: data2 } = useQuery(QUERY_GITHUB_REPOS,
    {
      variables: { githubId: 'ernestotham' }
    });



  const reposD = data2?.getGitHubUserRepos.repos || [];
  console.log(reposD);
  console.log(reposD.name);

  // try {
  //   const { data } = trial({
  //     variables: { getGitHubUserState }
  //   });

  // } catch (err) {
  //   console.error(err);
  // }

  return (
    <div className='text-white d-flex flex-wrap p-2 mx-auto flex-items-center justify-content-center container'>
      <div className='sidebarLay boxOut d-flex m-4'>
        <Card >
          <Card.Body>
            <div className='devCard text-dark p-2 '>
              <div className='profile '>
                <div className="profile-picture d-flex">
                  <img id="propic" src={p.avatar_url} alt="profilepicture" className="rounded-circle rounded mx-auto d-block"></img>
                </div>
                <Card.Title className='text-dark d-flex'> {p.name} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex">{p.bio}</Card.Subtitle>
              </div>
              <div className="biocard p-3 " >
              </div>

            </div>



          </Card.Body>
        </Card>

      </div>
    
      <div className='mainLay boxOut p-2 d-flex flex-wrap justify-content-center m-4 '>
        {
          reposD &&
          reposD.map((repo) => (
              
            <div className=' d-flex justify-content-center flex-wrap px-3'>
              <Card className='m-2' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='text-dark'>{repo.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{repo.language}</Card.Subtitle>
                </Card.Body>
              </Card>
            </div>

          ))
          
        }

          

      </div>

    </div>
  );
};

export default Profile;