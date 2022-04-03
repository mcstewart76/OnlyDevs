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
    },

    getPost: async (parent, {id}, context, info) => {
      return await Post.findById(id)

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
    deletePost: async (parent, args, context, info) => {
      const { id } = args
      await Post.findByIdAndDelete(id)
      return `Post ${id} deleted`

    },
    updatePost: async (parent, args, context, info) => {
      const { id } = args
      const { title, description } = args.post;
      const updates = {}
      if (title !== undefined) {
        updates.title = title
      }
      if (description !== undefined) {
        updates.description = description
      }

      const post = await Post.findByIdAndUpdate(
        id,
        updates,
        {new: true}
        );
      return post
    }
      },
};

module.exports = resolvers;
