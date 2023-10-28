import React from 'react';
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
    let navigate = useNavigate();
    const handleRegister = () => { 
        navigate("/register");
    }
    return (
        <div className='login-container mt-3'>
            <div className='container'>
                <div className='row'>
                    <div className='conten-left col-6'>
                        <div className='banner'>HYNNTA</div>
                        <div className='detail'>learning reactjs with hynnta</div>
                    </div>
                    <div className='content-right col-4 d-flex flex-column gap-3 py-3'>
                        <input className='form-control' type='text' placeholder='Email address or username'/>
                        <input className='form-control' type='password' placeholder='password' />
                        <button className='btn btn-primary'>Login</button>
                        <span className='text-center'>
                            <Link className='forgot-password' to="/">Forgotten password?</Link>
                        </span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleRegister()}>Create new account</button>
                        </div>                       
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
        </div>
    );
}

export default Login;