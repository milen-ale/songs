import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSongRequest } from '../store/actions/songActions';
import styled from '@emotion/styled';

// Define styled components
const ListItem = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  display: grid; /* Corrected display property */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color:#808080;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  width: 80%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  /* Media query for responsive styles */
  @media (max-width: 768px) {
    width: calc(80% - 20px); /* 2 items per row with a gap of 20px */
  }
  @media (max-width: 480px) {
    width: calc(100% - 20px); /* 1 item per row with a gap of 20px */
  }
`;

const Input = styled.input`
  margin-bottom: 8px;
`;

const Button = styled.button`
  margin-right: 8px;
`;

const SongItem: React.FC<{ song: any; handleDelete: (id: string) => void }> = ({ song, handleDelete }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedSong, setUpdatedSong] = useState({ ...song });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedSong({ ...updatedSong, [name]: value });
  };

  const handleUpdate = () => {
    dispatch(updateSongRequest({ id: song._id, updatedSong: updatedSong }));
    setIsEditing(false);
  };

  return (
    <ListItem>
      {isEditing ? (
        <div>
          <Input type="text" name="title" value={updatedSong.title} onChange={handleInputChange} />
          <Input type="text" name="artist" value={updatedSong.artist} onChange={handleInputChange} />
          <Input type="text" name="album" value={updatedSong.album} onChange={handleInputChange} />
          <Input type="text" name="genre" value={updatedSong.genre} onChange={handleInputChange} />
          <Button onClick={handleUpdate}>Save</Button>
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
        </div>
      ) : (
        <div>
          <p><strong>Title:</strong> {song.title}</p>
          <p><strong>Artist:</strong> {song.artist}</p>
          <p><strong>Album:</strong> {song.album}</p>
          <p><strong>Genre:</strong> {song.genre}</p>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button onClick={() => handleDelete(song._id)}>Delete</Button>
        </div>
      )}
    </ListItem>
  );
};

export default SongItem;