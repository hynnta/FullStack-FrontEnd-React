import React, { useEffect, useState } from 'react';
import './Register.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerNewUser } from '../../services/userService';

const Register = (props) => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const defaultValid = {
        isValidEmail: true,
        isValidUsername: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidRePassword: true,
    };
    const [isValid, setIsValid] = useState(defaultValid);

    const handleRegister = async () => { 
        let check = isValidate();

        if (check === true) { 
            let response = await registerNewUser(email, username, phone, password);
            console.log('check response: ', response.data)
            if (response.data.EC === 0) {
                toast.success(response.data.EM)
                navigate('/login')
            } else { 
                toast.error(response.data.EM)
            }
        }
        
    }

    let navigate = useNavigate();
    const handleLogin = () => { 
        navigate("/login");
    }

    const isValidate = () => { 
        setIsValid(defaultValid);
        if (!email) { 
            setIsValid({...defaultValid, isValidEmail: false})
            toast.error("enter your email!");
            return false;
        }

        let regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        if (!regex.test(email)) { 
            setIsValid({...defaultValid, isValidEmail: false})
            toast.error("email address is not correct!");
            return false;
        }

        if (!username) { 
            setIsValid({...defaultValid, isValidUsername: false})
            toast.error("enter your username!");
            return false;
        }
        if (!phone) { 
            setIsValid({...defaultValid, isValidPhone: false})
            toast.error("enter your number phone!");
            return false;
        }
        if (!password) { 
            setIsValid({...defaultValid, isValidPassword: false})
            toast.error("enter your password!");
            return false;
        }
        if (rePassword !== password) { 
            setIsValid({...defaultValid, isValidRePassword: false})
            toast.error("password is not match!");
            return false;
        }
        

        return true;
    }

    useEffect(() => { 
        // axios.get('http://localhost:8080/api/v1/test-api').then(data => { 
        //     console.log('check data: ', data)
        // })

        
    }, [])
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
                            <input className={isValid.isValidEmail ? 'form-control' : 'form-control is-invalid'} type='text' placeholder='Email address'
                                value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Username:</label>
                            <input className={isValid.isValidUsername ? 'form-control' : 'form-control is-invalid'} type='text' placeholder='Username'
                                value={username} onChange={(event) => setUsername(event.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Phone number:</label>
                            <input className={isValid.isValidPhone ? 'form-control' : 'form-control is-invalid'} type='number' placeholder='Phone number'
                                value={phone} onChange={(event) => setPhone(event.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input className={isValid.isValidPassword ? 'form-control' : 'form-control is-invalid'} type='password' placeholder='Password'
                                value={password} onChange={(event) => setPassword(event.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Re-enter Password:</label>
                            <input className={isValid.isValidRePassword ? 'form-control' : 'form-control is-invalid'} type='password' placeholder='Re-enter password'
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