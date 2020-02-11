const express = require('express');
const bodyParser=require('body-parser')
const multer = require('multer')
const cors = require('cors');

const app = express();
const port=process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors());

app.get('/api/hello', (req,res)=>{
  res.send({express:'Hello from Express'})
})


app.listen(port, function() {
  
  console.log('App running on port 5000');
  
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

// let upload = multer({ storage: storage }).single("file");

app.post(('/api/world'), (req,res)=>{
  console.log(req.body);
  res.send(
    `I received your POST. This is what you send me: ${req.body.post}`,
    ).next()
  })

// app.post('/upload',function(req, res) {
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       return res.status(500).json(err)
//     } else if (err) {
//       return res.status(500).json(err)
//            }
//       return res.status(200).send(req.file)
//     })
// });

// getPosts=async(req,res,next)=>{
//   try{
//     const posts=await Post.find();
//     res.send(posts);
//   }
//       catch(e)
//    {  
//      next(e)}
//   }

// app.get('/upload',getPosts);
