import React,{Fragment,useCallback, useState} from 'react';
import {images2} from './images'
import ImageGallery from 'react-image-gallery'


const JardinCarousel = () => {


    const galleryBody = () => {
        
        return (
            <Fragment>
                {/* <div className='titles-descGallery text-center'> GALERIA</div> */}
                <br/>
                <br/>
                <ImageGallery items={images2}/>
                <br/>
     
            </Fragment>
        )
    }




    return (
        <div>
            {galleryBody()}
        </div>
    )
}

export default JardinCarousel