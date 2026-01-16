const express = require('express');
const router = express.Router();
const AboutMe = require('../models/AboutMe');

// GET About Me
router.get('/', async (req, res) => {
  try {
    const aboutMe = await AboutMe.findOne(); // only one entry
    res.json(aboutMe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST About Me
router.post('/add', async (req, res) => {
  const { name, bio, email, phone, imageUrl } = req.body;
  const aboutMe = new AboutMe({ name, bio, email, phone, imageUrl });
  try {
    const saved = await aboutMe.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
