///// Page d'accueil, on y liste tous les postes /////

import React, {useEffect} from 'react';
import Banner from "../components/Banner";
import PostList from "../components/PostList";
import {useNavigate} from "react-router-dom";


const Home = () => {
    let navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/signin")
        }

        // ALLER CHERCHER TOUS LES POST DANS LA DB
    }, [useNavigate]);
    return (
        <div>
            <Banner/>
            <PostList/>
        </div>
    );
};

export default Home;


