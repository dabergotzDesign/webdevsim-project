var express = require('express');
var router = express.Router();

router.get('/hello',function(req, res) {
  res.send({express:`Hello from Express `});
})

router.post('/world', function(req, res) {
  console.log(req.body.post)
  res.send( `I received your POST. This is what you send me: ${req.body.post}`);
});

module.exports = router
