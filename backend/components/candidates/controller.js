const store = require('./store');

function updateVotes(id, parameter) {
  return new Promise(async (resolve, rejected) => {
    // if (!id || !candidate || !vote) {
    //   console.error('[candidateController] No hay candidato o voto.');
    //   rejected('Los datos son incorrectos.');
    //   return false;
    // }
    console.log("esta monda")
    const result = await store.update(id,parameter);
    resolve(result);
  });
}

function getVotes() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}
module.exports = {
  updateVotes,
  getVotes,
};
