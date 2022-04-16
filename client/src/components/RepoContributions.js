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

      const reposD = data?.getGitHubUserRepos.repoReadMes || [];
  return (
      <>
    {reposD.map((repo) => (

        <div className='d-flex justify-content-center flex-wrap px-3'>
          <a href={repo.html_url} >
          <Card className='m-2' style={{ width: '18rem' }}>
            <Card.Body >
              <Card.Title className='text-dark'>{repo.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{repo.language}</Card.Subtitle>
            </Card.Body>
          
          </Card>
          </a>
        </div>

      ))}
      <div className='d-flex mx-auto my-4 border p-4'>
      <GitHubCalendar username={userName} color="#ff10f0"/>
      </div>
      </>
  )
}
