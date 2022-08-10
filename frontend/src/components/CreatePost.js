import React, {useEffect, useState,} from 'react';
import axios from "axios";



const CreatePost = () => {
    const user = JSON.parse(localStorage.getItem('productCart'));
    const userId = user.userId;
    const [description, setDescription] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [id, setId] = useState('');
    const [image,setImage] = useState('')


    // Call API pour récupérer les infos de l'utilisateur
    useEffect(() => {


        axios({
            method: "get", url: "http://localhost:4000/api/auth", credentials: true,

            headers: {
                'Authorization': `Bearer ${user.token}`
            },

            params: {
                userId
            }
        })
            .then((res) => {

                setNom(res.data.nom);
                setPrenom(res.data.prenom);
                setId(res.data._id);


            })
            .catch((err) => {
                console.log(err);
            });

    }, [user.token, userId]);



    const Post = () => {



        if(description !== "") {

        fetch("http://localhost:4000/api/post", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`

            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                userId: id,
                nom,
                prenom,
                description,
                imageUrl: image

            }),


        })
            .then((res) => {

                console.log(res);
                window.location.reload()


            })
            .catch((err) => {
                console.log(err);
            })} else {
            alert('Veuillez écrire du contenu')
        }

    };




    return (

        <div className="create-post" aria-label="Créer un post">
            <h3>Quoi de neuf ?</h3>

            <div className="create-post-redaction">

                <textarea maxLength="500" className="create-post-input" rows="7" cols="5"
                          placeholder="Commencer à rédiger un post" onChange={(e) => setDescription(e.target.value)}
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
            <input type="file" onChange={(e) => setImage(e.target.value)} value={image}/>



        </div>);
};

export default CreatePost;