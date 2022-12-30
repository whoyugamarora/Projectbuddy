const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const projectsRoutes = require('./routes/projects');

const firebaseConfig = {
  // Your Config Goes Here
  apiKey: "AIzaSyAQvTxUZ3Coa5tWom-M0DJZVdcktdX4GEU",
  authDomain: "projectbuddy-ufv.firebaseapp.com",
  projectId: "projectbuddy-ufv",
  storageBucket: "projectbuddy-ufv.appspot.com",
  messagingSenderId: "1025724302770",
  appId: "1:1025724302770:web:c887f2845c2974134150ab"
};

admin.initializeApp(firebaseConfig);

const app = express();
app.use(cors({
  origin: ['http://localhost:3000']
}));

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

// Use body-parser to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the projects routes for all requests starting with /projects
app.use('/projects', projectsRoutes);

// Start the server
app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
