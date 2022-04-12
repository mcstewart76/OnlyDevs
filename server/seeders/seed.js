const db = require('../config/connection');
const { User, Emogi } = require('../models');
const userSeeds = require('./userSeeds.json');
const emojies = require('./emojiSeeds.json')

db.once('open', async () => {
  try {
    
    await User.deleteMany({});

    await User.create(userSeeds);
    
    await Emogi.deleteMany({});

    await Emogi.create(emojies);

      
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
