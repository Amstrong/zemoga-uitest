import React from 'react';
import { renderCandidates } from './renderCandidates';
import '../styles/voters.css';

export const Candidates = ({ data }) => {
  return (
    <div className='voters--container'>
      {data.map((dataCandidate) => {
        return renderCandidates(dataCandidate);
      })}
    </div>
  );
};
