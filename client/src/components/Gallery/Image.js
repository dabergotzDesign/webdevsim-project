import React from 'react';


const Image =(props)=>{
if (props.responseImage.length === 0){
        return <h1>No images available!</h1>
}
        return props.responseImage.sort((a,b)=>{
                const sortA= Date.parse(a.date)
                const sortB= Date.parse(b.date)
                 return sortB-sortA
               }).map((el,i)=>{
                       const date=el.date.split(' ');
        return <figure key={i}><img src={el.imgURL} alt="websitePic"/>
           <figcaption>posted by: {el.name} <br></br> <span className="date">{date[1]}/{date[2]}/{date[3]} </span></figcaption></figure>
})}

 
export default Image;