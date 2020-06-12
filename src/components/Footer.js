import React,{ Fragment} from 'react';
import {Link} from 'react-router-dom'
import './footer.scss'


const Footer = () => {
    
   const footerBody = () => (
    <Fragment>
     <div className="footer-divisor">   
        
        <div className='address-2'>
        Av 20 de Noviembre 515,
        <br/>La Noria, Xochimilco, 
        <br/>16030 Ciudad de México, CDMX
        </div>
        <br/>
        <br/>
        <div className='address'>
            Telefono: <a href='tel:+5215527271330' >(55) 27271330</a><br/>
                                              
                    <a href='tel:+52156750525' >(55) 56750525</a>
        </div>
        <div className='aviso'>
           <Link to='/aviso-privacidad' className='mr-5' >Aviso de privacidad</Link>
        </div>
    </div> 
    </Fragment>

)



    return (
        <div>
           {footerBody()}
        </div>
    )

}

export default Footer