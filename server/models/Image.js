const mongoose=require('mongoose');
const {Schema}=mongoose;

let ImageSchema=new Schema({
    id:{
        type:String,
        required: true,
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    imgURL:{
        type:String,
        required:true
    },
});

module.exports=mongoose.model("Image", ImageSchema);