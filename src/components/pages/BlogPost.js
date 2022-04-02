import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [postId, setPostId] = useState(0);

    useEffect(() => {
        setPostId(id);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (<>{isLoading === true ? <p>Loading..</p> : <div><h5>Blog Post {postId}</h5> <br/> <p>test</p></div> }</>);
}

export default BlogPost;