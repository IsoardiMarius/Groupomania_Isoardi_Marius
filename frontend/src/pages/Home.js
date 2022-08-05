///// Page d'accueil, on y liste tous les postes /////

import React, {useEffect} from 'react';
import Banner from "../components/Banner";
import PostList from "../components/PostList";
import {useNavigate} from "react-router-dom";


const Home = () => {
    let navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('productCart'));
    // let token = JSON.parse(user.token)
    console.log(user);
    useEffect(() => {
        if (!user) {
            console.log("Pas de token");
            navigate("/signin");
        } else {
            console.log("Token Ok");
            navigate('/')
            // ALLER CHERCHER TOUS LES POST DANS LA DB


        }
    }, [useNavigate]);
    return (

        <div>
            <Banner/>
            <PostList/>
        </div>

    );

};

export default Home;


