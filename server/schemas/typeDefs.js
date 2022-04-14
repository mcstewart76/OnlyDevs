const { gql } = require('apollo-server-express');

const typeDefs = gql`
scalar Date

type gitHubFriend{
  userName: String

}


  type User {
    id: ID
    userName: String
    email: String
    post: [Post]
    connectedDevs:[gitHubFriend]
    preferences:[ProfileSettings]
  }

  
  

  type Post {
    id: ID
    title: String
    description: String
    postBody: String
    userId: String
    comments: [Comment]
    reactions:[Reaction]
    createAt: Date
    reactionCount: Int
  }

  type Comment {
    id: ID
    commentBody: String
    userId: String
    reactions: [Comment]
    createAt: String
    reactionCount: Int
   }

   type Reaction {
    id: ID
    reactedEmoji: String
    postId: String
    commentId: String
   }

   type Emoji {
    id: ID
    emoji: String
    name: String
    
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

  type gitHubUser {
   avatar_url: String
   bio: String
   followers: Int
   following: Int
   location: String
   login: String
   name:  String
   public_repos: Int
   url: String

  }


  type gitHubUserRepo {
    id: String
    name: String
    language: String
    updated_at: String
   
  }

  type gitHubUserRepos {
    repos: [gitHubUserRepo]

  }

  


  type Query {
    users: [User]!
    getUserById(_id: ID!): User
    getUserByEmail(email: String!): User
    me: User
    getAllPosts: [Post]
    getPost(id: ID): Post
    getGitHubUser(githubID: String):gitHubUser
    getGitHubUserRepos (githubID: String):gitHubUserRepos
    
  }

  input PostInput {
    title: String
    description: String
    userId: String
  }


  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    updateUser(userId: ID!): User
    createPost(post: PostInput): Post
    deletePost(id: ID): String
    updatePost(id: ID, post: PostInput): Post
    addConnectedDev(userName: String!): User
  }
`;

module.exports = typeDefs;
