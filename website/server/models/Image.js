const mongoose=require('mongoose');
const {Schema}=mongoose;

let ImageSchema=new Schema({
    imageRef:{
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