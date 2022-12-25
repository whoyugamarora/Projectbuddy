const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Initialize the express app
const app = express();

// Enable CORS for all routes
app.use(cors());

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a simple route
app.get('/dashboard', (req, res) => {
  res.send('Hey there!');
});

// Start the server
app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});