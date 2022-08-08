///// Page d'accueil, on y liste tous les postes /////

import React, {useEffect} from 'react';
import Banner from "../components/Banner";
import PostList from "../components/PostList";
import {useNavigate} from "react-router-dom";


const Home = () => {
    let navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('productCart'));
    // let token = JSON.parse(user.token)
    useEffect(() => {
        if (!user) {
            navigate("/signin");
        } else {
            navigate('/')


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


