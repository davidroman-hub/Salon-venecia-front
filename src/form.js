import React,{ Fragment, useState} from 'react';
import {createCategory} from './pages/apiCore'
import './form.scss'


const Formulario = () => {
    
    
const [values, setValues] = useState({
    name:'',
    email:'',
    phone:'',
    number:'',
    booking:'',
    typer:'',
    success:'',
    error:'',

})


const {name,email,phone,number,booking,type} = values

const [error, setError] = useState(false)
const [success, setSuccess ] = useState(false)
    

const handleChange = name => event => {
    // console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
};

const clickSubmit = (e) => { 
    e.preventDefault()
    setError('')
    setSuccess(false)
    console.log(values)
  //make request to API to create category
createCategory({name,email,phone,number,booking,type})
.then( data => {
    if(data.error){
        setError(true)
    } else {
        setError('')
        setSuccess(true)
        setValues({name:'', email:'', password:'', phone:'',number:'',booking:'',type:''})
        alert('Gracias por tu Preferencia! en breve nos pondremos en contacto contigo')

        }
    })
};
    
    return (
     <Fragment>  
    <div className='text-center mb-2'>
    <h3 className="title text-center"> AGENDA TU CITA </h3>
    </div>
    <div className="ContactMe">
            {/* <div className='text-muted'>
            <h3>    Agenda tu cita </h3>
            </div> */}

    <div className="" >
        <form onSubmit={clickSubmit} className="text-center" >
     
              <p>
                <label>
                  <input type="text" name="name" value={name} onChange={handleChange('name')} placeholder='Nombre'  required/>
                </label>
              </p>
              <p>
                <label>
                 <input type="email" name="email" value={email} onChange={handleChange('email')} placeholder="Correo electronico" required />
                </label>
              </p>
              <p>
                <label>
                    <input type="number" value={phone} onChange={handleChange('phone')} placeholder="Telefono:" required />
                </label>
              </p>
              <p>
                <label>
                    <input type="number" value={number} onChange={handleChange('number')} placeholder="Numero de invitados"  required />
                </label>
              </p>
              <p>
                <label>
                  Fecha del evento:
                  <br/> 
                <input type="date" name="email" value={booking} onChange={handleChange('booking')} />
                </label>
              </p>
              <p>
                <label>
                  Tipo de evento:<br/> 
                  <select onChange={handleChange('type')}
                        value={type}
                        className='form-control' required>
                            <option value=''>Por Favor Selecciona</option>
                            <option value='BODA'>BODA</option>
                            <option value='BAUTIZO'>BAUTIZO</option>
                            <option value='EMPRESARIAL'>EMPRESARIAL</option>
                            <option value='XV AÑOS'>XV AÑOS</option>
                        </select>
                </label>
              </p>
              <p>
                <button className='form-button'>AGENDAR</button>
              </p>
            </form>
       </div>
        </div>

</Fragment>








       
        //     <div className='col-md-6 offset-md-3'>
        //         <form onSubmit = {clickSubmit} id='header-content'>
        //             <div className='form-group'>
        //                 <label className='text-muted'>
        //                    AGENDA TU CITA
        //                 </label>
        //                 <br/>
        //                 <input type='text'
        //                 className='form-control'
        //                 onChange={handleChange('name')}
        //                 value={name}
        //                 placeholder='Nombre:'
        //                 autoFocus
        //                 required //<-- need to be something inside of the input
        //                 />
        //                 <br/>
        //                   <input type='email'
        //                 className='form-control'
        //                 onChange={handleChange('email')}
        //                 value={email}
        //                 placeholder='Correo Electronico:'
        //                 autoFocus
        //                 required //<-- need to be something inside of the input
        //                 />
        //                 <br/>
        //                   Tipo de evento:
        //                 <select onChange={handleChange('type')}
        //                 value={type}
        //                 className='form-control' required>
        //                     <option value=''>Por Favor Selecciona</option>
        //                     <option value='BODA'>BODA</option>
        //                     <option value='BAUTIZO'>BAUTIZO</option>
        //                     <option value='EMPRESARIAL'>EMPRESARIAL</option>
        //                     <option value='XV AÑOS'>XV AÑOS</option>
        //                 </select>
        //                 <br/>
        //                 Fecha aprox del evento:
        //                 <input type='date'
        //                 className='form-control'
        //                 onChange={handleChange('booking')}
        //                 value={booking}
        //                 placeholder='Fecha aprox'
        //                 autoFocus
        //                 required //<-- need to be something inside of the input
        //                 />
        //                 <br/>
        //                   <input type='number'
        //                 className='form-control'
        //                 onChange={handleChange('phone')}
        //                 value={phone}
        //                 placeholder='Numero Télefonico:'
        //                 autoFocus
        //                 required //<-- need to be something inside of the input
        //                 />
        //                 <br/>
        //                   <input type='number'
        //                 className='form-control'
        //                 onChange={handleChange('number')}
        //                 value={number}
        //                 placeholder='Número de invitados'
        //                 autoFocus
        //                 required //<-- need to be something inside of the input
        //                 />
                    
        //             <br/>
        //             </div>
            
        //         <button className='btn btn-primary'>
        //             Enviar
        //         </button>
            
            
        //         </form>
        //    </div>     
            

    )
}

export default Formulario