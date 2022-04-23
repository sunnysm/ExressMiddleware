const express = require('express');

const router = express.Router();

router
  .get('/', (req, res, next) => {
    res.send('Api server is healthy and working fine').sendStatus(200);
  })
  .get('/db', (req, res, next) => {
    res.send('DB connected and healthy').sendStatus(200);
  });

module.exports = router;
