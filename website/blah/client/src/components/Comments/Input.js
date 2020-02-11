import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Input=()=>{
  
  const {nameInput,commentInput,fileInput}=React.createRef(); 
  const [selectedFile, setFile] = useState(null);
  const [call, setCall]=useState({
    response:'',
    post:'',
    responseToPost:''
  })
  
  useEffect(()=>{
    callApi().then(res=>setCall({response:res.express})).catch(err=> console.log(err));
  })

async function callApi(){
const response= await fetch('/api/hello');
const body= await response.json();
if(response.status !== 200) throw Error (body.message);
return body;
  }
  // function addPost(name, comment,file){
  //   const post = {
  //     name: name,
  //     comment: comment,
  //     date: new Date().toLocaleString(),
  //     file:file,
  //     showing: false
  //   };
  //   setFile(post);
  // };

async function handleSubmit(e){
    e.preventDefault();
    const response=await fetch('/api/world',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: call.post }),
    })
    const body=await response.text();
    setCall({responseToPost:body})
    // const name = nameInput.current.value.trim();
    // const comment = commentInput.current.value.trim();
    // const file = fileInput.current.value.trim();
    // addPost(name,comment,file);
    
    const data = new FormData(); 
    data.append('file', selectedFile);
    axios.post("/upload", data, { 
    }).then(res => { 
      console.log(res.statusText);
    })
    console.log("submitted");
    // e.currentTarget.reset();
  };
  
  function onChangeHandler(e){
    setFile(e.target.files[0])
    console.log(selectedFile)
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
          /* call the ref with the 'ref' attribute */ required
        ></input>
        <br/>
        <label>comment</label>
        <textarea rows="2" id="comment" name="comment" ref={commentInput} required></textarea>
        <br/>
        <div>
        <label htmlFor="imgUpload">upload your website image here <i className="fas fa-chevron-circle-up"></i></label>
        <input type="file" id="ref" ref={fileInput} name="file" accept="image/png, image/jpeg" onChange={onChangeHandler}/>
        </div>
        <br/>
        <button type="submit">
          submit
        </button>
        <br />
      </form>
<p>{call.response}</p>
    </div>
    )
}
 
export default Input;