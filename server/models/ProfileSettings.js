const { Schema, model } = require('mongoose');


const profileSettingSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  uiSkin: {
    type: String,
  },
  email:{
    type: String,
    required: false,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  }
  
  
});


const ProfileSetting = model('profilesetting', profileSettingSchema);

module.exports = ProfileSetting;
