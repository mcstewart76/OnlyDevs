const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const gitHubFriendSchema = new Schema(
  {
    userName:
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


const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  connectedDevs: [gitHubFriendSchema],

  post: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post',
    }
  ],
  preferences: {
    type: Schema.Types.ObjectId,
    ref: 'profilesetting'
  }
  
});


// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};



const User = model('user', userSchema);
module.exports = User;

