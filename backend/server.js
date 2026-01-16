const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
const aboutMeRoute = require('./routes/aboutMe');
const certificateRoutes = require("./routes/certificateRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/projects', projectRoutes);
app.use('/api/aboutme', aboutMeRoute);
app.use("/api/certificates", certificateRoutes);
app.use("/api/contact", require("./routes/contact"));

// Connect DB
connectDB();

// Test route
app.get('/', (req, res) => {
  res.send('Backend + MongoDB connected 🚀');
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
