import React, {useEffect, useState} from 'react';
import img from '../assets/images/16447966_v960-ning-05.jpg';
import axios from "axios";

const CardPost = ({post}) => {

    // const user = JSON.parse(localStorage.getItem('productCart'));

    // useEffect(() => {
    // axios.get('http://localhost:4000/api/post', {
    //     headers: {
    //         'Authorization': `Bearer ${user.token}`
    //     }
    // })
    //     .then((res) => {
    //         console.log(res.data);
    //
    //
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    //
    // }, []);
    const d = post.updatedAt;
    const date = Array.from(d);
    const Date = date[0] + date[1] + date[2] + date[3] + date[4] + date[5] + date[6] + date[7] + date[8] + date[9] + '-' + date [11] + date[12] + date[13] + date[14] + date[15];

    return (


        <div className="card-post">
            <div className="card-header">
                <p className="card-name">{post.nom} {post.prenom}</p>
                <p className="card-date">{Date}</p>
            </div>
            <img src={img} alt="" className="card-img"/>
            <p className="card-text">{post.description}</p>
            <div className="card-logo">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-solid fa-retweet"></i>
            </div>


        </div>

    );
};

export default CardPost;