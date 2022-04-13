const { Schema, model } = require('mongoose');
const moment = require('moment');
const Reaction = require('./Reaction');
const Comment = require('./Comment');

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
        type: String,
      },
    postBody: {
      type: String,
    },
      
    userId: {
        type: Schema.Types.ObjectId, ref: 'user',
        required: true  
    },

    comments:[Comment.schema],

    reactions: [Reaction.schema],

      createdAt: {
      type: Date,
      default: Date.now,
      get: dateFormat
    },
      
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
  
  
  );



  function dateFormat(createdAt) {
    return moment(createdAt).format('MMM Do, YYYY [at] hh:mm a')
  
  }

  Reaction.schema.virtual('reactionCount').get(function () {
    return this.reactions.length;

 })
  
 Comment.schema.virtual('commentCount').get(function () {
  return this.comments.length;

})

  const Post = model('post', postSchema);
  
  module.exports = Post;