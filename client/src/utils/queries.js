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
      skills
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
