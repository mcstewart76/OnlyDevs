const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    userName: String
    email: String
    post: [Post]
    preferences:[ProfileSettings]
  }

  type Post {
    id: ID
    title: String
    description: String
    postBody: String
    user: String
    comments: [Comment]
    create_on: String
  }

  type Comment {
    id: ID
    commentBody: String
    user: String
    reactions: [Comment]
    createAt: String
   }

   type ProfileSettings {
    id: ID
    user: String
    skin: String
    secondaryEmail: String
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
    addUser(userName: String!): User
    addSkill(userId: ID!, skill: String!): User
    removeuser(userId: ID!): User
    removeSkill(userId: ID!, skill: String!): User
    createPost(post: PostInput): Post
    deletePost(id: ID): String
    updatePost(id: ID, post: PostInput): Post
  }
`;

module.exports = typeDefs;
