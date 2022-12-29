const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const projectsroutes = require('./src/routes/projects');

// Initialize the express app
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to the MongoDB database
mongoose.connect('mongodb+srv://yugamarora:yugamarora115@projectbuddy.ixngugu.mongodb.net/Projectbuddy', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const db = mongoose.connection;

// Log any errors that occur when connecting to the database
db.on('error', console.error.bind(console, 'connection error:'));

// Open the connection
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

// Define a simple route
app.use('/projects', projectsroutes);


// Start the server
app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});