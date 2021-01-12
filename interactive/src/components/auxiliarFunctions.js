import PropTypes from 'prop-types';

export const chooseVoterCard = (id) => {
  if (id === 1) {
    return 'voter--card-kanye';
  } else if (id === 2) {
    return 'voter--card-mark';
  } else if (id === 3) {
    return 'voter--card-cristina';
  } else if (id === 4) {
    return 'voter--card-malala';
  }
};

export const negativePercentage = (positiveVotes, negativeVotes) => {
  const totalVotes = positiveVotes + negativeVotes;
  const result = Math.ceil((negativeVotes / totalVotes) * 100);
  return result;
};

export const positivePercentage = (positiveVotes, negativeVotes) => {
  const totalVotes = positiveVotes + negativeVotes;
  const result = Math.ceil((positiveVotes / totalVotes) * 100);
  return result;
};

export const dynamicStyle = (positiveVotes, negativeVotes) => {
  const totalVotes = positiveVotes + negativeVotes;
  const firstColumn = (positiveVotes / totalVotes) * 100;
  const secondColumn = (negativeVotes / totalVotes) * 100;
  console.log(positiveVotes, negativeVotes, firstColumn, secondColumn);
  return {
    display: 'grid',
    gridTemplateColumns: `${firstColumn}% ${secondColumn}%`,
    height: '50px',
  };
};
chooseVoterCard.PropTypes = {
  id: PropTypes.number.isRequired,
};

negativePercentage.PropTypes = {
  positiveVotes: PropTypes.number.isRequired,
  negativeVotes: PropTypes.number.isRequired,
};
positivePercentage.PropTypes = {
  positiveVotes: PropTypes.number.isRequired,
  negativeVotes: PropTypes.number.isRequired,
};
dynamicStyle.PropTypes = {
  positiveVotes: PropTypes.number.isRequired,
  negativeVotes: PropTypes.number.isRequired,
};
