//// Formulaire de connexion /////

import React, {useContext, useState} from 'react';
import {userContext} from '../context/UserContext';
import {NavLink} from "react-router-dom";
import axios from "axios";
import logo from "../assets/images/icon-left-font-monochrome-white.png";

const SignInForm = () => {

    const {currentUser, setCurrentUser} = useContext(userContext);
    //Écoute des champs du formulaire
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Fonction qui va renvoyer les données vers l'api
    const handleLogin = (e) => {

        e.preventDefault();
        //On vérifie que les champs ne soient pas vides
        if (password === "" || email === "") {
            alert("Pensez à bien remplir le champ email et mot de passe 😉");
            // On envoie l'email et le password a la DB
        } else {

            axios({
                method: "post", url: 'http://localhost:4000/api/auth/login', credentials: true, data: {
                    email, password
                },
            })
                .then((res) => {

                        alert('Connexion réussie');
                        // On stock le token et userId pour useContext
                        setCurrentUser(res.data);
                        window.location = "/";
                        // On stock le token et userId dans le localstorage
                        localStorage.setItem("productCart", JSON.stringify(res.data));


                })
                .catch((err) => {
                    alert("Paire identifiant/mot de passe incorrecte");
                });
        }

    };


    return (

        <div className="card-login position-signin">
            <div className="banner">
                <img src={logo} alt="Logo groupomania" className="logo"/>
            </div>
            <p className="text-logo">Renforcer votre esprit d'équipe </p>


            <div className="form-login">
                <p className="title">CONNEXION</p>
                {/*On passe la fonction qui contrôle et envoie les données à l'api*/}
                <form onSubmit={handleLogin}>
                    {/*On écoute les inputs*/}
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <br/>
                    <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}
                           value={password}/>
                    <br/>
                    <button type="submit"> SE CONNECTER</button>
                    <p>Mot de passe oublié ?</p>
                    <hr className="police-separator"/>
                    <p>Pas encore de compte ?</p>
                    <NavLink to="/signup">
                        <button>S'INSCRIRE</button>
                    </NavLink>

                </form>
            </div>
        </div>);
};

export default SignInForm;