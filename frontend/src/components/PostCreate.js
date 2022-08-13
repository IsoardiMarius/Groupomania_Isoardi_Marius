import React from 'react';
import {useNavigate} from "react-router-dom";


const PostCreate = () => {

    const navigate = useNavigate();
    const navigateCreatePost = () => navigate('create-post')


    return (

        <div className="post-create" aria-label="Créer un post">
            <h3>Quoi de neuf ?</h3>
            <button className="post-create-button" onClick={navigateCreatePost}>Rédiger un post
            </button>

        </div>);
};

export default PostCreate;