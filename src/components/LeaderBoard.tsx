import React from 'react';
import styled from 'styled-components';
import { Streamer } from '../types';
import StreamerRow from './StreamerRow';

interface LeaderboardProps {
  streamers: Streamer[];
}

const ITEM_HEIGHT = 60;

const Leaderboard: React.FC<LeaderboardProps> = ({ streamers }) => {
  return (
    <List style={{ height: `${streamers.length * ITEM_HEIGHT}px` }}>
      {streamers.map((streamer, index) => (
        <StreamerWrapper key={streamer.userID} style={{ transform: `translateY(${index * ITEM_HEIGHT}px)` }}>
          <StreamerRow streamer={streamer} rank={index + 1} />
        </StreamerWrapper>
      ))}
    </List>
  );
};

export default Leaderboard;

const List = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px; 
  margin: 20px auto; 
  background: transparent;
  border-radius: 8px;
  overflow: hidden;
`;


const StreamerWrapper = styled.div`
  position: absolute;
  width: 100%;
  transition: transform 0.5s ease-in-out;
`;
