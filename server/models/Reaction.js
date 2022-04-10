
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
        reactedEmoji: {
            type: String,
            required: true,
        },

        postId: {
            type: Schema.Types.ObjectId, ref: 'post',
            
        },
        commentId: {
            type: Schema.Types.ObjectId, ref: 'comment',
            
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
   
  const Emogi = model('emogi', emojiSchema);
  
  module.exports = Reaction;
  module.exports = Emogi;