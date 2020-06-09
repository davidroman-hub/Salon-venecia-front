import Header from '../components/header'
import React,{Fragment,useCallback, useState} from 'react';
import {imagesXV} from '../images'
import ImageGallery from 'react-image-gallery'


const Quince = () => {


    const galleryBody = () => {
        
        return (
            <Fragment>
                 <h2 className="title text-center"> XV AÑOS </h2>
                {/* <div className='titles-descGallery text-center'> GALERIA</div> */}
                <br/>
                <br/>
                <ImageGallery items={imagesXV}/>
                <br/>
     
            </Fragment>
        )
    }




    return (
        <Header>
            {galleryBody()}
        </Header>
         
    )
}


export default Quince