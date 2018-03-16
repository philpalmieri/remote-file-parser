var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Parses A File
router.post('/', function (req, res) {

  const confirmation = {
    file : req.body.file
  }

  res.status(200).send(confirmation);

});

module.exports = router;