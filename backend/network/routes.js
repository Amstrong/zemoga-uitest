const express = require('express');
const candidates = require('../components/candidates/network');
const routes = function (server) {
  server.use('/candidates', candidates);
};

module.exports = routes;
