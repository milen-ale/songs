import React from 'react';
import styled from '@emotion/styled';
import SongForm from './SongForm';
import SongStatistics from './SongStatistics';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:10px;
  margin-top: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SongPage: React.FC = () => {
  return (
    <div>
      <Container>
        <SongForm />
        <SongStatistics />
      </Container>
    </div>
  );
};

export default SongPage;
