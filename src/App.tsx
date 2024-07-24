import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Leaderboard from './components/LeaderBoard';
import { Streamer } from './types';

const generateInitialData = (): Streamer[] => {
  return [
    { userID: 'u-1', displayName: 'Jone', picture: '', score: Math.floor(Math.random() * 100000) },
    { userID: 'u-2', displayName: 'Victoria', picture: '', score: Math.floor(Math.random() * 100000) },
    { userID: 'u-3', displayName: 'Joy', picture: '', score: Math.floor(Math.random() * 100000) },
    { userID: 'u-4', displayName: 'Quinn', picture: '', score: Math.floor(Math.random() * 100000) },
    { userID: 'u-5', displayName: 'Sheenalo', picture: '', score: Math.floor(Math.random() * 100000) },
    { userID: 'u-6', displayName: 'Charlene', picture: '', score: Math.floor(Math.random() * 100000) },
    { userID: 'u-7', displayName: 'LeonaBaby', picture: '', score: Math.floor(Math.random() * 100000) },
    { userID: 'u-8', displayName: 'Sunny', picture: '', score: Math.floor(Math.random() * 100000) },
    { userID: 'u-9', displayName: 'ImWord', picture: '', score: Math.floor(Math.random() * 100000) },
    { userID: 'u-10', displayName: 'Dophine', picture: '', score: Math.floor(Math.random() * 100000) },
  ];
};

const App = () => {
  const [streamers, setStreamers] = useState<Streamer[]>(generateInitialData());

  useEffect(() => {
    const interval = setInterval(() => {
      setStreamers((prevStreamers) => 
        prevStreamers
          .map((streamer) => ({
            ...streamer,
            score: streamer.score + Math.floor(Math.random() * 5000) - 2500, // Adding variability with positive and negative increments
          }))
          .sort((a, b) => b.score - a.score)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <h1>Live Scores Leaderboard</h1>
      <Leaderboard streamers={streamers} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
