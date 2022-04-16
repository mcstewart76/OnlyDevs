import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_GITHUB_REPO_FOR_USER } from '../utils/queries';


export default function RepoWallContent({ }) {

    var { data } = useQuery(QUERY_GITHUB_REPO_FOR_USER,
        {
            variables: { githubId: "jack-bartlett" }
        });

    const userRepoContent = data?.getGitHubUserRepoReadMes.repoReadMes || [];
    let counter = 0;

    console.log(data);
    // console.log("USER REPO CONTENT", UserRepoContent)
    return (
        <>
            {userRepoContent.map((repo) => (

                <div key={counter++} className='postbox'>
                    <div key={counter++}>
                        <div key={counter++} className='postcontent'>
                            {repo.repoName}
                        </div>


                    </div>
                </div>
            ))}


        </>
    );
};