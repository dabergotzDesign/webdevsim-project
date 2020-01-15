import React from 'react';
import Pillblock from "./Pillblock";

const PillPattern =(props)=>{
    return( 
    <div className={`pill-pattern ${props.class}`}> 
 <Pillblock/>
 <Pillblock class="flip"/>
 <Pillblock/>
    </div>
        )
    }
     
    export default PillPattern;