import { Streamer } from '../types';

export const generateInitialData = (): Streamer[] => {
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