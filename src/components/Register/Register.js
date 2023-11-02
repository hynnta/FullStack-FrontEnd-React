import React, { useEffect, useState } from 'react';
import './Register.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const handleRegister = () => { 
        let userData = { email, username, phone, password }
        console.log('check userData: ', userData)
    }

    let navigate = useNavigate();
    const handleLogin = () => { 
        navigate("/login");
    }

    // useEffect(() => { 
    //     axios.get('http://localhost:8080/api/test-api').then(data => { 
    //         console.log('check data: ', data)
    //     })
    // }, [])
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
                            <input className='form-control' type='text' placeholder='Email address'
                                value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Username:</label>
                            <input className='form-control' type='text' placeholder='Username'
                                value={username} onChange={(event) => setUsername(event.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Phone number:</label>
                            <input className='form-control' type='number' placeholder='Phone number'
                                value={phone} onChange={(event) => setPhone(event.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input className='form-control' type='password' placeholder='Password'
                                value={password} onChange={(event) => setPassword(event.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Re-enter Password:</label>
                            <input className='form-control' type='password' placeholder='Re-enter password'
                                value={rePassword} onChange={(event) => setRePassword(event.target.value)}/>
                        </div>
                        
                        
                        
                        <button className='btn btn-primary' onClick={()=> handleRegister()}>Register</button>

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