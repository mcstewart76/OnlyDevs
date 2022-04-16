import React from 'react';
import { Button, Form, Card, Text, Body, Title, Link } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_GITHUB_REPO_FOR_USER } from '../utils/queries';
import auth from '../utils/auth';
import Markdown from 'marked-react';



export default function DevsRepos() {
    const currentUser= auth.getUser();

    var { data } = useQuery(QUERY_GITHUB_REPO_FOR_USER,
        {
            variables: { githubId:  currentUser.data.userName }
        });
    console.log(data)



    const UserRepoContent = data?.getGitHubUserRepoReadMes.repoReadMes || [];
    let counter = 0;
   // console.log("USER REPO CONTENT", UserRepoContent)
    return (
        <>
            {UserRepoContent.map((repo) => (

                // <div key={counter++} className='postbox'>
                //     <div key={counter++}>
                //         <div key={counter++} className='postcontent'>
                //             {repo.repoName}
                //         </div>


                //     </div>
                // </div>
                <Card key={counter++} style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title>{repo.repoName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{repo.gitHubUserID}</Card.Subtitle>

                    <Markdown>{repo.repoReadMe}</Markdown>

                    <Card.Link href={repo.repoUrl}>repo</Card.Link>

                </Card.Body>
                </Card>



            ))}


        </>
    );
};