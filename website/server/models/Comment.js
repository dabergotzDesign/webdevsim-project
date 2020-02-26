const mongoose=require('mongoose');
const {Schema}=mongoose;

let CommentSchema=new Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
    id:{
        type:String,
        required: true,
    },
    imgURL:{
        type:String,
    },
    showing:{
        type:Boolean,
        required:true
    }
});
// Schema wrapped in Objects Model Modelname, Schemaname
module.exports=mongoose.model("Comment", CommentSchema);