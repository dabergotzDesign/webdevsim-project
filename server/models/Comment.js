const mongoose=require('mongoose');
const {Schema}=mongoose;

let CommentSchema=new Schema({
    id:{
        type:String,
        required: true,
    },
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
    showing:{
        type:Boolean,
        required:true
    }
});
// Schema wrapped in Objects Model Modelname, Schemaname
module.exports=mongoose.model("Comment", CommentSchema);