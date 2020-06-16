import React, { useState } from 'react'
import {Redirect}from 'react-router-dom'
import { Link} from 'react-router-dom';
import Header from './header'

import {signin, authenticate, isAuth} from '../components/helpers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios'
import './adminStyles.scss';
//import './Signin.scss'


const Signin = ({history}) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        buttonText: 'Enviar'
    });

    const { email, password, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const informParent = response => {
       
        authenticate(response, () => {
            isAuth() && isAuth().role === 'admin' ? history.push('/admin/dashboard') : history.push('/user/dashboard')
          });
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Enviando' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signin`,
            data: { email, password }
        })
            .then(response => {
                console.log('SIGNIN SUCCESS', response);
                // save the respnse (user, token) in local storage/cookie  
              authenticate(response, () => {
                setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                //toast.success(`Hey ${response.data.user.name}, Welcome back!`);
                isAuth() && isAuth().role === 'admin' ? history.push('/admin/dashboard') : history.push('/')
              });
               
            })
            .catch(error => {
                console.log('SIGNIN ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

    const signinForm = () => (
        <form className='signinFormS'>

            <div className="form-group" id="header-content" >
                <label className="text-muted">E-mail</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control" />
            </div>

            <div className="form-group">
                <label className="text-muted">Contraseña</label>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control" />
            </div>

            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
            
        </form>
    );

    return (
        <Header>
            {/* {JSON.stringify(isAuth())} // the information of the local storage */}
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                {isAuth() ? <Redirect to='/'/> : null}
                <h1 className="titles-456 p-5 text-center">Inicia Sesión</h1>
            
                {/* <Facebook informParent={informParent}/> */}
                {signinForm()}
                <hr/>
                {/* <div>
                     <Link className='text-muted' to='/auth/password/forgot' >Olvidaste tu contraseña?</Link><br/>
                     <Link className='text-muted' to='/aviso-privacidad' >Al registrarte aceptas el aviso de PRIVACIDAD</Link>
                </div> */}
            </div>
        </Header>
    );
};

export default Signin;
