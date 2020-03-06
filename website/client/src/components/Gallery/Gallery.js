import React,{useEffect, useRef} from 'react';
import Spinner from './Spinner';
import Image from './Image';

const Gallery =(props)=>{ 
    let loaD=false;
    const refContainer=useRef(loaD);

    useEffect(() => {
        const loader=setTimeout(()=>{
            refContainer.current=true;
        },5000)
        return () => clearTimeout(loader);
      },[refContainer]);
      console.log(loaD)
      console.log(refContainer.current)
      console.log(props.loading)
    return <section id="gallery">
{refContainer.current? <Spinner/> : <Image responseImage={props.responseImage} />}
</section>
}
 
export default Gallery;