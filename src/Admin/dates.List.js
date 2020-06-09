import React,{Fragment, useState, useEffect} from 'react';
import Header from '../components/header'
import {getCookie} from '../components/helpers'
import {getDates} from '../pages/apiCore'


const DatesList = () => {
    
    const [dates, setDates] = useState([])
    const token = getCookie('token')
    const Id = getCookie('token')

    const loadDates = () => {
        getDates(token).then(data => {
            if (data.error){
                console.log(data.error)
            } else{
                setDates(data)
            }
        })
        
    }


    useEffect(() => {
        loadDates()
    },[])



    const showAppointmentsLength = () => {
        if(dates.length > 0 ){
            return (
             <h2 className="p-5 text-center text-danger "> Total de Citas:{dates.length}</h2>
            )
        } else {
            return <h1 className="text-danger">No Hay citas</h1>
        }
     }



    const showDatesList = () => {
        return (
            <div className='order-list'>
                    
                {dates.map((d,i) => {
                    return (
                        <div  key={i} className="card mr-2 mt-2">
                                 <h5 className="mb-1 mt-2 text-center">Cita para: {d.name}</h5>
                                    <ul className="list-group">
                                    <li className="list-group-item">Telefono: {d.phone}</li>
                                    <li className="list-group-item">E-mail: {d.email}</li>
                                    <li className="list-group-item">Tipo de evento: {d.type}</li>
                                    <li className="list-group-item">Numero de Invitados: {d.number}</li>
                                    <li className="list-group-item">Fecha apróx del evento: {d.booking}</li>
                                    <li className="list-group-item">Fecha que se solicito: {d.createdAt}</li>
                                 </ul>
                        </div>
                    )
                })}
                    </div>
                
            
        )
    }

    

    return (
        <Header>
              <h1>hola soy Dates List</h1>
              {/* {JSON.stringify(dates)} */}
              {showAppointmentsLength()}
              {showDatesList()}
        </Header>    
      
    )
}

export default DatesList