// routes/projects.js
const express = require('express');
const router = express.Router();
const Project = require('../models/project');

router.post('/projects', function(req, res) {
  // Create a new project document using the request body
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    requiredStack: req.body.requiredStack
  });

  // Save the document to the 'projects' collection
  project.save(function(err) {
    if (err) {
      // Handle save error
      return res.status(500).send(err);
    } else {
      // Return the saved document as the response
      return res.json(project);
    }
  });
});

module.exports = router;
