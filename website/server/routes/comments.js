var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
const Post= require('../models/post');

router.get('/',function(req, res) {
  res.send({post: "hallo"});
})

router.post('/', function(req, res) {
  console.log(req.body)
  const post=new Post({
    _id:new mongoose.Types.ObjectId(),
    body: req.body
  })
  post.save().then(res=>
    console.log(res)).catch(err=>console.log(err));
  res.send(post);
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
