var express = require('express');
var router = express.Router();
const { createComment, getAllComments, deleteAllComments }= require('../controller/CommentController');

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

router.delete('/:id', deleteAllComments);

module.exports = router
