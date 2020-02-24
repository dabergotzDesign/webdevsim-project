var express = require('express');
var router = express.Router();

router.get('/',function(req, res) {
  res.send({post: "hallo"});
})

router.post('/', function(req, res) {
  console.log(req.body)
  res.send(req.body)
});

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
