import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import styled from '@emotion/styled';

// Styled components for genre and album tables
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f0f0f0;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
`;

const SongStatistics: React.FC = () => {
  const { songs } = useSelector((state: RootState) => state.songs);

  // Total number of songs
  const totalSongs = songs.length;

  // Total number of artists
  const totalArtists = new Set(songs.map(song => song.artist)).size;

  // Total number of albums
  const totalAlbums = new Set(songs.map(song => song.album)).size;

  // Total number of genres
  const totalGenres = new Set(songs.flatMap(song => song.genre)).size;

  // Songs per genre
  const songsPerGenre: { [genre: string]: number } = {};
  songs.forEach(song => {
    if (Array.isArray(song.genre)) {
      song.genre.forEach(genre => {
        songsPerGenre[genre] = (songsPerGenre[genre] || 0) + 1;
      });
    }
  });

  // Songs per album
  const songsPerAlbum: { [album: string]: number } = {};
  songs.forEach(song => {
    songsPerAlbum[song.album] = (songsPerAlbum[song.album] || 0) + 1;
  });

  return (
    <div>
      <h2>Song Statistics</h2>
      <p>Total Songs: {totalSongs}</p>
      <p>Total Artists: {totalArtists}</p>
      <p>Total Albums: {totalAlbums}</p>
      <p>Total Genres: {totalGenres}</p>
   
      <h3>Songs Per Album:</h3>
      <Table>
        <thead>
          <tr>
            <TableHeader>Album</TableHeader>
            <TableHeader>Count</TableHeader>
          </tr>
        </thead>
        <tbody>
          {Object.entries(songsPerAlbum).map(([album, count]) => (
            <TableRow key={album}>
              <TableCell>{album}</TableCell>
              <TableCell>{count}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SongStatistics;
