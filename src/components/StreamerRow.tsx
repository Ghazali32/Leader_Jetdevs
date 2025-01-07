import React from 'react';
import styled from 'styled-components';
import { Streamer } from '../types';

interface StreamerComponentProps {
  streamer: Streamer;
  rank: number;
}

const StreamerRow: React.FC<StreamerComponentProps> = ({ streamer, rank }) => {
  console.log(rank)
  return (
    <Item rank={rank}>
      <Content>
        <Rank rank={rank}>{rank}</Rank>
        <Info>
          <Avatar src={streamer.picture || 'https://via.placeholder.com/40'} alt={streamer.displayName} />
          <Name>{streamer.displayName}</Name>
        </Info>
        <Score>{streamer.score} points</Score>
      </Content>
    </Item>
  );
};

export default StreamerRow;

const Item = styled.div<{ rank: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 60px;
  box-sizing: border-box; 
  border-bottom: 1px solid #dcdcdc;
  background: ${({ rank  }) => (rank === 1 ? '#4A69DD' : rank % 2 === 0 ? '#F0F3FC' : '#F9FAFE')};
  color: ${({ rank }) => (rank === 1 ? '#ffffff' : '#000000')};

  &:hover {
    background: ${({ rank }) => (rank === 1 ? '#4A69DD' : '#e0e0e0')};
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;


const Rank = styled.div<{ rank: number }>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.2em;
  font-weight: bold;
  background: ${({ rank }) =>
    rank === 1 ? '#FF0000' :
    rank === 2 ? '#FFA500' :
    rank === 3 ? '#FFFF00' : '#625DF5'};
  color: ${({ rank }) => (rank <= 3 ? '#000000' : '#ffffff')};
  margin-right: 15px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Name = styled.div`
  font-size: 1.1em;
`;

const Score = styled.div`
  font-size: 1.1em;
  font-weight: bold;
`;
