const { User, Post } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    getAllPosts: async () => {
      return await Post.find();
    }
  },

  Mutation: {
    addUser: async (parent, { name }) => {
      return User.create({ name });
    },
    createPost: async (parent, args, context, info) => {
      const { title, description } = args.post
      const post = new Post({ title, description })
      await post.save()
      return post;
    },
      },
};

module.exports = resolvers;
