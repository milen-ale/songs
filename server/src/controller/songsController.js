const Song = require('../models/songs');

const createSong = async (req, res) => {
  try {
    const { title, artist, album, genre } = req.body;
    const newSong = new Song({ title, artist, album, genre });
    await newSong.save();
    console.log('Song added successfully');
    res.status(201).json({ success: true, message: 'Song added successfully', song: newSong });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to add song', error: error.message });
  }
};

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSongById = async (req, res) => {
  const { id } = req.params;
  try {
    const song = await Song.findById(id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSong = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSong = await Song.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedSong) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.json(updatedSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSong = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSong = await Song.findByIdAndDelete(id);
    if (!deletedSong) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.json({ message: 'Song deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong
};
