import React from 'react';

const Pillblock =(props)=>{
    return( 
        <div className={`pill-block ${props.flip}`}>
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