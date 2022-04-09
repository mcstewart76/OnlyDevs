import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    profiles {
      id
      name
      
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($profileId: ID!) {
    profile(profileId: $profileId) {
      id
      name
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      id
      name
    }
  }
`;
