var express = require('express');
let Post=require('../models/postModel');
let PostRouter=express.Router();
var app = express();
var multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname )
  }
})

let upload = multer({ storage: storage }).array("file");

app.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)
    })
});

getPosts=async(req,res,next)=>{
  try{
    const posts=await Post.find();
    res.send(posts);
  }
      catch(e)
   {  
     next(e)}
  }

app.get('/upload',getPosts);

PostRouter.route("/uploadmulter").post(upload.single('img'),(req,res,next)=>{
    console.log(req.body);
    const newPost=new Post({
        name:req.body.name,
        comment:req.body.comment,
        img:req.file.path
    })

    newPost.save()
    .then((result)=>{
      console.log(result);
      res.status(200).json({
        success:true,
        document:result
      });
    })
    .catch((err)=>next(err));
})

