import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/voters.css';
import handUp from '../assets/Icons/handUp.png';
import handDown from '../assets/Icons/handDown.png';
import {
  chooseVoterCard,
  dynamicStyle,
  positivePercentage,
  negativePercentage,
} from './auxiliarFunctions';

const handUpOrHandDown = (positiveVotes, negativesVotes) => {
  if (positiveVotes > negativesVotes) {
    return (
      <div class='positive-vote'>
        <img alt='MoreVotes' class='hand-icon-votation' src={handUp} />
      </div>
    );
  } else {
    return (
      <div class='negative-vote'>
        <img alt='lessVotes' class='hand-icon-votation' src={handDown} />
      </div>
    );
  }
};

export const renderCandidates = ({ id, name, category, period, votes }) => {
  const localVotes =
    JSON.parse(localStorage.getItem(`${id}-candidate`)) || votes;
  const [votesState, setVotesState] = useState(localVotes);
  const [positiveVote, setPositiveVote] = useState(votesState.positiveVotes);
  const [negativeVote, setNegativeVote] = useState(votesState.negativeVotes);
  const [validationVote, setValidationVote] = useState(null);
  const [isVoted, setIsVoted] = useState(false);

  let totalVotes = {
    positiveVotes: positiveVote,
    negativeVotes: negativeVote,
  };

  useEffect(() => {
    window.localStorage.setItem(`${id}-candidate`, JSON.stringify(totalVotes));
  }, [positiveVote, negativeVote]);
  return (
    <div className={chooseVoterCard(id)}>
      <div className='card-details'>
        <div></div>
        <div className='card-layout'>
          {handUpOrHandDown(positiveVote, negativeVote)}
          <div>
            <p className='title-voter-long'>{name}</p>
            <p className='text-voter'>
              <span className='bold-text-voter'>{period}</span> in {category}
            </p>
            <p className='text-paragrah-voter'>
              Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean
              eu velit libero.
            </p>

            {isVoted ? (
              <Fragment>
                <p className='thanks-text'>Thank you for voting!</p>
                <button className='voteNow' onClick={() => setIsVoted(false)}>
                  Vote Again
                </button>
              </Fragment>
            ) : (
              <div className='voting-system'>
                <div
                  className={validationVote ? 'positive-vote-pressed' : 'positive-vote' }
                  onClick={() => setValidationVote(true)}
                >
                  <img
                    alt='MoreVotes'
                    className='hand-icon-votation'
                    src={handUp}
                  />
                </div>
                <div
                  className={validationVote === false ? 'negative-vote-pressed' :'negative-vote' }
                  onClick={() => setValidationVote(false)}
                >
                  <img
                    alt='MoreVotes'
                    className='hand-icon-votation'
                    src={handDown}
                  />
                </div>
                <button
                  className='voteNow'
                  onClick={() => {
                    if (validationVote) {
                      setPositiveVote(positiveVote + 1);
                      setIsVoted(true);
                      setValidationVote(null);
                    } else if (validationVote === false) {
                      setNegativeVote(negativeVote + 1);
                      setIsVoted(true);
                      setValidationVote(null);
                    }
                  }}
                >
                  Vote Now
                </button>
              </div>
            )}
          </div>
        </div>
        <div style={dynamicStyle(positiveVote, negativeVote)}>
          <div className='positive-voting'>
            <img alt='MoreVotes' className='hand-icon' src={handUp} />
            <p className='voting-percentage'>
              {positivePercentage(positiveVote, negativeVote)}%
            </p>
          </div>
          <div className='negative-voting'>
            <img alt='lessVotes' className='hand-icon' src={handDown} />
            <p className='voting-percentage'>
              {negativePercentage(positiveVote, negativeVote)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

renderCandidates.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  votes: PropTypes.objectOf(PropTypes.number).isRequired,
};

handUpOrHandDown.PropTypes = {
  positiveVotes: PropTypes.number.isRequired,
  negativeVotes: PropTypes.number.isRequired,
};
