import React, {useEffect, useState} from 'react';
import profil_picture from '../assets/images/logo_girl.png';
import axios from "axios";

const CreatePost = () => {

    const user = JSON.parse(localStorage.getItem('productCart'));
    const userId = user.userId
    const [description, setDescription] = useState('')
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')


    function Post () {


        axios.get('http://localhost:4000/api/auth/', {
            headers: {
                'Authorization': `Bearer ${user.token}`
            },

            body:  {
                "userId": "62f045f5253a960077a8ff3f"

            }
        })
            .then((res) => {
                console.log(res.data)


            })
            .catch((error) => {
                console.error(error);
            });



    }

    // useEffect(() => {
    //     axios.get('http://localhost:4000/api/auth', {
    //
    //      body: {
    //             userId
    //      }
    //     })
    //         .then((res) => {
    //             console.log(res.data);
    //
    //
    //
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    //
    // }, []);







    return (
        <div className="create-post">
            <h3>Quoi de neuf ?</h3>

            <div className="create-post-redaction">

                <textarea  maxLength="500" className="create-post-input" rows="7" cols="5" placeholder="Commencer à rédiger un post" onChange={(e) => setDescription(e.target.value)}
                           value={description}/>
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
                    <p className="create-post-footer-text" onClick={Post}>Publier</p>

                </button>
            </div>


        </div>
    );
};

export default CreatePost;