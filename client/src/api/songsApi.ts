// src/api/songsApi.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api'; // Assuming your backend runs on localhost port 3000
export const getSongs = async () => {
  const response = await axios.get(`${BASE_URL}/songs`);
  console.log('res', response.data)
  return response.data;
};

export const addSong = async (song: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/songs`, song);
    console.log('Response from addSong:', response); // Log the response data
     // Send a POST request to add a new song
    return response.data; // Return the response data (e.g., the newly added song)
  } catch (error) {
    console.error('Error adding song:', error); // Log any errors that occur
    throw new Error(error.response?.data?.message || error.message); // Throw an error if request fails
  }
};

// Define similar functions for updating and deleting songs

export const updateSong = async (id: string, updatedSong: any) => {
  const response = await axios.put(`${BASE_URL}/songs/${id}`, updatedSong);
  console.log('res', response)
  return response.data;
};

    // delete song by id 
    export const deleteSong = async (id: string) => {
      const response = await axios.delete(`${BASE_URL}/songs/${id}`);
      return response.data;
    };
    
