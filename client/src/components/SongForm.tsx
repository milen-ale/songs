import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSongRequest } from '../store/actions/songActions';
import styled from '@emotion/styled';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 80%;
  max-width: 400px;
`;

const Input = styled.input`
  text-align: center;
  padding: 13px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Button = styled.button`
  border: 1px solid #ccc;
  padding: 13px;
  border-radius: 5px;
  background-color: #808080;
  width: 100%;
  max-width: 200px;
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
      <Form onSubmit={handleSubmit}>
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
      </Form>
    </FormContainer>
  );
};

export default SongForm;
