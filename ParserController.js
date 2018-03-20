const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const http = require('http');
const fetch = require("node-fetch");
const fs = require('fs');
const url = require("url");
const path = require("path");
const textract = require('textract');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Parses A File
router.post('/', function (req, res) {
  let confirmation = {
    file : req.body.file
  }
  textract.fromUrl(req.body.file, ( error, text ) => {
    console.log(error);
    console.log(text);
    confirmation.text = text;
    res.status(200).send(confirmation);
  });
  
});



router.get('/', function (req, res) {
  res.status(200).send(['ok']);
});

module.exports = router;