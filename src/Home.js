
import React,{ Fragment} from 'react';
import {Link} from 'react-router-dom'
import Logo from './pages/images/Logo.png'
import './homeStyles.scss'
import Header from './components/header'
import SplitText from 'react-pose-text';
import Modal from './components/Modal'
import useModal from './components/useModal'
import {createCategory} from './pages/apiCore'
import Formulario from './form'
import JardinCarousel from './jardinCarousel'
import Map from './GoogleMaps'    


const Home = () => {

 const{ isShowing, toggle} = useModal();

  const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 400
    }
  };

    
const Carousel2 = () => (
  <Fragment>
  <section className="Carousel-cont">
    <div className="Carousel text-center" id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item text-center active">
           
            <img width="500px" src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590704595/venecia/boda/20190813_211416_-_copia_jffims.jpg'  alt="firts"/>
        </div>
        <div class="carousel-item text-center">
            <img width="500px" src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590704570/venecia/boda/DSC00228_fcoxok.jpg'  alt="second"/>
        </div>
        <div class="carousel-item text-center">
            <img width="500px" src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590704564/venecia/boda/DSC00163_ls8sb2.jpg'  alt="third"/>
        </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
        </a>
    </div>
    </section>
    </Fragment>
)




const homeBody = () => (
    <Fragment>
      
    <header className="header-content "  id="header-content">
        <div className="header-text">   
          <p className='Logo1'>
            <img alt='Logo1' height="300px" src={Logo}/>
          </p>
          {/* <p className="arrow">
             Más información desplazandose hacia abajo
          </p> */}
        </div>
    </header> 

    <main>
    <section className="container" id="header-content">
                      <br/>
                      <container className="header-title">
                            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                               BIENVENIDOS
                            </SplitText>
                       </container>
                        {/* <h1 className="title text-center">
                             Salón Venecia
                        </h1> */}
                       
                        <br/>
                        <div className="About-container">
                       
                            <div className="history text-center">
                              <br/>
                            
                              <span className="capital-letter">S</span>alón Venecia cuenta con 25 años de experiencia realizando los mejores eventos sociales y empresariales, 
                              cuidando cada detalle para que tu evento sea inolvidable.
                              </div>
                        </div>
                      
                      </section>
                </main>  
                    <br/>
                   <div className="carousel-back mb-2">
                     <JardinCarousel/>
                   </div>
                  
            <br/>

        <h2 className="title text-center mb-5">
              GRAN SALÓN
        </h2>

            <div className="big-salon">
                <div className="bodas">
                    <img src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1591967258/venecia/principal/fOTO_PRINCIPAL_NOVIO_CON_COPAS_eue5oc.jpg' className="" alt=''bodas/>          
                </div>
                <div className="bodasLetter">
                <h6 className="titlesSection text-center"> BODAS</h6>
                <p className="bodaD text-center" style={{color: '#000'}}>
                    
                Una boda perfecta se celebra en Salón Venecia,
                en donde nos dedicaremos a que tu y tus invitados
                disfruten de una confortable y elegante noche
                cuidando cada detalle para hacerlos sentir
                especiales; creando una noche inolvidable.<br/>
                <Link to='/bodas' className="text-center">Ver Más</Link>
                
                </p>    
      </div>
      </div>
      
      {/* /// 15 anos */}

        <div className="quince">
            
            <div className="bodasLetter">
            <h6 className="titlesSection text-center"> XV AÑOS</h6>
            <p className="quinceDescr text-center">
                   No es un cumpleaños más, es un sueño hecho realidad,
                  donde la princesa eres tú.<br/>
                    <Link to='/quince' style={{color: '#000'}} className="text-center">Ver Más</Link>  
                    </p>    
            </div>
            <div className="quince-img">
                    <img src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1591967258/venecia/principal/FOTO_PRINCIPAL_XV_A%C3%91OS_hrdq8c.jpg' className="" alt=''bodas/>          
                </div>
            </div>
        
       
        {/* EMPRESARIAL */}

            <div className="empresarial">
                <div className="bodas">
                    <img src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1591967258/venecia/principal/FOTO_PRINCIPAL_EMPRESARIAL_wt7kt1.jpg' className="" alt=''bodas/>          
                </div>
                <div className="bodasLetter">
                <h6 className="titlesSectionE text-center" >EMPRESARIAL</h6>
                <p className="empresarialD text-center" style={{color: '#000'}}>
                Desde una fiesta informal hasta una cena de fin de año,
                te ofrecemos una gran variedad de opciones
                para sobrepasar tus expectativas.
                   <br/>
                <Link to='/empresarial' className="text-center">Ver Más</Link>
                
                </p>    
      </div>
      </div>

      {/* //////////////////                 */}

      {/* ///JARDIN     */}

            
        <div className="quince">
          
            <div className="bodasLetter">
            <h6 className="titlesSection text-center"> JARDÍN </h6>
            <p className="quinceDescr text-center">
            El jardín de Venecia es el lugar perfecto para realizar tu evento al aire libre,
            rodeado de tranquilidad y armonía.
                 <br/>
                    <Link to='/jardin' style={{color: '#000'}} className="text-center">Ver Más</Link>  
                    </p>    
            </div>
            <div className="quince-img">
                    <img src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590704671/venecia/IMG-20190622-WA0017_r5m6od.jpg'  alt='empresarial' className="" alt='JARDIN'/>          
                </div>
            </div>




{/* ///////////////////////// */}
    

<div className="mapBack">

    <h3 className="titleUbic text-center"> UBICACIÓN </h3>
    <br/>
    <br/>
         <div className="Map-ps">
                 <Map/>
          </div>                  
    <br/>  
    <br/>
</div>
<div className="form-color">
    <Formulario/>
</div>
{/* {bookingForm()} */}

     
</Fragment>

)


    
    return (
    <Header>
        {homeBody()}
      
      
    </Header>
 
    )
}

export default Home