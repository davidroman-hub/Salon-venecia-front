import React, {useState,useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import {createOrder} from './pages/apiCore'
import { ToastContainer, toast } from 'react-toastify';
import {Link,Redirect} from 'react-router-dom'


const Checkout = () => {
    
    // const [ redirect, setRedirect] = useState(false)
    // const shouldRedirect = redirect => {
    //     if (redirect){
    //         return <Redirect to='/user/dashboard'/>
    //     }
    // }
    const [data, setData] = useState({
        //loading:false,
        success:false,
       // clientToken:null,
        error:'',
        instance:{},
        address:'',
        amount:'',
        name:'',
        number:'',
        address2:'',
        error:''
    })


     ///// handle the addresss /////

     let deliveryAddress = data.address
  
     const handleAddress =  event => {
         setData({...data, address:event.target.value})  
     }
 
     /// handle name ///
 
let names = data.name
   
     const handleName =  event => {
         setData({...data, name:event.target.value})  
     }
 
 //// handle the number ////
 
 let numbers = data.number
   
     const handleNumber =  event => {
         setData({...data, number:event.target.value})  
     }

     let deliveryAddress2 = data.address2
const handleAddress2 =  event => {
    setData({...data, address2:event.target.value})  
}

const buy = (event) => {
    event.preventDefault()
console.log(data)    


const createOrderData ={ 
   
    client_email:deliveryAddress,
    client_name:deliveryAddress,
    client_phone:deliveryAddress,
    details:deliveryAddress,
    invited:deliveryAddress,

}



const orderForm = () => {
        return(
 <form  onSubmit={buy} >
     <ul>
        
    <div className="mb-2">
    
        <li className="nav-item">
            <div className="form-group">    
            <label className='text-muted'>Telefono: </label>
                <input type="number"
                onChange={handleNumber}
                className='form-control'
                value={data.number}
                placeholder='Solo Numeros'
                required/>
            </div>
        </li>

        <li className="nav-item">
            <div className='form-group'>
            <textarea type="text"
                onChange={handleName}
                className='form-control'
                value={data.name}
                placeholder='Detalles en tus pedidos? Condimentos extras o sin condimentos en tus platillos?:' />
            </div>
        </li>

      

        <li className="nav-item">
        <div className="form-group">
        {/* <textarea
            onChange={handleAddress}
            className='form-control'
            value={data.address}
            placeholder='Escribe tu direccion de envio aqui C.P, calle, Ref, etc..' required/> */}
            Dirección:
            <select onChange={handleAddress}
            className='form-control' required>
                <option value=''>Por Favor Selecciona</option>
                <option value='Recoger-Resto'>Recoger en Restaurante</option>
                <option value='Colonia-San-Rafael'>Colonia San Rafael CDMX</option>
                <option value='Colonia Juárez CDMX'>Colonia Juárez CDMX</option>
                <option value='CUAUHTEMOC CDMX '>Colonia CUAUHTEMOC CDMX </option>
                <option value='Anáhuac 1RA Y 2DA Sección'>Anáhuac 1RA Y 2DA Sección</option>
                <option value='Anzures CDMX'>Anzures CDMX</option>
                <option value='Sta María la Rivera CDMX '>Sta María la Rivera CDMX </option>
                <option value='Popotla CDMX '>Popotla CDMX </option>
                <option value='Santo Tomás CDMX '>Santo Tomás CDMX </option>
                <option value='Atlampa CDMX'>Atlampa CDMX</option>
                <option value='Mariano Escobedo CDMX'>Mariano Escobedo CDMX</option>
                <option value='Tlaxpana CDMX'>Tlaxpana CDMX</option>
                <option value='Agricultura CDMX'>Agricultura CDMX</option>
                <option value='Tlatilco CDMX'>Tlatilco CDMX</option>
            </select>
        </div>
        </li>
        <li>
        <div className="form-group">
        <textarea
            onChange={handleAddress2}
            className='form-control'
            value={data.address2}
            placeholder='Tu calle, Número, C.P. Si escogiste recoger en restaurante pon RESTAURANTE ' required/>
       </div>
        </li>
        <li className='text-center'>
           <strong ><h7 className='text-center'>Revisa tus productos antes de ordenar!</h7></strong>
        </li>
        <br/>
        <li className="nav-item">
            <button className="btn btn-success btn-block mr-b2" >Ordenar</button>
        </li>   
    </div>
    
    </ul>
 </form>    
    )
}

    
const showError = error => {
    return (
    <div className="alert alert-danger" style={{display:error ? '' : 'none'}}>{error}</div>
    )
}

const showSuccess = success => {
    return (
        <div className="alert alert-info" style={{display:success ? '':'none'}}>
            Gracias por tu solicitud!   en breve recibiras un E-mail. Ve a tu perfil para ver la orden
        </div>
    )
}



return (
    <div>
          {showError(data.error)}
        {showSuccess(data.success)} 
        {orderForm()}
    </div>
    )

    }

}

export default Checkout 