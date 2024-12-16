const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  votes: { type: Number, default: 0 },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  author: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('Idea', IdeaSchema);
