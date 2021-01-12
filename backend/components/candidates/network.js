const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function (req, res) {
  controller
    .getVotes()
    .then((dataList) => {
      response.success(req, res, dataList, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Invalid information', 500, err);
    });
});

router.patch('/:id', function (req, res) {
  controller
    .updateVotes(req.params.id, req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(() => {
      response.error(
        req,
        res,
        'Invalid information',
        400,
        'Error en el controlador'
      );
    });
});
module.exports = router;
