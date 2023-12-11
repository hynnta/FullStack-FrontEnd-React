import React, { useEffect } from 'react';
import './Login.scss'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Toast } from 'bootstrap';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/userService';


const Login = (props) => {
    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");
    const defaultValid = {
        isValidInput: true,
        isValidPassword: true,
    };
    const [validLogin, setValidLogin] = useState(defaultValid);
    const [showNav, setShowNav] = useState(true);
    let navigate = useNavigate();
    const handleRegister = () => { 
        navigate("/register");
    }

    const handleLogin = async () => {

        setValidLogin(defaultValid);

        if (!valueLogin) { 
            setValidLogin({...defaultValid, isValidInput: false})
            toast.error('enter your email or phone number')           
            return;
        }
        if (!password) { 
            setValidLogin({...defaultValid, isValidPassword: false})
            toast.error('enter your password!!!')
            return;
        }

        let response = await loginUser(valueLogin, password);
        if (response && response.data && response.data.EC === 0) {
            let data = { 
                isAuthenticated: true,
                token: 'fake token'
            }
            sessionStorage.setItem("account", JSON.stringify(data));
            navigate('/users')
            window.location.reload();
        } 
        if (response && response.data && response.data.EC !== 0) { 
            toast.error(response.data.EM)
        }
        console.log('check response: ', response.data)
    }

    const handleEnter = (event) => { 
        if (event.which === 13 && event.code === 'Enter') { 
            handleLogin();
        }
    }

    useEffect(() => { 
            let session = sessionStorage.getItem('account');
            if (session) { 
                setShowNav(false)
                navigate('/')
        }
        
    }, [])

    return (
        <>
            {showNav === true &&
        <div className='login-container mt-3'>
            <div className='container'>
                <div className='row'>
                    <div className='conten-left col-6'>
                        <div className='banner'>HYNNTA</div>
                        <div className='detail'>learning reactjs with hynnta</div>
                    </div>
                    <div className='content-right col-4 d-flex flex-column gap-3 py-3'>
                        <input
                            className={validLogin.isValidInput ? 'form-control' : 'is-invalid form-control'}
                            type='text' placeholder='Email address or username'
                            value={valueLogin}
                            onChange={(event)=>setValueLogin(event.target.value)}
                        />
                        <input className={validLogin.isValidPassword ? 'form-control' : 'is-invalid form-control'}
                            type='password'
                            placeholder='password' 
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            onKeyDown={(event) => handleEnter(event)}
                            />
                        <button className={'btn btn-primary'} onClick={()=>handleLogin()}>Login</button>
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
            }
            </>
    );
}

export default Login;