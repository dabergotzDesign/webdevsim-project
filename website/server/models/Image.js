const mongoose=require('mongoose');
const {Schema}=mongoose;

let ImageSchema=new Schema({
    imgName:{
        type:String,
        default:"none",
        required:true
    },
    imageData:{
        type:String,
        required:true
    },
});

module.exports=mongoose.model("Image", ImageSchema);