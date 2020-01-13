import React from 'react';
import Pills from "./PillPattern";

const Home =()=>{
    console.log(Pills.className)
return( 
    <div className="float">
    <Pills/>
    <div className="center">
    <h1 className="logo">WEBDEVSIM</h1>
    <p id="divider"></p>
    <h1>A WEB DEVELOPMENT SIMULATION</h1>
    </div>
    <Pills class="right"></Pills>
    </div>
    )
}
 
export default Home;