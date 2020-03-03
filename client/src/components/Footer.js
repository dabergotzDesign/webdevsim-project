import React from 'react';
import {Link, withRouter} from "react-router-dom";

const Footer =(props)=>{
    const {history}= props
    const path=history.location.pathname
    if (path === "/"){
      return null;
    } else 
return( 
    <footer>
   <Link to="/contact">Contact</Link>
   <Link to="/impressum">Impressum</Link>
   <Link to="/cookies">Cookies</Link>
    </footer>
    )
}
 
export default withRouter(Footer);