import React,{Fragment} from 'react';
import Header from '../components/header'
import {bodas} from '../images'
import ImageGallery from 'react-image-gallery'
import Form from '../form'
import './formDecorations.scss'


const Boda = () => {
    
    const galleryBody = () => {
        
        return (
            <Fragment>
             
                <h2 className="title2 text-center"> BODA </h2>
                <p className="bodaDesc text-center">
                Una boda perfecta se celebra en Salón Venecia, <br/>
                en donde nos dedicaremos a que tu y tus invitados<br/>
                disfruten de una confortable y elegante noche <br/>
                cuidando cada detalle para hacerlos sentir<br/>
                especiales; creando una noche inolvidable.</p>
                {/* <div className='titles-descGallery text-center'> GALERIA</div> */}
                <br/>
                <br/>
             

                <ImageGallery items={bodas}/>
                <br/>
                <div className='bodaForm'>
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

export default Boda