const mongoose=require('mongoose');
const Image= require('../models/Image');

const createImage=(req, res)=> {
    console.log(req.body);
    const newImage=new Image({
        id:req.body.image.id,
        name:req.body.image.name,
        date:req.body.image.date,
        imgURL:req.body.image.imgURL,
      });
  return newImage
    .save()
    .then((newImage) => {
      return res.status(201).json({
        success: true,
        message: 'New cause created successfully',
        Image: newImage,
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

const getAllImages=(req,res)=>{
  Image.find()
  .select('id name date imgURL')
  .then((allImages) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all images',
        Image: allImages,
      })}).catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      })});
    };

const deleteAllImages=async (req, res, next) => {
  try {
    const image = await Image.findByIdAndDelete(req.params.id);
    if (!image) throw new createError.NotFound();
    res.status(200).send(record);
  } catch (e) {
    next(e);
  }
};

module.exports={createImage, getAllImages, deleteAllImages};