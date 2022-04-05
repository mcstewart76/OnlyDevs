const { Schema, model } = require('mongoose');


const profileSettingSchema = new Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  UI_skin: {
    type: String,
  },
  email:{
    type: String,
    required: false,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  }
  
  
});


const ProfileSetting = model('profileSetting', profileSettingSchema);

module.exports = ProfileSetting;
