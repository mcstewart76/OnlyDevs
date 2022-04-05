const { User, Post, Comment } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return  await User.find();
    },

    user: async (parent, { username }) => {
      return await User.findOne({ _id: username });
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
      const { title, description, user } = args.post
      const post = new Post({ title, description, user })
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
        {new: true}
        );
      return post
    }
      },
};

module.exports = resolvers;
