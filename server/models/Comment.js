const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
      reaction_body: {
        type: String,
        required: true,
        max_length: 280,
  
      },
  
      user_name:
      {
        type: String,
        required: true,
      },
  
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
      id: false,
    }
  );
  
  const commentSchema = new Schema(
    {
      
      comment_body: {
        type: String,
        required: true,
        max_length: 280,
  
      },
  
      user_name:
      {
        type: String,
        required: true,
      },
  
      reactions: [reactionSchema],
  
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
      id: false,
    }
  );



  commentSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;

 })

  function dateFormat(createdAt) {
    return moment(createdAt).format('MMM Do, YYYY [at] hh:mm a')
  
  }
  

    
  const Comment = model('comment', commentSchema);
  
  module.exports = Comment;