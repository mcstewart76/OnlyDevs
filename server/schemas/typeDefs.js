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
    createAt: String
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

   type Auth {
    token: ID!
    profile: User
  }

  type Query {
    users: [User]!
    getUserById(_id: ID!): User
    getUserByEmail(email: String!): User
    me: User
    getAllPosts: [Post]
    getPost(id: ID): Post
  }

  input PostInput {
    title: String
    description: String
    user: String
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    updateUser(userId: ID!): User
    createPost(post: PostInput): Post
    deletePost(id: ID): String
    updatePost(id: ID, post: PostInput): Post
  }
`;

module.exports = typeDefs;
