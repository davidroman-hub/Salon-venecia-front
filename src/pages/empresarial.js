import React,{Fragment} from 'react';
import Header from '../components/header'
import {empresarial} from '../images'
import ImageGallery from 'react-image-gallery'

const Empresarial = () => {
    const galleryBody = () => {
        
        return (
            <Fragment>
            
                <h2 className="title text-center"> EMPRESARIAL </h2>
                {/* <div className='titles-descGallery text-center'> GALERIA</div> */}
                <br/>
                <br/>
                <ImageGallery items={empresarial}/>
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

export default Empresarial