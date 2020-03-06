import React,{useEffect, useRef} from 'react';
import Spinner from './Spinner';
import Image from './Image';

const Gallery =(props)=>{ 
    let loaD=false;
    const refContainer=useRef(loaD);

    useEffect(() => {
        const loader=setTimeout(()=>{
            refContainer.current=true;
        },2000)
        return () => clearTimeout(loader);
      },[]);
    return <section id="gallery">
{props.loading || refContainer.current? <Spinner/> : <Image responseImage={props.responseImage} />}
</section>
}
 
export default Gallery;