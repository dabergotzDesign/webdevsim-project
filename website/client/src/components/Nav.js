import React from 'react';
import {Link, withRouter} from "react-router-dom";

const Nav =(props)=>{
    const {history}= props
    const path=history.location.pathname
    if (path === "/"){
      document.body.classList.remove("nothome");
      return null;
    } else 
    document.body.classList.add("nothome");
return( 
    <nav>
   <Link to="/">Home</Link>
   <Link to="/about">About</Link>
   <Link to="/game">Game</Link>
   <Link to="/comments">Comments</Link>
    </nav>
    )
}
 
export default withRouter(Nav);