import React from 'react';
import img from '../assets/images/16447966_v960-ning-05.jpg';

const CardPost = () => {
    return (
        <div className="card-post">
            <div className="card-header">
                <p className="card-name">Isoardi Marius</p>
                <p className="card-date">September 14, 2016</p>
            </div>
            <img src={img} alt="" className="card-img"/>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aperiam aspernatur
                laudantium quam ratione reprehenderit similique. Corporis error hic ipsa, optio quae qua rofi consectetur aperiam !</p>
            <div className="card-logo">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-solid fa-paper-plane-top"></i>
                <i className="fa-solid fa-retweet"></i>
            </div>


        </div>
    );
};

export default CardPost;