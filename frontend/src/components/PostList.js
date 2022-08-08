import React, {useEffect, useState} from 'react';
import CardPost from "../components/CardPost";
import CreatePost from "./CreatePost";
import axios from "axios";

const PostList = () => {
    const [posts, setPosts] = useState([])
    const user = JSON.parse(localStorage.getItem('productCart'));

    useEffect(() => {
        axios.get('http://localhost:4000/api/post', {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then((res) => {
                console.log(res.data);
                setPosts(res.data)


            })
            .catch((error) => {
                console.error(error);
            });

    }, []);




    return (<main>
            <div className="post-list">
                <CreatePost/>

                {posts.map((post, index) => (<CardPost key={index} post={post}/>))}





            </div>
        </main>);
};

export default PostList;