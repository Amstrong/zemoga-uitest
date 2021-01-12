import React from 'react';
import { Candidates } from './Candidates';
import data from '../utils/data.json';

export const App = () => {
  return <Candidates data={data} />;
};
