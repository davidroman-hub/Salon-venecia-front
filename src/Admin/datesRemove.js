import React,{Fragment, useState, useEffect} from 'react';
import Header from '../components/header'
import {getCookie} from '../components/helpers'
import {getDates, deleteDates} from '../pages/apiCore'




const ManageDates = () => {

    const [dates, setDates] = useState([])
    const token = getCookie('token')
    
    const loadDates = () => {
        getDates(token).then(data => {
            if (data.error){
                console.log(data.error)
            } else{
                setDates(data)
            }
        })
        
    }


    const destroy = dateId => {
        deleteDates(dateId, token).then(data => {
            if (data.error){
                console.log(data.error)
            } else {
                loadDates()
            }
        }) 
    }


    useEffect(() => {
        loadDates()
    },[])



    return (
        <Header>
             <div className="row">
            <div className="col-12">
            <h1>Manejo de citas</h1>
            <h3>Total de Citas:{dates.length}</h3>
            
            <hr/>
            <ul className='list-group'>
                {dates.map((p,i) => (
                    <li key={i} className='list-group-item d-flex justify-content-between align-items-center'>
                       <strong>{p.name}</strong>
                        {/* <Link to={`product/update/${p._id}`} >
                            <span className='badge badge-warning badge-pill'>Actualizar</span>
                        </Link> */}
                        <span onClick={()=> destroy(p._id)} className='badge badge-danger badge-pill' style={{cursor: 'pointer'}}>Eliminar</span>
                    </li>
                ))}
            </ul>
            </div>
        </div>
        </Header>
    )
}

export default ManageDates