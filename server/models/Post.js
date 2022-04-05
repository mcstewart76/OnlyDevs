const { Schema, model } = require('mongoose');


const postSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
        type: String,
      },
    post_body: {
      type: String,
    },
      
    user_id: {
        type: Schema.Types.ObjectId, ref: 'user' 
    },

    comment_id:{
        type: Schema.Types.ObjectId, ref: 'comment'

    },
    created_on: {
      type: Date,
      default: Date.now,
      get: dateFormat
    }
      
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

  
  const Post = model('post', postSchema);
  
  module.exports = Post;