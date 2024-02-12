import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSongRequest } from '../store/actions/songActions';
import styled from '@emotion/styled';

const FormContainer = styled.div`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Input = styled.input`
text-align: center;
margin-bottom: 10px;
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
display:flex
width: 50%;
margin: 5px; /* Add margin-right for gap */

  @media (max-width: 768px) {
    margin-bottom: 8px;
    padding: 15px;
    width: 100%;
    margin-left: 5px; 
  }

  @media (max-width: 480px) {

    padding: 10px;
    width: 100%;
  

  }
`;

const Button = styled.button`
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #808080;
`;

const SongForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && artist.trim() && album.trim() && genre.trim()) {
      dispatch(addSongRequest({ title, artist, album, genre }));
    } else {
      console.log('Form fields are empty');
    }
  };

  return (
    <FormContainer>
      <h2>Add Song</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter song title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter album"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
         <Button type="submit">Add</Button>
      </form>
     
    </FormContainer>
  );
};

export default SongForm;