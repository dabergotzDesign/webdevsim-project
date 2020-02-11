const mongoose=require('mongoose');
const {Schema}=mongoose;

let PostSchema=new Schema({
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