import { gql } from '@apollo/client';

export const QUERY_GITHUB_USER = gqp`
query GetGitHubUser($githubId: String) {
  getGitHubUser(githubID: $githubId) {
    avatar_url
    bio
    followers
    following
    location
  }
}

`


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
query GetPost {
  getAllPosts {
    id
    title
    description
    postBody
    user
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
