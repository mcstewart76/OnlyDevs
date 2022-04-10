
const { User, Post, Comment } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const axios = require('axios');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },

    getUserById: async (parent, userId) => {
      const user = await User.findById(userId)
      return user;
    },
    getUserByEmail: async (parent, userEmail) => {
      const user = await User.findById(userEmail)
      return user;
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    getAllPosts: async () => {
      return await Post.find();
    },

    getPost: async (parent, { id }, context, info) => {
      return await Post.findById(id)

    },
    getGitHubUser: async (parent, gitHubUserId) => {
     
        const githubUserData = await axios.get(`https://api.github.com/users/${gitHubUserId.githubID}`)
        return githubUserData.data
    
    },

    getGitHubUserRepos:  async (parent, gitHubUserId) => {
     
      const githubUserRepos = await axios.get(`https://api.github.com/users/${gitHubUserId.githubID}/repos?sort=pushed&per_page=6`)
      return {repos: githubUserRepos.data}
  
  },
    
  },

    Mutation: {
      addUser: async (parent, { userName, email, password }) => {
        const newUser = await User.create({ userName, email, password });
        const token = signToken(newUser);

        return { token, newUser };
      },
      removeUser: async (parent, args, context) => {
        if (context.user) {
          return User.findOneAndDelete({ _id: context.user._id });
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      updateUser: async (parent, params, context) => {
        if (context.user) {
          return User.findByIdAndUpdate(context.user._id, {
            name: params.name,
            email: params.email,
            password: params.password
          },
            { new: true });
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      login: async (parent, { email, password }) => {
        const userAccount = await User.findOne({ email });

        if (!userAccount) {
          throw new AuthenticationError('No profile with this email found!');
        }

        const correctPw = await userAccount.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }

        const token = signToken(userAccount);
        return { token, userAccount };
      },
      createPost: async (parent, args, context, info) => {
        const { title, description, userId } = args.post
        const post = new Post({ title, description, userId })
        await post.save()
        return post;
      },
      deletePost: async (parent, args, context, info) => {
        const { id } = args
        await Post.findByIdAndDelete(id)
        return `Post ${id} deleted`

      },
      updatePost: async (parent, args, context, info) => {
        const { id } = args
        const { title, description, user } = args.post;
        const updates = {}
        if (title !== undefined) {
          updates.title = title
        }
        if (description !== undefined) {
          updates.description = description
        }
        if (user !== undefined) {
          updates.user = user
        }

        const post = await Post.findByIdAndUpdate(
          id,
          updates,
          { new: true }
        );
        return post
      }
    },
  };

  module.exports = resolvers;
