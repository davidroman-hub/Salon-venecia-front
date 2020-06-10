import Header from '../components/header'
import React,{Fragment,useCallback, useState} from 'react';
import {imagesXV} from '../images'
import ImageGallery from 'react-image-gallery'
import Form from '../form'

const Quince = () => {


    const galleryBody = () => {
        
        return (
            <Fragment>
                 <h2 className="title2 text-center"> XV AÑOS </h2>
                 <p className="bodaDesc text-center">
                    No es un cumpleaños más, es un sueño hecho realidad, <br/>
                    donde la princesa eres tú.
                 </p>

                {/* <div className='titles-descGallery text-center'> GALERIA</div> */}
                <br/>
                <br/>
                <ImageGallery items={imagesXV}/>
                <br/>
                <div className='xvForm'>
                    <Form/>
                </div>
     
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