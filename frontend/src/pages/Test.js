///// Page d'accueil, on y liste tous les postes /////

import React, {useEffect} from 'react';
import Banner from "../components/Banner";
import PostList from "../components/PostList";
import {useNavigate} from "react-router-dom";


const Test = () => {

    return (
        <div>
            <Banner/>
            <PostList/>
        </div>
    );
};

export default Test;


