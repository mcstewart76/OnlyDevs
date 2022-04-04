const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    username: String
    skills: [String]!
    post: [Post]
  }

  type Post {
    id: ID
    title: String
    description: String
    user: String
  }

  type Query {
    users: [User]!
    user(_id: ID!): User
    getAllPosts: [Post]
    getPost(id: ID): Post
  }

  input PostInput {
    title: String
    description: String
    user: String
  }

  type Mutation {
    addUser(name: String!): User
    addSkill(userId: ID!, skill: String!): User
    removeuser(userId: ID!): User
    removeSkill(userId: ID!, skill: String!): User
    createPost(post: PostInput): Post
    deletePost(id: ID): String
    updatePost(id: ID, post: PostInput): Post
  }
`;

module.exports = typeDefs;
