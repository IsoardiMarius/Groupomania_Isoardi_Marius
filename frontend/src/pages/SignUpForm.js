import React, {useState} from 'react';
import logo from "../assets/images/icon.500ae8c5.png";
import {NavLink} from "react-router-dom";
import axios from "axios";


const SignUpForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [pseudo, setPseudo] = useState('');
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    let testPassword = strongRegex.test(password);


    const handleLogin = (e) => {
        e.preventDefault();

        if (nom === "" || prenom === "" || pseudo === "" || password === "" || email === "") {
            alert("Pensez à bien remplir tous les champs du formulaire 😉");



        } else if (!testPassword) {
            alert("Le mot de passe doit comprendre 8 caractères dont deux chiffre, sans espaces. Ainsi qu'une lettre majuscule et minuscule.");
        }

        else if (passwordCheck !== password){
            alert('Veuillez confirmer votre mot de passe')
        }




        else

            axios({
                method: "post", url: "http://localhost:4000/api/auth/signup", credentials: true, data: {
                    nom, prenom, pseudo, email, password
                },
            })
                .then((res) => {

                    if (res.data === "Le format de l'email est incorrect.") {
                        alert(res.data);
                    } else {
                        alert('Votre compte à bien était créer, vous aller être redirigé vers la page de connexion');
                        window.location = "/signin"
                    }


                })
                .catch((err) => {
                    alert(err);
                    console.log('err');
                });

    };

    return (


        <div className="card-login" style={{marginTop: "-247px"}}>
            <div className="logo">
                <img src={logo} alt="Logo groupomania" className="icon"/>
                <h2>GROUPOMANIA</h2>
            </div>

            <div className="form-login" style={{height: '1000px'}}>
                <p className="title">PAGE DE CONNEXION</p>
                <form action="" onSubmit={handleLogin}>

                    <input type="name" placeholder="Nom" onChange={(e) => setNom(e.target.value)}
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
                    <input type="password" placeholder="Confirmer votre mot de passe" onChange={(e) => setPasswordCheck(e.target.value)}
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