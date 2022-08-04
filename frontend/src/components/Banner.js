//
import React from 'react';
import logo from "../assets/images/icon-left-font-monochrome-white.png";

const Banner = () => {
    return (
        <header>
        <div className="banner">
            <img src={logo} alt="Logo groupomania" className="logo"/>
            <div className="disconnect-icon">
                <p className="text-icon">Déconnexion</p>
            </div>
        </div>
    </header>

    );
};

export default Banner;