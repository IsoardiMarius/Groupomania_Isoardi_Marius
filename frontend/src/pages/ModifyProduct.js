import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Banner from "../components/Banner";

const ModifyProduct = () => {

    const user = JSON.parse(localStorage.getItem('productCart'))
    const url = window.location.pathname
    const postId = url.split('/')[2]
    const navigate = useNavigate()
    const [description, setDescription] = useState('');
    const [postImgInput, setPostImgInput] = useState('');
    const [imgPostFile, setImgPostFile] = useState();
    const [postData, setPostData] = useState('')

    useEffect(() => {
        if (!user) {
            navigate('signin')
        }
    });

    // API call for post information
    useEffect(() => {
    axios({
        method: "get", url: `http://localhost:4000/api/post/${postId}`, credentials: true,

        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    })
        .then((res) => {

            setPostData(res.data)
            console.log(res);


        })
        .catch((err) => {
            console.log(err);
        });

    }, [ModifyProduct])



    // Call API for modify post
    const modifyPost = (e) => {
        e.preventDefault();
        console.log(e.target.description.value);


        if (description !== "") {


            const formData = new FormData();


            formData.append("description", e.target.description.value);
            formData.append("imagePost", imgPostFile);



            axios.put(`http://localhost:4000/api/post/${postData._id}`, formData, {headers: {'Authorization': `Bearer ${user.token}`}})
                .then((res) => {

                    console.log(res);
                    // navigate('/')

                })
                .catch((err) => {
                    console.log(err);
                });

        } else {
            alert('Veuillez écrire du contenu');
        }

    };



    const handleImg = (e) => {
        e.preventDefault()
        setPostImgInput(e.target.value)
        setImgPostFile(e.target.files[0])
    };


    const deletePost = () => {

        fetch(`http://localhost:4000/api/post/${postData._id}`, {
            method: "delete", headers: {
                'Authorization': `Bearer ${user.token}`

            }


        })
            .then((res) => {
                console.log(res);



            })
            .catch((err) => {
                console.log(err);
            });


    }


    return (
        <>
            <Banner/>

            <div className="div-create-post">
                <div className="create-post" aria-label="Créer un post">
                    <h3>Quoi de neuf ?</h3>
                    <form onSubmit={(e) => modifyPost(e)} encType="multipart/form-data">
                        <div className="create-post-redaction">


                <textarea maxLength="500" className="create-post-input" rows="7" cols="5"
                          name="description"
                          onChange={(e) => setDescription(e.target.value)}
                          defaultValue={postData.description}/>
                        </div>
                        <div className="create-post-footer">
                            {/*<button className="create-post-button" type="file">*/}

                            {/*    <i className="fa-regular fa-image"></i>*/}
                            {/*    <p className="create-post-footer-text">Photo</p>*/}

                            {/*</button>*/}
                            {/*<button className="create-post-button">*/}

                            {/*    <i className="fa-brands fa-youtube"></i>*/}
                            {/*    <p className="create-post-footer-text">Vidéo</p>*/}

                            {/*</button>*/}
                            <input type="file" name="imagePost" id="imagePost" accept='image/png, image/jpeg, image/jpg, image/gif' onChange={handleImg} value={postImgInput}/>

                            <label htmlFor="image"></label>
                            <button className="create-post-button" type="submit">

                                <i className="fa-solid fa-share"></i>
                                <p className="create-post-footer-text">Publier</p>

                            </button>
                            <i className="fa-regular fa-comment" onClick={deletePost}></i>

                        </div>


                    </form>
                </div>
            </div>
        </>
    );
};

export default ModifyProduct;