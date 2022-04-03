const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    skills: [String]!
  }

  type Post {
    id: ID
    title: String
    description: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    getAllPosts: [Post]
  }

  input PostInput {
    title: String
    description: String
  }

  type Mutation {
    addUser(name: String!): User
    addSkill(userId: ID!, skill: String!): User
    removeuser(userId: ID!): User
    removeSkill(userId: ID!, skill: String!): User
    createPost(post: PostInput): Post
  }
`;

module.exports = typeDefs;
