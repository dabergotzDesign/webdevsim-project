import React from 'react';
import $ from 'jquery';

const Input=(props)=>{
  const nameInput=React.createRef();
  const commentInput=React.createRef();

  const handleSubmit= e => {
    e.preventDefault();
    const name = nameInput.current.value.trim();
    const comment = commentInput.current.value.trim();
    let newPost = {
      name,
      comment,
      date: new Date().toString(),
      id: props.currentID,
      showing: false
    };
    props.addPost(newPost)
  };

  function onChangeHandler(e){
    console.log(e.target.files[0].length)
    props.addImage(e.target.files[0])
    if (e.target.files.length === 1 )
{$('#uploadLabel').text(e.target.files[0].name);
  } else {
  $('#uploadLabel').text("no picture selected! (max. 5MB)");
  }
    };

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
        <div id="fileInput">
        <input type="file" id="file" name="file" accept="image/png, image/jpeg" onChange={onChangeHandler}/>
        <i className="fas fa-chevron-circle-up" id="inputOverlay"><label id="uploadLabel" htmlFor="imgUpload">upload image here (max. 5MB)</label></i>
        </div>
        <br/>
        <button type="submit">
          submit
        </button>
        <br />
      </form>
{props.response.sort((a,b)=>{
 const sortA= Date.parse(a.date)
 const sortB= Date.parse(b.date)
  return sortB-sortA
})
.map((el,i)=>{
return <div className="comment" key={i} >
<p>
{el.date.slice(0, 24)}<span>{el.name}</span>
</p>
<p>{el.comment}</p>
</div>
})}
</div>
)}

export default Input;