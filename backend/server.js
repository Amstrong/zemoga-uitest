const express = require('express');
require('dotenv').config();
const DB_URL = process.env.DB_URL;
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

db(DB_URL);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);
app.listen(3000);
console.log('la aplicación está escuchando en http://localhost:3000');
