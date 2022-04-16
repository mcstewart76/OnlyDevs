import { gql } from '@apollo/client';

export const QUERY_GITHUB_USER = gql`
query GetGitHubUser($githubId: String) {
  getGitHubUser(githubID: $githubId) {
    avatar_url
    name
    bio
    followers
    following
    location
    login
  }
}`;

export const QUERY_USERS = gql`
query Users {
  users {
    id
    userName
    email
  }
}
`;

export const QUERY_SINGLE_USER = gql`
query GetUserById($id: ID!) {
  getUserById(_id: $id) {
    id
    userName
    email
    
  
  }
 
}

`;

export const QUERY_ALL_POSTS = gql`
query Query {
  getAllPosts {
    id
    title
    description
    userId
    comments {
      id
      commentBody
      userId
      createAt
    }
    createAt
  }
}
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
     
    }
  }
`;

export const QUERY_GITHUB_REPOS = gql`
query GetGitHubUserRepos($githubId: String) {
  getGitHubUserRepos(githubID: $githubId) {
    repos {
      name
      language
      updated_at
      id
    }
  }
}`;

export const QUERY_GITHUB_REPO_FOR_USER = gql`
query GetGitHubUserRepoReadMes($githubId: String) {
  getGitHubUserRepoReadMes(githubID: $githubId) {
    repoReadMes {
      gitHubUserID
      repoName
      repoUrl
      repoReadMe
    }
  }
}

`;

export const QUERY_CONNECTED_DEVS = gql`
query GetUserById($id: ID!) {
  getUserById(_id: $id) {
    userName
    connectedDevs {
    userName
    }
  }
}

`;
