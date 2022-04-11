const { Schema, model } = require('mongoose');
const moment = require('moment')


const postSchema = new Schema({
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
        type: Schema.Types.ObjectId, ref: 'user' 
    },

    commentId:{
        type: Schema.Types.ObjectId, ref: 'comment'

    },
    createdAt: {
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