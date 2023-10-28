import React from 'react';
import './Register.scss'
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
    let navigate = useNavigate();
    const handleLogin = () => { 
        navigate("/login");
    }
    return (
        <div className='register-container mt-3'>
            <div className='container'>
                <div className='row'>
                    <div className='conten-left col-6'>
                        <div className='banner'>HYNNTA</div>
                        <div className='detail'>learning reactjs with hynnta</div>
                    </div>
                    <div className='content-right col-4 d-flex flex-column gap-3 py-3'>
                        <div className='form-group'>
                            <label>Email:</label>
                            <input className='form-control' type='text' placeholder='Email address'/>
                        </div>
                        <div className='form-group'>
                            <label>Username:</label>
                            <input className='form-control' type='text' placeholder='Username' />
                        </div>
                        <div className='form-group'>
                            <label>Phone number:</label>
                            <input className='form-control' type='number' placeholder='Phone number' />
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input className='form-control' type='password' placeholder='Password' />
                        </div>
                        <div className='form-group'>
                            <label>Re-enter Password:</label>
                            <input className='form-control' type='password' placeholder='Re-enter password' />
                        </div>
                        
                        
                        
                        <button className='btn btn-primary'>Register</button>

                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleLogin()}>Already've an account</button>
                        </div>                       
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
        </div>
    );
}

export default Register;