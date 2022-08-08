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
    const news = (e) => {
        e.preventDefault()
        navigate('/')
    }

    const myPosts = (e) => {
        e.preventDefault()
        navigate('/')
    }


    return (
        <header>
        <div className="banner">
            <img src={logo} alt="Logo groupomania" className="logo"/>

        </div>
            <div className="button-div">
            <div className="disconnect-icon" onClick={logout}>
                <button className="button-banner">Déconnexion</button>
            </div>
            <div className="disconnect-icon" onClick={news}>
                <button className="button-banner">Fil d'actualité</button>
            </div>
                <div className="disconnect-icon" onClick={myPosts}>
                    <button className="button-banner">Mes postes</button>
                </div>
            </div>
    </header>

    );
};

export default Banner;