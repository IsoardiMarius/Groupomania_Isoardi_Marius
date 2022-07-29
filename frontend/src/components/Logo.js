import React from 'react';
import logo from "../assets/images/icon.500ae8c5.png";

const Logo = () => {
    return (

            <div className="logo" style={{display:'flex', justifyContent:'center', alignItems:'center' ,marginTop:'100px' }}>
                <img src={logo} alt="Logo groupomania" className="icon" style={{width: '50px'}}/>
                <h2 style={{color:'white'}}>GROUPOMANIA</h2>
            </div>

    );
};

export default Logo;