import React, {useState} from 'react';
import logo from "../assets/images/icon.500ae8c5.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

const SignInForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {

        e.preventDefault();

        if(password === "" || email === ""){
            alert("Veuillez remplir tous les champs s'il vous plaît")
        } else  {

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
                if (res.data.error) {

                    alert(res.data)

                }else {
                    alert('Connexion réussie')
                    // const token = res.data.token
                   // window.location = "/"
                }
            })
            .catch((err) => {
                alert("Paire identifiant/mot de passe incorrecte");
            })}

    }


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