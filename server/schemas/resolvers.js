const { User, Post, Comment } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return  await User.find();
    },

    user: async (parent, { userID }) => {
      return await User.findOne({ _id: userID });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    getAllPosts: async () => {
      return await Post.find();
    },

    getPost: async (parent, {id}, context, info) => {
      return await Post.findById(id)

    }
  },

  Mutation: {
    addUser: async (parent, { name, email, password  }) => {
      const newUser = await User.create({ name, email, password });
      const token = signToken(newUser);

      return { token, newUser };
    },
    login: async (parent, { email, password }) => {
      const userAccount = await User.findOne({ email });

      if (!userAccount) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await User.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(userAccount);
      return { token, userAccount };
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
