const mongoose=require('mongoose');
const {Schema}=mongoose;

let PostSchema=new Schema({
    _id: mongoose.Types.ObjectId,
    name:{
        type:String,
        required:true
    }
    comment:{
        type:String,
        required:true
    }
    img:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("Post", PostSchema);