import React from 'react';
import img from '../assets/images/16447966_v960-ning-05.jpg'

const CardPost = () => {
    return (
        <div className="card-post">
            <div className="card-header">
            <p className="card-name">Isoardi Marius</p>
            <p className="card-date">September 14, 2016</p>
            </div>
            <img src={img} alt="" className="card-img"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aspernatur commodi delectus ea
                eligendi facilis fuga illum impedit ipsa laboriosam nam officia. </p>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>


        </div>
    );
};

export default CardPost;