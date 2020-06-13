import React,{Fragment} from 'react';
import Header from '../components/header'
import {jardin} from '../images'
import ImageGallery from 'react-image-gallery'
import Form from '../form'
import '../homeStyles.scss'




const Jardin = () => {

    const galleryBody = () => {
        
        return (
            <Fragment>
            
                <h2 className="title2 text-center"> JARDÍN </h2>
                <p className="bodaDesc text-center">
                    El jardín de Venecia es el lugar perfecto<br/> 
                    para realizar tu evento al aire libre, <br/>
                    rodeado de tranquilidad y armonía.
                </p>
                {/* <div className='titles-descGallery text-center'> GALERIA</div> */}
                <br/>
                <br/>
                <div className='backgroundJardin'>
                    <ImageGallery items={jardin}/>
                </div>
                <br/>
                <div className='jardinForm'>
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

export default Jardin