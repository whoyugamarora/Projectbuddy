const mongoose = require('mongoose');

// Create a new Mongoose schema for projects
const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  stack: [String],
  userId: String,
  author: String
});

// Create a Mongoose model based on the schema
const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
