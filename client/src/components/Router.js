import React,{useState,useEffect} from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import uuid from "uuid/v4";
import {storage} from "../firebase/firebase";
import $ from 'jquery';
import axios from 'axios';

import Nav from "./Nav";
import App from "../App"
import About from "./About";
import Game from "./MyGame/Game";
import CommentSection from "./Comments/CommentSection";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer";
import Contact from "./Contact";
import Impressum from "./Impressum";
import Cookies from "./Cookies";

const Router = () => {

  let post='';
  let image='';

  const [loading,isLoading]=useState(true);
  const [currentID, setCurrentID]=useState(null);
  const [response, setResponse]=useState([]);
  const [responseImage, setImageResponse]=useState([]);
  const [responseToPost, setResponseToPost]=useState('');
  const [responseToImage, setResponseToImage]=useState('');
  const [baseImg, setBaseImg]=useState('');
  const [imageAsUrl, setImageAsUrl] = useState('');
console.log(baseImg)
  useEffect(()=>{
    setCurrentID(uuid());
    setImageAsUrl('');
    callApi().then(res=>setResponse(res.Comment)).catch(err=> console.log(err));
  },[responseToPost]);
  
  useEffect(()=>{
    setImageAsUrl('');
    callImageApi(2000).then(res=>setImageResponse(res.Image)).catch(err=> console.log(err));
  },[responseToImage]);

  const callApi= async () =>{
    const response= await fetch('http://localhost:5000/comments');
    const body= await response.json();
    if(response.status !== 200) throw Error (body.message);
    return body;
  };
  // request.resource.size < 5 * 1024 * 1024
  const sleep=(milliseconds)=>{
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };
  
  const callImageApi= async (milliseconds) =>{
    const response= await fetch('http://localhost:5000/images');
    const body= await response.json();
    if(response.status !== 200) throw Error (body.message);
    await sleep(milliseconds);
    isLoading(!loading)
    return body;
  };
  
 const addPost=(newPost)=>{
  if (baseImg){
    postImg()
  }
  post=newPost;
  postData();
 }

 const addImage=(file)=>{
   setBaseImg(file)
 }

  useEffect(()=>{
    $('#file').trigger('reset');
  },[baseImg]);
  
  const postImg = () =>{
    const uploadTask=storage.ref(`/images/${currentID}`).put(baseImg)
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
      storage.ref('images').child(currentID).getDownloadURL()
      .then(fireBaseUrl => {
        let newImage={
          id:post.id,
          name:post.name,
          date: post.date,
          imgURL:fireBaseUrl,
        }
        image=newImage;
        setImageAsUrl(fireBaseUrl);
        postImgData()
        console.log('imageUrl set!')
      })
    })
  };

  const postImgData= async()=>{    
  const response=await fetch('http://localhost:5000/images',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({image}),
  })
  const body = await response.text();
  setResponseToImage(body)
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
  };
  
  return(<BrowserRouter basename='/'>
    <Nav/>
    <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
    <Route exact path="/game" component={Game} />
    <Route exact path="/comments" render={props=> <CommentSection baseImg={baseImg} response={response} addPost={addPost} addImage={addImage} currentID={currentID} />}/>
    <Route exact path="/gallery" render={props=> <Gallery responseImage={responseImage} loading={loading} />}></Route>
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/impressum" component={Impressum} />
    <Route exact path="/cookies" component={Cookies} />
    <Redirect to="/" />
    </Switch>
    <Footer/>
  </BrowserRouter>
)};

export default Router;