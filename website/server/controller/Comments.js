const mongoose=require('mongoose');
const Comment= require('../models/Comment');

const createComment=(req, res)=> {
    console.log(req.body)
    const newComment=new Comment({
        _id: mongoose.Types.ObjectId(),
        name:req.body.post.name,
        comment:req.body.post.comment,
        date:req.body.post.date,
        id:req.body.post.id,
        imgURL:req.body.post.imgURL,
        showing:req.body.post.showing
      });
  return newComment
    .save()
    .then((newComment) => {
      return res.status(201).json({
        success: true,
        message: 'New cause created successfully',
        Comment: newComment,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });
}  

const getAllComments=(req,res)=>{
  Comment.find()
  .select('_id name')
  .then((allComments) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all comments',
        Comment: allComments,
      })}).catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      })});
    };

module.exports={createComment, getAllComments};