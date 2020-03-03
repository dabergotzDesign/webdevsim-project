const mongoose=require('mongoose');
const Comment= require('../models/Comment');

const createComment=(req, res)=> {
    console.log(req.body);
    const newComment=new Comment({
        id:req.body.post.id,
        name:req.body.post.name,
        comment:req.body.post.comment,
        date:req.body.post.date,
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
  .select('id name comment date showing')
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

const deleteAllComments=async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) throw new createError.NotFound();
    res.status(200).send(record);
  } catch (e) {
    next(e);
  }
};

module.exports={createComment, getAllComments, deleteAllComments};