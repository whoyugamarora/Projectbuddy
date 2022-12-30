const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// Define a route for POST requests to '/projects'
router.post('/', (req, res) => {
  // Create a new project document using the request body
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    stack: req.body.stack
  });

  // Save the document to the 'projects' collection
  project.save((err) => {
    if (err) {
      // Handle save error
      res.status(500).send(err);
    } else {
      // Return the saved document as the response
      res.json(project);
    }
  });
});

// Define a route for GET requests to '/projects'
router.get('/', (req, res) => {
  // Find all documents in the 'projects' collection
  Project.find((err, projects) => {
    if (err) {
      // Handle find error
      res.status(500).send(err);
    } else {
      // Return the found documents as the response
      res.json(projects);
    }
  });
});

module.exports = router;
