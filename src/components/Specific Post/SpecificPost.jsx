import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const baseUrl = "https://simpleliving.herokuapp.com/posts/";

function SpecificPost() {

    const { id } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(baseUrl + id).then((response) => {
            setPost(response.data);
        })
    }, []);

    return <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>

    </div>;
}

export default SpecificPost;
