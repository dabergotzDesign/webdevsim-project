const mongoose=require('mongoose');
const {Schema}=mongoose;

let CommentSchema=new Schema({
    _id: mongoose.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    imgRef:{
        type:String,
        required:true
    },
    showing:{
        type:Boolean,
        required:true
    }
});

module.exports=mongoose.model("Comment", CommentSchema);