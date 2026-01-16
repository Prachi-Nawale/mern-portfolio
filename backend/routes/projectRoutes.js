const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// POST: Add a project
router.post('/add', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({ message: 'Project added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Fetch all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
