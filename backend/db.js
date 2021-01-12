const db = require('mongoose');
db.Promise = global.Promise;
async function connect(url) {
  await db
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('[DB] conectada con exito'))
    .catch((err) => console.error('[DB]', err));
}

module.exports = connect;
