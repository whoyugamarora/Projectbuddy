const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const projectsRoutes = require('./routes/projects');
const skillRoutes = require('./routes/skills');

const app = express();
app.use(cors({
  origin: ['http://localhost:3000']
}));

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://yugamarora:tanujarora@projectbuddy.su0yg.mongodb.net/?retryWrites=true&w=majority&appName=Projectbuddy', {
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

// Use body-parser to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the projects routes for all requests starting with /projects
app.use('/projects', projectsRoutes);
app.use('/myaccount', skillRoutes);

// Start the server
app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
