import React from 'react';
import profil_picture from '../assets/images/logo_girl.png';

const CreatePost = () => {
    return (
        <div className="create-post">
            <div className="create-post-redaction">

                <textarea  maxLength="500" className="create-post-input" rows="7" cols="5" placeholder="Commencer à rédiger un post"/>
            </div>
            <div className="create-post-footer">
                <button className="create-post-button" type="file">

                    <i className="fa-regular fa-image"></i>
                    <p className="create-post-footer-text">Photo</p>

                </button>
                <button className="create-post-button">

                    <i className="fa-brands fa-youtube"></i>
                    <p className="create-post-footer-text">Vidéo</p>

                </button>
                <button className="create-post-button">

                    <i className="fa-solid fa-share"></i>
                    <p className="create-post-footer-text">Poste</p>

                </button>
            </div>


        </div>
    );
};

export default CreatePost;