import React,{useState,useEffect} from 'react';
import uuid from "uuid/v4";
import axios from 'axios';

const Input=()=>{
  const nameInput=React.createRef();
  const commentInput=React.createRef();
  const imgRefInput=React.createRef(); 
  
  const [response, setResponse]=useState('')
  const [post, addNewPost]=useState([])
  const [responseToPost, setResponseToPost]=useState([])

  const [multerImg, setMulterImg]=useState(null)
  const [firebaseImg, setFirebaseImg]=useState(null)
  const [baseImg, setBaseImg]=useState(null)
  
useEffect(()=>{
    callApi().then(res=>setResponse(res.post)).catch(err=> console.log(err));
  },[])

const callApi= async () =>{
const response= await fetch('/comments');
const body= await response.json()
if(response.status !== 200) throw Error (body.message);
return body;
  }

  function addPost(name, comment,imgRef){
    const newPost = {
      name: name,
      comment: comment,
      date: new Date().toLocaleString(),
      // imgRef:imgRef,
      showing: false
    }; 
    post.push(newPost);
    // addNewPost([...post, newPost]);
  };
  
  const handleSubmit= async e => {
    e.preventDefault();
    const name = nameInput.current.value.trim();
    const comment = commentInput.current.value.trim();
    const imgRef = imgRefInput.current.value.trim();
    addPost(name,comment,imgRef)
    const response=await fetch('/comments',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({post}),
    })
    
    const body=await response.text();
    setResponseToPost(body)
    
    // setMulterImg(URL.createObjectURL(baseImg))
    let imgFormObj= new FormData();
    imgFormObj.append('imageRef', imgRef)
    imgFormObj.append('imageData', baseImg )
    console.log(imgFormObj)
    axios.post("images/upload", imgFormObj, { 
    }).then(data => { 
      console.log(data);
    })
    console.log("submitted");
    // e.currentTarget.reset();
  };
  
  function onChangeHandler(e){
    setBaseImg(e.target.files[0])
    console.log(e.target.files[0])
  }

return(
<div>
      <form className="comment-form" encType="multipart/form-data" onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          id="name"
          name="name"
          ref={nameInput}
          required
        ></input>
        <br/>
        <label>comment</label>
        <textarea rows="2" id="comment" name="comment" ref={commentInput} required></textarea>
        <br/>
        <div>
        <label htmlFor="imgUpload">upload your website image here <i className="fas fa-chevron-circle-up"></i></label>
        <input type="file" id="ref" ref={imgRefInput} name="file" accept="image/png, image/jpeg" onChange={onChangeHandler}/>
        </div>
        <br/>
        <button type="submit">
          submit
        </button>
        <br />
      </form>
<h1>{response}</h1>
    </div>
    )
}
 
export default Input;