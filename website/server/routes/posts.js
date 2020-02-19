var express = require('express');
var router = express.Router();

router.get('/hello',function(req, res) {
  res.send({express:`Hello from Express `});
})

router.post('/world', function(req, res) {
  console.log(req.body)
  res.send(req.body);
});

module.exports = router
