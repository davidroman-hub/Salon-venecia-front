import React,{Fragment} from 'react';
import Header from '../components/header'
import {jardin} from '../images'
import ImageGallery from 'react-image-gallery'

const Jardin = () => {

    const galleryBody = () => {
        
        return (
            <Fragment>
            
                <h2 className="title text-center"> JARDÍN </h2>
                {/* <div className='titles-descGallery text-center'> GALERIA</div> */}
                <br/>
                <br/>
                <ImageGallery items={jardin}/>
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

export default Jardin