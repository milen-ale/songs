import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { getSongsRequest, deleteSongRequest } from '../store/actions/songActions';
import SongItem from './SongItem'; // Import the SongItem component
import styled from '@emotion/styled'; // Import styled from @emotion/styled

// Define a styled component for the container
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: #667;
  width: 100%;
  margin-top: 10%;
`;

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state: RootState) => state.songs);

  useEffect(() => {
    dispatch(getSongsRequest());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      dispatch(deleteSongRequest(id));
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Song List</h2>
      {/* Use the styled Container component */}
      <Container>
        {songs.map((song) => (
          <div key={song._id}>
            <SongItem song={song} handleDelete={handleDelete} />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default SongList;
