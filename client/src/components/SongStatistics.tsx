import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/songReducer';
import styled from '@emotion/styled';

// Styled components for genre and album tables
const Container = styled.div`
  margin-top: 20px;


`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Statistic = styled.p`
  margin: 5px 0;
`;

const Table = styled.table`
width: 70%;
margin-left:15%;
border-collapse: collapse;
align-items: center;
justify-content: center;
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
  const { songs } = useSelector((state: RootState) => state);
  const totalSongs = songs ? songs.length : 0;

  // Total number of artists
  const totalArtists = new Set(songs.map(song => song.artist)).size;

  // Total number of albums
  const totalAlbums = new Set(songs.map(song => song.album)).size;

  // Total number of genres
  const totalGenres = new Set(songs.flatMap(song => song.genre)).size;

  // Songs per album
  const songsPerAlbum: { [album: string]: number } = {};
  songs.forEach(song => {
    songsPerAlbum[song.album] = (songsPerAlbum[song.album] || 0) + 1;
  });

  return (
    <Container>
      <Title>Song Statistics</Title>
      <Statistic>Total Songs: {totalSongs}</Statistic>
      <Statistic>Total Artists: {totalArtists}</Statistic>
      <Statistic>Total Albums: {totalAlbums}</Statistic>
      <Statistic>Total Genres: {totalGenres}</Statistic>
   
      <Title>Songs Per Album:</Title>
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
    </Container>
  );
};

export default SongStatistics;
