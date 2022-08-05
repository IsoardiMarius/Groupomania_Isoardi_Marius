//
import React from 'react';
import logo from "../assets/images/icon-left-font-monochrome-white.png";
import {useNavigate} from "react-router-dom";





const Banner = () => {

    const navigate = useNavigate()
    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('productCart')
        navigate('/signin')
    }


    return (
        <header>
        <div className="banner">
            <img src={logo} alt="Logo groupomania" className="logo"/>
            <div className="disconnect-icon" onClick={logout}>
                <p className="text-icon">Déconnexion</p>
            </div>
        </div>
    </header>

    );
};

export default Banner;