const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Skill', skillSchema);
