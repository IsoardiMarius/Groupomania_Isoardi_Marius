import React, {useEffect, useState} from 'react';
import CardPost from "../components/CardPost";
import PostCreate from "./PostCreate";
import axios from "axios";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const user = JSON.parse(localStorage.getItem('productCart'));



    // Call API pour récupérer tous les postes de la DB
    useEffect(() => {
        axios.get('http://localhost:4000/api/post', {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then((res) => {
                setPosts(res.data);


            })
            .catch((error) => {
                console.error(error);
            });

    }, [user.token]);


    return (<main>
        <div className="post-list">
            {/*Redirection to create post*/}
            <PostCreate/>
            {/*all post*/}
            {posts.map((post, index) => (<CardPost key={index} post={post}/>))}


        </div>
    </main>);
};

export default PostList;