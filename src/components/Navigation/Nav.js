import React, { useEffect, useState } from 'react';
import './Nav.scss'
import { NavLink, Navigate, useLocation } from 'react-router-dom';

const Nav = (props) => {
    const [isShow, setIsShow] = useState(true);
    let location = useLocation();
    console.log(location)
    useEffect(() => {
        let session = sessionStorage.getItem('account');
        
            if (location.pathname === 'login') { 
                setIsShow(false)
        }
    }, []);
    return (
        <>
            {isShow === true &&
                <div className="topnav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            }
        </>
    )
}

export default Nav;