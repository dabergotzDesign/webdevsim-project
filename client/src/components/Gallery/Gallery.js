import React from 'react';
import Spinner from './Spinner';
import Image from './Image';

const Gallery =(props)=>{
return <section id="gallery">
{props.loading? <Spinner/> : <Image responseImage={props.responseImage} />}
</section>
}
 
export default Gallery;