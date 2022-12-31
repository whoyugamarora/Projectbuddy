const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// Add a new skill or update an existing skill
router.post('/', (req, res) => {
  const skill = req.body.skill;
  const userId = req.body.userId;

  Skill.findOne({ userId }, (err, foundSkill) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (foundSkill) {
        // Update the existing skill document
        foundSkill.skills.push(skill);
        foundSkill.save((err, updatedSkill) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.send(updatedSkill);
          }
        });
      } else {
        // Create a new skill document
        const newSkill = new Skill({ userId, skills: [skill] });
        newSkill.save((err, savedSkill) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.send(savedSkill);
            console.log('Data Saved Successfully');
          }
        });
      }
    }
  });
});

// Get a specific user's skills
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  Skill.findOne({ userId }, (err, foundSkill) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(foundSkill);
    }
  });
});

//Update a specific user's skills
router.put('/:userId', (req, res) => {
    const userId = req.params.userId;
    const skills = req.body.skills;
  
    Skill.findOne({ userId }, (err, foundSkill) => {
      if (err) {
        res.status(500).send(err);
      } else {
        foundSkill.skills = skills;
        foundSkill.save((err, updatedSkill) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.send(updatedSkill);
            console.log('Data Saved Successfully');
          }
        }); 
      }
    });
  });
  

  module.exports = router;