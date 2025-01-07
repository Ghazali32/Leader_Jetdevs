import  { useState, useEffect } from 'react';
import styled from 'styled-components';
import Leaderboard from './components/LeaderBoard';
import { Streamer } from './types';
import { generateInitialData } from './utils/data';

const App = () => {
  const [streamers, setStreamers] = useState<Streamer[]>(generateInitialData());

  //here we are shuffling the streamers score by randomly adding a value between -2500 and 2500 to each streamer's score
  useEffect(() => {
    const interval = setInterval(() => {
      setStreamers((prevStreamers) => 
        prevStreamers
          .map((streamer) => ({
            ...streamer,
            score: streamer.score + Math.floor(Math.random() * 5000) - 2500,
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
