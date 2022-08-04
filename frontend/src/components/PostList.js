import React from 'react';
import CardPost from "../components/CardPost";
import CreatePost from "./CreatePost";

const PostList = () => {
    return (<main>
            <div className="post-list">
                <CreatePost/>


                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>



            </div>
        </main>);
};

export default PostList;