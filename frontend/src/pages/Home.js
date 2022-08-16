///// Page d'accueil, on y liste tous les postes /////

import React, {useEffect} from 'react';
import Banner from "../components/Banner";
import PostList from "../components/PostList";
// import {useNavigate} from "react-router-dom";
import {Navigate} from "react-router-dom"

const Home = () => {
    // let navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('productCart'));

    // useEffect(() => {
    //     if (!user) {
    //         navigate("/signin");
    //     }
    // }, [navigate, user]);

    return (
        user ?
        <div>
            <Banner/>
            <PostList/>
        </div>
            : <Navigate to="/signin" replace={true}/>

    );

};

export default Home;


