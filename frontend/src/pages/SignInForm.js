import React, {useState} from 'react';
import logo from "../assets/images/icon.500ae8c5.png";
import {NavLink} from "react-router-dom";
import axios from "axios";


///////  Mettre à jour les produis présent dans le localstorage ///////
function tokenToLocalStorage(token) {
    localStorage.setItem("token", JSON.stringify(token))

}


//////  Récupérer le tableau des produits présent dans le localstorage //////
function getProductsFromLocalStorage() {
    const token = localStorage.getItem("token")

    return JSON.parse(token)
}

const SignInForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {

        e.preventDefault();


          if(password === "" || email === ""){
            alert("Pensez à bien remplir le champ email et mot de passe 😉")
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
                    console.log(res.data);
                    tokenToLocalStorage(res.data)
                    console.log(getProductsFromLocalStorage());
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
                    <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}
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