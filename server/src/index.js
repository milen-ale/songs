const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Models and routes
const Song = require('./models/songs.js');
const songRoutes = require('./route/songRouts.js');

// Create express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://root:example@localhost:27017/song?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Routes
app.use('/songs', songRoutes);

// Add other routes for updating and removing songs

// Start the server
const PORT = process.env.PORT || 3000; // Use process.env.PORT if available
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
