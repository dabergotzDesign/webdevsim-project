var express = require('express');
let router=express.Router();
const multer = require('multer')
let Image=require('../models/Image');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, './uploads')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' + file.originalname )
}
})

let upload = multer({ storage: storage });

router.route("/upload")
.post(upload.single('imageData'),(req,res,next)=>{
  console.log(req.body);
  const newImage=new Image({
 imageRef: req.body.imageRef,
 imageData: req.file.path
  });

  newImage.save()
  .then((result)=>{
    console.log(result);
    res.status(200).json({
      success:true,
      document:result
    });
  })
  .catch((err)=>next(err));
})

router.route("/uploadbase").post((req,res,next)=>{
  const newImage=new Image({
    imageRef: req.body.imageRef,
    imageData: req.file.path
     });

     newImage.save()
     .then((result)=>{
       console.log(result);
       res.status(200).json({
         success:true,
         document:result
       });
     })
     .catch((err)=>next(err));
   })

// app.post('/upload',function(req, res) {
     
//     upload(req, res, function (err) {
//            if (err instanceof multer.MulterError) {
//                return res.status(500).json(err)
//            } else if (err) {
//                return res.status(500).json(err)
//            }
//       return res.status(200).send(req.file)
//     })
// });

module.exports = router;