// models/project.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: String,
  description: String,
  requiredStack: [String]
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
