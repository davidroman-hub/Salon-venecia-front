import React,{Fragment} from 'react';
import Header from '../components/header'
import {empresarial} from '../images'
import ImageGallery from 'react-image-gallery'
import Form from '../form'


const Empresarial = () => {
    const galleryBody = () => {
        
        return (
            <Fragment>
            
                <h2 className="title3 text-center"> EMPRESARIAL </h2>
                {/* <div className='titles-descGallery text-center'> GALERIA</div> */}
                <p className="bodaDesc text-center">
                Desde una fiesta informal hasta una cena de fin de año,<br/>
                te ofrecemos una gran variedad de opciones <br/>
                para sobrepasar tus expectativas.
                </p>
                
               
               
                <br/>
                <br/>
                <div className='empreBack'>
                     <ImageGallery items={empresarial}/>
                </div>
                
                <br/>
                <div className='empresarialForm'>
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

export default Empresarial