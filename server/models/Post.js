const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
        type: String,
      },
  });
  
  const Post = model('post', postSchema);
  
  module.exports = Post;