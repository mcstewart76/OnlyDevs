import React from 'react'
import { Card } from 'react-bootstrap';
import {  QUERY_GITHUB_REPOS} from '../utils/queries';
import { useQuery } from '@apollo/client';
import GitHubCalendar from 'react-github-calendar';


export default function RepoContributions({userName}) {

    var {  data } = useQuery(QUERY_GITHUB_REPOS,
        {
          variables: { githubId: userName }
        });

      const reposD = data?.getGitHubUserRepos.repos || [];
      console.log("REPO DATAAAAA", reposD);
  return (
      <>
    {reposD.map((repo) => (

        <div className=' d-flex justify-content-center flex-wrap px-3'>
        
          <Card className='repocards m-2' style={{ width: '18rem' }}>
            <Card.Body className='sidbarLay'>
              {/* <Card.Title className='profilecardtitle'>{repo.name}</Card.Title> */}
              <Card.Link className="profilecardtitle larger" href={repo.html_url}>{repo.name}</Card.Link> 
              <Card.Subtitle className='profilecardsubtitle mb-2'>{repo.language}</Card.Subtitle>
            </Card.Body>
          </Card>
         
        </div>

      ))}
      <div className='d-flex mx-auto my-4 border p-4'>
      <GitHubCalendar username={userName} color="#ff10f0"/>
      </div>
      </>
  )
}
