import React, {useState} from 'react';
import logo from "../assets/images/icon.500ae8c5.png";
import {NavLink} from "react-router-dom";
import axios from "axios";


const SignUpForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [pseudo, setPseudo] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url:"http://localhost:4000/api/auth/signup",
            credentials: true,
            data: {
                nom,
                prenom,
                pseudo,
                email,
                password
            },
        })
            .then((res) =>{
                if (res.data.errors) {

                    alert(res.data.errors)

                }else {

                    window.location = "/signin"

                }
            })
            .catch((err) => {
                alert(err);
            })

    };

    return (



        <div className="card-login" style={{marginTop: "-247px"}}>
            <div className="logo">
                <img src={logo} alt="Logo groupomania" className="icon"/>
                <h2>GROUPOMANIA</h2>
            </div>

            <div className="form-login" style={{height: '1000px'}}>
                <p className='title'>PAGE DE CONNEXION</p>
                <form action="" onSubmit={handleLogin}>

                    <input type="text" placeholder="Nom" onChange={(e) => setNom(e.target.value)}
                           value={nom}/>
                    <br/>
                    <input type="text" placeholder="Prénom" onChange={(e) => setPrenom(e.target.value)}
                           value={prenom}/>
                    <br/>
                    <input type="text" placeholder="Pseudo"onChange={(e) => setPseudo(e.target.value)}
                           value={pseudo}/>
                    <br/>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
                           value={email}/>
                    <br/>
                    <input type="text" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}
                           value={password}/>
                    <br/>
                    <button type='submit'> S'INSCRIRE</button>
                    <p className='txt-password'>Votre mot de passe doit comporter au moins 8 caractères, dont au moins une majuscule, une minuscule, et deux chiffres.
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