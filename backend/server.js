const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const projectsRoutes = require('./routes/projects');
const skillRoutes = require('./routes/skills');
const ideaRoutes = require('./routes/ideaRoutes')
require('dotenv').config();


const app = express();

const corsOptions = {
  origin: (origin, callback) => {
      const allowedOrigins = ['https://projectbuddy.pages.dev', 'https://projectbuddy.yugamarora.dev', 'http://localhost:3000', 'http://localhost:3000', 'http://100.114.44.75:3000'];
      if (allowedOrigins.includes(origin)) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  }
};

app.use(cors(corsOptions));



// Connect to the MongoDB database
mongoose.connect( process.env.REACT_APP_MONGODB_API , {
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

app.get("/", (req, res) => {
  res.status(200).json("Welcome, you app is working well");
});

// Use body-parser to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the projects routes for all requests starting with /projects
app.use('/projects', projectsRoutes);
app.use('/myaccount', skillRoutes);
app.use('/idea', ideaRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

