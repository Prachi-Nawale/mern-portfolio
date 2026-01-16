const mongoose = require('mongoose');

const AboutMeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  imageUrl: { type: String } // optional profile picture
});

module.exports = mongoose.model('AboutMe', AboutMeSchema);
