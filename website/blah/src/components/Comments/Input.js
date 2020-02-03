import React,{useState} from 'react';
import axios from 'axios';

const Game =()=>{

const [selectedFile, setFile] = useState(0);
const {name,img,comment}=React.createRef();

function maxSelectFile(e){
        let files = e.target.files // create file object
            if (files.length > 3) { 
               const msg = 'Only 3 images can be uploaded at a time'
               e.target.value = null // discard selected file
               console.log(msg)
              return false;
          }
        return true;
     
     }

function handleSubmit(){
    const data = new FormData(); 
    data.append('file', selectedFile);
    axios.post("http://localhost:8000/upload", data, { 
        // receive two    parameter endpoint url ,form data
    }).then(res => { // then print response status
        console.log(res.statusText);
     })
     console.log("submitted");
    };


function onChangeHandler(e){
    setFile(e.target.files[0])
    console.log(e.target.files[0])
    console.log(selectedFile)
}

return(
<div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          ref={name}
          /* call the ref with the 'ref' attribute */ required
        ></input>
        <br />
        <label>comment</label>
        <textarea rows="2" ref={comment} required></textarea>
        <br />
        <div>
        <label for="imgUpload">upload your website image here <i className="fas fa-chevron-circle-up"></i></label>
        <input type="file" name="imgUpload" ref={img} name="file" accept="image/png, image/jpeg" onChange={onChangeHandler}/>
        </div>
        <br />
        <button type="submit">
          submit
        </button>
        <br />
      </form>
    </div>
    )
}
 
export default Game;