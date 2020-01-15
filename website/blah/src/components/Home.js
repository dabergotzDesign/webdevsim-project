import React from 'react';
import {Link} from "react-router-dom";
import Pills from "./PillPattern";

const Home =()=>{
return( 
    <div className="pill-box">
    <Pills/>
    <div className="center">
    <h1 className="logo">WEBDEVSIM</h1>
    <p id="divider"></p>
    <h1 id="sub-h1">A WEB DEVELOPMENT SIMULATION</h1>
    <Link to="/game" id="start">START</Link>
    </div>
    <Pills class="right"></Pills>
    </div>
    )
}
 
export default Home;