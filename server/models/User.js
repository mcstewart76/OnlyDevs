const { Schema, model } = require('mongoose');


const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    }
  ]
  
});

const User = model('user', userSchema);

module.exports = User;
