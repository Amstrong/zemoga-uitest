const model = require('./model');

function addVote(candidate, votes) {
  const addingVotes = new model(candidate, votes);
  addingVotes.save();
}

async function getVotes() {
  const votes = await model.find();
  return votes;
}

async function updateVote(id, parameter) {
  const FoundVote = await model.findById(id).toObject();
  const prueba = await parameter.save();
  return prueba;
}
module.exports = {
  add: addVote,
  list: getVotes,
  update: updateVote,
};
