const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// POST Route to create a project
router.post('/', (req, res) => {
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
        stack: req.body.stack,
        userId: req.body.userId,
        author: req.body.author,
        email: req.body.email,
    });

    project.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(project);
        }
    });
});

// GET Route to fetch all projects
router.get('/', (req, res) => {
    Project.find((err, projects) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(projects);
        }
    });
});

// DELETE Route to delete a project by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;

  try {
      const project = await Project.findById(id);
      if (!project) {
          return res.status(404).json({ message: 'Project not found' });
      }
      if (project.email !== email) {
          return res.status(403).json({ message: 'Unauthorized: You can only delete your own projects' });
      }
      await Project.findByIdAndDelete(id);
      res.json({ message: 'Project deleted successfully' });
  } catch (err) {
      console.error('Error in DELETE /projects/:id:', err.message);
      res.status(500).json({ error: err.message });
  }
});

// Route to fetch user profile and their projects
router.get('/profile/:userId', async (req, res) => {
    const { userId } = req.params; // Extract userId from the URL

    try {
        // Find all projects by this user
        const userProjects = await Project.find({ userId });

        if (userProjects.length === 0) {
            return res.status(404).json({ message: 'User or projects not found' });
        }

        // Infer user profile details from the first project
        const userProfile = {
            userId: userProjects[0].userId,
            email: userProjects[0].email,
            displayName: userProjects[0].author || 'Anonymous',
        };

        // Send user profile and projects
        res.json({ user: userProfile, projects: userProjects });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Search projects
router.get('/search', async (req, res) => {
    try {
        const { query } = req.query;

        // Create a case-insensitive search filter
        const searchFilter = {
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { author: { $regex: query, $options: 'i' } },
                { stack: { $regex: query, $options: 'i' } }
            ]
        };

        const projects = await Project.find(searchFilter);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects.' });
    }
});

module.exports = router;
