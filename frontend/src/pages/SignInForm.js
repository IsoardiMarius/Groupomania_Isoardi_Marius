import React, {useState} from 'react';
import logo from "../assets/images/icon.500ae8c5.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

const SignInForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url:'http://localhost:4000/api/auth/login',
            credentials: true,
            data: {
                email,
                password
            },
        })
            .then((res) =>{
                if (res.data.errors) {

                    alert(res.data.errors)

                }else {
                    alert('Connexion réussie')
                    window.location = "/"
                    console.log(res.data.token);
                    console.log(res);
                }
            })
            .catch((err) => {
                console.log(err);
            })

    };


    return (

        <div className="card-login">
            <div className="logo">
                <img src={logo} alt="Logo groupomania" className="icon"/>
                <h2>GROUPOMANIA</h2>
            </div>

            <div className="form-login">
                <p className="title">PAGE DE CONNEXION</p>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <br/>
                    <input type="text" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}
                           value={password}/>
                    <br/>
                    <button type='submit'> SE CONNECTER</button>
                    <p>Mot de passe oublié ?</p>
                    <hr className="police-separator"/>
                    <p>Pas encore de compte ?</p>
                    <NavLink to="/signup">
                        <button>S'INSCRIRE</button>
                    </NavLink>

                </form>
            </div>
        </div>
    );
};

export default SignInForm;