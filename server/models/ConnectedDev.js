const { Schema, model } = require('mongoose');


const connectedDevSchema = new Schema(
  {
     GithubId: {
      type: String,
      unique: true,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId, ref: 'user',
      required: true  
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



const ConnectedDev = model('connectedDev', connectedDevSchema);
module.exports = ConnectedDev;

