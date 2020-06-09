import React,{Fragment} from 'react';
import Header from '../components/header'
import {bodas} from '../images'
import ImageGallery from 'react-image-gallery'
const Boda = () => {
    
    const galleryBody = () => {
        
        return (
            <Fragment>
            
                <h2 className="title text-center"> BODA </h2>
                {/* <div className='titles-descGallery text-center'> GALERIA</div> */}
                <br/>
                <br/>
                <ImageGallery items={bodas}/>
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

export default Boda