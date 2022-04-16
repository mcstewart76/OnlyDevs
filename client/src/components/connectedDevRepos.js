import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_GITHUB_REPO_FOR_USER } from '../utils/queries';
import auth from '../utils/auth';

export default function ConnectedDevRepos() {
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

                <div key={counter++} className='postbox'>
                    <div key={counter++}>
                        <div key={counter++} className='postcontent'>
                            {repo}
                        </div>


                    </div>
                </div>
            ))}


        </>
    );
};