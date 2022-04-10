const { Schema, model } = require('mongoose');
const moment = require('moment');
const Reaction = require('./Reaction');


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

    comments:[Comment],

    reactions: [Reaction],

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

  Reaction.virtual('reactionCount').get(function () {
    return this.reactions.length;

 })
  
 Comment.virtual('commentCount').get(function () {
  return this.comments.length;

})

  const Post = model('post', postSchema);
  
  module.exports = Post;