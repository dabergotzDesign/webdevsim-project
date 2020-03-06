var express = require('express');
var router = express.Router();
const { createImage, getAllImages, deleteAllImages }= require('../controller/ImageController');

router.get('/', getAllImages);

router.post('/',createImage); 

router.get('/:id', function(req, res) {
  const id = req.params.id;
  res.send(req.body);
});

router.patch('/:id', function(req, res) {
  const id = req.params.id;
  res.send(req.body);
});

router.delete('/:id', deleteAllImages);

module.exports = router