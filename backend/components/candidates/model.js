const moongose = require('mongoose');
const Schema = moongose.Schema;

const mySchema = new Schema({
  candidate: Number,
  vote: Number,
});

const model = moongose.model('votes_Candidates', mySchema);
module.exports = model;


