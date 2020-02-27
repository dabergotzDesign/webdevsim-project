import React,{useState,useEffect} from 'react';
import uuid from "uuid/v4";
import {storage} from "../../firebase/firebase"
import axios from 'axios';

const Input=()=>{
  const [response, setResponse]=useState([])
  const [responseToPost, setResponseToPost]=useState('')
  let post='';

  const [baseImg, setBaseImg]=useState('')
  const allInputs={}
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)
  const imageList=[]
  
  const nameInput=React.createRef();
  const commentInput=React.createRef();

  useEffect(()=>{
    callApi().then(res=>setResponse(res.Comment)).catch(err=> console.log(err));
  },[post])
  
  const callApi= async () =>{
    const response= await fetch('http://localhost:5000/comments');
    const body= await response.json()
    if(response.status !== 200) throw Error (body.message);
    return body;
  }

  const handleSubmit= async (e) => {
  e.preventDefault();
  setBaseImg('')
  const name = nameInput.current.value.trim();
  const comment = commentInput.current.value.trim();
  let newPost = {
      name,
      comment,
      date: new Date().toLocaleString(),
      id:uuid(),
      imgURL:imageAsUrl.imgURL,
      showing: false
    }; 
  post=newPost;
  postData()
  } 

const postData= async () => {  
const response=await fetch('http://localhost:5000/comments',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({post}),
  })
  const body = await response.text();
  setResponseToPost(body)
  
  if (baseImg !== ''){   
      const uploadTask=storage.ref(`/images/${post.id}`).put(baseImg) 
      
      //initiates the firebase side uploading 
      uploadTask.on('state_changed', 
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        // console.log(snapShot)
      }, (err) => {
        //catches the errors
        console.log(err)
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('images').child(post.id).getDownloadURL()
        .then(fireBaseUrl => {
         setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
        })
      })
    }
  };
    
function onChangeHandler(e){
  setBaseImg(e.target.files[0])
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
        <input type="file" id="ref" name="file" accept="image/png, image/jpeg" onChange={onChangeHandler}/>
        </div>
        <br/>
        <button type="submit">
          submit
        </button>
        <br />
      </form>
      {response.map((el,i)=>{
        return <div key={i} >
{/* <p>{el._id}</p>
<p>{el.name}</p> */}
<p>{el.comment}</p>
<p>{el.imgURL}</p>
<p>{el.date}</p>
</div>
})}
<img src={imageAsUrl.imgUrl} alt="websitePic"/>
</div>
)
}

export default Input;