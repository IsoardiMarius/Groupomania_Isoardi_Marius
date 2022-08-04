import React from 'react';
import profil_picture from '../assets/images/logo_girl.png'

const CreatePost = () => {
    return (
        <div className="create-post">
            <div className="create-post-redaction">
            <img className="create-post-profil-picture" src={profil_picture}  alt="Photo de profil de l'utilisateur"/>
            <input className="create-post-input" type="text" placeholder="Commencer à rédiger un post"/>
            </div>
            <div className="create-post-join-file">

            </div>
            

        </div>
    );
};

export default CreatePost;