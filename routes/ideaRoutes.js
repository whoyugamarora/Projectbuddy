const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');

// Get all ideas
router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find().sort({ votes: -1, createdAt: -1 });
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch ideas.' });
  }
});

// Add a new idea
router.post('/', async (req, res) => {
  const { title, description, userId, author, email } = req.body;

  try {
    const newIdea = new Idea({ title, description, userId, author, email });
    await newIdea.save();
    res.status(201).json(newIdea);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create idea.' });
  }
});

// Upvote an idea
router.put('/:id/upvote', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) return res.status(404).json({ error: 'Idea not found.' });
    idea.votes += 1;
    await idea.save();
    res.json(idea);
  } catch (err) {
    res.status(400).json({ error: 'Failed to upvote idea.' });
  }
});

module.exports = router;
