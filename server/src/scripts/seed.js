const mongoose = require('mongoose');
const Song = require('../models/songs.js'); // Import the Song model

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/song', {
  useCreateIndex: true
});

// Sample data
const songsData = [
  {
    title: 'Song 1',
    artist: 'Artist 1',
    album: 'Album 1',
    genre: ["Genre1", "Genre2"]
  },
  {
    title: 'Song 2',
    artist: 'Artist 2',
    album: 'Album 2',
    genre: ["Genre1", "Genre2"]
  },
  {
    title: 'Song 3',
    artist: 'Artist 1',
    album: 'Album 1',
    genre: ["Genre1", "Genre2"]
  },
  // Add more sample data as needed
];

// Insert sample data into the collection
Song.insertMany(songsData)
  .then(result => {
    console.log('Documents inserted successfully:', result);
    // Close the connection after insertion
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting documents:', err);
    // Close the connection if there's an error
    mongoose.connection.close();
  });
