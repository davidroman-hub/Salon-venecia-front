import React,{ Fragment} from 'react';
import Header from '../components/header'
import {BrowserRouter,Link} from 'react-router-dom'


const Dashboard = () => {
    
    const  dashboardBody = () => {
        return (
        <Fragment>
          <div className="container">  
            <div className=' card mb-5' id="header-content" >
            <h3 className='card-header'>Tablero de Administrador</h3>
            <ul className='list-group'>
                <li className='list-group-item'>
                    hola! Administrador !
                </li>
                {/* <li className='list-group-item'>
                   
                </li> */}
                {/* <li className='list-group-item'>
                  Telefono:{phone}
                </li> */}
            </ul>
        </div>

        <div className='card mb-5'>
                <h3 className='card-header'>Enlaces de administrador</h3>
                <li className='list-group-item'>
                    <Link to='/admin/dates-list'  style={{color: 'blue'}}>Revisar Citas </Link>
                </li>
                <li className='list-group-item'>
                    <Link to='/admin/dates-remove'  style={{color: 'blue'}}>Administrar citas (Eliminar) </Link>
                </li>
        </div>
      </div>  
        </Fragment>
        )
    }




    return (
            <Header>
           {dashboardBody()} 
          </Header>  
    )
}

export default Dashboard