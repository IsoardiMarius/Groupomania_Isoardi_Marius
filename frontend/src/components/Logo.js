import React from 'react';
import logo from "../assets/images/icon-left-font-monochrome-white.png";

const Logo = () => {
    return (
        <>
            <div className="logo">
                <img src={logo} alt="Logo groupomania" className="icon"/>
            </div>
        </>
    );
};

export default Logo;