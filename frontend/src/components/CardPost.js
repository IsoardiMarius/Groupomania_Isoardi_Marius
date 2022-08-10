import img from '../assets/images/16447966_v960-ning-05.jpg';
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const CardPost = ({post}) => {
// On transforme la date renvoyer par mongoDB
    const d = post.updatedAt;
    const date = Array.from(d);
    const Date = date[0] + date[1] + date[2] + date[3] + date[4] + date[5] + date[6] + date[7] + date[8] + date[9] + '-' + date[11] + date[12] + date[13] + date[14] + date[15];
    const [liked, setLiked] = useState(false);
    const user = JSON.parse(localStorage.getItem('productCart'));
    const userId = user.userId;
    const [id, setId] = useState('');
    const navigate = useNavigate()



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
                setId(res.data._id);



            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    const like = () => {


        fetch("http://localhost:4000/api/post/like", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`

            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                like: 1,
                userId: id,
                id: post._id

            })
        })
            .then((res) => {
                navigate(0)

                console.log(res);


            })
            .catch((err) => {
                console.log(err);
            });



    };

    const dislike = () => {

        fetch("http://localhost:4000/api/post/like", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`

            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                like: 0,
                userId: id,
                id: post._id

            })
        })
            .then((res) => {
                navigate(0)

                console.log(res);


            })
            .catch((err) => {
                console.log(err);
            });
        setLiked(false);
    };

    return (


        <div className="card-post">
            <div className="card-header">
                <p className="card-name">{post.nom} {post.prenom}</p>
                <p className="card-date">{Date}</p>
            </div>
            <img src={img} alt="" className="card-img"/>
            <p className="card-text">{post.description}</p>
            <div className="card-logo">

                {post.usersLiked.includes(userId) && (<i className="fa-regular fa-heart like" onClick={dislike}></i>)}
                {!post.usersLiked.includes(userId) && (<i className="fa-regular fa-heart" onClick={like}> </i>)}

                <i className="fa-regular fa-comment"></i>
                <i className="fa-solid fa-retweet"></i>
                {id === post.userId && (<button className="modify">Modifier</button>)}


            </div>


        </div>

    );
};

export default CardPost;