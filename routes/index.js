const express = require('express');
const router = express.Router();

let consumption = 0;
const macAdress = '11:22:33:44:55';

router.get('/', function(req, res, next) {
  consumption = consumption + 17;
  res.render('index', { consumption: consumption, macAdress: macAdress });
});

module.exports = router;
