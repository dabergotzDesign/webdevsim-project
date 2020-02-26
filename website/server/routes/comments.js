var express = require('express');
var router = express.Router();
const { createComment, getAllComments }= require('../controller/Comments');

router.get('/', getAllComments);

router.post('/',createComment); 

router.get('/:id', function(req, res) {
  const id = req.params.id;
  res.send(req.body);
});

router.patch('/:id', function(req, res) {
  const id = req.params.id;
  res.send(req.body);
});

router.delete('/:id', function(req, res) {
  const id = req.params.id;
  res.status(200).json({
    message:`comment ${id} was deleted successfully!`});
});

module.exports = router
