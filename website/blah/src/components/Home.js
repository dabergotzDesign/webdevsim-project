import React from 'react';
import Pills from "./Pills";

const Home =()=>{
return( 
    <React.Fragment>
    <Pills/>
    <div className="center">
    <h1 className="logo">WEBDEVSIM</h1>
    <p id="divider"></p>
    <h1>A WEB DEVELOPMENT SIMULATION</h1>
    </div>
    <Pills/>
    </React.Fragment>
    )
}
 
export default Home;