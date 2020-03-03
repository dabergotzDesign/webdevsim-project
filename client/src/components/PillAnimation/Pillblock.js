import React, {useEffect} from 'react';

const Pillblock =(props)=>{
    
useEffect(()=> pillShow())

function pillShow(){
    let count=0;
    let pills = document.querySelectorAll(".pill");
    pills.forEach((el,i)=>{
        return setTimeout(function(){
        el.classList.add("scale-in-center")
        count++;
},count+=100)
})
};

return( 
    <div className={`pill-block ${props.class}`}>
        <div className="pill-row">
        <div className="pill one"></div>
        <div className="pill two"></div>
        </div>    
        <div className="pill-row">  
        <div className="pill three"></div>
        <div className="pill four"></div>
        <div className="pill five"></div>
        </div>
        <div className="pill-row"> 
        <div className="pill empty"></div>
        <div className="pill two"></div>
        <div className="pill one"></div>
        </div>
        <div className="pill-row"> 
        <div className="pill four"></div>
        <div className="pill one"></div>
        </div>
        <div className="pill-row"> 
        <div className="pill five"></div>
        </div>
        <div className="pill-row"> 
        <div className="pill four"></div>
        </div>
        </div>
        )
}

     
export default Pillblock;