import React from 'react';
import Input from "./Input";
const CommentSection =(props)=>{

return(
<section id="CommentSection">
<Input response={props.response} addPost={props.addPost} currentID={props.currentID} addImage={props.addImage} />
</section>
)
};
 
export default CommentSection;