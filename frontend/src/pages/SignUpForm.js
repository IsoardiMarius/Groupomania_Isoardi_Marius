//Formulaire d'inscription

import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import logo from "../assets/images/icon-left-font-monochrome-white.png";


const SignUpForm = () => {

    //Contrôle des champs du formulaire
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [pseudo, setPseudo] = useState('');

    //Controle de la sécurité du password
    const [passwordCheck, setPasswordCheck] = useState('');

    //Regex pour le controle du password
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    let testPassword = strongRegex.test(password);

    // Fonction contrôle du formulaire et création d'un utilisateur
    const handleLogin = (e) => {
        e.preventDefault();

        // On vérifie que tous les champs ne soit pas vides
        if (nom === "" || prenom === "" || pseudo === "" || password === "" || email === "") {
            alert("Pensez à bien remplir tous les champs du formulaire 😉");


            // On teste la sécurité du password
        } else if (!testPassword) {
            alert("Le mot de passe doit comprendre 8 caractères dont deux chiffre, sans espaces. Ainsi qu'une lettre majuscule et minuscule.");
        }
        // On teste la confirmation du password
        else if (passwordCheck !== password) {
            alert('Veuillez confirmer votre mot de passe');

            // Si tout est bon on fait envoie nos informations à la base de donnée
        } else

            axios({
                method: "post", url: "http://localhost:4000/api/auth/signup", credentials: true, data: {
                    nom, prenom, pseudo, email, password
                },
            })
                // Si la base de donnée à créer l'utilisateur ont envoie un message
                .then((res) => {

                        console.log(res.data);
                        alert('Votre compte à bien était créer, vous aller être redirigé vers la page de connexion');
                        window.location = "/signin"



                })
                // S'il y a une erreur, on affiche le message d'erreur
                .catch((err) => {
                    alert(err);
                    console.log(err);
                });

    };


    // On retourne le rendu HTML
    return (


        <div className="card-login position-signup">
            <div className="banner">
                <img src={logo} alt="Logo groupomania" className="logo"/>
            </div>

            <p>Renforcer votre esprit d'équipe </p>


            <div className="form-login" style={{height: '1000px'}}>
                <p className="title">INSCRIPTION</p>
                <form action="" onSubmit={handleLogin}>

                    <input type="text" placeholder="Nom" onChange={(e) => setNom(e.target.value)}
                           value={nom}/>
                    <br/>
                    <input type="text" placeholder="Prénom" onChange={(e) => setPrenom(e.target.value)}
                           value={prenom}/>
                    <br/>
                    <input type="text" placeholder="Pseudo" onChange={(e) => setPseudo(e.target.value)}
                           value={pseudo}/>
                    <br/>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
                           value={email}/>
                    <br/>
                    <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}
                           value={password}/>
                    <input type="password" placeholder="Confirmer votre mot de passe"
                           onChange={(e) => setPasswordCheck(e.target.value)}
                           value={passwordCheck}/>
                    <br/>
                    <button type="submit"> S'INSCRIRE</button>
                    <p className="txt-password">Votre mot de passe doit comporter au moins 8 caractères, dont au moins
                        une majuscule, une minuscule, et deux chiffres.
                    </p>
                    <hr className="police-separator"/>
                    <p>Vous avez déjà un compte ?</p>
                    <NavLink to="/signin">
                        <button>SE CONNECTER</button>
                    </NavLink>

                </form>
            </div>
        </div>

    );
};

export default SignUpForm;