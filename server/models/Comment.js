const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

  
  const commentSchema = new Schema(
    {
      
      commentBody: {
        type: String,
        required: true,
        max_length: 280,
  
      },
  
      userId: {
        type: Schema.Types.ObjectId, ref: 'user',
        required: true 
    },

  
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
      id: false,
    }
  );



  Reaction.schema.virtual('reactionCount').get(function () {
    return this.reactions.length;

 })

  function dateFormat(createdAt) {
    return moment(createdAt).format('MMM Do, YYYY [at] hh:mm a')
  
  }
  

    
  const Comment = model('comment', commentSchema);
  
  module.exports = Comment;