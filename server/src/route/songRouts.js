const express = require('express');
const songsController = require('../controller/songsController');
const router = express.Router();

// Route paths are prefixed with '/api'
router.post('/songs', songsController.createSong);
router.get('/songs', songsController.getAllSongs);
router.get('/songs/:id', songsController.getSongById);
router.put('/songs/:id', songsController.updateSong);
router.delete('/songs/:id', songsController.deleteSong);

module.exports = router;
