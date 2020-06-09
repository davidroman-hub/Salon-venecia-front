
import React,{ Fragment, useState} from 'react';
import Layout from './components/Layout'
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
                                Salón Venecia
                            </SplitText>
                       </container>
                        {/* <h1 className="title text-center">
                             Salón Venecia
                        </h1> */}
                        <br/>
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
                    <br/>
                    <br>
                    </br>
                    <br/>
                    <hr/>
            <section className="Carousel-cont">
            <div className="Carousel text-center" id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item text-center active">
                
                    <img width="500px" src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590704595/venecia/boda/20190813_211416_-_copia_jffims.jpg'  alt="firts"/>
                </div>
                <div class="carousel-item text-center">
                    <img width="500px" src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590704595/venecia/boda/20190813_211416_-_copia_jffims.jpg'  alt="second"/>
                </div>
                <div class="carousel-item text-center">
                    <img width="500px" src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590704595/venecia/boda/20190813_211416_-_copia_jffims.jpg'  alt="third"/>
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
            <br/>
  
        <h2 className="title text-center">
              GRAN SALÓN
        </h2>

    <div className="big-salon">
          <div className="bodas">
          <div className='container-card'>
           <div className="card">
              <img src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590704587/venecia/boda/Salon_Venecia_2018-11-10_93_m_jdqirb.jpg'  alt='boda'/>
                      <h6 className="mb-1 mt-2">BODAS</h6>
                      <div className="figure2"/>
                       <p className="description-t mb-2">Una boda perfecta se celebra en Salón Venecia, 
                                                        en donde nos dedicaremos a que tu y tus invitados disfruten de una confortable y elegante noche cuidando cada detalle para hacerlos sentir especiales; 
                                                        creando una noche inolvidable.</p>
                       <Link to='/bodas' className="">Ver Más</Link>
                    </div>
                </div>
          
          </div>
          <div className="bodas">
          <div className='container-card'>
           <div className="card">
              <img src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590704483/venecia/15%20anos/20190322_220432_cwha5l.jpg'  alt='quince'/>
              <br/>
                      <h6 className="mb-1 mt-2">XV AÑOS</h6>
                      <div className="figure2"/>
                       <p className="description-t mb-4">No es un cumpleaños más, es un sueño hecho realidad, donde la princesa eres tú.
                        </p>
                      
                       <Link to='/bodas' className="">Ver Más</Link>
                    </div>
                </div>
          
          </div>
          <div className="bodas">
          <div className='container-card'>
           <div className="card">
              <img src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1591372133/venecia/empresarial/20190803_181820_xucvcx.jpg'  alt='empresarial'/>
                      <h6 className="mb-1 mt-2">EMPRESARIAL</h6>
                      <br/>
                      <div className="figure2"/>
                       <p className="description-t mb-2">Desde una fiesta informal hasta una cena de fin de año, te ofrecemos una gran variedad de opciones para sobrepasar tus expectativas.</p>
                       <Link to='/bodas' className="">Ver Más</Link>
                    </div>
                </div>
          </div>
    </div>

    <h2 className="title text-center"> JARDIN </h2>
    <JardinCarousel/>

    <h3 className="title text-center"> UBICACIÓN </h3>
    <br/>
    <br/>
         <div className="Map-ps">
                             <Map/>
          </div>                  
    <br/>  
    <br/>
<Formulario/>

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