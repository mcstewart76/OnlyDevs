
const { Schema, model } = require('mongoose');


const emojiSchema = new Schema(
    {
      emoji: {
        type: String,
        required: true,
    },
  
      name:
      {
        type: String,
        required: true,
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



const reactionSchema = new Schema(
    {
        postId: {
            type: Schema.Types.ObjectId, ref: 'post',
            
        },
        commentId: {
            type: Schema.Types.ObjectId, ref: 'comment',
            
        },

        emojisId: 
        {
            type: Schema.Types.ObjectId, ref: emojiSchema,
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


  
  const Reaction = model('reaction', reactionSchema);
  
  module.exports = Reaction;