import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($userName: String!, $email: String!, $password: String!) {
  addUser(userName: $userName, email: $email, password: $password) {
    token
    
  }
}
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        id
        userName
      }
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const ADD_POST = gql`
mutation Mutation($post: PostInput) {
  createPost(post: $post) {
    description
    title
    userId
  }
}
`;


export const ADD_CONNECTED_DEV = gql`
mutation AddConnectedDev($userName: String!) {
  addConnectedDev(userName: $userName) {
    id
    userName
    email
    connectedDevs {
      userName
    }
  }
}`;
